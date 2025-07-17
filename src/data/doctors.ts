import { Doctor } from '@/types'

export const doctors: Doctor[] = [
  {
    id: 'dr-sarah-johnson',
    name: 'Dr. Sarah Johnson',
    title: 'Chief Gynecologist & Obstetrician',
    specialization: [
      'High-Risk Pregnancy',
      'Minimally Invasive Surgery',
      'Reproductive Endocrinology'
    ],
    qualifications: [
      'MBBS - All India Institute of Medical Sciences',
      'MD (Obstetrics & Gynecology) - AIIMS',
      'Fellowship in Reproductive Medicine - UK',
      'Diploma in Laparoscopic Surgery'
    ],
    experience: 15,
    image: '/images/doctors/dr-sarah-johnson.jpg',
    bio: 'Dr. Sarah Johnson is a highly experienced gynecologist and obstetrician with over 15 years of dedicated service in women\'s healthcare. She specializes in high-risk pregnancies and has successfully delivered over 3,000 babies. Her expertise in minimally invasive surgical techniques has helped countless women recover faster with minimal discomfort.',
    languages: ['English', 'Hindi', 'Spanish'],
    availability: [
      { day: 'Monday', startTime: '09:00', endTime: '17:00', isAvailable: true },
      { day: 'Tuesday', startTime: '09:00', endTime: '17:00', isAvailable: true },
      { day: 'Wednesday', startTime: '09:00', endTime: '17:00', isAvailable: true },
      { day: 'Thursday', startTime: '09:00', endTime: '17:00', isAvailable: true },
      { day: 'Friday', startTime: '09:00', endTime: '17:00', isAvailable: true },
      { day: 'Saturday', startTime: '09:00', endTime: '13:00', isAvailable: true },
      { day: 'Sunday', startTime: '10:00', endTime: '12:00', isAvailable: false }
    ],
    rating: 4.9,
    reviewCount: 247,
    consultationFee: 150
  },
  {
    id: 'dr-michael-chen',
    name: 'Dr. Michael Chen',
    title: 'Senior Laparoscopic Surgeon',
    specialization: [
      'Advanced Laparoscopy',
      'Endometriosis Treatment',
      'Gynecological Oncology'
    ],
    qualifications: [
      'MBBS - Johns Hopkins University',
      'MD (Gynecology) - Harvard Medical School',
      'Fellowship in Minimally Invasive Surgery',
      'Board Certified in Gynecologic Oncology'
    ],
    experience: 12,
    image: '/images/doctors/dr-michael-chen.jpg',
    bio: 'Dr. Michael Chen is a renowned laparoscopic surgeon specializing in advanced minimally invasive procedures. He has performed over 2,500 laparoscopic surgeries with exceptional success rates. His expertise in treating endometriosis and gynecological cancers has made him a trusted name in women\'s healthcare.',
    languages: ['English', 'Mandarin', 'Hindi'],
    availability: [
      { day: 'Monday', startTime: '08:00', endTime: '16:00', isAvailable: true },
      { day: 'Tuesday', startTime: '08:00', endTime: '16:00', isAvailable: true },
      { day: 'Wednesday', startTime: '08:00', endTime: '16:00', isAvailable: true },
      { day: 'Thursday', startTime: '08:00', endTime: '16:00', isAvailable: true },
      { day: 'Friday', startTime: '08:00', endTime: '16:00', isAvailable: true },
      { day: 'Saturday', startTime: '09:00', endTime: '14:00', isAvailable: true },
      { day: 'Sunday', startTime: '00:00', endTime: '00:00', isAvailable: false }
    ],
    rating: 4.8,
    reviewCount: 189,
    consultationFee: 175
  },
  {
    id: 'dr-priya-sharma',
    name: 'Dr. Priya Sharma',
    title: 'Fertility Specialist & Reproductive Endocrinologist',
    specialization: [
      'IVF & Assisted Reproduction',
      'Fertility Preservation',
      'PCOS Management',
      'Recurrent Pregnancy Loss'
    ],
    qualifications: [
      'MBBS - Lady Hardinge Medical College',
      'MD (Obstetrics & Gynecology) - AIIMS',
      'Fellowship in Reproductive Medicine - Australia',
      'Diploma in Reproductive Medicine & Embryology'
    ],
    experience: 10,
    image: '/images/doctors/dr-priya-sharma.jpg',
    bio: 'Dr. Priya Sharma is a dedicated fertility specialist with extensive experience in assisted reproductive technologies. She has helped over 1,200 couples achieve their dream of parenthood through IVF and other advanced fertility treatments. Her compassionate approach and high success rates make her a preferred choice for fertility care.',
    languages: ['English', 'Hindi', 'Punjabi'],
    availability: [
      { day: 'Monday', startTime: '10:00', endTime: '18:00', isAvailable: true },
      { day: 'Tuesday', startTime: '10:00', endTime: '18:00', isAvailable: true },
      { day: 'Wednesday', startTime: '10:00', endTime: '18:00', isAvailable: true },
      { day: 'Thursday', startTime: '10:00', endTime: '18:00', isAvailable: true },
      { day: 'Friday', startTime: '10:00', endTime: '18:00', isAvailable: true },
      { day: 'Saturday', startTime: '10:00', endTime: '15:00', isAvailable: true },
      { day: 'Sunday', startTime: '00:00', endTime: '00:00', isAvailable: false }
    ],
    rating: 4.9,
    reviewCount: 156,
    consultationFee: 200
  },
  {
    id: 'dr-amanda-rodriguez',
    name: 'Dr. Amanda Rodriguez',
    title: 'Maternal-Fetal Medicine Specialist',
    specialization: [
      'High-Risk Pregnancy',
      'Fetal Medicine',
      'Prenatal Diagnosis',
      '3D/4D Ultrasound'
    ],
    qualifications: [
      'MBBS - University of California',
      'MD (Obstetrics & Gynecology) - Stanford',
      'Fellowship in Maternal-Fetal Medicine',
      'Board Certified in Obstetrics & Gynecology'
    ],
    experience: 8,
    image: '/images/doctors/dr-amanda-rodriguez.jpg',
    bio: 'Dr. Amanda Rodriguez specializes in maternal-fetal medicine and high-risk pregnancies. Her expertise in advanced ultrasound techniques and prenatal diagnosis has helped ensure safe deliveries for mothers with complex medical conditions. She is known for her gentle approach and excellent patient communication.',
    languages: ['English', 'Spanish', 'Portuguese'],
    availability: [
      { day: 'Monday', startTime: '09:00', endTime: '17:00', isAvailable: true },
      { day: 'Tuesday', startTime: '09:00', endTime: '17:00', isAvailable: true },
      { day: 'Wednesday', startTime: '09:00', endTime: '17:00', isAvailable: true },
      { day: 'Thursday', startTime: '09:00', endTime: '17:00', isAvailable: true },
      { day: 'Friday', startTime: '09:00', endTime: '17:00', isAvailable: true },
      { day: 'Saturday', startTime: '09:00', endTime: '13:00', isAvailable: true },
      { day: 'Sunday', startTime: '00:00', endTime: '00:00', isAvailable: false }
    ],
    rating: 4.8,
    reviewCount: 134,
    consultationFee: 180
  }
]

export const getDoctorById = (id: string): Doctor | undefined => {
  return doctors.find(doctor => doctor.id === id)
}

export const getDoctorsBySpecialization = (specialization: string): Doctor[] => {
  return doctors.filter(doctor => 
    doctor.specialization.some(spec => 
      spec.toLowerCase().includes(specialization.toLowerCase())
    )
  )
}

export const getAvailableDoctors = (day: string): Doctor[] => {
  return doctors.filter(doctor => 
    doctor.availability.some(avail => 
      avail.day.toLowerCase() === day.toLowerCase() && avail.isAvailable
    )
  )
}
