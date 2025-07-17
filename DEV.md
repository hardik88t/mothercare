# Development Guide

## 📋 Overview

This guide covers:
- **Project Manager Integration** - How to connect and interact with the central project management system
- **General Coding Practices** - Universal best practices for all projects
- **Documentation Maintenance** - How to keep DEV.md, PLAN.md, and DEVLOG.md updated

**⚠️ Important**: Update this DEV.md file regularly as your project evolves. Add project-specific practices, tools, and workflows that are unique to your tech stack.

## 🔗 Project Manager Integration

### Database Schema (Key Tables)

**Projects Table:**
```sql
- id (UUID, primary key)
- name (string, required)
- type (WEBAPP/WEBSITE/CLI/API/MOBILE/DESKTOP/etc.)
- status (PLANNING/ACTIVE/COMPLETED/ON_HOLD/ARCHIVED)
- priority (LOW/MEDIUM/HIGH/URGENT)
- briefDescription (text)
- detailedDescription (text, optional)
- liveUrl, githubUrl, localPath (strings, optional)
- techStack, tags (JSON arrays as strings)
- createdAt, updatedAt (timestamps)
```

**ProjectItem Table:**
```sql
- id (UUID, primary key)
- projectId (UUID, foreign key)
- name (string, required)
- description (text, optional)
- type (FEATURE/BUG/IMPROVEMENT/TASK/RESEARCH/DOCUMENTATION)
- status (TODO/IN_PROGRESS/COMPLETED/BLOCKED/CANCELLED)
- priority (LOW/MEDIUM/HIGH/URGENT)
- labels (JSON array as string)
- createdAt, updatedAt (timestamps)
```

### Connection Setup

**Local Development:**
```bash
# Set environment variable
export PROJECT_MANAGER_DB="file:../project-manager/prisma/dev.db"
# Or relative to your project location
export PROJECT_MANAGER_DB="file:/path/to/project-manager/prisma/dev.db"
```

**Production:**
```bash
# For hosted database
export PROJECT_MANAGER_DB="postgresql://user:pass@host:port/db"
# Or MySQL
export PROJECT_MANAGER_DB="mysql://user:pass@host:port/db"
```

### Common Operations

**Query Your Project's Tasks:**
```bash
# Get all tasks for your project
sqlite3 $PROJECT_MANAGER_DB "
  SELECT pi.name, pi.type, pi.status, pi.priority, pi.description 
  FROM ProjectItem pi 
  JOIN Project p ON pi.projectId = p.id 
  WHERE p.name = 'YOUR_PROJECT_NAME' 
  ORDER BY pi.priority DESC, pi.createdAt ASC;
"

# Get high-priority TODO items
sqlite3 $PROJECT_MANAGER_DB "
  SELECT pi.name, pi.description, pi.priority 
  FROM ProjectItem pi 
  JOIN Project p ON pi.projectId = p.id 
  WHERE p.name = 'YOUR_PROJECT_NAME' 
  AND pi.priority IN ('HIGH', 'URGENT') 
  AND pi.status = 'TODO';
"
```

**Update Task Status:**
```bash
# Mark task as completed
sqlite3 $PROJECT_MANAGER_DB "
  UPDATE ProjectItem 
  SET status='COMPLETED', updatedAt=datetime('now') 
  WHERE name='TASK_NAME' 
  AND projectId=(SELECT id FROM Project WHERE name='YOUR_PROJECT_NAME');
"

# Mark task as in progress
sqlite3 $PROJECT_MANAGER_DB "
  UPDATE ProjectItem 
  SET status='IN_PROGRESS', updatedAt=datetime('now') 
  WHERE name='TASK_NAME' 
  AND projectId=(SELECT id FROM Project WHERE name='YOUR_PROJECT_NAME');
"
```

**Add New Tasks:**
```bash
# Add a new feature
sqlite3 $PROJECT_MANAGER_DB "
  INSERT INTO ProjectItem (id, projectId, name, description, type, status, priority, labels, createdAt, updatedAt)
  VALUES (
    lower(hex(randomblob(16))),
    (SELECT id FROM Project WHERE name='YOUR_PROJECT_NAME'),
    'New Feature Name',
    'Feature description',
    'FEATURE',
    'TODO',
    'MEDIUM',
    '[]',
    datetime('now'),
    datetime('now')
  );
"
```

### MCP Server Integration (Future)

When the Project Manager MCP server is available, you'll be able to use AI tools directly:
- AI assistants can query your project tasks
- Automatic status updates when you complete work
- Better integration with development workflow

## 🛠️ General Coding Practices

### Git Workflow
- **Commit regularly** - Don't let changes pile up
- **Use conventional commits** - `feat:`, `fix:`, `docs:`, `refactor:`, etc.
- **Write meaningful commit messages** - Explain what and why, not just what
- **Create branches for features** - Don't work directly on main
- **Tag releases** - Use semantic versioning (v1.0.0, v1.1.0, etc.)

```bash
# Good commit examples
git commit -m "feat: add user authentication with JWT"
git commit -m "fix: resolve database connection timeout issue"
git commit -m "docs: update API documentation for new endpoints"
```

### Security Best Practices
- **Never commit secrets** - Use .env files for sensitive data
- **Add .env to .gitignore** - But include .env.example
- **Use environment variables** - For API keys, database URLs, etc.
- **Validate all inputs** - Sanitize user data
- **Keep dependencies updated** - Regular security updates
- **Use HTTPS everywhere** - Especially in production

```bash
# .env.example
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
API_KEY=your_api_key_here
JWT_SECRET=your_jwt_secret_here
```

### Code Quality
- **Use linting tools** - ESLint, Prettier, etc.
- **Write tests** - Unit tests, integration tests
- **Document your code** - Comments for complex logic
- **Follow naming conventions** - Consistent and descriptive names
- **Keep functions small** - Single responsibility principle
- **Handle errors properly** - Don't ignore exceptions

### Versioning & Releases
- **Use semantic versioning** - MAJOR.MINOR.PATCH
- **Tag releases in git** - `git tag v1.0.0`
- **Maintain a CHANGELOG** - Document what changed
- **Test before releasing** - Don't break production
- **Backup before major changes** - Safety first

### Documentation Standards
- **Keep README.md current** - Update as features change
- **Document API endpoints** - If you have an API
- **Include setup instructions** - For new developers
- **Add troubleshooting section** - Common issues and solutions

## 📝 Documentation Maintenance

### When to Update DEV.md
- **Add new tools or dependencies** - Document setup and usage
- **Change development workflow** - Update processes
- **Add project-specific practices** - Customize for your tech stack
- **Discover new best practices** - Share knowledge

### When to Update PLAN.md
- **Add new features** - Document what you plan to build
- **Change priorities** - Update what's important
- **Complete milestones** - Mark progress
- **Discover new requirements** - Add to backlog

### When to Update DEVLOG.md
- **Complete significant work** - Document what was done
- **Make important decisions** - Record reasoning
- **Solve difficult problems** - Share solutions
- **Learn something new** - Document insights

## 🎯 MotherCare Project-Specific Practices

### Next.js + Healthcare Website Specific Practices
- **Use TypeScript** for type safety in medical data handling
- **Follow Next.js 14 App Router** conventions for file-based routing
- **Use shadcn/ui components** for consistent, accessible medical UI
- **Implement proper SEO** with medical-specific metadata and structured data
- **Healthcare accessibility** - WCAG 2.1 AA compliance for medical websites
- **Performance optimization** - Fast loading for emergency/urgent inquiries
- **Mobile-first approach** - Patients often access on mobile devices
- **Trust signals** - Prominent display of credentials and certifications

### Development Environment Setup
```bash
# Required Node.js version
node --version  # Should be 18.0.0 or higher

# Install dependencies
npm install

# Environment variables needed (.env.local)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_api_key
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id

# Development server
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

### Healthcare-Specific Code Style Guidelines

**File Organization:**
```
src/
├── app/                    # Next.js 14 App Router pages
│   ├── (pages)/           # Route groups for main pages
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   ├── forms/            # Form components
│   ├── sections/         # Page sections
│   └── layout/           # Layout components
├── lib/                  # Utility functions
├── types/                # TypeScript type definitions
├── data/                 # Static data (doctors, services)
└── public/               # Static assets
```

**Naming Conventions:**
- **Components**: PascalCase (`DoctorProfile.tsx`)
- **Pages**: lowercase with hyphens (`appointment-booking`)
- **Utilities**: camelCase (`formatPhoneNumber`)
- **Constants**: UPPER_SNAKE_CASE (`MEDICAL_SERVICES`)
- **Types**: PascalCase with descriptive names (`DoctorProfileData`)

**Medical Content Guidelines:**
- **Accuracy**: All medical information must be reviewed and accurate
- **Accessibility**: Use semantic HTML and ARIA labels
- **Readability**: Medical jargon should be explained or avoided
- **Trust**: Include credentials, certifications, and contact information
- **Emergency**: Emergency contact should be easily accessible

### Healthcare Website Testing Strategy
```bash
# Unit testing with Jest and React Testing Library
npm run test              # Run unit tests
npm run test:watch        # Watch mode for development
npm run test:coverage     # Generate coverage report

# E2E testing with Playwright (when implemented)
npm run test:e2e          # Run end-to-end tests
npm run test:e2e:ui       # Run E2E tests with UI

# Accessibility testing
npm run test:a11y         # Run accessibility tests
```

**Testing Priorities:**
- **Appointment booking flow** - Critical user journey
- **Contact forms** - Essential for patient communication
- **Mobile responsiveness** - Majority of healthcare searches are mobile
- **Accessibility compliance** - Legal requirement for healthcare websites
- **Performance** - Fast loading for emergency situations

### Healthcare Website Deployment Process
```bash
# Build process
npm run build             # Create production build
npm run export            # Static export (if needed)

# Vercel deployment (recommended for Next.js)
vercel                    # Deploy to preview
vercel --prod            # Deploy to production

# Environment setup for production
NEXT_PUBLIC_SITE_URL=https://mothercare.com
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=production_key
NEXT_PUBLIC_ANALYTICS_ID=production_analytics_id
```

**Deployment Checklist:**
- [ ] Medical content accuracy verified
- [ ] Contact information updated
- [ ] Emergency numbers tested
- [ ] SSL certificate active
- [ ] Performance optimized
- [ ] Accessibility tested
- [ ] SEO metadata complete
- [ ] Analytics tracking active

### Healthcare-Specific Security Considerations
- **HIPAA Compliance**: No patient data storage without proper safeguards
- **SSL/TLS**: Always use HTTPS for medical websites
- **Form Security**: Sanitize all form inputs, especially contact forms
- **Privacy Policy**: Clear privacy policy for healthcare data
- **Contact Security**: Secure handling of appointment requests
- **Emergency Access**: Ensure emergency contact always works

---

**Remember**: This DEV.md file should evolve with your project. Keep it updated and relevant to your current development practices!
