# 🏥 MotherCare - Gynecologist Specialist Hospital

**A clean, professional website for MotherCare gynecologist specialist hospital, focusing on essential information and easy patient contact.**

## 📋 Project Overview

- **Type**: WEBSITE (Healthcare/Medical)
- **Tech Stack**: Next.js 14, React, TypeScript, Tailwind CSS, shadcn/ui
- **Status**: PLANNING
- **Timeline**: 2-3 weeks for MVP
- **Priority**: HIGH

## 🎯 What This Project Does

MotherCare is a simple, focused website that helps women find essential healthcare information and easily contact the hospital. The site emphasizes trust, clear information, and straightforward communication for women seeking gynecological care.

## ✨ Features & Progress

### 🚧 Planned
- [ ] **Homepage**: Hero section, services overview, doctor info, contact details
- [ ] **Services Page**: Obstetrics, Gynecology, Laparoscopy, Infertility services
- [ ] **Contact Page**: Location, hours, phone, contact form with email integration
- [ ] **Mobile Design**: Responsive layout optimized for mobile users
- [ ] **Professional Design**: Clean medical styling with trust signals

### ✅ Completed
- [x] **Project Setup**: Documentation and planning completed

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
- **Next.js 14** with App Router for modern React development
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** for utility-first styling with medical-appropriate design
- **shadcn/ui** for consistent, accessible UI components

**Key Components:**
- **Page Components**: Homepage, Services, Contact
- **UI Components**: Header, Footer, ServiceCard, ContactForm
- **Layout Components**: Simple, responsive layouts for healthcare content

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

**3 Main Pages:**
1. **Homepage** (`/`) - Hero section, services overview, doctor info, contact details
2. **Services** (`/services`) - Key medical services offered
3. **Contact** (`/contact`) - Location, hours, phone, contact form

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


