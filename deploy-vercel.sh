#!/bin/bash

echo "🏥 MotherCare Hospital - Vercel Deployment Script"
echo "================================================"

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Build the frontend
echo "🔨 Building frontend..."
npm run build:frontend

if [ $? -eq 0 ]; then
    echo "✅ Frontend build successful!"
    
    # Deploy to Vercel
    echo "🚀 Deploying to Vercel..."
    vercel --prod
    
    echo "🎉 Deployment complete!"
    echo "📝 Your MotherCare Hospital website is now live!"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
