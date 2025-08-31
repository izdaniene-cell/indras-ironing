# Deployment Guide

This guide will walk you through deploying your Indra's Ironing website to GitHub and Vercel.

## 🚀 Quick Deploy to Vercel

### Step 1: Prepare Your Repository

1. **Initialize Git** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Modern ironing website"
   ```

2. **Create GitHub Repository**
   - Go to [GitHub.com](https://github.com)
   - Click "New repository"
   - Name it `indras-ironing` or similar
   - Make it public or private (your choice)
   - Don't initialize with README (we already have one)

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/indras-ironing.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account

2. **Import Project**
   - Click "New Project"
   - Select "Import Git Repository"
   - Choose your `indras-ironing` repository
   - Vercel will automatically detect it's a Next.js project

3. **Configure Project**
   - Project Name: `indras-ironing` (or your preferred name)
   - Framework Preset: Next.js (should be auto-detected)
   - Root Directory: `./` (leave as default)
   - Build Command: `npm run build` (should be auto-detected)
   - Output Directory: `.next` (should be auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 2-3 minutes)
   - Your site will be live at `https://your-project-name.vercel.app`

### Step 3: Custom Domain (Optional)

1. **Add Custom Domain**
   - In your Vercel dashboard, go to "Settings" → "Domains"
   - Add your domain (e.g., `indrasironing.co.uk`)
   - Follow Vercel's DNS configuration instructions

2. **Configure DNS**
   - Add the required DNS records to your domain provider
   - Usually involves adding CNAME records pointing to Vercel

## 🔧 Manual Deployment Steps

### Alternative: Deploy to GitHub Pages

1. **Build the Project**
   ```bash
   npm run build
   npm run export
   ```

2. **Configure GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages"
   - Source: "Deploy from a branch"
   - Branch: `main`
   - Folder: `/out`

3. **Push Changes**
   ```bash
   git add .
   git commit -m "Build for GitHub Pages"
   git push
   ```

## 📧 Contact Form Setup

The contact form currently shows a success message but doesn't actually send emails. To make it functional:

### Option 1: EmailJS (Recommended)

1. **Sign up for EmailJS**
   - Go to [emailjs.com](https://emailjs.com)
   - Create a free account

2. **Install EmailJS**
   ```bash
   npm install @emailjs/browser
   ```

3. **Configure EmailJS**
   - Create an email service (Gmail, Outlook, etc.)
   - Create an email template
   - Get your service ID, template ID, and public key

4. **Update ContactForm.tsx**
   ```javascript
   import emailjs from '@emailjs/browser';

   // In your handleSubmit function:
   const result = await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     {
       from_name: formData.name,
       from_phone: formData.phone,
       message: formData.message,
     },
     'YOUR_PUBLIC_KEY'
   );
   ```

### Option 2: Formspree

1. **Sign up for Formspree**
   - Go to [formspree.io](https://formspree.io)
   - Create a free account

2. **Create a Form**
   - Create a new form
   - Get your form endpoint URL

3. **Update ContactForm.tsx**
   ```javascript
   // Change the form action to:
   action="https://formspree.io/f/YOUR_FORM_ID"
   method="POST"
   ```

## 🗺️ Google Maps Configuration

The current Google Maps integration uses a public API key. For production:

1. **Get Your Own API Key**
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project
   - Enable Maps JavaScript API
   - Create credentials (API key)

2. **Restrict the API Key**
   - Restrict to your domain only
   - Add your Vercel domain to allowed referrers

3. **Add to Environment Variables**
   - In Vercel dashboard: Settings → Environment Variables
   - Add `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
   - Update the Map component to use this environment variable

## 🔍 SEO Optimization

1. **Update Metadata**
   - Edit `app/layout.tsx` to include your specific meta tags
   - Add Open Graph images
   - Include structured data

2. **Add Google Analytics**
   - Sign up for Google Analytics
   - Add the tracking code to your layout

3. **Submit to Search Engines**
   - Submit your sitemap to Google Search Console
   - Submit to Bing Webmaster Tools

## 📱 Performance Monitoring

1. **Vercel Analytics**
   - Enable Vercel Analytics in your dashboard
   - Monitor Core Web Vitals

2. **Lighthouse Testing**
   - Run Lighthouse audits regularly
   - Monitor performance scores

## 🔒 Security Considerations

1. **Environment Variables**
   - Never commit API keys to Git
   - Use Vercel's environment variables

2. **Content Security Policy**
   - Add CSP headers in `vercel.json`
   - Restrict external resources

3. **HTTPS**
   - Vercel provides HTTPS by default
   - Ensure all external resources use HTTPS

## 🚨 Troubleshooting

### Common Issues

1. **Build Fails**
   - Check for TypeScript errors
   - Ensure all dependencies are installed
   - Check console for specific error messages

2. **Images Not Loading**
   - Ensure images are in `public/images/`
   - Check file paths in components
   - Verify image file names match exactly

3. **Contact Form Not Working**
   - Check browser console for errors
   - Verify EmailJS/Formspree configuration
   - Test with a simple form first

4. **Google Maps Not Loading**
   - Check API key restrictions
   - Verify domain is allowed
   - Check browser console for errors

### Getting Help

- Check the [Next.js documentation](https://nextjs.org/docs)
- Visit [Vercel documentation](https://vercel.com/docs)
- Check the [README.md](./README.md) for more details

## 🎉 Success!

Once deployed, your website will be:
- ✅ Fast and responsive
- ✅ SEO optimized
- ✅ Mobile-friendly
- ✅ Professional looking
- ✅ Easy to maintain and update

Your customers can now easily find and contact you for ironing services!
