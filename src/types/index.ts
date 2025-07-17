// Doctor-related types
export interface Doctor {
  id: string
  name: string
  title: string
  specialization: string[]
  qualifications: string[]
  experience: number
  image: string
  bio: string
  languages: string[]
  availability: DoctorAvailability[]
  rating: number
  reviewCount: number
  consultationFee: number
}

export interface DoctorAvailability {
  day: string
  startTime: string
  endTime: string
  isAvailable: boolean
}

// Medical Services types
export interface MedicalService {
  id: string
  name: string
  description: string
  shortDescription: string
  icon: string
  category: ServiceCategory
  features: string[]
  duration: string
  preparation?: string[]
  aftercare?: string[]
  isEmergency: boolean
}

export type ServiceCategory = 
  | 'obstetrics'
  | 'gynecology'
  | 'surgery'
  | 'diagnostics'
  | 'fertility'
  | 'preventive'

// Appointment types
export interface Appointment {
  id: string
  patientName: string
  patientEmail: string
  patientPhone: string
  doctorId: string
  serviceId: string
  appointmentDate: string
  appointmentTime: string
  status: AppointmentStatus
  notes?: string
  isEmergency: boolean
  createdAt: string
  updatedAt: string
}

export type AppointmentStatus = 
  | 'scheduled'
  | 'confirmed'
  | 'completed'
  | 'cancelled'
  | 'no-show'

export interface AppointmentFormData {
  patientName: string
  patientEmail: string
  patientPhone: string
  dateOfBirth: string
  gender: 'female' | 'male' | 'other'
  doctorId: string
  serviceId: string
  preferredDate: string
  preferredTime: string
  isEmergency: boolean
  symptoms?: string
  medicalHistory?: string
  currentMedications?: string
  insuranceProvider?: string
  insuranceId?: string
  preferredContact: 'phone' | 'email'
  notes?: string
}

// Testimonial types
export interface Testimonial {
  id: string
  patientName: string
  patientInitials: string
  rating: number
  review: string
  treatmentType: string
  doctorName: string
  date: string
  isVerified: boolean
  isVideoTestimonial: boolean
  videoUrl?: string
  location?: string
}

// Facility types
export interface Facility {
  id: string
  name: string
  description: string
  image: string
  features: string[]
  category: FacilityCategory
}

export type FacilityCategory = 
  | 'operation-theater'
  | 'diagnostic'
  | 'patient-room'
  | 'emergency'
  | 'consultation'
  | 'laboratory'

// Contact and Location types
export interface ContactInfo {
  phone: string
  emergencyPhone: string
  email: string
  address: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  coordinates: {
    latitude: number
    longitude: number
  }
  hours: OperatingHours[]
}

export interface OperatingHours {
  day: string
  openTime: string
  closeTime: string
  isOpen: boolean
  isEmergencyOnly?: boolean
}

// Form types
export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  preferredContact: 'phone' | 'email'
  isUrgent: boolean
}

// Navigation types
export interface NavigationItem {
  name: string
  href: string
  description?: string
  children?: NavigationItem[]
}

// SEO and Meta types
export interface PageMeta {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  canonical?: string
  schema?: Record<string, unknown>
}

// Insurance types
export interface InsuranceProvider {
  id: string
  name: string
  isAccepted: boolean
  contactInfo?: string
  website?: string
}

// Emergency types
export interface EmergencyContact {
  type: 'primary' | 'secondary' | 'ambulance'
  name: string
  phone: string
  isAvailable24x7: boolean
  description: string
}

// Blog/Resource types (for future use)
export interface HealthResource {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: ResourceCategory
  tags: string[]
  author: string
  publishedAt: string
  updatedAt: string
  readTime: number
  image?: string
  isPublished: boolean
}

export type ResourceCategory = 
  | 'pregnancy'
  | 'womens-health'
  | 'preventive-care'
  | 'post-operative'
  | 'nutrition'
  | 'mental-health'
