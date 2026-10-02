import { InstitutionalPageTemplate, JsonLdScript } from '@/components/content';
import { siteConfig } from '@/config/site';
import { authors } from '@/content/authors';
import { buildInstitutionalMetadata } from '@/content';

const description =
  'Conheça a equipe responsável pelo conteúdo editorial do PortalFina.';

export const metadata = buildInstitutionalMetadata(
  'Equipe editorial',
  description,
  '/autor',
);

export default function AuthorPage() {
  const author = authors[0];

  return (
    <>
      <JsonLdScript
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: author.name,
          description: author.bio,
          url: `${siteConfig.url}/autor`,
        }}
      />
      <InstitutionalPageTemplate
        description={description}
        eyebrow="Autoria e transparência"
        sections={[
          {
            heading: author.name,
            content: [<p key="bio">{author.bio}</p>],
          },
          {
            heading: 'Responsabilidade editorial',
            content: [
              <p key="responsibility">
                A equipe revisa clareza, estrutura, fontes e datas de
                atualização. Simulações são educativas e devem ser confirmadas
                em fontes oficiais antes de decisões relevantes.
              </p>,
            ],
          },
          {
            heading: 'Área de atuação',
            content: [<p key="role">{author.role}.</p>],
          },
        ]}
        title="Autor"
      />
    </>
  );
}
