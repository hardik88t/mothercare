import { 
  formatDate, 
  formatTimeDisplay, 
  combineDateAndTime, 
  isDoctorAvailableOnDay,
  getAvailableTimeSlots,
  groupSlotsByTimeOfDay,
  generateDateRange,
  calculateDuration,
  isDateInPast,
  formatDateRange,
  calculateWeeksOfGestation,
  calculateDueDate
} from '../date-utils'
import { DoctorAvailability } from '@/types'
import { TimeSlot } from '@/types/appointment'
import { addDays, addMinutes, subDays } from 'date-fns'

describe('Date Utility Functions', () => {
  // Test formatDate function
  test('formatDate formats a date correctly', () => {
    const testDate = new Date(2025, 0, 15) // January 15, 2025
    expect(formatDate(testDate)).toBe('Wednesday, January 15, 2025')
    expect(formatDate(testDate, 'MM/dd/yyyy')).toBe('01/15/2025')
  })
  
  // Test formatTimeDisplay function
  test('formatTimeDisplay formats time correctly', () => {
    const testDate = new Date(2025, 0, 15, 14, 30) // 2:30 PM
    expect(formatTimeDisplay(testDate)).toBe('2:30 PM')
    
    // Test with string input
    expect(formatTimeDisplay('14:30')).toBe('2:30 PM')
    expect(formatTimeDisplay('09:15')).toBe('9:15 AM')
  })
  
  // Test combineDateAndTime function
  test('combineDateAndTime combines date and time correctly', () => {
    const testDate = new Date(2025, 0, 15) // January 15, 2025
    const testTime = '14:30' // 2:30 PM
    
    const combined = combineDateAndTime(testDate, testTime)
    expect(combined.getFullYear()).toBe(2025)
    expect(combined.getMonth()).toBe(0) // January
    expect(combined.getDate()).toBe(15)
    expect(combined.getHours()).toBe(14)
    expect(combined.getMinutes()).toBe(30)
  })
  
  // Test isDoctorAvailableOnDay function
  test('isDoctorAvailableOnDay checks availability correctly', () => {
    const availability: DoctorAvailability[] = [
      { day: 'Monday', startTime: '09:00', endTime: '17:00', isAvailable: true },
      { day: 'Tuesday', startTime: '09:00', endTime: '17:00', isAvailable: true },
      { day: 'Wednesday', startTime: '09:00', endTime: '17:00', isAvailable: false },
      { day: 'Thursday', startTime: '09:00', endTime: '17:00', isAvailable: true },
      { day: 'Friday', startTime: '09:00', endTime: '17:00', isAvailable: true },
      { day: 'Saturday', startTime: '09:00', endTime: '13:00', isAvailable: true },
      { day: 'Sunday', startTime: '00:00', endTime: '00:00', isAvailable: false }
    ]
    
    expect(isDoctorAvailableOnDay(availability, 1)).toBe(true) // Monday
    expect(isDoctorAvailableOnDay(availability, 2)).toBe(true) // Tuesday
    expect(isDoctorAvailableOnDay(availability, 3)).toBe(false) // Wednesday
    expect(isDoctorAvailableOnDay(availability, 0)).toBe(false) // Sunday
  })
  
  // Test getAvailableTimeSlots function
  test('getAvailableTimeSlots generates correct time slots', () => {
    const doctorId = 'doctor-1'
    const testDate = new Date(2025, 0, 6) // Monday, January 6, 2025
    const availability: DoctorAvailability[] = [
      { day: 'Monday', startTime: '09:00', endTime: '11:00', isAvailable: true },
      { day: 'Tuesday', startTime: '09:00', endTime: '17:00', isAvailable: true }
    ]
    
    const slots = getAvailableTimeSlots(doctorId, testDate, availability, 30)
    
    // Should generate 4 slots: 9:00, 9:30, 10:00, 10:30
    expect(slots.length).toBe(4)
    expect(slots[0].startTime.getHours()).toBe(9)
    expect(slots[0].startTime.getMinutes()).toBe(0)
    expect(slots[1].startTime.getHours()).toBe(9)
    expect(slots[1].startTime.getMinutes()).toBe(30)
    expect(slots[3].startTime.getHours()).toBe(10)
    expect(slots[3].startTime.getMinutes()).toBe(30)
    
    // Test with existing appointments
    const existingAppointments: TimeSlot[] = [
      {
        id: 'existing-1',
        doctorId,
        startTime: new Date(2025, 0, 6, 9, 30), // 9:30 AM
        endTime: new Date(2025, 0, 6, 10, 0), // 10:00 AM
        isAvailable: false,
        appointmentId: 'appointment-1'
      }
    ]
    
    const slotsWithExisting = getAvailableTimeSlots(doctorId, testDate, availability, 30, existingAppointments)
    
    // Should generate 3 slots: 9:00, 10:00, 10:30 (9:30 is booked)
    expect(slotsWithExisting.length).toBe(3)
  })
  
  // Test groupSlotsByTimeOfDay function
  test('groupSlotsByTimeOfDay groups slots correctly', () => {
    const doctorId = 'doctor-1'
    const testDate = new Date(2025, 0, 6) // January 6, 2025
    
    const slots: TimeSlot[] = [
      {
        id: 'slot-1',
        doctorId,
        startTime: new Date(2025, 0, 6, 9, 0), // 9:00 AM (morning)
        endTime: new Date(2025, 0, 6, 9, 30),
        isAvailable: true,
        appointmentId: null
      },
      {
        id: 'slot-2',
        doctorId,
        startTime: new Date(2025, 0, 6, 12, 0), // 12:00 PM (afternoon)
        endTime: new Date(2025, 0, 6, 12, 30),
        isAvailable: true,
        appointmentId: null
      },
      {
        id: 'slot-3',
        doctorId,
        startTime: new Date(2025, 0, 6, 17, 0), // 5:00 PM (evening)
        endTime: new Date(2025, 0, 6, 17, 30),
        isAvailable: true,
        appointmentId: null
      }
    ]
    
    const grouped = groupSlotsByTimeOfDay(slots)
    
    expect(grouped.morning.length).toBe(1)
    expect(grouped.afternoon.length).toBe(1)
    expect(grouped.evening.length).toBe(1)
    expect(grouped.morning[0].id).toBe('slot-1')
    expect(grouped.afternoon[0].id).toBe('slot-2')
    expect(grouped.evening[0].id).toBe('slot-3')
  })
  
  // Test generateDateRange function
  test('generateDateRange generates correct date range', () => {
    const startDate = new Date(2025, 0, 1) // January 1, 2025
    const dates = generateDateRange(startDate, 5)
    
    expect(dates.length).toBe(5)
    expect(dates[0].getDate()).toBe(1)
    expect(dates[1].getDate()).toBe(2)
    expect(dates[4].getDate()).toBe(5)
  })
  
  // Test calculateDuration function
  test('calculateDuration calculates duration correctly', () => {
    const startDate = new Date(2025, 0, 1, 9, 0) // 9:00 AM
    const endDate = new Date(2025, 0, 1, 10, 30) // 10:30 AM
    
    expect(calculateDuration(startDate, endDate)).toBe(90) // 90 minutes
  })
  
  // Test isDateInPast function
  test('isDateInPast checks if date is in past', () => {
    const pastDate = subDays(new Date(), 1) // Yesterday
    const futureDate = addDays(new Date(), 1) // Tomorrow
    
    expect(isDateInPast(pastDate)).toBe(true)
    expect(isDateInPast(futureDate)).toBe(false)
  })
  
  // Test formatDateRange function
  test('formatDateRange formats date range correctly', () => {
    const startDate = new Date(2025, 0, 1, 9, 0) // January 1, 2025, 9:00 AM
    const endDate = new Date(2025, 0, 1, 10, 0) // January 1, 2025, 10:00 AM
    
    // Same day
    expect(formatDateRange(startDate, endDate)).toContain('January 1, 2025')
    expect(formatDateRange(startDate, endDate)).toContain('9:00 AM')
    expect(formatDateRange(startDate, endDate)).toContain('10:00 AM')
    
    // Different days
    const nextDayEndDate = new Date(2025, 0, 2, 10, 0) // January 2, 2025, 10:00 AM
    expect(formatDateRange(startDate, nextDayEndDate)).toContain('January 1, 2025')
    expect(formatDateRange(startDate, nextDayEndDate)).toContain('January 2, 2025')
  })
  
  // Test pregnancy-related functions
  test('calculateWeeksOfGestation calculates weeks correctly', () => {
    const today = new Date()
    const dueDate = addDays(today, 7 * 10) // Due in 10 weeks
    
    // Should be around 30 weeks (40 - 10)
    expect(calculateWeeksOfGestation(dueDate)).toBe(30)
  })
  
  test('calculateDueDate calculates due date correctly', () => {
    const weeksOfGestation = 30
    const expectedDueDate = addDays(new Date(), 7 * 10) // 10 weeks from now
    
    const calculatedDueDate = calculateDueDate(weeksOfGestation)
    
    // Allow 1 day difference due to time zone and calculation differences
    const daysDiff = Math.abs(calculateDuration(calculatedDueDate, expectedDueDate) / (60 * 24))
    expect(daysDiff).toBeLessThanOrEqual(1)
  })
})