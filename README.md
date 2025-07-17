# 🏥 MotherCare - Gynecologist Specialist Hospital

**A modern, professional website for MotherCare gynecologist specialist hospital, providing comprehensive women's healthcare services with a focus on trust, care, and medical expertise.**

## 📋 Project Overview

- **Type**: WEBSITE (Healthcare/Medical)
- **Tech Stack**: Next.js 14, React, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion
- **Status**: PLANNING
- **Live URL**: https://mothercare.com
- **Repository**: https://github.com/hardik88t/mothercare
- **Priority**: HIGH

## 🎯 What This Project Does

MotherCare is a comprehensive gynecologist specialist hospital website that provides women with easy access to healthcare services, doctor information, and appointment booking. The platform emphasizes trust-building, professional medical care, and patient-centered design to serve women seeking gynecological care, expectant mothers, and couples planning pregnancy.

## ✨ Key Features

- [ ] **Professional Homepage**: Hero section with caring messaging, services overview, and doctor introductions
- [ ] **Comprehensive Services**: Detailed pages for Obstetrics, Laparoscopy, 3D/4D Sonography, Infertility Treatment
- [ ] **Doctor Profiles**: Detailed credentials, specializations, experience, and patient reviews
- [ ] **Online Appointment Booking**: Calendar integration with service selection and contact preferences
- [ ] **Patient Resources**: Health tips, pregnancy care guides, and educational content
- [ ] **Testimonials System**: Patient success stories and video testimonials
- [ ] **Mobile-First Design**: Responsive, accessible design optimized for patient convenience
- [ ] **Trust Signals**: Medical accreditations, certifications, and emergency contact prominence

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- Git for version control
- Modern web browser for development
- Code editor (VS Code recommended)

### Installation
```bash
# Clone the repository
git clone https://github.com/hardik88t/mothercare.git
cd mothercare

# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Set up environment
cp .env.example .env.local
# Edit .env.local with your values

# Run the development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

### Usage
Open [http://localhost:3000](http://localhost:3000) in your browser to see the MotherCare website. The development server supports hot reloading for real-time updates during development.

## 🏗️ Architecture

**Frontend Architecture:**
- **Next.js 14** with App Router for modern React development and SSR
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** for utility-first styling with medical-appropriate design
- **shadcn/ui** for consistent, accessible UI components
- **Framer Motion** for subtle, professional animations

**Key Components:**
- **Page Components**: Homepage, Services, Doctors, Appointment, About, Contact
- **UI Components**: Header, Footer, ServiceCard, DoctorProfile, TestimonialCard
- **Form Components**: AppointmentForm, ContactForm with validation
- **Layout Components**: Responsive layouts optimized for healthcare content

## 🧪 Testing

```bash
# Run unit tests
npm run test
# or
yarn test

# Run tests in watch mode
npm run test:watch

# Run E2E tests (when implemented)
npm run test:e2e

# Check test coverage
npm run test:coverage
```

## 🚀 Deployment

**Vercel Deployment (Recommended):**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Production deployment
vercel --prod
```

**Manual Deployment:**
```bash
# Build the project
npm run build

# Start production server
npm run start
```

## 🏥 Website Structure

**9 Main Pages:**
1. **Homepage** (`/`) - Hero, services overview, doctor introductions, testimonials
2. **About Us** (`/about`) - Hospital story, values, facilities, accreditations
3. **Our Doctors** (`/doctors`) - Doctor profiles with credentials and specializations
4. **Services** (`/services`) - Comprehensive medical services offered
5. **Facilities** (`/facilities`) - Modern equipment and patient amenities
6. **Patient Resources** (`/resources`) - Health guides and educational content
7. **Testimonials** (`/testimonials`) - Patient success stories and reviews
8. **Appointment** (`/appointment`) - Online booking system with calendar
9. **Contact** (`/contact`) - Location, hours, emergency contact information

## 🎨 Design System

**Color Palette:**
- Primary: Medical blues (#1e40af, #3b82f6)
- Secondary: Clean whites (#ffffff, #f8fafc)
- Accent: Gentle pinks (#fce7f3, #f3e8ff)
- Success: Professional greens (#10b981, #059669)

**Typography:**
- Headings: Inter (clean, professional)
- Body: System fonts for optimal readability
- Medical content: Optimized for accessibility

## 📄 License

This project is proprietary software for MotherCare Hospital. All rights reserved.

---

## 📚 Development Documentation

For development workflow, coding practices, and project management integration, see:
- **[DEV.md](./DEV.md)** - Development guide and project manager integration
- **[PLAN.md](./PLAN.md)** - Project planning and feature tracking
- **[DEVLOG.md](./DEVLOG.md)** - Detailed development progress log
