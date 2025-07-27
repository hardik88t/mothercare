# MotherCare Hospital - Gynecologist Specialist Website

## Overview

This is a full-stack web application for MotherCare Hospital, a gynecologist specialist facility. The application provides a comprehensive online presence with appointment booking functionality, newsletter subscriptions, and informational content about the hospital's services, doctors, and facilities.

## Recent Changes (January 2025)

### UI/UX Improvements
- Updated navigation to use hospital icon instead of full logo for better visibility
- Increased icon size to 64x64px for improved branding
- Replaced hero section image with professional female doctor image appropriate for women's healthcare
- Added favicon using hospital icon for better browser tab identification
- Integrated Google Maps embed for real location display instead of placeholder

### Form Enhancements  
- Simplified appointment booking form with optional notes field
- Updated form validation to clearly mark required vs optional fields
- Consolidated form schema validation in shared schema file
- Fixed type compatibility issues between frontend and backend form handling

### Technical Updates
- Fixed storage layer type mismatches for optional appointment notes
- Updated image sources to use reliable Unsplash URLs
- Improved accessibility with proper alt text for medical images

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend concerns:

### Frontend Architecture
- **Framework**: React with TypeScript
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful API endpoints
- **Request Validation**: Zod schemas for type-safe validation
- **Development**: In-memory storage fallback for development

## Key Components

### Database Schema (shared/schema.ts)
- **Users table**: Basic user authentication structure
- **Appointments table**: Patient appointment booking data
- **Newsletter subscriptions table**: Email subscription management
- Drizzle ORM with PostgreSQL dialect for type-safe database operations

### API Endpoints (server/routes.ts)
- `POST /api/appointments` - Create new appointment bookings
- `GET /api/appointments` - Retrieve all appointments (admin functionality)
- `POST /api/newsletter/subscribe` - Newsletter email subscriptions

### Storage Layer (server/storage.ts)
- Interface-based storage abstraction (IStorage)
- In-memory storage implementation for development (MemStorage)
- Prepared for database integration with consistent API

### Frontend Pages and Components
- **Home page**: Complete landing page with all sections
- **Navigation**: Sticky navigation with smooth scrolling
- **Hero section**: Main call-to-action with appointment booking
- **About section**: Hospital information and mission
- **Services section**: Medical services offered
- **Doctors section**: Team member profiles
- **Facilities section**: Hospital amenities and technology
- **Testimonials section**: Patient reviews
- **Health tips section**: Newsletter signup
- **Contact section**: Appointment booking form
- **Footer**: Site links and contact information

## Data Flow

1. **User Interaction**: Users interact with React components through forms and navigation
2. **Form Validation**: Client-side validation using React Hook Form + Zod schemas
3. **API Requests**: TanStack Query manages HTTP requests to Express backend
4. **Server Processing**: Express routes handle requests, validate data, and interact with storage
5. **Data Persistence**: Currently uses in-memory storage, designed for PostgreSQL integration
6. **Response Handling**: Frontend receives responses and updates UI state accordingly

## External Dependencies

### Frontend Dependencies
- **UI Components**: Extensive Radix UI component library for accessible primitives
- **Styling**: Tailwind CSS with PostCSS for processing
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts (Inter) for typography
- **Images**: Unsplash for stock photography

### Backend Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM with PostgreSQL adapter
- **Validation**: Zod for runtime type checking
- **Session Management**: connect-pg-simple for PostgreSQL session storage

### Development Dependencies
- **Build Tools**: Vite with React plugin
- **TypeScript**: Full TypeScript support across the stack
- **Development Experience**: Replit-specific plugins for enhanced development

## Deployment Strategy

### Development Environment
- Vite development server with HMR (Hot Module Replacement)
- Express server with development middleware
- In-memory storage for rapid prototyping
- Replit-specific development tooling

### Production Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: ESBuild compiles Express server to `dist/index.js`
3. **Database Setup**: Drizzle migrations run against PostgreSQL
4. **Static Serving**: Express serves built frontend assets in production

### Database Configuration
- PostgreSQL connection via DATABASE_URL environment variable
- Drizzle Kit for database migrations and schema management
- Production-ready with Neon Database serverless PostgreSQL

### Environment Configuration
- Development: NODE_ENV=development with Vite dev server
- Production: NODE_ENV=production with compiled assets
- Database: Automatic connection to provisioned PostgreSQL instance

The application is designed to be easily deployable with minimal configuration, leveraging modern tooling for both development experience and production performance.