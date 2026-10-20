# Gram Bangla Retreat — Website Redesign

A responsive, static website redesign for Gram Bangla Retreat. Built with plain HTML, CSS and JavaScript so it can be hosted on Vercel, Netlify, GitHub Pages, or a conventional web host without a build step.

## What's included
- Responsive landing page with mobile navigation
- Brand-led hero and content sections for stays, experiences, events, gallery and contact
- Gallery category filters and modal image viewer
- Scroll reveal animations with reduced-motion support
- Quick enquiry and contact form that prepare a WhatsApp message
- Click-to-call, email and WhatsApp shortcuts
- Basic SEO metadata and Open Graph tags
- Original image URLs from the existing Gram Bangla Retreat website's Wix media library

## Run locally
Open `index.html` in a browser, or run a local server from this directory:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy
### Vercel
1. Upload/push this folder to a Git repository.
2. Import the repository in Vercel.
3. Choose **Other** / static site if prompted.
4. Leave build command empty and set output directory to `.` (or use the included `vercel.json`).

### Netlify
Drag and drop this folder into Netlify Drop, or connect the Git repository. No build command is required; publish directory is `.`.

## Before production launch
- Confirm that the resort has permission to reuse all original image assets.
- Test image loading on the production domain and consider downloading/optimising owned images into a local `/assets` folder. The design currently references the original public Wix image URLs to preserve the existing imagery.
- Confirm event details, amenities, rates, capacity, booking workflow and policies with the resort team. This redesign intentionally links to the existing official pages for detailed room information and does not invent room rates.
- The enquiry form opens WhatsApp with a prefilled message; it does not store submissions. Add a backend/CRM if enquiries must be recorded.
- Configure analytics, sitemap, canonical URL, favicon and final domain before launch.
- Test all links and forms with the resort's team before replacing the current website.

## Existing details used
- Phone: +91 9836310106
- Email: booking@grambanglaretreat.com
- Address: Bibirhat Chatta Dakghar Road, Dulalpur, Khurirpole, Bishnupur II, Kolkata 700140, West Bengal
- Accommodation categories: Single Cottage Rooms, Double Cottage Rooms, Luxurious Double Rooms, Hotel Building Rooms
- Experiences and event spaces: nature / organic farming experiences, in-house restro pub, terrace lounge, banquet lawn and wedding/event enquiries

The source website remains unchanged. This folder is a standalone redesign.
