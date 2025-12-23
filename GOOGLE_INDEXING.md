# Google Indexing Setup Guide

## Files Created

1. **`app/sitemap.ts`** - Generates `/sitemap.xml` automatically
2. **`app/robots.ts`** - Generates `/robots.txt` automatically

## Steps to Add Site to Google Index

### 1. Verify Your Site in Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property: `https://www.ibsglobal.pk`
3. Choose verification method:
   - **HTML tag method** (recommended):
     - Copy the verification code provided
     - Add it to `app/layout.tsx` in the `verification.google` field:
     ```typescript
     verification: {
       google: "your-verification-code-here",
     },
     ```
   - **HTML file upload**: Download the HTML file and place it in the `public` folder
   - **DNS record**: Add a TXT record to your domain

### 2. Submit Sitemap

1. After verification, go to **Sitemaps** in Google Search Console
2. Enter: `https://www.ibsglobal.pk/sitemap.xml`
3. Click **Submit**

### 3. Request Indexing (Optional)

1. Go to **URL Inspection** tool
2. Enter your homepage URL: `https://www.ibsglobal.pk`
3. Click **Request Indexing**

### 4. Monitor Indexing Status

- Check **Coverage** report to see indexed pages
- Check **Sitemaps** to verify sitemap is processed
- Review **Performance** to see search queries and impressions

## URLs Included in Sitemap

- `/` (Homepage) - Priority: 1.0
- `/about` - Priority: 0.8
- `/company` - Priority: 0.8
- `/products` - Priority: 0.9
- `/operations` - Priority: 0.7
- `/contact` - Priority: 0.8
- `/blog` - Priority: 0.7
- Blog posts - Priority: 0.6

## Automatic Updates

- Sitemap updates automatically when you deploy
- Robots.txt is accessible at `/robots.txt`
- Sitemap is accessible at `/sitemap.xml`

