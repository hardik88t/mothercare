import { ContactDetails, EmergencyContact } from '@/types';

export const contactInfo: ContactDetails = {
  phone: '(555) 123-4567',
  email: 'info@mothercare.com',
  address: {
    street: '123 Healthcare Ave, Medical District',
    city: 'City',
    state: 'State',
    zipCode: '12345',
    country: 'United States'
  },
  hours: {
    monday: '8:00 AM - 6:00 PM',
    tuesday: '8:00 AM - 6:00 PM',
    wednesday: '8:00 AM - 6:00 PM',
    thursday: '8:00 AM - 6:00 PM',
    friday: '8:00 AM - 5:00 PM',
    saturday: '9:00 AM - 2:00 PM',
    sunday: 'Emergency Only'
  }
};

export const emergencyInfo: EmergencyContact = {
  phone: '(555) 123-4567',
  description: 'For urgent medical situations, our emergency team is available round-the-clock',
  available24x7: true
};