import React, { useState, useMemo } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MedicalService, ServiceCategory } from '@/types'
import { cn } from '@/lib/utils'
import { Search } from 'lucide-react'

interface ServiceSelectorProps {
  services: MedicalService[]
  selectedServiceId: string | undefined
  onSelectService: (serviceId: string) => void
  onContinue: () => void
}

export function ServiceSelector({
  services,
  selectedServiceId,
  onSelectService,
  onContinue
}: ServiceSelectorProps) {
  // State for search and filter
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'all'>('all')
  
  // Filter services based on search query and selected category
  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesSearch = 
        searchQuery === '' || 
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [services, searchQuery, selectedCategory])
  
  // Group filtered services by category
  const servicesByCategory = useMemo(() => {
    return filteredServices.reduce<Record<string, MedicalService[]>>((acc, service) => {
      if (!acc[service.category]) {
        acc[service.category] = []
      }
      acc[service.category].push(service)
      return acc
    }, {})
  }, [filteredServices])

  // Format category name for display
  const formatCategoryName = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1)
  }
  
  // Get all unique categories from services
  const allCategories = useMemo(() => {
    return Array.from(new Set(services.map(service => service.category)))
  }, [services])

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary">Select a Service</h2>
        <p className="text-muted-foreground mt-2">
          Choose the service you would like to book an appointment for
        </p>
      </div>
      
      {/* Search and filter controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input
            type="text"
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory('all')}
            className="whitespace-nowrap"
          >
            All Services
          </Button>
          {allCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="whitespace-nowrap"
            >
              {formatCategoryName(category)}
            </Button>
          ))}
        </div>
      </div>
      
      {/* No results message */}
      {Object.keys(servicesByCategory).length === 0 && (
        <div className="text-center py-12 border rounded-lg bg-muted/20">
          <p className="text-muted-foreground">No services found matching your search criteria.</p>
          <Button 
            variant="link" 
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
          >
            Clear filters
          </Button>
        </div>
      )}

      {Object.entries(servicesByCategory).map(([category, categoryServices]) => (
        <div key={category} className="space-y-4">
          <h3 className="text-xl font-semibold text-primary">{formatCategoryName(category)}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryServices.map((service) => (
              <Card 
                key={service.id} 
                className={cn(
                  "cursor-pointer transition-all hover:border-primary",
                  selectedServiceId === service.id ? "border-2 border-primary" : ""
                )}
                onClick={() => onSelectService(service.id)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {/* Replace with actual icon component based on service.icon */}
                    <span className="text-primary">{service.icon}</span>
                    {service.name}
                  </CardTitle>
                  <CardDescription>{service.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Duration: {service.duration}</p>
                  {service.isEmergency && (
                    <p className="text-sm font-medium text-red-500 mt-2">
                      Emergency service available
                    </p>
                  )}
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation()
                      onSelectService(service.id)
                      onContinue()
                    }}
                  >
                    Select & Continue
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      ))}

      <div className="flex justify-end mt-8">
        <Button 
          onClick={onContinue} 
          disabled={!selectedServiceId}
          className="px-8"
        >
          Continue
        </Button>
      </div>
    </div>
  )
}