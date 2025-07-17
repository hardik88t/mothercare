import React, { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight, Calendar as CalendarIcon, Check } from 'lucide-react'
import { 
  addDays, 
  addMonths, 
  format, 
  getDay, 
  getDaysInMonth, 
  isSameDay, 
  isSameMonth, 
  isToday, 
  startOfMonth, 
  subMonths 
} from 'date-fns'
import { Doctor } from '@/types'
import { isDoctorAvailableOnDay } from '@/lib/utils/date-utils'

interface DatePickerProps {
  selectedDate: Date | undefined
  onSelectDate: (date: Date) => void
  selectedDoctorId: string | undefined
  doctors: Doctor[]
  minDate?: Date
  maxDate?: Date
  disabledDates?: Date[]
}

export function DatePicker({
  selectedDate,
  onSelectDate,
  selectedDoctorId,
  doctors,
  minDate = new Date(),
  maxDate = addMonths(new Date(), 3),
  disabledDates = []
}: DatePickerProps) {
  // Current month being viewed
  const [currentMonth, setCurrentMonth] = useState(new Date())
  
  // Get selected doctor
  const selectedDoctor = useMemo(() => {
    return doctors.find(doctor => doctor.id === selectedDoctorId)
  }, [doctors, selectedDoctorId])
  
  // Generate calendar days for current month
  const calendarDays = useMemo(() => {
    const firstDayOfMonth = startOfMonth(currentMonth)
    const daysInMonth = getDaysInMonth(currentMonth)
    const startingDayOfWeek = getDay(firstDayOfMonth)
    const days: (Date | null)[] = []
    
    // Add empty slots for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i)
      days.push(date)
    }
    
    return days
  }, [currentMonth])
  
  // Check if a date is disabled
  const isDateDisabled = (date: Date): boolean => {
    // Check if date is before minDate or after maxDate
    if (date < minDate || date > maxDate) {
      return true
    }
    
    // Check if date is in disabledDates
    if (disabledDates.some(disabledDate => isSameDay(date, disabledDate))) {
      return true
    }
    
    // Check if selected doctor is available on this day
    if (selectedDoctor) {
      const dayOfWeek = getDay(date)
      return !isDoctorAvailableOnDay(selectedDoctor.availability, dayOfWeek)
    }
    
    return false
  }
  
  // Navigate to previous month
  const goToPreviousMonth = () => {
    setCurrentMonth(prevMonth => subMonths(prevMonth, 1))
  }
  
  // Navigate to next month
  const goToNextMonth = () => {
    setCurrentMonth(prevMonth => addMonths(prevMonth, 1))
  }
  
  // Check if previous month button should be disabled
  const isPreviousMonthDisabled = useMemo(() => {
    const previousMonth = subMonths(currentMonth, 1)
    return previousMonth < startOfMonth(minDate)
  }, [currentMonth, minDate])
  
  // Check if next month button should be disabled
  const isNextMonthDisabled = useMemo(() => {
    const nextMonth = addMonths(currentMonth, 1)
    return nextMonth > startOfMonth(maxDate)
  }, [currentMonth, maxDate])
  
  // Day names for header
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  
  // Quick select dates (next 7 days)
  const quickSelectDates = useMemo(() => {
    const dates: Date[] = []
    let currentDate = new Date()
    
    for (let i = 0; i < 7; i++) {
      dates.push(currentDate)
      currentDate = addDays(currentDate, 1)
    }
    
    return dates
  }, [])

  return (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-primary">Select a Date</h2>
        <p className="text-muted-foreground mt-1">
          {selectedDoctor 
            ? `Choose an available date for your appointment with ${selectedDoctor.name}`
            : 'Choose a date for your appointment'
          }
        </p>
      </div>
      
      {/* Quick select dates (next 7 days) */}
      <div className="flex overflow-x-auto pb-2 space-x-2 mb-4">
        {quickSelectDates.map((date, index) => {
          const disabled = isDateDisabled(date)
          return (
            <Button
              key={index}
              variant={isSameDay(date, selectedDate || new Date()) ? "default" : "outline"}
              size="sm"
              disabled={disabled}
              className={cn(
                "flex-shrink-0 flex flex-col h-auto py-2 px-3",
                isToday(date) && !disabled && "border-primary",
                disabled && "opacity-50 cursor-not-allowed"
              )}
              onClick={() => !disabled && onSelectDate(date)}
            >
              <span className="text-xs font-normal">
                {format(date, 'EEE')}
              </span>
              <span className={cn(
                "text-lg",
                isToday(date) && "font-bold"
              )}>
                {format(date, 'd')}
              </span>
              <span className="text-xs font-normal">
                {format(date, 'MMM')}
              </span>
            </Button>
          )
        })}
      </div>
      
      {/* Calendar */}
      <Card className="p-4">
        {/* Calendar header */}
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPreviousMonth}
            disabled={isPreviousMonthDisabled}
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Previous month</span>
          </Button>
          <h3 className="font-medium text-lg">
            {format(currentMonth, 'MMMM yyyy')}
          </h3>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNextMonth}
            disabled={isNextMonthDisabled}
          >
            <ArrowRight className="h-4 w-4" />
            <span className="sr-only">Next month</span>
          </Button>
        </div>
        
        {/* Day names */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {dayNames.map((day, index) => (
            <div 
              key={day} 
              className={cn(
                "text-center text-sm font-medium py-1",
                (index === 0 || index === 6) && "text-muted-foreground"
              )}
            >
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((date, index) => {
            if (!date) {
              return <div key={`empty-${index}`} className="h-10" />
            }
            
            const disabled = isDateDisabled(date)
            const isSelected = selectedDate ? isSameDay(date, selectedDate) : false
            const isCurrentMonth = isSameMonth(date, currentMonth)
            
            return (
              <Button
                key={date.toISOString()}
                variant={isSelected ? "default" : "ghost"}
                size="sm"
                disabled={disabled}
                className={cn(
                  "h-10 w-full rounded-md",
                  !isCurrentMonth && "text-muted-foreground opacity-50",
                  isToday(date) && !disabled && !isSelected && "border border-primary text-primary",
                  disabled && "cursor-not-allowed"
                )}
                onClick={() => !disabled && onSelectDate(date)}
              >
                <span className={isSelected ? "sr-only" : undefined}>
                  {format(date, 'd')}
                </span>
                {isSelected && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </span>
                )}
              </Button>
            )
          })}
        </div>
      </Card>
      
      {/* Selected date display */}
      {selectedDate && (
        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">Selected date:</p>
          <p className="text-lg font-medium flex items-center justify-center gap-2">
            <CalendarIcon className="h-5 w-5 text-primary" />
            {format(selectedDate, 'EEEE, MMMM d, yyyy')}
          </p>
        </div>
      )}
    </div>
  )
}