import { InstitutionalPageTemplate } from '@/components/content';
import { siteConfig } from '@/config/site';
import { buildInstitutionalMetadata } from '@/content';

const description =
  'Saiba quais tecnologias de armazenamento podem ser usadas e como gerenciar suas preferências.';

export const metadata = buildInstitutionalMetadata(
  'Política de Cookies',
  description,
  '/politica-de-cookies',
);

export default function CookiePolicyPage() {
  return (
    <InstitutionalPageTemplate
      description={description}
      eyebrow="Transparência"
      sections={[
        {
          heading: 'O que são cookies',
          content: [
            <p key="definition">
              Cookies e tecnologias semelhantes guardam pequenas informações no
              navegador para manter preferências, entender o uso do site e
              permitir serviços de terceiros, como anúncios.
            </p>,
          ],
        },
        {
          heading: 'O que usamos',
          content: [
            <ul className="list-disc space-y-2 pl-5" key="categories">
              <li>
                Necessários: segurança e funcionamento básico do site, sem
                finalidade de publicidade.
              </li>
              <li>
                Análise: o Google Analytics 4 mede audiência, páginas mais lidas
                e desempenho, de forma agregada.
              </li>
              <li>
                Publicidade: o Google AdSense e seus parceiros usam cookies e
                identificadores para exibir e medir anúncios, inclusive com base
                em visitas anteriores a este e a outros sites.
              </li>
            </ul>,
          ],
        },
        {
          heading: 'Como gerenciar',
          content: [
            <p key="management">
              Você pode bloquear ou apagar cookies nas configurações do
              navegador; alguns recursos podem deixar de funcionar. Para
              controlar a personalização de anúncios, use as configurações de
              anúncios da sua conta Google ou o site aboutads.info. Bloquear
              cookies de publicidade não remove os anúncios, só os torna menos
              personalizados.
            </p>,
          ],
        },
        {
          heading: 'Mais informações',
          content: [
            <p key="more">
              Veja como tratamos dados pessoais na Política de Privacidade ou
              fale conosco pelo e-mail {siteConfig.contactEmail}. Última
              atualização: 1º de outubro de 2026.
            </p>,
          ],
        },
      ]}
      title="Política de Cookies"
    />
  );
}
