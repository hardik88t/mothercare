// Core data models for the healthcare website

export interface PracticeInfo {
  name: string;
  tagline: string;
  description: string;
  establishedYear: number;
  certifications: string[];
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface OperatingHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface ContactDetails {
  phone: string;
  email: string;
  address: Address;
  hours: OperatingHours;
}

export interface EmergencyContact {
  phone: string;
  description: string;
  available24x7: boolean;
}

export type ServiceCategory = 
  | 'obstetrics' 
  | 'gynecology' 
  | 'fertility' 
  | 'surgery' 
  | 'diagnostics';

export interface MedicalService {
  id: string;
  name: string;
  description: string;
  features: string[];
  duration: string;
  category: ServiceCategory;
  icon: string;
}

export interface AvailabilitySchedule {
  monday: string[];
  tuesday: string[];
  wednesday: string[];
  thursday: string[];
  friday: string[];
  saturday: string[];
  sunday: string[];
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  experience: string;
  education: string[];
  certifications: string[];
  image: string;
  availability: AvailabilitySchedule;
}

export interface PatientInformation {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: Date;
  insuranceProvider?: string;
  reasonForVisit: string;
  specialRequests?: string;
}

export interface AppointmentBooking {
  service: string;
  doctor: string;
  date: Date;
  time: string;
  patientInfo: PatientInformation;
}

export interface SiteData {
  practice: PracticeInfo;
  services: MedicalService[];
  doctors: Doctor[];
  contactInfo: ContactDetails;
  emergencyInfo: EmergencyContact;
}