export type CVAction = 'view' | 'download' | 'click';

export interface CVInteractionPayload {
  action: CVAction;
  source: string;
  metadata?: Record<string, unknown>;
}

export function detectSource(): string {
  try {
    const url = new URL(window.location.href);
    const utmSource = url.searchParams.get('utm_source');
    if (utmSource) return utmSource;
    if (document.referrer) return new URL(document.referrer).host || 'referrer';
    return 'direct';
  } catch {
    return 'direct';
  }
}

export async function trackCVInteraction(payload: CVInteractionPayload): Promise<void> {
  try {
    const body = {
      ...payload,
      timestamp: new Date().toISOString(),
      path: window.location.pathname,
      userAgent: navigator.userAgent,
    };

    // Fire-and-forget; ignore errors in UI
    fetch('/api/cv/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      keepalive: true,
    }).catch(() => {});
  } catch {
    // no-op
  }
}


