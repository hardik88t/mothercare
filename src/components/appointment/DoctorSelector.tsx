import React, { useState, useMemo } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Doctor, MedicalService } from '@/types'
import { cn, formatTime } from '@/lib/utils'
import { Search, Star, Clock, Calendar, ArrowLeft } from 'lucide-react'
import Image from 'next/image'

interface DoctorSelectorProps {
  doctors: Doctor[]
  selectedDoctorId: string | undefined
  selectedService: MedicalService | undefined
  onSelectDoctor: (doctorId: string) => void
  onContinue: () => void
  onBack: () => void
}

export function DoctorSelector({
  doctors,
  selectedDoctorId,
  selectedService,
  onSelectDoctor,
  onContinue,
  onBack
}: DoctorSelectorProps) {
  // State for search
  const [searchQuery, setSearchQuery] = useState('')
  
  // Filter doctors based on search query and selected service
  const filteredDoctors = useMemo(() => {
    let filtered = doctors
    
    // Filter by service if one is selected
    if (selectedService) {
      filtered = filtered.filter(doctor => 
        doctor.specialization.some(spec => 
          spec.toLowerCase().includes(selectedService.category) ||
          selectedService.name.toLowerCase().includes(spec.toLowerCase())
        )
      )
    }
    
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(doctor => 
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.specialization.some(spec => 
          spec.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        doctor.bio.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    
    return filtered
  }, [doctors, selectedService, searchQuery])
  
  // Get today's day name
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })
  
  // Check if doctor is available today
  const isDoctorAvailableToday = (doctor: Doctor): boolean => {
    return doctor.availability.some(slot => 
      slot.day === today && slot.isAvailable
    )
  }
  
  // Get doctor's availability for today
  const getDoctorAvailabilityToday = (doctor: Doctor): string => {
    const todaySlot = doctor.availability.find(slot => 
      slot.day === today && slot.isAvailable
    )
    
    if (!todaySlot) {
      return 'Not available today'
    }
    
    return `${formatTime(todaySlot.startTime)} - ${formatTime(todaySlot.endTime)}`
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary">Select a Doctor</h2>
        <p className="text-muted-foreground mt-2">
          {selectedService 
            ? `Choose a doctor for ${selectedService.name}`
            : 'Choose a doctor for your appointment'
          }
        </p>
      </div>
      
      {/* Search controls */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <input
          type="text"
          placeholder="Search doctors by name or specialization..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      
      {/* No results message */}
      {filteredDoctors.length === 0 && (
        <div className="text-center py-12 border rounded-lg bg-muted/20">
          <p className="text-muted-foreground">No doctors found matching your criteria.</p>
          {selectedService && (
            <p className="text-sm mt-2">
              Try selecting a different service or clearing your search.
            </p>
          )}
          <Button 
            variant="link" 
            onClick={() => setSearchQuery('')}
          >
            Clear search
          </Button>
        </div>
      )}
      
      {/* Doctor cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredDoctors.map((doctor) => (
          <Card 
            key={doctor.id} 
            className={cn(
              "cursor-pointer transition-all hover:border-primary",
              selectedDoctorId === doctor.id ? "border-2 border-primary" : ""
            )}
            onClick={() => onSelectDoctor(doctor.id)}
          >
            <CardHeader className="pb-2">
              <div className="flex items-start gap-4">
                <div className="relative h-20 w-20 rounded-full overflow-hidden bg-muted">
                  {doctor.image ? (
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-primary/10 text-primary text-xl font-bold">
                      {doctor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg">{doctor.name}</CardTitle>
                  <CardDescription className="text-sm">{doctor.title}</CardDescription>
                  <div className="flex items-center mt-1 text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">{doctor.rating}</span>
                    <span className="ml-1 text-xs text-muted-foreground">({doctor.reviewCount} reviews)</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-1">
                  {doctor.specialization.slice(0, 3).map((spec, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                    >
                      {spec}
                    </span>
                  ))}
                  {doctor.specialization.length > 3 && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                      +{doctor.specialization.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span className={cn(
                    isDoctorAvailableToday(doctor) ? "text-green-600" : "text-muted-foreground"
                  )}>
                    {getDoctorAvailabilityToday(doctor)}
                  </span>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    {doctor.experience} years experience
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={(e) => {
                  e.stopPropagation()
                  onSelectDoctor(doctor.id)
                  onContinue()
                }}
              >
                Select & Continue
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {/* Navigation buttons */}
      <div className="flex justify-between mt-8">
        <Button 
          variant="outline" 
          onClick={onBack}
          className="flex items-center"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Services
        </Button>
        <Button 
          onClick={onContinue} 
          disabled={!selectedDoctorId}
          className="px-8"
        >
          Continue
        </Button>
      </div>
    </div>
  )
}