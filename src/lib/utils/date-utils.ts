import { format, addDays, addMinutes, isAfter, isBefore, isSameDay, differenceInMinutes } from 'date-fns'
import { DoctorAvailability } from '@/types'
import { TimeSlot } from '@/types/appointment'

/**
 * Formats a date to display in a user-friendly format
 * @param date The date to format
 * @param formatStr Optional format string
 * @returns Formatted date string
 */
export function formatDate(date: Date, formatStr: string = 'EEEE, MMMM d, yyyy'): string {
  return format(date, formatStr)
}

/**
 * Formats a time to display in a user-friendly format
 * @param time The time to format (can be Date or string)
 * @param formatStr Optional format string
 * @returns Formatted time string
 */
export function formatTimeDisplay(time: Date | string, formatStr: string = 'h:mm a'): string {
  if (typeof time === 'string') {
    // Parse time string in 24-hour format (HH:mm)
    const [hours, minutes] = time.split(':').map(Number)
    const date = new Date()
    date.setHours(hours, minutes, 0, 0)
    return format(date, formatStr)
  }
  return format(time, formatStr)
}

/**
 * Combines a date and time string into a single Date object
 * @param date The date part
 * @param timeStr The time string in 24-hour format (HH:mm)
 * @returns Combined Date object
 */
export function combineDateAndTime(date: Date, timeStr: string): Date {
  const [hours, minutes] = timeStr.split(':').map(Number)
  const result = new Date(date)
  result.setHours(hours, minutes, 0, 0)
  return result
}

/**
 * Checks if a doctor is available on a specific day of the week
 * @param availability Doctor's availability array
 * @param dayOfWeek Day of the week (0-6, where 0 is Sunday)
 * @returns Boolean indicating availability
 */
export function isDoctorAvailableOnDay(availability: DoctorAvailability[], dayOfWeek: number): boolean {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const dayName = days[dayOfWeek]
  
  return availability.some(slot => 
    slot.day === dayName && slot.isAvailable
  )
}

/**
 * Gets the available time slots for a doctor on a specific date
 * @param doctorId Doctor's ID
 * @param date The date to check
 * @param availability Doctor's availability array
 * @param duration Duration of appointment in minutes
 * @param existingAppointments Array of existing appointments
 * @returns Array of available time slots
 */
export function getAvailableTimeSlots(
  doctorId: string,
  date: Date,
  availability: DoctorAvailability[],
  duration: number = 30,
  existingAppointments: TimeSlot[] = []
): TimeSlot[] {
  const dayOfWeek = date.getDay()
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const dayName = days[dayOfWeek]
  
  // Find doctor's availability for this day
  const dayAvailability = availability.find(slot => slot.day === dayName && slot.isAvailable)
  
  if (!dayAvailability) {
    return [] // Doctor not available on this day
  }
  
  const slots: TimeSlot[] = []
  const { startTime, endTime } = dayAvailability
  
  // Parse start and end times
  const startDate = combineDateAndTime(date, startTime)
  const endDate = combineDateAndTime(date, endTime)
  
  // Generate time slots at regular intervals
  let currentSlotStart = startDate
  let slotId = 1
  
  while (isBefore(currentSlotStart, endDate) || isSameDay(currentSlotStart, endDate)) {
    const currentSlotEnd = addMinutes(currentSlotStart, duration)
    
    // Check if this slot extends beyond the doctor's end time
    if (isAfter(currentSlotEnd, endDate)) {
      break
    }
    
    // Check if this slot overlaps with existing appointments
    const isSlotAvailable = !existingAppointments.some(appointment => {
      const appointmentStart = new Date(appointment.startTime)
      const appointmentEnd = new Date(appointment.endTime)
      
      // Check for overlap
      return (
        (isBefore(currentSlotStart, appointmentEnd) && isAfter(currentSlotEnd, appointmentStart)) ||
        isSameDay(currentSlotStart, appointmentStart)
      )
    })
    
    if (isSlotAvailable) {
      slots.push({
        id: `${doctorId}-${format(date, 'yyyy-MM-dd')}-${slotId}`,
        doctorId,
        startTime: currentSlotStart,
        endTime: currentSlotEnd,
        isAvailable: true,
        appointmentId: null
      })
    }
    
    // Move to next slot
    currentSlotStart = addMinutes(currentSlotStart, duration)
    slotId++
  }
  
  return slots
}

/**
 * Groups time slots by time of day (morning, afternoon, evening)
 * @param slots Array of time slots
 * @returns Object with slots grouped by time of day
 */
export function groupSlotsByTimeOfDay(slots: TimeSlot[]): {
  morning: TimeSlot[],
  afternoon: TimeSlot[],
  evening: TimeSlot[]
} {
  return {
    morning: slots.filter(slot => {
      const hour = new Date(slot.startTime).getHours()
      return hour >= 6 && hour < 12
    }),
    afternoon: slots.filter(slot => {
      const hour = new Date(slot.startTime).getHours()
      return hour >= 12 && hour < 17
    }),
    evening: slots.filter(slot => {
      const hour = new Date(slot.startTime).getHours()
      return hour >= 17 && hour < 22
    })
  }
}

/**
 * Generates an array of dates for the next N days
 * @param startDate Starting date
 * @param numberOfDays Number of days to generate
 * @returns Array of dates
 */
export function generateDateRange(startDate: Date = new Date(), numberOfDays: number = 30): Date[] {
  const dates: Date[] = []
  
  for (let i = 0; i < numberOfDays; i++) {
    dates.push(addDays(startDate, i))
  }
  
  return dates
}

/**
 * Calculates the duration between two dates in minutes
 * @param startDate Start date
 * @param endDate End date
 * @returns Duration in minutes
 */
export function calculateDuration(startDate: Date, endDate: Date): number {
  return differenceInMinutes(endDate, startDate)
}

/**
 * Checks if a date is in the past
 * @param date Date to check
 * @returns Boolean indicating if date is in the past
 */
export function isDateInPast(date: Date): boolean {
  return isBefore(date, new Date())
}

/**
 * Formats a date range for display
 * @param startDate Start date
 * @param endDate End date
 * @returns Formatted date range string
 */
export function formatDateRange(startDate: Date, endDate: Date): string {
  if (isSameDay(startDate, endDate)) {
    return `${formatDate(startDate)} ${formatTimeDisplay(startDate)} - ${formatTimeDisplay(endDate)}`
  }
  return `${formatDate(startDate)} ${formatTimeDisplay(startDate)} - ${formatDate(endDate)} ${formatTimeDisplay(endDate)}`
}

/**
 * Calculates weeks of gestation based on due date
 * @param dueDate The due date
 * @returns Weeks of gestation
 */
export function calculateWeeksOfGestation(dueDate: Date): number {
  const pregnancyDuration = 40 // weeks
  const today = new Date()
  const dueDateTime = new Date(dueDate)
  
  // Calculate difference in weeks
  const diffTime = dueDateTime.getTime() - today.getTime()
  const diffWeeks = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 7))
  
  return pregnancyDuration - diffWeeks
}

/**
 * Calculates due date based on weeks of gestation
 * @param weeksOfGestation Current weeks of gestation
 * @returns Estimated due date
 */
export function calculateDueDate(weeksOfGestation: number): Date {
  const pregnancyDuration = 40 // weeks
  const remainingWeeks = pregnancyDuration - weeksOfGestation
  
  return addDays(new Date(), remainingWeeks * 7)
}