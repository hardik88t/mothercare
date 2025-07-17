import { useState, useCallback } from 'react'
import { z } from 'zod'
import { 
  appointmentFormSchema,
  serviceSelectionSchema,
  doctorSelectionSchema,
  dateTimeSelectionSchema,
  patientInformationSchema,
  medicalInformationSchema,
  preferencesSchema
} from '@/lib/validation/appointment-schema'
import { AppointmentFormData, AppointmentStep } from '@/types/appointment'

export function useFormValidation() {
  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({})
  
  // Validate a specific step of the form
  const validateStep = useCallback((step: AppointmentStep, data: Partial<AppointmentFormData>): boolean => {
    try {
      let schema: z.ZodType<any>
      
      switch (step) {
        case 'service-selection':
          schema = serviceSelectionSchema
          break
        case 'doctor-selection':
          schema = doctorSelectionSchema
          break
        case 'date-time-selection':
          schema = dateTimeSelectionSchema
          break
        case 'patient-information':
          schema = patientInformationSchema
          break
        case 'medical-information':
          schema = medicalInformationSchema
          break
        case 'review-confirm':
          // For review step, validate the entire form
          schema = appointmentFormSchema
          break
        default:
          // For other steps (like confirmation), no validation needed
          setErrors({})
          return true
      }
      
      schema.parse(data)
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {}
        error.errors.forEach(err => {
          if (err.path) {
            newErrors[err.path.join('.')] = err.message
          }
        })
        setErrors(newErrors)
      }
      return false
    }
  }, [])
  
  // Validate a specific field
  const validateField = useCallback((fieldName: string, value: any, schema: z.ZodType<any>): string | null => {
    try {
      schema.parse({ [fieldName]: value })
      return null
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldError = error.errors.find(err => err.path[0] === fieldName)
        return fieldError?.message || null
      }
      return null
    }
  }, [])
  
  // Validate the entire form
  const validateForm = useCallback((data: Partial<AppointmentFormData>): boolean => {
    try {
      appointmentFormSchema.parse(data)
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {}
        error.errors.forEach(err => {
          if (err.path) {
            newErrors[err.path.join('.')] = err.message
          }
        })
        setErrors(newErrors)
      }
      return false
    }
  }, [])
  
  // Clear all errors
  const clearErrors = useCallback(() => {
    setErrors({})
  }, [])
  
  // Set a specific error
  const setError = useCallback((fieldName: string, message: string) => {
    setErrors(prev => ({
      ...prev,
      [fieldName]: message
    }))
  }, [])
  
  return {
    errors,
    validateStep,
    validateField,
    validateForm,
    clearErrors,
    setError
  }
}