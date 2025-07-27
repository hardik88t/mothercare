// Data validation functions to ensure type safety

import { MedicalService, Doctor, PatientInformation } from '@/types';

export function validateService(service: MedicalService): boolean {
  return !!(
    service.id &&
    service.name &&
    service.description &&
    service.features.length > 0 &&
    service.duration &&
    service.category &&
    service.icon
  );
}

export function validateDoctor(doctor: Doctor): boolean {
  return !!(
    doctor.id &&
    doctor.name &&
    doctor.title &&
    doctor.specialties.length > 0 &&
    doctor.experience &&
    doctor.education.length > 0 &&
    doctor.certifications.length > 0 &&
    doctor.image &&
    doctor.availability
  );
}

export function validatePatientInfo(patientInfo: Partial<PatientInformation>): string[] {
  const errors: string[] = [];

  if (!patientInfo.firstName?.trim()) {
    errors.push('First name is required');
  }

  if (!patientInfo.lastName?.trim()) {
    errors.push('Last name is required');
  }

  if (!patientInfo.email?.trim()) {
    errors.push('Email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(patientInfo.email)) {
    errors.push('Please enter a valid email address');
  }

  if (!patientInfo.phone?.trim()) {
    errors.push('Phone number is required');
  } else if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(patientInfo.phone)) {
    errors.push('Please enter a valid phone number (XXX) XXX-XXXX');
  }

  if (!patientInfo.dateOfBirth) {
    errors.push('Date of birth is required');
  }

  if (!patientInfo.reasonForVisit?.trim()) {
    errors.push('Reason for visit is required');
  }

  return errors;
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
}