# MotherCare Hospital - Frontend Deployment on Vercel

## Quick Deploy to Vercel

### Option 1: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/MotherCareConnect)

### Option 2: Manual Deploy

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from project root**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? `Y`
   - Which scope? Choose your account
   - Link to existing project? `N`
   - What's your project's name? `mothercare-hospital`
   - In which directory is your code located? `./`

### Option 3: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect the configuration

## Configuration

The project includes:
- ✅ `vercel.json` - Vercel configuration
- ✅ `build:frontend` script - Frontend-only build
- ✅ SPA routing setup for React Router

## Features in Frontend-Only Version

✅ **Working Features:**
- Complete responsive design
- All UI components and animations
- Form validation
- Toast notifications
- Smooth scrolling navigation
- Mobile-friendly interface

📝 **Demo Mode:**
- Appointment booking shows success message (data logged to console)
- Newsletter subscription shows success message (data logged to console)
- No actual data persistence (perfect for demo/portfolio)

## Environment Variables

No environment variables needed for the frontend-only version.

## Custom Domain

After deployment, you can add a custom domain in your Vercel dashboard:
1. Go to your project dashboard
2. Click "Domains"
3. Add your custom domain

## Build Commands

- `npm run build:frontend` - Build frontend only
- `npm run dev` - Run full-stack locally
- `npm run build` - Build full-stack version

## Performance

The frontend build is optimized with:
- Vite bundling and optimization
- Asset compression
- Code splitting
- Tree shaking
- Image optimization
