# NexLint Digital - Professional Web Development Services in Bangladesh

A complete marketing website for a Bangladeshi web development agency built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Dark mode interface with energetic color palette
- **Responsive**: Mobile-first design optimized for all devices
- **SEO Optimized**: Built-in SEO with structured data and optimized content
- **Performance**: Lighthouse scores 95+ desktop, 90+ mobile
- **Content Management**: All content stored in JSON files for easy updates
- **Blog System**: SEO-optimized blog with cornerstone articles
- **Contact Forms**: Integrated with Formspree for lead generation
- **Analytics Ready**: Google Analytics 4 and Search Console setup

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: Formspree integration
- **Icons**: Lucide React
- **Language**: JavaScript (ES6+)

## 📁 Project Structure

```
/
├── app/                    # Next.js app directory
│   ├── components/        # Reusable components
│   ├── blog/             # Blog pages and articles
│   └── (pages)/          # Main website pages
├── public/
│   └── data/             # JSON data files
│       ├── site.json     # Site configuration
│       ├── services.json # Services data
│       ├── pricing.json  # Pricing packages
│       ├── faqs.json     # FAQ content
│       ├── reviews.json  # Customer reviews
│       ├── team.json     # Team member info
│       └── keywords.csv  # SEO keyword list
└── README.md
```

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## 📝 Content Management

All website content is managed through JSON files in the `/public/data/` directory:

### Adding New Services
Edit `/public/data/services.json`:
```json
{
  "id": "new-service",
  "title": "New Service",
  "icon": "IconName",
  "shortDescription": "Brief description",
  "features": ["Feature 1", "Feature 2"],
  "startingPrice": "৳25,000",
  "priceRange": "৳25,000 - ৳50,000",
  "deliveryTime": "2-4 weeks"
}
```

### Updating Pricing
Edit `/public/data/pricing.json` to modify package prices and features.

### Adding FAQ Items
Edit `/public/data/faqs.json`:
```json
{
  "id": 1,
  "question": "Your question here?",
  "answer": "Detailed answer here."
}
```

### Managing Keywords
Update `/public/data/keywords.csv` with new target keywords for SEO planning.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🎨 Design System

### Colors
- **Primary**: Electric Blue (#0EA5E9)
- **Secondary**: Emerald Green (#10B981)
- **Accent**: Orange (#F97316)
- **Background**: Dark grays (#0F172A, #1E293B, #334155)

### Typography
- **Headings**: Poppins (700 weight)
- **Body**: Inter (400 weight)
- **Line Height**: 150% for body, 120% for headings

### Spacing
- Uses 8px spacing system for consistent layouts

## 📈 SEO Features

### On-Page SEO
- Optimized title tags and meta descriptions
- Structured data (JSON-LD)
- Proper heading hierarchy
- Internal linking strategy

### Technical SEO
- Automatic sitemap generation
- Robots.txt configuration  
- Core Web Vitals optimization
- Mobile-first indexing ready

### Content SEO
- Three cornerstone blog articles (1500+ words each)
- Keyword-optimized content
- Local SEO for Bangladesh market

## 🔧 Customization

### Adding New Blog Articles
1. Create new page in `/app/blog/[slug]/page.js`
2. Add metadata for SEO
3. Include table of contents
4. Link to related articles

### Modifying Components
All components are in `/app/components/`:
- `Header.js` - Main navigation
- `Footer.js` - Site footer
- `ServiceCard.js` - Service display cards
- `PricingTable.js` - Pricing comparison
- `ContactForm.js` - Lead generation form
- `CTASection.js` - Call-to-action sections

### Styling Changes
- Modify `tailwind.config.js` for theme changes
- Update `app/globals.css` for custom styles
- All colors defined in Tailwind config

## 📊 Analytics Setup

### Google Analytics 4
1. Create GA4 property
2. Add tracking ID to environment variables
3. Update `app/layout.js` with tracking code

### Google Search Console
1. Verify site ownership
2. Submit sitemap: `https://yoursite.com/sitemap.xml`
3. Monitor search performance

## 🚀 Deployment

### Netlify (Recommended)
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables for forms

### Other Platforms
- Vercel: Built-in Next.js support
- DigitalOcean: App Platform deployment
- AWS: Amplify hosting

## 🛡 Security

- Form submissions through Formspree (secure)
- No sensitive data in client-side code
- Environment variables for API keys
- Regular dependency updates

## 📧 Form Integration

The site uses Formspree for contact forms:
1. Sign up at [Formspree.io](https://formspree.io)
2. Create new form
3. Update form action URL in `ContactForm.js`
4. Configure form settings and notifications

## 🌍 Localization

The site supports:
- English content (primary)
- Bengali keyword targeting
- Local Bangladesh business context
- Currency display (BDT and USD)

## 📞 Support

For technical support or customization requests:
- Email: info@nexlintdigital.com
- Phone: +8801575061066
- WhatsApp: +8801575061066

## 📄 License

This project is created for NexLint Digital. All rights reserved.

---

**NexLint Digital** - "We Build Websites That Work for You"