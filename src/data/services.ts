import { MedicalService } from '@/types'

export const medicalServices: MedicalService[] = [
  {
    id: 'obstetrics-maternity-care',
    name: '24x7 Obstetrics & Maternity Care',
    description: 'Comprehensive prenatal, delivery, and postnatal care with round-the-clock monitoring and support. Our experienced team ensures safe delivery and healthy outcomes for both mother and baby.',
    shortDescription: 'Complete pregnancy care from conception to delivery with 24/7 support',
    icon: 'Baby',
    category: 'obstetrics',
    features: [
      '24/7 Labor & Delivery Support',
      'High-Risk Pregnancy Management',
      'Prenatal Classes & Education',
      'Postpartum Care & Support',
      'Breastfeeding Consultation',
      'Newborn Care Services'
    ],
    duration: 'Throughout pregnancy journey',
    preparation: [
      'Regular prenatal checkups',
      'Prenatal vitamins as prescribed',
      'Healthy diet and exercise',
      'Avoid alcohol and smoking'
    ],
    aftercare: [
      'Postpartum checkups at 6 weeks',
      'Breastfeeding support',
      'Family planning counseling',
      'Mental health screening'
    ],
    isEmergency: true
  },
  {
    id: 'advanced-laparoscopy',
    name: 'Advanced Laparoscopic Surgery',
    description: 'Minimally invasive surgical procedures using advanced laparoscopic techniques for faster recovery, reduced pain, and minimal scarring. Our surgeons are experts in complex gynecological procedures.',
    shortDescription: 'Minimally invasive surgery with faster recovery and minimal scarring',
    icon: 'Scissors',
    category: 'surgery',
    features: [
      'Laparoscopic Hysterectomy',
      'Ovarian Cyst Removal',
      'Endometriosis Treatment',
      'Fibroid Removal',
      'Tubal Ligation',
      'Diagnostic Laparoscopy'
    ],
    duration: '1-3 hours depending on procedure',
    preparation: [
      'Pre-operative fasting (8-12 hours)',
      'Pre-surgical tests and clearance',
      'Stop certain medications as advised',
      'Arrange for post-op care'
    ],
    aftercare: [
      'Rest for 24-48 hours',
      'Gradual return to activities',
      'Follow-up appointment in 1-2 weeks',
      'Watch for signs of complications'
    ],
    isEmergency: false
  },
  {
    id: '3d-4d-sonography',
    name: '3D/4D Sonography & Imaging',
    description: 'State-of-the-art ultrasound imaging technology providing detailed 3D and real-time 4D images of your developing baby. Advanced diagnostic capabilities for comprehensive fetal assessment.',
    shortDescription: 'Advanced ultrasound imaging for detailed fetal assessment',
    icon: 'Monitor',
    category: 'diagnostics',
    features: [
      '3D/4D Fetal Imaging',
      'Anomaly Scanning',
      'Growth Assessment',
      'Doppler Studies',
      'Early Gender Determination',
      'Digital Image & Video Recording'
    ],
    duration: '30-45 minutes',
    preparation: [
      'Full bladder for early pregnancy scans',
      'Comfortable clothing',
      'Bring previous scan reports',
      'No special preparation for later scans'
    ],
    aftercare: [
      'No special aftercare required',
      'Results discussed immediately',
      'Digital copies provided',
      'Follow-up scans as recommended'
    ],
    isEmergency: false
  },
  {
    id: 'infertility-treatment',
    name: 'Comprehensive Infertility Treatment',
    description: 'Complete fertility evaluation and treatment including IVF, IUI, and other assisted reproductive technologies. Our fertility specialists provide personalized treatment plans with high success rates.',
    shortDescription: 'Complete fertility solutions including IVF and assisted reproduction',
    icon: 'Heart',
    category: 'fertility',
    features: [
      'Fertility Assessment & Testing',
      'IVF (In Vitro Fertilization)',
      'IUI (Intrauterine Insemination)',
      'Egg Freezing & Preservation',
      'Male Fertility Treatment',
      'Genetic Counseling'
    ],
    duration: 'Varies by treatment (weeks to months)',
    preparation: [
      'Comprehensive fertility testing',
      'Lifestyle modifications',
      'Nutritional counseling',
      'Stress management'
    ],
    aftercare: [
      'Regular monitoring during treatment',
      'Pregnancy testing and follow-up',
      'Emotional support and counseling',
      'Long-term reproductive health care'
    ],
    isEmergency: false
  },
  {
    id: 'gynecological-endoscopy',
    name: 'Gynecological Endoscopy',
    description: 'Advanced diagnostic and therapeutic endoscopic procedures including hysteroscopy and colposcopy for accurate diagnosis and treatment of gynecological conditions.',
    shortDescription: 'Advanced diagnostic procedures for accurate gynecological assessment',
    icon: 'Search',
    category: 'diagnostics',
    features: [
      'Diagnostic Hysteroscopy',
      'Operative Hysteroscopy',
      'Colposcopy & Biopsy',
      'Endometrial Assessment',
      'Polyp Removal',
      'Abnormal Bleeding Investigation'
    ],
    duration: '15-60 minutes depending on procedure',
    preparation: [
      'Schedule during specific menstrual cycle phase',
      'Pre-procedure medications if required',
      'Arrange transportation',
      'Light meal before procedure'
    ],
    aftercare: [
      'Rest for remainder of day',
      'Mild cramping is normal',
      'Follow-up as scheduled',
      'Report any heavy bleeding'
    ],
    isEmergency: false
  },
  {
    id: 'high-risk-pregnancy',
    name: 'High-Risk Pregnancy Management',
    description: 'Specialized care for pregnancies with complications or risk factors. Our maternal-fetal medicine specialists provide comprehensive monitoring and management for optimal outcomes.',
    shortDescription: 'Specialized care for complex pregnancies with risk factors',
    icon: 'Shield',
    category: 'obstetrics',
    features: [
      'Maternal-Fetal Medicine Consultation',
      'Advanced Fetal Monitoring',
      'Genetic Counseling & Testing',
      'Multiple Pregnancy Care',
      'Diabetes in Pregnancy Management',
      'Preterm Labor Prevention'
    ],
    duration: 'Throughout pregnancy with frequent monitoring',
    preparation: [
      'Detailed medical history review',
      'Specialized testing as required',
      'Multidisciplinary team coordination',
      'Patient education and counseling'
    ],
    aftercare: [
      'Continued monitoring postpartum',
      'Specialized newborn care if needed',
      'Future pregnancy counseling',
      'Long-term health planning'
    ],
    isEmergency: true
  },
  {
    id: 'routine-gynecological-care',
    name: 'Routine Gynecological Care',
    description: 'Comprehensive women\'s health services including annual exams, preventive screenings, and treatment of common gynecological conditions for optimal reproductive health.',
    shortDescription: 'Complete women\'s health checkups and preventive care',
    icon: 'Stethoscope',
    category: 'preventive',
    features: [
      'Annual Gynecological Exams',
      'Pap Smear & Cancer Screening',
      'Contraceptive Counseling',
      'Menstrual Disorder Treatment',
      'STD Testing & Treatment',
      'Menopause Management'
    ],
    duration: '30-60 minutes',
    preparation: [
      'Schedule between menstrual periods',
      'Avoid douching 24 hours before',
      'List current medications',
      'Prepare questions for discussion'
    ],
    aftercare: [
      'Follow-up for test results',
      'Schedule next annual exam',
      'Follow treatment recommendations',
      'Contact for any concerns'
    ],
    isEmergency: false
  }
]

export const getServiceById = (id: string): MedicalService | undefined => {
  return medicalServices.find(service => service.id === id)
}

export const getServicesByCategory = (category: string): MedicalService[] => {
  return medicalServices.filter(service => service.category === category)
}

export const getEmergencyServices = (): MedicalService[] => {
  return medicalServices.filter(service => service.isEmergency)
}

export const getFeaturedServices = (): MedicalService[] => {
  // Return the most important services for homepage display
  return medicalServices.slice(0, 4)
}
