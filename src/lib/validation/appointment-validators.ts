import { 
  AppointmentFormData, 
  AppointmentStatus, 
  EnhancedAppointment, 
  PatientInfo, 
  TimeSlot 
} from '@/types/appointment'
import { isValidEmail, isValidPhone } from '@/lib/utils'
import { isDateInPast } from '@/lib/utils/date-utils'

/**
 * Type guard to check if an object is a valid TimeSlot
 * @param obj Object to check
 * @returns Boolean indicating if object is a TimeSlot
 */
export function isTimeSlot(obj: any): obj is TimeSlot {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.id === 'string' &&
    typeof obj.doctorId === 'string' &&
    obj.startTime instanceof Date &&
    obj.endTime instanceof Date &&
    typeof obj.isAvailable === 'boolean' &&
    (obj.appointmentId === null || typeof obj.appointmentId === 'string')
  )
}

/**
 * Type guard to check if an object is a valid EnhancedAppointment
 * @param obj Object to check
 * @returns Boolean indicating if object is an EnhancedAppointment
 */
export function isEnhancedAppointment(obj: any): obj is EnhancedAppointment {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.id === 'string' &&
    typeof obj.doctorId === 'string' &&
    typeof obj.serviceId === 'string' &&
    obj.dateTime instanceof Date &&
    typeof obj.duration === 'number' &&
    isAppointmentStatus(obj.status) &&
    obj.createdAt instanceof Date &&
    obj.updatedAt instanceof Date &&
    (obj.notes === null || typeof obj.notes === 'string') &&
    typeof obj.isNewPatient === 'boolean' &&
    typeof obj.isEmergency === 'boolean' &&
    isPatientInfo(obj.patientInfo) &&
    typeof obj.confirmationSent === 'boolean' &&
    typeof obj.reminderSent === 'boolean'
  )
}

/**
 * Type guard to check if a string is a valid AppointmentStatus
 * @param status Status to check
 * @returns Boolean indicating if status is valid
 */
export function isAppointmentStatus(status: any): status is AppointmentStatus {
  return [
    'scheduled',
    'confirmed',
    'completed',
    'cancelled',
    'rescheduled',
    'no-show'
  ].includes(status)
}

/**
 * Type guard to check if an object is a valid PatientInfo
 * @param obj Object to check
 * @returns Boolean indicating if object is a PatientInfo
 */
export function isPatientInfo(obj: any): obj is PatientInfo {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.name === 'string' &&
    typeof obj.email === 'string' &&
    typeof obj.phone === 'string' &&
    typeof obj.isReturningPatient === 'boolean' &&
    ['email', 'phone', 'sms'].includes(obj.preferredContactMethod) &&
    (obj.dateOfBirth === undefined || obj.dateOfBirth instanceof Date) &&
    (obj.medicalRecordNumber === undefined || typeof obj.medicalRecordNumber === 'string')
  )
}

/**
 * Validates appointment form data
 * @param data Form data to validate
 * @returns Object with validation result and errors
 */
export function validateAppointmentFormData(data: Partial<AppointmentFormData>): {
  isValid: boolean
  errors: Record<string, string>
} {
  const errors: Record<string, string> = {}
  
  // Required fields
  if (!data.serviceId) {
    errors.serviceId = 'Service selection is required'
  }
  
  if (!data.doctorId) {
    errors.doctorId = 'Doctor selection is required'
  }
  
  if (!data.appointmentDate) {
    errors.appointmentDate = 'Appointment date is required'
  } else if (isDateInPast(data.appointmentDate)) {
    errors.appointmentDate = 'Appointment date cannot be in the past'
  }
  
  if (!data.appointmentTime) {
    errors.appointmentTime = 'Appointment time is required'
  }
  
  if (!data.patientName) {
    errors.patientName = 'Patient name is required'
  } else if (data.patientName.length < 2) {
    errors.patientName = 'Patient name must be at least 2 characters'
  }
  
  if (!data.patientEmail) {
    errors.patientEmail = 'Email is required'
  } else if (!isValidEmail(data.patientEmail)) {
    errors.patientEmail = 'Please enter a valid email address'
  }
  
  if (!data.patientPhone) {
    errors.patientPhone = 'Phone number is required'
  } else if (!isValidPhone(data.patientPhone)) {
    errors.patientPhone = 'Please enter a valid phone number'
  }
  
  if (!data.reasonForVisit) {
    errors.reasonForVisit = 'Reason for visit is required'
  } else if (data.reasonForVisit.length < 5) {
    errors.reasonForVisit = 'Please provide more details about your reason for visit'
  }
  
  if (!data.preferredContactMethod) {
    errors.preferredContactMethod = 'Preferred contact method is required'
  }
  
  // Conditional validation
  if (data.isReturningPatient && !data.medicalRecordNumber) {
    errors.medicalRecordNumber = 'Medical record number is required for returning patients'
  }
  
  if (data.isPregnant) {
    if (!data.weeksOfGestation && !data.dueDate) {
      errors.weeksOfGestation = 'Please provide either weeks of gestation or due date'
    }
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

/**
 * Checks if a time slot is available
 * @param slot Time slot to check
 * @param existingAppointments Array of existing appointments
 * @returns Boolean indicating if slot is available
 */
export function isSlotAvailable(
  slot: TimeSlot,
  existingAppointments: EnhancedAppointment[] = []
): boolean {
  if (!slot.isAvailable || slot.appointmentId !== null) {
    return false
  }
  
  // Check if slot is in the past
  if (isDateInPast(slot.startTime)) {
    return false
  }
  
  // Check for conflicts with existing appointments
  return !existingAppointments.some(appointment => {
    const appointmentStart = appointment.dateTime
    const appointmentEnd = new Date(appointmentStart.getTime() + appointment.duration * 60000)
    
    // Check for overlap
    return (
      (slot.startTime < appointmentEnd && slot.endTime > appointmentStart)
    )
  })
}