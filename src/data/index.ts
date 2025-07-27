// Central data exports for the healthcare website
export { practiceInfo } from './practice';
export { medicalServices } from './services';
export { doctors } from './doctors';
export { contactInfo, emergencyInfo } from './contact';

import { SiteData } from '@/types';
import { practiceInfo } from './practice';
import { medicalServices } from './services';
import { doctors } from './doctors';
import { contactInfo, emergencyInfo } from './contact';

// Complete site data object
export const siteData: SiteData = {
  practice: practiceInfo,
  services: medicalServices,
  doctors,
  contactInfo,
  emergencyInfo
};