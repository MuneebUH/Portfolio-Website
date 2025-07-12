interface CVInteractionData {
  action: 'view' | 'download';
  source?: string;
}

export const trackCVInteraction = async (data: CVInteractionData) => {
  try {
    const interactionData = {
      action: data.action,
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      source: data.source || 'website',
      ipAddress: undefined // Will be captured by server
    };

    const response = await fetch('/api/cv/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(interactionData),
    });

    if (!response.ok) {
      console.error('Failed to track CV interaction');
    }

    return response.json();
  } catch (error) {
    console.error('Error tracking CV interaction:', error);
  }
};

export const getCVStats = async () => {
  try {
    const response = await fetch('/api/cv/stats');
    if (!response.ok) {
      throw new Error('Failed to fetch CV stats');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching CV stats:', error);
    return null;
  }
};

// Utility to detect traffic source
export const detectSource = (): string => {
  const referrer = document.referrer;
  const url = new URL(referrer || '');
  
  if (referrer.includes('linkedin.com')) return 'linkedin';
  if (referrer.includes('github.com')) return 'github';
  if (referrer.includes('twitter.com') || referrer.includes('x.com')) return 'twitter';
  if (referrer.includes('google.com')) return 'google';
  if (referrer.includes('facebook.com')) return 'facebook';
  if (referrer.includes('instagram.com')) return 'instagram';
  if (referrer.includes('youtube.com')) return 'youtube';
  
  return 'direct';
}; 