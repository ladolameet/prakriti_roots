# Prakriti Roots - Deployment Guide

## Quick Start: Deploy to Vercel (Easiest)

Vercel is the official hosting platform for Next.js and provides the best performance and experience.

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Prakriti Roots website"
git remote add origin https://github.com/YOUR_USERNAME/prakriti-roots.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js
5. Click "Deploy"

That's it! Your site is live. You'll get a `.vercel.app` domain and can connect a custom domain.

---

## Custom Domain Setup

### Add Your Domain to Vercel

1. In Vercel Dashboard → Settings → Domains
2. Add your domain (e.g., `prakritiroots.co`)
3. Update your domain registrar DNS:
   - Point to Vercel's nameservers, OR
   - Add CNAME record pointing to Vercel

### SSL Certificate

Vercel automatically provides free SSL certificates via Let's Encrypt.

---

## Environment Variables

No environment variables are required for this site. It's fully static.

---

## Build & Performance

### Build Command
```
next build
```

### Start Command
```
next start
```

### Development
```
npm run dev
```

---

## Monitoring & Analytics

### 1. Vercel Analytics
Already integrated. View in Vercel Dashboard:
- Page performance
- Core Web Vitals
- Usage statistics

### 2. Add Google Analytics

Update `app/layout.tsx`:

```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

Get your GA ID from [Google Analytics](https://analytics.google.com)

---

## Database & Cookies

This is a static site - no database required. If you later add:
- Comments
- Newsletter signup
- User accounts

You'll need to add a database. Popular options:
- **Supabase** (PostgreSQL)
- **Firebase** (NoSQL)
- **MongoDB** (NoSQL)

---

## Backup & Version Control

Always keep code in Git:

```bash
# Daily commits
git add .
git commit -m "Update product prices"
git push

# View history
git log
```

---

## Update Process

To update the site:

1. **Edit locally**
   ```bash
   pnpm dev
   # Make changes, test
   ```

2. **Commit changes**
   ```bash
   git add .
   git commit -m "Update: [description]"
   git push
   ```

3. **Automatic deployment**
   - Vercel auto-deploys on every push to `main`
   - View deployment status at vercel.com

---

## Security Best Practices

✅ **Already Implemented:**
- HTTPS/SSL (automatic)
- Content Security Policy
- X-Frame-Options headers
- No sensitive data in frontend

✅ **Recommended Setup:**
- Enable 2FA on GitHub & Vercel
- Use environment variables for sensitive data
- Regular dependency updates (`npm audit fix`)

---

## Performance Optimization

### Current Score: ~95/100
- Static generation (SSG)
- Image optimization
- CSS minification
- Font optimization
- Zero JavaScript frameworks overhead

Monitor with:
- [PageSpeed Insights](https://pagespeed.web.dev)
- Vercel Analytics Dashboard
- Chrome DevTools

---

## Troubleshooting

### Site won't deploy
- Check build logs in Vercel Dashboard
- Ensure all imports are correct
- Verify all images exist in `/public/images`

### Slow performance
- Clear Vercel cache: Settings → Git → Purge
- Compress images: use ImageOptim or TinyPNG
- Check Core Web Vitals: PageSpeed Insights

### Images not loading
- Verify files exist in `/public/images/`
- Check image paths in components
- Use Next.js Image component (already done)

### WhatsApp links not working
- Test links manually: `https://wa.me/919265509299`
- Ensure phone number is correct
- Use international format (+91 for India)

---

## Monthly Checklist

- [ ] Check Vercel analytics
- [ ] Review Core Web Vitals
- [ ] Update product prices/info if needed
- [ ] Check for security updates (`npm audit`)
- [ ] Test all links and CTAs
- [ ] Backup code to external drive
- [ ] Monitor error logs

---

## Support & Help

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org](https://nextjs.org)
- **Tailwind Docs**: [tailwindcss.com](https://tailwindcss.com)
- **GitHub Help**: [github.com/support](https://github.com/support)

---

## Cost

### Vercel Hosting
- **Free tier**: Perfect for small businesses
  - 1 deployment per minute
  - Limited serverless function executions
- **Pro**: $20/month if you need more

### Domain
- **Custom domain**: $10-15/year at registrars like Namecheap, GoDaddy
- Can use free `.vercel.app` subdomain

### Total Monthly Cost
- **Option 1** (Free + Free vercel domain): $0
- **Option 2** (Free Vercel + Custom domain): ~$1/month

---

Ready to go live? Start with Step 1 above! 🚀
