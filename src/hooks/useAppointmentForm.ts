import { useState, useCallback } from 'react'
import { AppointmentFormData, AppointmentStep } from '@/types/appointment'
import { 
  appointmentFormSchema, 
  serviceSelectionSchema, 
  doctorSelectionSchema,
  dateTimeSelectionSchema,
  patientInformationSchema,
  medicalInformationSchema,
  preferencesSchema
} from '@/lib/validation/appointment-schema'
import { z } from 'zod'

// Initial empty form state
const initialFormState: Partial<AppointmentFormData> = {
  serviceId: '',
  doctorId: '',
  duration: 30,
  isReturningPatient: false,
  isEmergency: false,
  preferredContactMethod: 'email',
}

export function useAppointmentForm() {
  // Form state
  const [formData, setFormData] = useState<Partial<AppointmentFormData>>(initialFormState)
  
  // Current step in the appointment booking process
  const [currentStep, setCurrentStep] = useState<AppointmentStep>('service-selection')
  
  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({})
  
  // Loading state for async operations
  const [isLoading, setIsLoading] = useState(false)
  
  // Update form data
  const updateFormData = useCallback((data: Partial<AppointmentFormData>) => {
    setFormData(prev => ({ ...prev, ...data }))
  }, [])
  
  // Reset form to initial state
  const resetForm = useCallback(() => {
    setFormData(initialFormState)
    setCurrentStep('service-selection')
    setErrors({})
  }, [])
  
  // Validate current step
  const validateCurrentStep = useCallback((): boolean => {
    try {
      switch (currentStep) {
        case 'service-selection':
          serviceSelectionSchema.parse(formData)
          break
        case 'doctor-selection':
          doctorSelectionSchema.parse(formData)
          break
        case 'date-time-selection':
          dateTimeSelectionSchema.parse(formData)
          break
        case 'patient-information':
          patientInformationSchema.parse(formData)
          break
        case 'medical-information':
          medicalInformationSchema.parse(formData)
          break
        case 'review-confirm':
          // Validate entire form before final submission
          appointmentFormSchema.parse(formData)
          break
        default:
          return true
      }
      
      // Clear errors if validation passes
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Convert Zod errors to a more usable format
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
  }, [currentStep, formData])
  
  // Move to next step
  const nextStep = useCallback(() => {
    if (!validateCurrentStep()) {
      return false
    }
    
    switch (currentStep) {
      case 'service-selection':
        setCurrentStep('doctor-selection')
        break
      case 'doctor-selection':
        setCurrentStep('date-time-selection')
        break
      case 'date-time-selection':
        setCurrentStep('patient-information')
        break
      case 'patient-information':
        setCurrentStep('medical-information')
        break
      case 'medical-information':
        setCurrentStep('review-confirm')
        break
      case 'review-confirm':
        setCurrentStep('confirmation')
        break
      default:
        break
    }
    
    return true
  }, [currentStep, validateCurrentStep])
  
  // Move to previous step
  const prevStep = useCallback(() => {
    switch (currentStep) {
      case 'doctor-selection':
        setCurrentStep('service-selection')
        break
      case 'date-time-selection':
        setCurrentStep('doctor-selection')
        break
      case 'patient-information':
        setCurrentStep('date-time-selection')
        break
      case 'medical-information':
        setCurrentStep('patient-information')
        break
      case 'review-confirm':
        setCurrentStep('medical-information')
        break
      default:
        break
    }
  }, [currentStep])
  
  // Go to a specific step
  const goToStep = useCallback((step: AppointmentStep) => {
    setCurrentStep(step)
  }, [])
  
  // Submit the form
  const submitForm = useCallback(async (): Promise<boolean> => {
    try {
      // Validate entire form
      appointmentFormSchema.parse(formData)
      
      setIsLoading(true)
      
      // Here you would typically make an API call to save the appointment
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setCurrentStep('confirmation')
      setIsLoading(false)
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
      setIsLoading(false)
      return false
    }
  }, [formData])
  
  return {
    formData,
    currentStep,
    errors,
    isLoading,
    updateFormData,
    resetForm,
    validateCurrentStep,
    nextStep,
    prevStep,
    goToStep,
    submitForm,
  }
}