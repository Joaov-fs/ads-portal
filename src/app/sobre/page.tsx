import { InstitutionalPageTemplate } from '@/components/content';
import { buildInstitutionalMetadata } from '@/content';

const description =
  'Conheça a proposta do PortalFina e os princípios que orientam nossos conteúdos e ferramentas.';

export const metadata = buildInstitutionalMetadata(
  'Sobre nós',
  description,
  '/sobre',
);

export default function AboutPage() {
  return (
    <InstitutionalPageTemplate
      description={description}
      sections={[
        {
          heading: 'Finanças explicadas com a conta feita',
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
          heading: 'Quem escreve e como checamos',
          content: [
            <p key="authorship">
              O PortalFina não tem colunistas individuais. Os conteúdos são
              assinados pela Redação PortalFina e produzidos com apoio de
              inteligência artificial, a partir de fontes oficiais como Receita
              Federal, INSS, Banco Central, ministérios e Diário Oficial da
              União. As fontes aparecem ao final de cada notícia, guia e
              calculadora, para que você confira os números por conta própria.
            </p>,
            <p key="corrections">
              Encontrou um erro ou um valor desatualizado? Escreva para a
              redação pela página de contato. Corrigimos e registramos a data da
              atualização.
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
