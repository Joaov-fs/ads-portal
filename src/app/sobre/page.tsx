import { InstitutionalPageTemplate } from '@/components/content';
import { buildInstitutionalMetadata } from '@/content';

const description =
  'Conheça a proposta do PortalFina e os princípios que orientam nossos conteúdos e ferramentas.';

export const metadata = buildInstitutionalMetadata(
  'Sobre',
  description,
  '/sobre',
);

export default function AboutPage() {
  return (
    <InstitutionalPageTemplate
      description={description}
      sections={[
        {
          heading: 'Uma plataforma para decisões mais simples',
          content: [
            <p key="mission">
              O PortalFina reúne calculadoras, guias e notícias para explicar
              temas financeiros, trabalhistas e econômicos em linguagem clara. O
              objetivo é conectar contexto e ação em uma experiência rápida e
              confiável.
            </p>,
          ],
        },
        {
          heading: 'Como trabalhamos',
          content: [
            <p key="process">
              Conteúdos seguem uma estrutura editorial consistente, identificam
              autoria, datas e fontes, enquanto as calculadoras mantêm suas
              regras separadas da interface e apresentam resultados
              explicativos.
            </p>,
          ],
        },
        {
          heading: 'Limites da informação',
          content: [
            <p key="limits">
              O material é informativo e educacional. Ele não substitui análise
              profissional individualizada nem constitui recomendação
              financeira, jurídica, contábil ou tributária.
            </p>,
          ],
        },
      ]}
      title="Sobre"
    />
  );
}
