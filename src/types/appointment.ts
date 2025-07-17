import { Doctor, MedicalService } from '.' // These types are used in JSDoc comments

// Enhanced Appointment type with additional fields from our design
export interface EnhancedAppointment {
  id: string
  patientId: string | null // Null for new patients
  doctorId: string
  serviceId: string
  dateTime: Date
  duration: number // in minutes
  status: AppointmentStatus
  createdAt: Date
  updatedAt: Date
  notes: string | null
  isNewPatient: boolean
  isEmergency: boolean
  patientInfo: PatientInfo
  confirmationSent: boolean
  reminderSent: boolean
  cancellationReason?: string
}

export type AppointmentStatus = 
  | 'scheduled'
  | 'confirmed'
  | 'completed'
  | 'cancelled'
  | 'rescheduled'
  | 'no-show'

export interface PatientInfo {
  name: string
  email: string
  phone: string
  dateOfBirth?: Date
  isReturningPatient: boolean
  medicalRecordNumber?: string
  pregnancyInfo?: PregnancyInfo
  preferredContactMethod: 'email' | 'phone' | 'sms'
}

export interface PregnancyInfo {
  isPregnant: boolean
  weeksOfGestation?: number
  dueDate?: Date
  isHighRisk: boolean
}

export interface TimeSlot {
  id: string
  doctorId: string
  startTime: Date
  endTime: Date
  isAvailable: boolean
  appointmentId: string | null // Null if not booked
}

export interface AppointmentFormData {
  // Step 1: Service & Doctor Selection
  serviceId: string
  doctorId: string
  
  // Step 2: Date & Time Selection
  appointmentDate: Date
  appointmentTime: string
  duration: number
  
  // Step 3: Patient Information
  patientName: string
  patientEmail: string
  patientPhone: string
  dateOfBirth?: Date
  isReturningPatient: boolean
  medicalRecordNumber?: string
  
  // Step 4: Medical Information
  reasonForVisit: string
  isPregnant?: boolean
  weeksOfGestation?: number
  dueDate?: Date
  isHighRisk?: boolean
  currentMedications?: string
  allergies?: string
  
  // Step 5: Preferences
  preferredContactMethod: 'email' | 'phone' | 'sms'
  isEmergency: boolean
  notes?: string
  
  // For calendar integration
  addToCalendar?: 'google' | 'apple' | 'outlook' | 'none'
}

export interface AppointmentAvailability {
  date: Date
  doctorId: string
  availableSlots: TimeSlot[]
}

export interface AppointmentConfirmation {
  appointmentId: string
  patientName: string
  doctorName: string
  serviceName: string
  dateTime: Date
  duration: number
  confirmationCode: string
  preparationInstructions?: string[]
}

export interface AppointmentRescheduleRequest {
  appointmentId: string
  newDateTime: Date
  reason?: string
}

export interface AppointmentCancellationRequest {
  appointmentId: string
  reason?: string
}

// Helper type for appointment booking steps
export type AppointmentStep = 
  | 'service-selection'
  | 'doctor-selection'
  | 'date-time-selection'
  | 'patient-information'
  | 'medical-information'
  | 'review-confirm'
  | 'confirmation'