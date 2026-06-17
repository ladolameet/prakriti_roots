# Prakriti Roots - Premium Handcrafted Ayurvedic Soaps Website

A production-ready Next.js 16 website for Prakriti Roots, featuring a premium light-theme design with product-themed color schemes, smooth animations, and full responsiveness.

## 🎨 Features

### Design & UX
- **Light Theme by Default**: Clean, modern light theme with proper contrast ratios
- **Product-Specific Styling**: Each soap card features themed background colors matching the product (Orange, Green, Maroon, Brown, etc.)
- **Smooth Animations**: Framer Motion animations throughout for engaging interactions
- **Responsive Design**: Fully mobile-optimized with device-specific breakpoints
- **Masonry Gallery**: Beautiful image gallery with hover effects and rounded corners

### Performance
- Next.js 16 with Turbopack (production-ready)
- Static site generation (SSG) for fast load times
- Image optimization with Next.js Image component
- SEO-optimized metadata and structured data
- sitemap.xml and robots.txt included

### Business Features
- 5 Product collection cards with:
  - Product images
  - Detailed descriptions and benefits
  - Pricing
  - Direct WhatsApp ordering links
- Gallery section showcasing products
- Contact section with WhatsApp and Instagram integration
- Floating WhatsApp button for easy ordering
- Bulk order CTA
- Instagram follow button

## 📁 Project Structure

```
├── app/
│   ├── globals.css              # Theme colors, fonts, and styles
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Main page
│   └── sitemap.ts               # XML sitemap generation
├── components/
│   ├── navigation.tsx           # Sticky navigation bar
│   ├── hero.tsx                 # Hero section
│   ├── about.tsx                # About/why choose section
│   ├── collection.tsx           # Product collection
│   ├── gallery.tsx              # Image gallery
│   ├── contact.tsx              # Contact/CTA section
│   ├── footer.tsx               # Footer
│   └── floating-whatsapp.tsx    # Floating WhatsApp button
├── public/
│   ├── images/                  # Product images
│   ├── robots.txt               # SEO robots
│   └── icon.svg                 # Favicon
└── package.json                 # Dependencies
```

## 🎨 Color Palette

- **Primary (Green)**: #1F4D3A - Main brand color for buttons, text
- **Secondary (Gold)**: #B89B5E - Accent color
- **Background**: #FFFFFF - Clean white background
- **Foreground**: #1F4D3A - Text color

### Product Colors
- **Manjishtha (Maroon)**: #A85C4A background, #F5E6E0 light bg
- **Datan (Brown)**: #8B7355 background, #F4EBE3 light bg
- **Orange**: #E89A3C background, #FFF3E0 light bg
- **Palash (Deep Red)**: #8B3A3A background, #F8E3E3 light bg
- **Neem Alovera (Forest Green)**: #2D5A3D background, #E8F2EA light bg

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- pnpm (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd prakriti-roots

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
# Build the project
pnpm build

# Start production server
pnpm start
```

## 📦 Dependencies

- **Next.js 16**: React framework with App Router
- **React 19**: UI library
- **Framer Motion**: Animation library
- **Tailwind CSS 4.2**: Utility-first CSS framework
- **TypeScript**: Type safety

## 🎯 Key Sections

### Hero Section
- Welcome message with brand tagline
- Dual CTAs: "Order on WhatsApp" and "Explore Collection"
- Trust indicators for credibility
- Background image with animated decorative elements

### About Section
- Three core value propositions
- Visual icons for each benefit
- Company mission statement

### Collection Section
- 5 product cards with:
  - Product-themed background colors
  - Benefits listed with custom bullet points
  - Pricing in product color
  - Product images centered on light backgrounds
  - Color-matched order buttons

### Gallery Section
- Masonry layout (4-column grid with variable sizing)
- Hover effects with green overlay
- Responsive breakdowns for mobile

### Contact Section
- WhatsApp contact with direct link
- Instagram follow-up
- Bulk order inquiry support

### Footer
- Brand information
- Quick links
- Contact details
- Copyright with dynamic year

## 🔧 Customization

### Update Product Information
Edit `/components/collection.tsx` to modify:
- Product names and descriptions
- Pricing
- Benefits
- Images
- Product theme colors (bgColor, lightBg)

### Update Contact Information
Update WhatsApp number throughout:
- Replace `+919265509299` with your WhatsApp number
- Update Instagram handle in contact section

### Modify Colors
Update `/app/globals.css` `:root` section:
- Change `--primary: #1F4D3A` for brand color
- Change `--secondary: #B89B5E` for accent color
- Update product-specific colors in collection component

### Change Fonts
Update `layout.tsx`:
- Google Fonts: Playfair Display (headings), Inter (body)
- Modify `@font-face` imports in globals.css

## 📱 Responsive Breakpoints

- **Mobile**: 375px - 640px
- **Tablet**: 641px - 1024px  
- **Desktop**: 1025px+

## ⚡ Performance Optimizations

- Static generation for instant page loads
- Image optimization with Next.js Image
- Lazy loading for images and components
- CSS-in-JS with Tailwind for minimal bundle
- No external HTTP requests (except fonts)

## 🔐 SEO & Meta

- Fully optimized metadata
- Open Graph tags for social sharing
- Twitter Card support
- Sitemap.xml auto-generated
- robots.txt for search engines
- Structured schema-ready

## 📞 Contact & Support

- **WhatsApp**: Direct link in navigation and CTAs
- **Instagram**: @prakritiroots.co
- **Email**: Can be added to footer

## 📝 License

This project is proprietary to Prakriti Roots. All rights reserved.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
# Login to Vercel
vercel login

# Deploy
vercel

# For production
vercel --prod
```

### Deploy to Other Platforms

The site can be deployed to any Node.js hosting:
- AWS Amplify
- Netlify
- Render
- Railway
- DigitalOcean App Platform

## 📊 Analytics & Monitoring

To add analytics:
1. Vercel Analytics (built-in support)
2. Google Analytics (add to layout.tsx)
3. Hotjar for heatmaps
4. Sentry for error tracking

## ✅ Pre-Launch Checklist

- [ ] Update WhatsApp number
- [ ] Update product information and prices
- [ ] Update Instagram handle
- [ ] Add favicon and app icons
- [ ] Set up Google Analytics
- [ ] Configure custom domain
- [ ] Test all links and CTAs
- [ ] Test mobile responsiveness
- [ ] Verify images load correctly
- [ ] Set up SSL certificate
- [ ] Monitor Core Web Vitals

---

**Built with ❤️ for Prakriti Roots**
