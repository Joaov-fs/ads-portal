function optionalValue(value: string | undefined) {
  const normalized = value?.trim();
  return normalized ? normalized : undefined;
}

export const integrationConfig = {
  analyticsEnabled: process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true',
  googleAnalyticsId: optionalValue(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID),
  googleTagManagerId: optionalValue(
    process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
  ),
  microsoftClarityId: optionalValue(
    process.env.NEXT_PUBLIC_MICROSOFT_CLARITY_ID,
  ),
  googleSiteVerification: optionalValue(process.env.GOOGLE_SITE_VERIFICATION),
  adsense: {
    enabled: process.env.NEXT_PUBLIC_ADSENSE_ENABLED === 'true',
    publisherId: optionalValue(process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID),
    preview:
      process.env.NODE_ENV === 'development' &&
      process.env.NEXT_PUBLIC_ADSENSE_PREVIEW === 'true',
  },
} as const;
