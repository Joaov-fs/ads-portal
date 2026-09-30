import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { AdSlot } from '@/components/advertising/ad-slot';
import { organizationSchema, websiteSchema } from '@/config/structured-data';

import manifest from './manifest';
import robots from './robots';
import sitemap from './sitemap';

describe('production infrastructure', () => {
  it('publishes discovery files and institutional routes', () => {
    const manifestData = manifest();
    const robotsData = robots();
    const sitemapUrls = sitemap().map((entry) => entry.url);

    expect(manifestData.icons).toHaveLength(3);
    expect(robotsData.sitemap).toMatch(/\/sitemap\.xml$/);
    expect(sitemapUrls).toEqual(
      expect.arrayContaining([
        expect.stringMatching(/\/sobre$/),
        expect.stringMatching(/\/politica-de-privacidade$/),
        expect.stringMatching(/\/termos-de-uso$/),
      ]),
    );
  });

  it('provides organization and website search structured data', () => {
    expect(organizationSchema['@type']).toBe('Organization');
    expect(websiteSchema['@type']).toBe('WebSite');
    expect(websiteSchema.potentialAction['@type']).toBe('SearchAction');
  });

  it('hides advertising slots until the integration is configured', () => {
    const { container } = render(
      <AdSlot label="Publicidade de teste" placementId="home-top" />,
    );

    expect(container).toBeEmptyDOMElement();
  });
});
