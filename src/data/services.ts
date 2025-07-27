import { MedicalService } from '@/types';

export const medicalServices: MedicalService[] = [
  {
    id: 'obstetrics-maternity',
    name: '24/7 Obstetrics & Maternity Care',
    description: 'Complete pregnancy care from conception to delivery with 24/7 support',
    features: [
      'Prenatal care and monitoring',
      'High-risk pregnancy management',
      'Natural and cesarean delivery',
      'Postpartum care and support',
      '24/7 emergency obstetric services'
    ],
    duration: 'Throughout pregnancy',
    category: 'obstetrics',
    icon: 'Baby'
  },
  {
    id: 'laparoscopic-surgery',
    name: 'Advanced Laparoscopic Surgery',
    description: 'Minimally invasive surgery with faster recovery and minimal scarring',
    features: [
      'Laparoscopic hysterectomy',
      'Ovarian cyst removal',
      'Endometriosis treatment',
      'Fibroid removal',
      'Faster recovery times'
    ],
    duration: '1-3 hours',
    category: 'surgery',
    icon: 'Scissors'
  },
  {
    id: 'sonography-imaging',
    name: '3D/4D Sonography & Imaging',
    description: 'Advanced ultrasound imaging for detailed fetal assessment',
    features: [
      '3D/4D ultrasound imaging',
      'Fetal anomaly screening',
      'Growth monitoring',
      'Doppler studies',
      'Real-time imaging'
    ],
    duration: '30-45 minutes',
    category: 'diagnostics',
    icon: 'Monitor'
  },
  {
    id: 'fertility-treatment',
    name: 'Comprehensive Infertility Treatment',
    description: 'Complete fertility solutions including IVF and assisted reproduction',
    features: [
      'Fertility assessment and counseling',
      'IVF and IUI procedures',
      'Hormonal treatments',
      'Male factor infertility treatment',
      'Reproductive endocrinology'
    ],
    duration: 'Varies by treatment',
    category: 'fertility',
    icon: 'Heart'
  },
  {
    id: 'gynecology-care',
    name: 'General Gynecology Care',
    description: 'Comprehensive women\'s health services for all ages',
    features: [
      'Annual wellness exams',
      'Contraceptive counseling',
      'Menstrual disorder treatment',
      'Menopause management',
      'Preventive care screening'
    ],
    duration: '30-60 minutes',
    category: 'gynecology',
    icon: 'Stethoscope'
  },
  {
    id: 'emergency-care',
    name: '24/7 Emergency Care',
    description: 'Round-the-clock emergency services for urgent women\'s health needs',
    features: [
      '24/7 emergency availability',
      'Urgent gynecological care',
      'Emergency obstetric services',
      'On-call specialist doctors',
      'Immediate medical attention'
    ],
    duration: 'As needed',
    category: 'obstetrics',
    icon: 'Phone'
  }
];