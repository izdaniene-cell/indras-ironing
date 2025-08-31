# Indra's Ironing - Modern Website

A modern, responsive website for Indra's Ironing service, built with Next.js, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Fast Performance**: Optimized with Next.js and modern web technologies
- **SEO Optimized**: Built with SEO best practices
- **Contact Form**: Interactive contact form for customer inquiries
- **Google Maps Integration**: Embedded map showing business location
- **Smooth Animations**: Framer Motion animations for enhanced UX

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Jost, IBM Plex Sans)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd indras-ironing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

3. **Environment Variables** (if needed)
   - Add any environment variables in the Vercel dashboard
   - For Google Maps API key (if you want to use your own)

### Deploy to GitHub Pages

1. **Build the project**
   ```bash
   npm run build
   npm run export
   ```

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Build for deployment"
   git push origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages"
   - Select source branch (usually `main`)
   - Set folder to `/docs` or `/out`

## 📁 Project Structure

```
indras-ironing/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Services.tsx       # Services showcase
│   ├── Pricing.tsx        # Pricing section
│   ├── ContactForm.tsx    # Contact form
│   ├── Map.tsx            # Google Maps integration
│   ├── Footer.tsx         # Footer
│   └── ScrollToTop.tsx    # Scroll to top button
├── public/                # Static assets
│   └── images/            # Image files
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
```javascript
colors: {
  primary: '#65c6d4',
  secondary: '#ff6666',
  success: '#40b0bf',
  // ... more colors
}
```

### Content
Update the content in the respective component files:
- `components/Hero.tsx` - Main headline and call-to-action
- `components/Services.tsx` - Service offerings
- `components/Pricing.tsx` - Pricing information
- `components/ContactForm.tsx` - Contact details

### Images
Replace images in `public/images/` with your own:
- `fresh-washed-clothes.jpg` - Hero image
- `order-online.jpg` - Order service image
- `free-collection-and-delivery.jpg` - Collection service image
- `24-hour-turnaround.jpg` - Turnaround service image
- `shirts-on-hangers.jpg` - Shirts pricing image
- `mixed-ironing.jpg` - Mixed bag pricing image

## 📞 Contact Form Integration

The contact form is currently set up for demonstration. To make it functional, you can integrate with:

1. **EmailJS** - For email sending
2. **Formspree** - For form handling
3. **Your own API** - Custom backend solution

Example EmailJS integration:
```javascript
// Install: npm install @emailjs/browser
import emailjs from '@emailjs/browser';

// In your form submit handler
emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formData,
  'YOUR_PUBLIC_KEY'
);
```

## 🗺️ Google Maps

The Google Maps integration uses a public API key. For production, consider:
1. Getting your own Google Maps API key
2. Restricting the key to your domain
3. Adding the key to environment variables

## 📱 Performance Optimization

- Images are optimized with Next.js Image component
- CSS is purged with Tailwind CSS
- Code splitting with Next.js
- Lazy loading for better performance

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions, contact:
- Phone: 07515908577
- Email: bironing2018@gmail.com

---

Built with ❤️ using Next.js, React, and Tailwind CSS
