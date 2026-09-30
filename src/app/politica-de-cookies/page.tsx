import { InstitutionalPageTemplate } from '@/components/content';
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
              Cookies e tecnologias semelhantes armazenam pequenas informações
              no navegador para manter preferências, compreender o uso do site e
              viabilizar serviços de terceiros.
            </p>,
          ],
        },
        {
          heading: 'Categorias previstas',
          content: [
            <ul className="list-disc space-y-2 pl-5" key="categories">
              <li>Necessários: suportam segurança e funcionamento básico.</li>
              <li>Analíticos: medem audiência, desempenho e navegação.</li>
              <li>
                Publicidade: poderão apoiar anúncios e mensuração quando o
                AdSense for aprovado e ativado.
              </li>
            </ul>,
          ],
        },
        {
          heading: 'Serviços opcionais',
          content: [
            <p key="services">
              Google Analytics 4, Google Tag Manager e Microsoft Clarity são
              carregados apenas quando a integração de analytics está habilitada
              no ambiente. A arquitetura do AdSense não carrega scripts nem
              anúncios por padrão.
            </p>,
          ],
        },
        {
          heading: 'Como gerenciar',
          content: [
            <p key="management">
              Você pode bloquear ou remover cookies nas configurações do
              navegador. Antes de ativar tecnologias não essenciais em produção,
              a equipe deve validar a necessidade de um mecanismo de
              consentimento compatível com a legislação aplicável.
            </p>,
          ],
        },
      ]}
      title="Política de Cookies"
    />
  );
}
