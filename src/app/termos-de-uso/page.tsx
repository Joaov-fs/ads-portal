import { InstitutionalPageTemplate } from '@/components/content';
import { buildInstitutionalMetadata } from '@/content';

const description =
  'Conheça as condições de uso dos conteúdos, calculadoras e demais recursos do PortalFina.';

export const metadata = buildInstitutionalMetadata(
  'Termos de uso',
  description,
  '/termos-de-uso',
);

export default function TermsPage() {
  return (
    <InstitutionalPageTemplate
      description={description}
      eyebrow="Condições de uso"
      sections={[
        {
          heading: 'Caráter informativo',
          content: [
            <p key="informational">
              Conteúdos e resultados são estimativas educacionais. Eles não
              substituem documentos oficiais, normas vigentes ou orientação
              profissional adequada à situação do usuário.
            </p>,
          ],
        },
        {
          heading: 'Uso responsável',
          content: [
            <p key="responsible-use">
              O usuário é responsável por conferir os dados informados, as
              premissas das simulações e as fontes oficiais antes de tomar
              decisões financeiras, trabalhistas, jurídicas ou tributárias.
            </p>,
          ],
        },
        {
          heading: 'Disponibilidade e alterações',
          content: [
            <p key="availability">
              A plataforma pode corrigir, atualizar ou descontinuar conteúdos e
              recursos para preservar qualidade, segurança e aderência a novas
              regras, sem garantia de disponibilidade ininterrupta.
            </p>,
          ],
        },
        {
          heading: 'Propriedade e referências',
          content: [
            <p key="property">
              A identidade visual, a organização editorial e o software da
              plataforma são protegidos. Fontes externas permanecem sujeitas aos
              direitos e termos de seus respectivos responsáveis.
            </p>,
          ],
        },
      ]}
      title="Termos de Uso"
    />
  );
}
