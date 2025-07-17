import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, ArrowRight, User, Mail, Phone, Calendar, FileText } from 'lucide-react'
import { PatientInformationFormData } from '@/lib/validation/appointment-schema'
import { isValidEmail, isValidPhone } from '@/lib/utils'

interface PatientInfoFormProps {
  formData: Partial<PatientInformationFormData>
  onChange: (data: Partial<PatientInformationFormData>) => void
  onContinue: () => void
  onBack: () => void
  errors: Record<string, string>
}

export function PatientInfoForm({
  formData,
  onChange,
  onContinue,
  onBack,
  errors
}: PatientInfoFormProps) {
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onContinue()
  }
  
  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    onChange({
      [name]: type === 'checkbox' ? checked : value
    })
  }
  
  // Handle date of birth change
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (value) {
      onChange({ dateOfBirth: new Date(value) })
    } else {
      onChange({ dateOfBirth: undefined })
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-primary">Patient Information</h2>
        <p className="text-muted-foreground mt-1">
          Please provide your personal details for the appointment
        </p>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <User className="h-5 w-5 mr-2 text-primary" />
            Personal Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Patient Name */}
            <div className="space-y-2">
              <label htmlFor="patientName" className="text-sm font-medium">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  id="patientName"
                  name="patientName"
                  type="text"
                  value={formData.patientName || ''}
                  onChange={handleInputChange}
                  className={`pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.patientName ? 'border-red-500' : ''
                  }`}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              {errors.patientName && (
                <p className="text-red-500 text-xs mt-1">{errors.patientName}</p>
              )}
            </div>
            
            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="patientEmail" className="text-sm font-medium">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  id="patientEmail"
                  name="patientEmail"
                  type="email"
                  value={formData.patientEmail || ''}
                  onChange={handleInputChange}
                  className={`pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.patientEmail ? 'border-red-500' : ''
                  }`}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              {errors.patientEmail && (
                <p className="text-red-500 text-xs mt-1">{errors.patientEmail}</p>
              )}
            </div>
            
            {/* Phone */}
            <div className="space-y-2">
              <label htmlFor="patientPhone" className="text-sm font-medium">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  id="patientPhone"
                  name="patientPhone"
                  type="tel"
                  value={formData.patientPhone || ''}
                  onChange={handleInputChange}
                  className={`pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.patientPhone ? 'border-red-500' : ''
                  }`}
                  placeholder="(123) 456-7890"
                  required
                />
              </div>
              {errors.patientPhone && (
                <p className="text-red-500 text-xs mt-1">{errors.patientPhone}</p>
              )}
            </div>
            
            {/* Date of Birth */}
            <div className="space-y-2">
              <label htmlFor="dateOfBirth" className="text-sm font-medium">
                Date of Birth
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth ? formData.dateOfBirth.toISOString().split('T')[0] : ''}
                  onChange={handleDateChange}
                  className={`pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.dateOfBirth ? 'border-red-500' : ''
                  }`}
                />
              </div>
              {errors.dateOfBirth && (
                <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>
              )}
            </div>
            
            {/* Returning Patient */}
            <div className="flex items-center space-x-2">
              <input
                id="isReturningPatient"
                name="isReturningPatient"
                type="checkbox"
                checked={formData.isReturningPatient || false}
                onChange={handleInputChange}
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="isReturningPatient" className="text-sm font-medium">
                I am a returning patient
              </label>
            </div>
            
            {/* Medical Record Number (conditional) */}
            {formData.isReturningPatient && (
              <div className="space-y-2">
                <label htmlFor="medicalRecordNumber" className="text-sm font-medium">
                  Medical Record Number
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <input
                    id="medicalRecordNumber"
                    name="medicalRecordNumber"
                    type="text"
                    value={formData.medicalRecordNumber || ''}
                    onChange={handleInputChange}
                    className={`pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.medicalRecordNumber ? 'border-red-500' : ''
                    }`}
                    placeholder="Enter your medical record number (if known)"
                  />
                </div>
                {errors.medicalRecordNumber && (
                  <p className="text-red-500 text-xs mt-1">{errors.medicalRecordNumber}</p>
                )}
              </div>
            )}
            
            {/* Navigation buttons */}
            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={onBack}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </button>
              <button
                type="submit"
                className="flex items-center px-6 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90"
              >
                Continue
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
      
      <div className="text-center text-sm text-muted-foreground">
        <p>
          Your personal information is protected by our{' '}
          <a href="#" className="text-primary hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  )
}