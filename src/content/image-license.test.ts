import { describe, expect, it } from 'vitest';

import { isPhotoCredit, photoLicenseProblems } from './image-license';

const photo = {
  alt: 'Plenário do Senado durante votação.',
  credit: 'Foto: Jefferson Rudy/Agência Senado',
  license: 'CC BY 2.0',
  sourceUrl: 'https://www.flickr.com/photos/agenciasenado/123',
  src: '/images/news/senado.jpg',
};

describe('photo license rules', () => {
  it('lets own illustrations through without license data', () => {
    expect(isPhotoCredit('Ilustração: PortalFina')).toBe(false);
    expect(
      photoLicenseProblems({
        alt: 'x',
        credit: 'Ilustração: PortalFina',
        src: '/x.jpg',
      }),
    ).toEqual([]);
  });

  it('accepts a credited photo with an allowed license and source page', () => {
    expect(photoLicenseProblems(photo)).toEqual([]);
  });

  it('rejects non-commercial licenses, unknown sources and hotlinks', () => {
    expect(
      photoLicenseProblems({ ...photo, license: 'CC BY-NC 2.0' }),
    ).toHaveLength(1);
    expect(
      photoLicenseProblems({
        ...photo,
        sourceUrl: 'https://g1.globo.com/foto',
      }),
    ).toHaveLength(1);
    expect(
      photoLicenseProblems({
        ...photo,
        src: 'https://upload.wikimedia.org/x.jpg',
      }),
    ).toHaveLength(1);
    expect(
      photoLicenseProblems({
        ...photo,
        license: undefined,
        sourceUrl: undefined,
      }),
    ).toHaveLength(2);
  });
});
