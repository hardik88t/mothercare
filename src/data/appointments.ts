import { EnhancedAppointment, TimeSlot } from '@/types/appointment'
import { addDays } from 'date-fns'
import { doctors } from './doctors'
import { medicalServices } from './services'
import { combineDateAndTime, getAvailableTimeSlots } from '@/lib/utils/date-utils'

// Generate some mock appointments for the next 30 days
export const mockAppointments: EnhancedAppointment[] = [
  {
    id: 'appt-001',
    patientId: 'patient-001',
    doctorId: 'dr-sarah-johnson',
    serviceId: 'obstetrics-maternity-care',
    dateTime: combineDateAndTime(addDays(new Date(), 2), '10:00'),
    duration: 30,
    status: 'confirmed',
    createdAt: new Date(),
    updatedAt: new Date(),
    notes: 'Regular prenatal checkup',
    isNewPatient: false,
    isEmergency: false,
    patientInfo: {
      name: 'Emily Wilson',
      email: 'emily.wilson@example.com',
      phone: '(555) 123-4567',
      dateOfBirth: new Date(1990, 5, 15),
      isReturningPatient: true,
      medicalRecordNumber: 'MRN-12345',
      preferredContactMethod: 'email',
      pregnancyInfo: {
        isPregnant: true,
        weeksOfGestation: 24,
        dueDate: addDays(new Date(), 16 * 7), // 16 weeks from now
        isHighRisk: false
      }
    },
    confirmationSent: true,
    reminderSent: false
  },
  {
    id: 'appt-002',
    patientId: 'patient-002',
    doctorId: 'dr-michael-chen',
    serviceId: 'advanced-laparoscopy',
    dateTime: combineDateAndTime(addDays(new Date(), 3), '14:30'),
    duration: 60,
    status: 'scheduled',
    createdAt: new Date(),
    updatedAt: new Date(),
    notes: 'Initial consultation for laparoscopic procedure',
    isNewPatient: true,
    isEmergency: false,
    patientInfo: {
      name: 'Sophia Martinez',
      email: 'sophia.m@example.com',
      phone: '(555) 987-6543',
      dateOfBirth: new Date(1985, 8, 22),
      isReturningPatient: false,
      preferredContactMethod: 'phone'
    },
    confirmationSent: true,
    reminderSent: false
  },
  {
    id: 'appt-003',
    patientId: 'patient-003',
    doctorId: 'dr-priya-sharma',
    serviceId: 'infertility-treatment',
    dateTime: combineDateAndTime(addDays(new Date(), 1), '11:15'),
    duration: 45,
    status: 'confirmed',
    createdAt: new Date(),
    updatedAt: new Date(),
    notes: 'Follow-up after initial fertility assessment',
    isNewPatient: false,
    isEmergency: false,
    patientInfo: {
      name: 'Jessica and David Thompson',
      email: 'jthompson@example.com',
      phone: '(555) 456-7890',
      dateOfBirth: new Date(1988, 3, 10),
      isReturningPatient: true,
      medicalRecordNumber: 'MRN-67890',
      preferredContactMethod: 'email'
    },
    confirmationSent: true,
    reminderSent: true
  },
  {
    id: 'appt-004',
    patientId: 'patient-004',
    doctorId: 'dr-amanda-rodriguez',
    serviceId: '3d-4d-sonography',
    dateTime: combineDateAndTime(addDays(new Date(), 5), '09:30'),
    duration: 30,
    status: 'scheduled',
    createdAt: new Date(),
    updatedAt: new Date(),
    notes: '20-week anatomy scan',
    isNewPatient: false,
    isEmergency: false,
    patientInfo: {
      name: 'Olivia Johnson',
      email: 'olivia.j@example.com',
      phone: '(555) 234-5678',
      dateOfBirth: new Date(1992, 10, 5),
      isReturningPatient: true,
      medicalRecordNumber: 'MRN-23456',
      preferredContactMethod: 'sms',
      pregnancyInfo: {
        isPregnant: true,
        weeksOfGestation: 20,
        dueDate: addDays(new Date(), 20 * 7), // 20 weeks from now
        isHighRisk: false
      }
    },
    confirmationSent: true,
    reminderSent: false
  },
  {
    id: 'appt-005',
    patientId: 'patient-005',
    doctorId: 'dr-sarah-johnson',
    serviceId: 'high-risk-pregnancy',
    dateTime: combineDateAndTime(addDays(new Date(), 2), '15:00'),
    duration: 45,
    status: 'confirmed',
    createdAt: new Date(),
    updatedAt: new Date(),
    notes: 'High-risk pregnancy monitoring',
    isNewPatient: false,
    isEmergency: true,
    patientInfo: {
      name: 'Rachel Kim',
      email: 'rachel.kim@example.com',
      phone: '(555) 345-6789',
      dateOfBirth: new Date(1987, 7, 18),
      isReturningPatient: true,
      medicalRecordNumber: 'MRN-34567',
      preferredContactMethod: 'phone',
      pregnancyInfo: {
        isPregnant: true,
        weeksOfGestation: 32,
        dueDate: addDays(new Date(), 8 * 7), // 8 weeks from now
        isHighRisk: true
      }
    },
    confirmationSent: true,
    reminderSent: true
  }
]

/**
 * Get all appointments
 * @returns Array of all appointments
 */
export function getAllAppointments(): EnhancedAppointment[] {
  return mockAppointments
}

/**
 * Get appointment by ID
 * @param id Appointment ID
 * @returns Appointment or undefined if not found
 */
export function getAppointmentById(id: string): EnhancedAppointment | undefined {
  return mockAppointments.find(appointment => appointment.id === id)
}

/**
 * Get appointments for a specific doctor
 * @param doctorId Doctor ID
 * @returns Array of appointments for the doctor
 */
export function getAppointmentsByDoctor(doctorId: string): EnhancedAppointment[] {
  return mockAppointments.filter(appointment => appointment.doctorId === doctorId)
}

/**
 * Get appointments for a specific patient
 * @param patientId Patient ID
 * @returns Array of appointments for the patient
 */
export function getAppointmentsByPatient(patientId: string): EnhancedAppointment[] {
  return mockAppointments.filter(appointment => appointment.patientId === patientId)
}

/**
 * Get appointments for a specific date
 * @param date Date to check
 * @returns Array of appointments for the date
 */
export function getAppointmentsByDate(date: Date): EnhancedAppointment[] {
  return mockAppointments.filter(appointment => {
    const appointmentDate = new Date(appointment.dateTime)
    return (
      appointmentDate.getFullYear() === date.getFullYear() &&
      appointmentDate.getMonth() === date.getMonth() &&
      appointmentDate.getDate() === date.getDate()
    )
  })
}

/**
 * Get available time slots for a doctor on a specific date
 * @param doctorId Doctor ID
 * @param date Date to check
 * @param duration Duration of appointment in minutes
 * @returns Array of available time slots
 */
export function getAvailableSlotsForDoctor(
  doctorId: string,
  date: Date,
  duration: number = 30
): TimeSlot[] {
  const doctor = doctors.find(d => d.id === doctorId)
  
  if (!doctor) {
    return []
  }
  
  // Get doctor's availability
  const dayOfWeek = date.getDay()
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const dayName = days[dayOfWeek]
  
  const dayAvailability = doctor.availability.find(slot => slot.day === dayName)
  
  if (!dayAvailability || !dayAvailability.isAvailable) {
    return [] // Doctor not available on this day
  }
  
  // Get existing appointments for this doctor on this date
  const existingAppointments = getAppointmentsByDoctor(doctorId).filter(appointment => {
    const appointmentDate = new Date(appointment.dateTime)
    return (
      appointmentDate.getFullYear() === date.getFullYear() &&
      appointmentDate.getMonth() === date.getMonth() &&
      appointmentDate.getDate() === date.getDate()
    )
  })
  
  // Convert existing appointments to time slots for conflict checking
  const existingSlots: TimeSlot[] = existingAppointments.map(appointment => ({
    id: `existing-${appointment.id}`,
    doctorId: appointment.doctorId,
    startTime: appointment.dateTime,
    endTime: new Date(appointment.dateTime.getTime() + appointment.duration * 60000),
    isAvailable: false,
    appointmentId: appointment.id
  }))
  
  // Generate available time slots
  return getAvailableTimeSlots(doctorId, date, doctor.availability, duration, existingSlots)
}

/**
 * Add a new appointment
 * @param appointment Appointment to add
 * @returns Added appointment with generated ID
 */
export function addAppointment(appointment: Omit<EnhancedAppointment, 'id' | 'createdAt' | 'updatedAt'>): EnhancedAppointment {
  const newAppointment: EnhancedAppointment = {
    ...appointment,
    id: `appt-${mockAppointments.length + 1}`.padStart(7, '0'),
    createdAt: new Date(),
    updatedAt: new Date()
  }
  
  mockAppointments.push(newAppointment)
  return newAppointment
}

/**
 * Update an existing appointment
 * @param id Appointment ID
 * @param updates Updates to apply
 * @returns Updated appointment or undefined if not found
 */
export function updateAppointment(
  id: string,
  updates: Partial<EnhancedAppointment>
): EnhancedAppointment | undefined {
  const index = mockAppointments.findIndex(appointment => appointment.id === id)
  
  if (index === -1) {
    return undefined
  }
  
  const updatedAppointment: EnhancedAppointment = {
    ...mockAppointments[index],
    ...updates,
    updatedAt: new Date()
  }
  
  mockAppointments[index] = updatedAppointment
  return updatedAppointment
}

/**
 * Cancel an appointment
 * @param id Appointment ID
 * @param reason Cancellation reason
 * @returns Cancelled appointment or undefined if not found
 */
export function cancelAppointment(id: string, reason?: string): EnhancedAppointment | undefined {
  return updateAppointment(id, {
    status: 'cancelled',
    cancellationReason: reason
  })
}

/**
 * Reschedule an appointment
 * @param id Appointment ID
 * @param newDateTime New date and time
 * @returns Rescheduled appointment or undefined if not found
 */
export function rescheduleAppointment(id: string, newDateTime: Date): EnhancedAppointment | undefined {
  return updateAppointment(id, {
    dateTime: newDateTime,
    status: 'rescheduled'
  })
}

/**
 * Get service duration in minutes
 * @param serviceId Service ID
 * @returns Duration in minutes
 */
export function getServiceDuration(serviceId: string): number {
  const service = medicalServices.find(s => s.id === serviceId)
  
  if (!service) {
    return 30 // Default duration
  }
  
  // Parse duration string to extract minutes
  const durationStr = service.duration
  
  if (durationStr.includes('hour')) {
    // Handle "1-3 hours" format
    const hours = durationStr.match(/\d+/g)
    if (hours && hours.length > 0) {
      return parseInt(hours[0]) * 60
    }
  } else if (durationStr.includes('minute')) {
    // Handle "30-45 minutes" format
    const minutes = durationStr.match(/\d+/g)
    if (minutes && minutes.length > 0) {
      return parseInt(minutes[0])
    }
  }
  
  return 30 // Default duration
}