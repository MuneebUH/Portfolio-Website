// UTM tracking utility for CV downloads
export const getUTMLink = (platform: string) => {
  const baseUrl = "https://drive.google.com/drive/folders/1iXKAnwuX57l4ofl2vN8w3UCcU0bdnNsx";
  const utmParams = new URLSearchParams({
    utm_source: platform,
    utm_medium: 'profile',
    utm_campaign: 'cv_download'
  });
  
  return `${baseUrl}?${utmParams.toString()}`;
};

// Get the source platform from URL parameters or referrer
export const getSourcePlatform = (): string => {
  // Check URL parameters first (for UTM tracking)
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get('utm_source');
  if (utmSource) {
    return utmSource;
  }
  
  // Fallback to referrer detection
  const referrer = document.referrer;
  if (referrer.includes('linkedin.com')) return 'linkedin';
  if (referrer.includes('github.com')) return 'github';
  if (referrer.includes('upwork.com')) return 'upwork';
  if (referrer.includes('fiverr.com')) return 'fiverr';
  if (referrer.includes('google.com')) return 'google';
  if (referrer.includes('twitter.com') || referrer.includes('x.com')) return 'twitter';
  if (referrer.includes('facebook.com')) return 'facebook';
  if (referrer.includes('instagram.com')) return 'instagram';
  if (referrer.includes('youtube.com')) return 'youtube';
  
  return 'direct';
};

// Track CV download with platform source
export const trackCVDownload = (buttonLocation: string) => {
  const platform = getSourcePlatform();
  
  // @ts-ignore
  if (window.gtag) {
    // @ts-ignore
    window.gtag('event', 'download_cv', {
      event_category: 'CV',
      event_label: `${buttonLocation} - ${platform}`,
      custom_parameter_platform: platform,
      custom_parameter_location: buttonLocation
    });
  }
  
  // Open CV with UTM parameters
  const cvUrl = getUTMLink(platform);
  window.open(cvUrl, '_blank');
}; 