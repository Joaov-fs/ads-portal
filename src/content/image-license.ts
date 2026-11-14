import type { ContentImage } from './types';

/**
 * Licenças que permitem republicar uma foto com crédito. Não-comerciais (NC),
 * sem derivação (ND) e "todos os direitos reservados" ficam de fora: o portal
 * tem anúncios e recorta as fotos.
 */
export const allowedPhotoLicenses = [
  'CC0',
  'Domínio público',
  'CC BY 2.0',
  'CC BY 3.0',
  'CC BY 3.0 BR',
  'CC BY 4.0',
  'CC BY-SA 2.0',
  'CC BY-SA 3.0',
  'CC BY-SA 4.0',
] as const;

/**
 * Onde se busca a foto. A página de origem precisa mostrar a licença:
 * Wikimedia Commons (que reúne fotos da Agência Brasil, Senado, Câmara e
 * Planalto) e os álbuns oficiais no Flickr.
 */
export const allowedPhotoSourceHosts = [
  'commons.wikimedia.org',
  'www.flickr.com',
  'flickr.com',
] as const;

/** Crédito de foto de terceiros ("Foto: Nome/Agência Senado"). */
export function isPhotoCredit(credit: string | undefined) {
  return Boolean(credit && /^foto/i.test(credit.trim()));
}

/**
 * Problemas de licença de uma imagem, para o teste de conteúdo. Ilustração
 * própria passa direto; foto exige crédito, licença aceita e página de origem.
 */
export function photoLicenseProblems(image: ContentImage): string[] {
  if (!isPhotoCredit(image.credit)) return [];

  const problems: string[] = [];

  if (!image.src.startsWith('/images/news/')) {
    problems.push(
      'a foto deve ser baixada para /public/images/news/ (sem hotlink)',
    );
  }

  if (
    !image.license ||
    !(allowedPhotoLicenses as readonly string[]).includes(image.license)
  ) {
    problems.push(
      `licença "${image.license ?? ''}" fora da lista: ${allowedPhotoLicenses.join(', ')}`,
    );
  }

  let host = '';
  try {
    host = image.sourceUrl ? new URL(image.sourceUrl).hostname : '';
  } catch {
    host = '';
  }

  if (!(allowedPhotoSourceHosts as readonly string[]).includes(host)) {
    problems.push(
      `sourceUrl deve apontar para a página da foto em ${allowedPhotoSourceHosts.join(', ')}`,
    );
  }

  return problems;
}
