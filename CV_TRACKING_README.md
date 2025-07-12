# CV Tracking System

This system allows you to track CV views and downloads across different platforms and sources. It provides detailed analytics about who is viewing and downloading your CV.

## Features

- **Automatic View Tracking**: Tracks when someone views your CV section
- **Download Tracking**: Tracks when someone clicks the download button
- **Source Detection**: Automatically detects traffic sources (LinkedIn, GitHub, Twitter, etc.)
- **IP Address Tracking**: Captures visitor IP addresses for analytics
- **Real-time Analytics**: Live dashboard showing CV statistics
- **Conversion Rate**: Calculates view-to-download conversion rate

## How It Works

### 1. View Tracking
- Uses Intersection Observer API to detect when the CV section comes into view
- Tracks only once per session to avoid duplicate counts
- Automatically detects the traffic source (referrer)

### 2. Download Tracking
- Tracks when users click the "Download Full CV" button
- Records the action before opening the CV link
- Captures user agent and referrer information

### 3. Data Collection
- **User Agent**: Browser and device information
- **IP Address**: Visitor's IP address (captured server-side)
- **Referrer**: Where the visitor came from
- **Source**: Categorized traffic source (LinkedIn, GitHub, etc.)
- **Timestamp**: When the interaction occurred

## API Endpoints

### Track CV Interaction
```
POST /api/cv/track
Content-Type: application/json

{
  "action": "view" | "download",
  "userAgent": "string",
  "referrer": "string",
  "source": "string"
}
```

### Get CV Statistics
```
GET /api/cv/stats
Response: { views: number, downloads: number, total: number }
```

### Get All Interactions
```
GET /api/cv/interactions
Response: Array of all CV interactions with details
```

## Accessing Analytics

### 1. Live Stats Widget
The CV section now includes a live stats widget showing:
- Total views
- Total downloads
- Conversion rate

### 2. Admin Dashboard
Visit `/admin/cv-analytics` to see:
- Detailed statistics
- Recent interactions
- Traffic source breakdown
- Conversion analytics

## Traffic Source Detection

The system automatically categorizes traffic sources:

- **LinkedIn**: `linkedin.com`
- **GitHub**: `github.com`
- **Twitter/X**: `twitter.com`, `x.com`
- **Google**: `google.com`
- **Facebook**: `facebook.com`
- **Instagram**: `instagram.com`
- **YouTube**: `youtube.com`
- **Direct**: No referrer or unknown source

## Database Schema

```sql
CREATE TABLE cv_interactions (
  id SERIAL PRIMARY KEY,
  action VARCHAR(20) NOT NULL, -- 'view' or 'download'
  user_agent TEXT,
  ip_address VARCHAR(45),
  referrer TEXT,
  source VARCHAR(100),
  timestamp TIMESTAMP DEFAULT NOW()
);
```

## Deployment

### For Netlify
1. Deploy your updated code to Netlify
2. The tracking system will work automatically
3. Access analytics at `your-domain.netlify.app/admin/cv-analytics`

### Environment Variables
No additional environment variables are required for basic tracking.

## Privacy Considerations

- IP addresses are stored for analytics purposes
- User agent strings are captured for device/browser analysis
- Referrer information helps identify traffic sources
- Consider adding a privacy policy if you plan to use this data

## Customization

### Adding New Traffic Sources
Edit `client/src/lib/cvTracker.ts` and add new source detection rules:

```typescript
if (referrer.includes('your-platform.com')) return 'your-platform';
```

### Modifying Tracking Logic
- View tracking threshold can be adjusted in `cv-section.tsx`
- Download tracking can be modified in the `handleDownloadCV` function
- Analytics display can be customized in the dashboard components

## Troubleshooting

### No Data Appearing
1. Check browser console for errors
2. Verify API endpoints are accessible
3. Ensure the CV section is being viewed
4. Check network requests in browser dev tools

### Missing IP Addresses
- IP addresses are captured server-side
- Some proxies may not forward real IP addresses
- Check `x-forwarded-for` headers in production

## Future Enhancements

- **Geographic Tracking**: Add location-based analytics
- **Time-based Analytics**: Track peak viewing times
- **Device Analytics**: Mobile vs desktop usage
- **Export Functionality**: Download analytics data
- **Email Notifications**: Get notified of new downloads
- **Advanced Filtering**: Filter by date, source, etc.

## Support

For issues or questions about the CV tracking system, check the browser console for error messages and ensure all API endpoints are responding correctly. 