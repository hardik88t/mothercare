import React, { useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Clock, ArrowLeft } from 'lucide-react'
import { TimeSlot } from '@/types/appointment'
import { formatTimeDisplay, groupSlotsByTimeOfDay } from '@/lib/utils/date-utils'
import { format } from 'date-fns'

interface TimeSlotPickerProps {
  timeSlots: TimeSlot[]
  selectedTimeSlot: TimeSlot | undefined
  onSelectTimeSlot: (timeSlot: TimeSlot) => void
  onContinue: () => void
  onBack: () => void
  selectedDate: Date | undefined
}

export function TimeSlotPicker({
  timeSlots,
  selectedTimeSlot,
  onSelectTimeSlot,
  onContinue,
  onBack,
  selectedDate
}: TimeSlotPickerProps) {
  // Group time slots by time of day
  const { morning, afternoon, evening } = useMemo(() => {
    return groupSlotsByTimeOfDay(timeSlots)
  }, [timeSlots])
  
  // Check if there are no available slots
  const noAvailableSlots = timeSlots.length === 0
  
  // Render a group of time slots
  const renderTimeSlotGroup = (slots: TimeSlot[], title: string) => {
    if (slots.length === 0) {
      return null
    }
    
    return (
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">{title}</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
          {slots.map((slot) => (
            <Button
              key={slot.id}
              variant={selectedTimeSlot?.id === slot.id ? "default" : "outline"}
              size="sm"
              className={cn(
                "h-auto py-3",
                selectedTimeSlot?.id === slot.id && "ring-2 ring-primary ring-offset-2"
              )}
              onClick={() => onSelectTimeSlot(slot)}
            >
              {formatTimeDisplay(slot.startTime)}
            </Button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-primary">Select a Time</h2>
        <p className="text-muted-foreground mt-1">
          {selectedDate 
            ? `Choose an available time slot for ${format(selectedDate, 'EEEE, MMMM d')}`
            : 'Choose a time for your appointment'
          }
        </p>
      </div>
      
      {/* Time slots */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <Clock className="h-5 w-5 mr-2 text-primary" />
            Available Time Slots
          </CardTitle>
        </CardHeader>
        <CardContent>
          {noAvailableSlots ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">
                No available time slots for the selected date.
              </p>
              <p className="text-sm mt-2">
                Please select a different date or doctor.
              </p>
            </div>
          ) : (
            <>
              {renderTimeSlotGroup(morning, 'Morning')}
              {renderTimeSlotGroup(afternoon, 'Afternoon')}
              {renderTimeSlotGroup(evening, 'Evening')}
            </>
          )}
        </CardContent>
      </Card>
      
      {/* Selected time slot display */}
      {selectedTimeSlot && (
        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">Selected time:</p>
          <p className="text-lg font-medium flex items-center justify-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            {formatTimeDisplay(selectedTimeSlot.startTime)} - {formatTimeDisplay(selectedTimeSlot.endTime)}
          </p>
        </div>
      )}
      
      {/* Navigation buttons */}
      <div className="flex justify-between mt-8">
        <Button 
          variant="outline" 
          onClick={onBack}
          className="flex items-center"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Date Selection
        </Button>
        <Button 
          onClick={onContinue} 
          disabled={!selectedTimeSlot}
          className="px-8"
        >
          Continue
        </Button>
      </div>
    </div>
  )
}