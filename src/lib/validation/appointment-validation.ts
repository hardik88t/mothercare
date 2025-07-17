import { z } from 'zod'
import { isDateInPast } from '../utils/date-utils'

// Custom validators
const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
const medicalRecordNumberRegex = /^[A-Za-z0-9-]+$/

// Service & Doctor Selection Schema
export const serviceSelectionSchema = z.object({
  serviceId: z.string()
    .min(1, { message: "Please select a service" })
})

export const doctorSelectionSchema = z.object({
  doctorId: z.string()
    .min(1, { message: "Please select a doctor" })
})

// Date & Time Selection Schema
export const dateTimeSelectionSchema = z.object({
  appointmentDate: z.date()
    .refine(date => !isDateInPast(date), {
      message: "Appointment date cannot be in the past",
    }),
  appointmentTime: z.string()
    .min(1, { message: "Please select a time" })
})

// Patient Information Schema
export const patientInformationSchema = z.object({
  patientName: z.string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name cannot exceed 100 characters" })
    .refine(name => /^[A-Za-z\s\-'.]+$/.test(name), {
      message: "Name can only contain letters, spaces, hyphens, apostrophes, and periods",
    }),
  patientEmail: z.string()
    .email({ message: "Please enter a valid email address" })
    .max(100, { message: "Email cannot exceed 100 characters" }),
  patientPhone: z.string()
    .regex(phoneRegex, {
      message: "Please enter a valid phone number (e.g., 123-456-7890)",
    }),
  dateOfBirth: z.date().optional()
    .refine(date => !date || date < new Date(), {
      message: "Date of birth cannot be in the future",
    })
    .refine(date => !date || new Date().getFullYear() - date.getFullYear() <= 120, {
      message: "Please enter a valid date of birth",
    }),
  isReturningPatient: z.boolean().default(false),
  medicalRecordNumber: z.string().optional()
    .refine(mrn => !mrn || medicalRecordNumberRegex.test(mrn), {
      message: "Medical record number can only contain letters, numbers, and hyphens",
    }),
})

// Add conditional validation for returning patients
export const patientInformationWithConditionalSchema = patientInformationSchema.refine(
  data => !data.isReturningPatient || (data.isReturningPatient && !!data.medicalRecordNumber),
  {
    message: "Medical record number is required for returning patients",
    path: ["medicalRecordNumber"],
  }
)

// Medical Information Schema
export const medicalInformationSchema = z.object({
  reasonForVisit: z.string()
    .min(5, { message: "Please provide more details about your reason for visit" })
    .max(1000, { message: "Reason for visit cannot exceed 1000 characters" }),
  isPregnant: z.boolean().optional(),
  weeksOfGestation: z.number()
    .min(1, { message: "Weeks of gestation must be at least 1" })
    .max(42, { message: "Weeks of gestation cannot exceed 42" })
    .optional(),
  dueDate: z.date().optional()
    .refine(date => !date || date > new Date(), {
      message: "Due date must be in the future",
    }),
  isHighRisk: z.boolean().optional(),
  currentMedications: z.string()
    .max(1000, { message: "Current medications cannot exceed 1000 characters" })
    .optional(),
  allergies: z.string()
    .max(1000, { message: "Allergies cannot exceed 1000 characters" })
    .optional(),
})

// Add conditional validation for pregnancy information
export const medicalInformationWithConditionalSchema = medicalInformationSchema.refine(
  data => !data.isPregnant || (data.isPregnant && (!!data.weeksOfGestation || !!data.dueDate)),
  {
    message: "Please provide either weeks of gestation or due date",
    path: ["weeksOfGestation"],
  }
)

// Preferences Schema
export const preferencesSchema = z.object({
  preferredContactMethod: z.enum(['email', 'phone', 'sms']),
  isEmergency: z.boolean().default(false),
  notes: z.string()
    .max(1000, { message: "Notes cannot exceed 1000 characters" })
    .optional(),
  addToCalendar: z.enum(['google', 'apple', 'outlook', 'none']).optional(),
})

// Complete Appointment Form Schema
export const appointmentFormSchema = z.object({
  // Step 1: Service & Doctor Selection
  serviceId: serviceSelectionSchema.shape.serviceId,
  doctorId: doctorSelectionSchema.shape.doctorId,
  
  // Step 2: Date & Time Selection
  appointmentDate: dateTimeSelectionSchema.shape.appointmentDate,
  appointmentTime: dateTimeSelectionSchema.shape.appointmentTime,
  duration: z.number().int().positive().default(30),
  
  // Step 3: Patient Information
  patientName: patientInformationSchema.shape.patientName,
  patientEmail: patientInformationSchema.shape.patientEmail,
  patientPhone: patientInformationSchema.shape.patientPhone,
  dateOfBirth: patientInformationSchema.shape.dateOfBirth,
  isReturningPatient: patientInformationSchema.shape.isReturningPatient,
  medicalRecordNumber: patientInformationSchema.shape.medicalRecordNumber,
  
  // Step 4: Medical Information
  reasonForVisit: medicalInformationSchema.shape.reasonForVisit,
  isPregnant: medicalInformationSchema.shape.isPregnant,
  weeksOfGestation: medicalInformationSchema.shape.weeksOfGestation,
  dueDate: medicalInformationSchema.shape.dueDate,
  isHighRisk: medicalInformationSchema.shape.isHighRisk,
  currentMedications: medicalInformationSchema.shape.currentMedications,
  allergies: medicalInformationSchema.shape.allergies,
  
  // Step 5: Preferences
  preferredContactMethod: preferencesSchema.shape.preferredContactMethod,
  isEmergency: preferencesSchema.shape.isEmergency,
  notes: preferencesSchema.shape.notes,
  addToCalendar: preferencesSchema.shape.addToCalendar,
})
.refine(
  data => !data.isReturningPatient || (data.isReturningPatient && !!data.medicalRecordNumber),
  {
    message: "Medical record number is required for returning patients",
    path: ["medicalRecordNumber"],
  }
)
.refine(
  data => !data.isPregnant || (data.isPregnant && (!!data.weeksOfGestation || !!data.dueDate)),
  {
    message: "Please provide either weeks of gestation or due date",
    path: ["weeksOfGestation"],
  }
);

// Type inference
export type ServiceSelectionFormData = z.infer<typeof serviceSelectionSchema>
export type DoctorSelectionFormData = z.infer<typeof doctorSelectionSchema>
export type DateTimeSelectionFormData = z.infer<typeof dateTimeSelectionSchema>
export type PatientInformationFormData = z.infer<typeof patientInformationSchema>
export type MedicalInformationFormData = z.infer<typeof medicalInformationSchema>
export type PreferencesFormData = z.infer<typeof preferencesSchema>
export type AppointmentFormData = z.infer<typeof appointmentFormSchema>