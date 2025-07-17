import React, { useEffect } from 'react'
import { Calendar, AlertCircle } from 'lucide-react'
import { calculateDueDate, calculateWeeksOfGestation } from '@/lib/utils/date-utils'

interface PregnancyInfoFieldsProps {
  isPregnant: boolean
  weeksOfGestation?: number
  dueDate?: Date
  isHighRisk?: boolean
  onChange: (data: {
    weeksOfGestation?: number
    dueDate?: Date
    isHighRisk?: boolean
  }) => void
  errors: Record<string, string>
}

export function PregnancyInfoFields({
  isPregnant,
  weeksOfGestation,
  dueDate,
  isHighRisk = false,
  onChange,
  errors
}: PregnancyInfoFieldsProps) {
  // Update due date when weeks of gestation changes
  useEffect(() => {
    if (isPregnant && weeksOfGestation && !dueDate) {
      const calculatedDueDate = calculateDueDate(weeksOfGestation)
      onChange({ dueDate: calculatedDueDate })
    }
  }, [isPregnant, weeksOfGestation, dueDate, onChange])
  
  // Update weeks of gestation when due date changes
  useEffect(() => {
    if (isPregnant && dueDate && !weeksOfGestation) {
      const calculatedWeeks = calculateWeeksOfGestation(dueDate)
      onChange({ weeksOfGestation: calculatedWeeks })
    }
  }, [isPregnant, dueDate, weeksOfGestation, onChange])
  
  // Handle weeks of gestation change
  const handleWeeksChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const weeks = value ? parseInt(value, 10) : undefined
    
    onChange({ 
      weeksOfGestation: weeks,
      // Calculate due date based on weeks
      dueDate: weeks ? calculateDueDate(weeks) : undefined
    })
  }
  
  // Handle due date change
  const handleDueDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const date = value ? new Date(value) : undefined
    
    onChange({ 
      dueDate: date,
      // Calculate weeks based on due date
      weeksOfGestation: date ? calculateWeeksOfGestation(date) : undefined
    })
  }
  
  // Handle high risk change
  const handleHighRiskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ isHighRisk: e.target.checked })
  }
  
  if (!isPregnant) {
    return null
  }

  return (
    <div className="space-y-4 mt-4 p-4 bg-primary/5 rounded-md border border-primary/20">
      <h4 className="font-medium text-primary">Pregnancy Information</h4>
      
      {/* Weeks of Gestation */}
      <div className="space-y-2">
        <label htmlFor="weeksOfGestation" className="text-sm font-medium">
          Weeks of Gestation
        </label>
        <div className="relative">
          <input
            id="weeksOfGestation"
            name="weeksOfGestation"
            type="number"
            min="1"
            max="42"
            value={weeksOfGestation || ''}
            onChange={handleWeeksChange}
            className={`px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
              errors.weeksOfGestation ? 'border-red-500' : ''
            }`}
            placeholder="Enter weeks of gestation"
          />
        </div>
        {errors.weeksOfGestation && (
          <p className="text-red-500 text-xs mt-1">{errors.weeksOfGestation}</p>
        )}
        <p className="text-xs text-muted-foreground">
          Enter a number between 1 and 42
        </p>
      </div>
      
      {/* Due Date */}
      <div className="space-y-2">
        <label htmlFor="dueDate" className="text-sm font-medium">
          Due Date
        </label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input
            id="dueDate"
            name="dueDate"
            type="date"
            value={dueDate ? dueDate.toISOString().split('T')[0] : ''}
            onChange={handleDueDateChange}
            className={`pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
              errors.dueDate ? 'border-red-500' : ''
            }`}
          />
        </div>
        {errors.dueDate && (
          <p className="text-red-500 text-xs mt-1">{errors.dueDate}</p>
        )}
      </div>
      
      {/* High Risk Pregnancy */}
      <div className="flex items-center space-x-2">
        <input
          id="isHighRisk"
          name="isHighRisk"
          type="checkbox"
          checked={isHighRisk || false}
          onChange={handleHighRiskChange}
          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
        />
        <label htmlFor="isHighRisk" className="text-sm font-medium flex items-center">
          This is a high-risk pregnancy
          <span className="ml-1 text-red-500">
            <AlertCircle className="h-4 w-4" />
          </span>
        </label>
      </div>
      
      {isHighRisk && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-700">
            High-risk pregnancies receive priority scheduling and specialized care. Our maternal-fetal medicine specialists will be notified of your appointment.
          </p>
        </div>
      )}
    </div>
  )
}