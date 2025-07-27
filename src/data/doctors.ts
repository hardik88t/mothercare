import { Doctor } from '@/types';

export const doctors: Doctor[] = [
  {
    id: 'dr-sarah-johnson',
    name: 'Dr. Sarah Johnson',
    title: 'Chief Gynecologist & Obstetrician',
    specialties: [
      'High-Risk Pregnancy',
      'Minimally Invasive Surgery',
      'Reproductive Endocrinology'
    ],
    experience: '15 years experience',
    education: [
      'MD - Harvard Medical School',
      'Residency - Johns Hopkins Hospital',
      'Fellowship - Mayo Clinic'
    ],
    certifications: [
      'Board Certified in Obstetrics & Gynecology',
      'Fellow of American College of Obstetricians and Gynecologists',
      'Certified in Reproductive Endocrinology'
    ],
    image: '/images/doctors/dr-sarah-johnson.jpg',
    availability: {
      monday: ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'],
      tuesday: ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'],
      wednesday: ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'],
      thursday: ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'],
      friday: ['9:00 AM', '10:00 AM', '11:00 AM'],
      saturday: ['9:00 AM', '10:00 AM'],
      sunday: []
    }
  },
  {
    id: 'dr-michael-chen',
    name: 'Dr. Michael Chen',
    title: 'Senior Laparoscopic Surgeon',
    specialties: [
      'Laparoscopic Surgery',
      'Endometriosis Treatment',
      'Fibroid Management'
    ],
    experience: '12 years experience',
    education: [
      'MD - Stanford University School of Medicine',
      'Residency - UCSF Medical Center',
      'Fellowship - Cleveland Clinic'
    ],
    certifications: [
      'Board Certified in Obstetrics & Gynecology',
      'Advanced Laparoscopic Surgery Certification',
      'Minimally Invasive Gynecologic Surgery Fellowship'
    ],
    image: '/images/doctors/dr-michael-chen.jpg',
    availability: {
      monday: ['10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'],
      tuesday: ['10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'],
      wednesday: ['10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'],
      thursday: ['10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'],
      friday: ['10:00 AM', '11:00 AM', '2:00 PM'],
      saturday: ['10:00 AM', '11:00 AM'],
      sunday: []
    }
  },
  {
    id: 'dr-priya-sharma',
    name: 'Dr. Priya Sharma',
    title: 'Fertility Specialist & Reproductive Endocrinologist',
    specialties: [
      'IVF & Assisted Reproduction',
      'Fertility Preservation',
      'Reproductive Endocrinology'
    ],
    experience: '10 years experience',
    education: [
      'MD - University of Pennsylvania School of Medicine',
      'Residency - Northwestern Memorial Hospital',
      'Fellowship - Cornell Center for Reproductive Medicine'
    ],
    certifications: [
      'Board Certified in Obstetrics & Gynecology',
      'Board Certified in Reproductive Endocrinology',
      'Society for Assisted Reproductive Technology Member'
    ],
    image: '/images/doctors/dr-priya-sharma.jpg',
    availability: {
      monday: ['9:00 AM', '10:00 AM', '2:00 PM', '3:00 PM'],
      tuesday: ['9:00 AM', '10:00 AM', '2:00 PM', '3:00 PM'],
      wednesday: ['9:00 AM', '10:00 AM', '2:00 PM', '3:00 PM'],
      thursday: ['9:00 AM', '10:00 AM', '2:00 PM', '3:00 PM'],
      friday: ['9:00 AM', '10:00 AM'],
      saturday: ['9:00 AM'],
      sunday: []
    }
  }
];