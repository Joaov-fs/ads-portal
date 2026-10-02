import Link from 'next/link';

import { InstitutionalPageTemplate } from '@/components/content';
import { siteConfig } from '@/config/site';
import { buildInstitutionalMetadata } from '@/content';

const description =
  'Entenda como o PortalFina trata dados pessoais, registros técnicos e preferências de navegação.';

export const metadata = buildInstitutionalMetadata(
  'Política de Privacidade',
  description,
  '/politica-de-privacidade',
);

export default function PrivacyPolicyPage() {
  return (
    <InstitutionalPageTemplate
      description={description}
      eyebrow="Transparência"
      sections={[
        {
          heading: 'Quem somos e quais dados tratamos',
          content: [
            <p key="data">
              O PortalFina é um portal de calculadoras, guias e notícias
              financeiras. As calculadoras funcionam no seu navegador: os
              valores que você digita para simular um cálculo não são enviados
              nem armazenados por nós. Tratamos apenas as informações que você
              nos envia por e-mail e dados técnicos de acesso, como páginas
              visitadas, tipo de dispositivo, navegador e endereço IP
              aproximado.
            </p>,
          ],
        },
        {
          heading: 'Para que usamos',
          content: [
            <p key="purpose">
              Usamos esses dados para manter o site seguro e funcionando,
              responder mensagens, entender quais conteúdos são mais úteis e
              exibir anúncios que ajudam a manter o portal gratuito. As bases
              legais são o legítimo interesse, na operação e na segurança do
              site, e o consentimento, quando exigido para cookies não
              essenciais, conforme a Lei Geral de Proteção de Dados (Lei
              13.709/2018).
            </p>,
          ],
        },
        {
          heading: 'Publicidade e métricas de terceiros',
          content: [
            <p key="ads">
              Exibimos anúncios do Google AdSense. O Google e seus parceiros
              podem usar cookies e identificadores para mostrar anúncios,
              limitar a repetição e medir resultados, inclusive com base em
              visitas anteriores a este e a outros sites. Você pode gerenciar a
              personalização de anúncios nas configurações de anúncios da sua
              conta Google e conhecer as regras do Google em Como o Google usa
              dados de sites parceiros. Também usamos o Google Analytics 4 para
              medir audiência de forma agregada. Detalhes na{' '}
              <Link
                className="font-semibold text-ads-primary-strong underline underline-offset-4"
                href="/politica-de-cookies"
              >
                Política de Cookies
              </Link>
              .
            </p>,
          ],
        },
        {
          heading: 'Compartilhamento e retenção',
          content: [
            <p key="sharing">
              Não vendemos dados pessoais. Eles podem ser processados por
              fornecedores que operam o site, como hospedagem (Vercel), métricas
              (Google) e publicidade (Google), apenas para essas finalidades.
              Mensagens enviadas por e-mail são mantidas pelo tempo necessário
              para atender ao seu pedido. Dados de métricas seguem os prazos
              configurados nas ferramentas.
            </p>,
          ],
        },
        {
          heading: 'Seus direitos',
          content: [
            <p key="rights">
              Você pode pedir confirmação de tratamento, acesso, correção,
              anonimização, eliminação, informação sobre compartilhamento e
              revogação de consentimento. Escreva para{' '}
              <a
                className="font-semibold text-ads-primary-strong underline underline-offset-4"
                href={`mailto:${siteConfig.contactEmail}`}
              >
                {siteConfig.contactEmail}
              </a>{' '}
              ou use a página de{' '}
              <Link
                className="font-semibold text-ads-primary-strong underline underline-offset-4"
                href="/contato"
              >
                contato
              </Link>
              .
            </p>,
          ],
        },
        {
          heading: 'Conteúdo informativo',
          content: [
            <p key="disclaimer">
              Os cálculos e textos do PortalFina têm caráter informativo e não
              substituem orientação de contador, advogado ou consultor
              financeiro.
            </p>,
          ],
        },
        {
          heading: 'Atualizações',
          content: [
            <p key="updates">
              Atualizamos esta política quando mudam as ferramentas ou as
              finalidades de tratamento. Última atualização: 1º de outubro de
              2026.
            </p>,
          ],
        },
      ]}
      title="Política de Privacidade"
    />
  );
}
