import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AppointmentFormData } from '@/lib/validation/appointment-validation'
import { Doctor, MedicalService } from '@/types'
import { formatDate, formatTimeDisplay } from '@/lib/utils/date-utils'
import { ArrowLeft, Calendar, Clock, Edit, User, Phone, Mail, FileText, AlertCircle } from 'lucide-react'

interface AppointmentSummaryProps {
  formData: Partial<AppointmentFormData>
  doctor: Doctor | undefined
  service: MedicalService | undefined
  onEdit: (section: 'service' | 'doctor' | 'datetime' | 'patient' | 'medical') => void
  onBack: () => void
  onConfirm: () => void
  isSubmitting: boolean
}

export function AppointmentSummary({
  formData,
  doctor,
  service,
  onEdit,
  onBack,
  onConfirm,
  isSubmitting
}: AppointmentSummaryProps) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-primary">Review Your Appointment</h2>
        <p className="text-muted-foreground mt-1">
          Please review your appointment details before confirming
        </p>
      </div>
      
      {/* Service & Doctor */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">Service & Doctor</CardTitle>
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center text-primary"
              onClick={() => onEdit('service')}
            >
              <Edit className="h-4 w-4 mr-1" />
              Edit
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {service && (
            <div>
              <p className="text-sm text-muted-foreground">Selected Service:</p>
              <p className="font-medium">{service.name}</p>
              <p className="text-sm text-muted-foreground mt-1">Duration: {service.duration}</p>
              {service.isEmergency && (
                <p className="text-sm font-medium text-red-500 mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  Emergency service
                </p>
              )}
            </div>
          )}
          
          {doctor && (
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">Selected Doctor:</p>
              <p className="font-medium">{doctor.name}</p>
              <p className="text-sm text-muted-foreground">{doctor.title}</p>
            </div>
          )}
        </CardContent>
      </Card>
      
      {/* Date & Time */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">Date & Time</CardTitle>
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center text-primary"
              onClick={() => onEdit('datetime')}
            >
              <Edit className="h-4 w-4 mr-1" />
              Edit
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {formData.appointmentDate && (
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-primary" />
              <span>{formatDate(formData.appointmentDate)}</span>
            </div>
          )}
          
          {formData.appointmentTime && (
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-primary" />
              <span>{formatTimeDisplay(formData.appointmentTime)}</span>
            </div>
          )}
        </CardContent>
      </Card>
      
      {/* Patient Information */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">Patient Information</CardTitle>
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center text-primary"
              onClick={() => onEdit('patient')}
            >
              <Edit className="h-4 w-4 mr-1" />
              Edit
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center">
            <User className="h-5 w-5 mr-2 text-primary" />
            <span>{formData.patientName}</span>
          </div>
          
          <div className="flex items-center">
            <Mail className="h-5 w-5 mr-2 text-primary" />
            <span>{formData.patientEmail}</span>
          </div>
          
          <div className="flex items-center">
            <Phone className="h-5 w-5 mr-2 text-primary" />
            <span>{formData.patientPhone}</span>
          </div>
          
          {formData.dateOfBirth && (
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-primary" />
              <span>Date of Birth: {formatDate(formData.dateOfBirth, 'MM/dd/yyyy')}</span>
            </div>
          )}
          
          {formData.isReturningPatient && formData.medicalRecordNumber && (
            <div className="flex items-center">
              <FileText className="h-5 w-5 mr-2 text-primary" />
              <span>Medical Record #: {formData.medicalRecordNumber}</span>
            </div>
          )}
        </CardContent>
      </Card>
      
      {/* Medical Information */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">Medical Information</CardTitle>
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center text-primary"
              onClick={() => onEdit('medical')}
            >
              <Edit className="h-4 w-4 mr-1" />
              Edit
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <p className="text-sm text-muted-foreground">Reason for Visit:</p>
            <p className="mt-1">{formData.reasonForVisit}</p>
          </div>
          
          {formData.isPregnant && (
            <div className="mt-3 p-3 bg-primary/5 rounded-md">
              <p className="font-medium text-primary">Pregnancy Information</p>
              
              {formData.weeksOfGestation && (
                <p className="text-sm mt-1">
                  Weeks of Gestation: {formData.weeksOfGestation}
                </p>
              )}
              
              {formData.dueDate && (
                <p className="text-sm mt-1">
                  Due Date: {formatDate(formData.dueDate, 'MM/dd/yyyy')}
                </p>
              )}
              
              {formData.isHighRisk && (
                <p className="text-sm font-medium text-red-500 mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  High-risk pregnancy
                </p>
              )}
            </div>
          )}
          
          {formData.currentMedications && (
            <div className="mt-3">
              <p className="text-sm text-muted-foreground">Current Medications:</p>
              <p className="mt-1">{formData.currentMedications}</p>
            </div>
          )}
          
          {formData.allergies && (
            <div className="mt-3">
              <p className="text-sm text-muted-foreground">Allergies:</p>
              <p className="mt-1">{formData.allergies}</p>
            </div>
          )}
          
          {formData.isEmergency && (
            <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm font-medium text-red-700 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                This is marked as an emergency appointment
              </p>
            </div>
          )}
        </CardContent>
      </Card>
      
      {/* Contact Preferences */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Contact Preferences</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Preferred Contact Method: <span className="font-medium capitalize">{formData.preferredContactMethod}</span>
          </p>
          
          {formData.notes && (
            <div className="mt-3">
              <p className="text-sm text-muted-foreground">Additional Notes:</p>
              <p className="mt-1">{formData.notes}</p>
            </div>
          )}
        </CardContent>
      </Card>
      
      {/* Navigation buttons */}
      <div className="flex justify-between mt-8">
        <Button 
          variant="outline" 
          onClick={onBack}
          className="flex items-center"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <Button 
          onClick={onConfirm}
          disabled={isSubmitting}
          className="px-8"
        >
          {isSubmitting ? 'Confirming...' : 'Confirm Appointment'}
        </Button>
      </div>
      
      <div className="text-center text-sm text-muted-foreground">
        <p>
          By confirming this appointment, you agree to our{' '}
          <a href="#" className="text-primary hover:underline">
            Appointment Policy
          </a>
        </p>
      </div>
    </div>
  )
}