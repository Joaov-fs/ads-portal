import Link from 'next/link';

import { InstitutionalPageTemplate } from '@/components/content';
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
          heading: 'Dados tratados',
          content: [
            <p key="data">
              A plataforma pode tratar dados fornecidos voluntariamente em
              canais de contato e dados técnicos de acesso, como tipo de
              dispositivo, páginas visitadas e eventos de navegação, quando as
              integrações correspondentes estiverem habilitadas.
            </p>,
          ],
        },
        {
          heading: 'Finalidades e bases',
          content: [
            <p key="purpose">
              Os dados podem ser usados para operar e proteger o serviço,
              responder solicitações, medir desempenho e melhorar a experiência.
              Integrações opcionais permanecem desativadas até serem
              configuradas para o ambiente publicado.
            </p>,
          ],
        },
        {
          heading: 'Compartilhamento e retenção',
          content: [
            <p key="sharing">
              Dados podem ser processados por fornecedores de hospedagem,
              métricas e publicidade estritamente conforme a configuração do
              serviço. A retenção deve se limitar ao período necessário para
              cada finalidade e obrigação legal.
            </p>,
          ],
        },
        {
          heading: 'Seus direitos',
          content: [
            <p key="rights">
              Titulares podem solicitar confirmação, acesso, correção, revisão
              ou eliminação de dados, conforme aplicável. Consulte a página de{' '}
              <Link
                className="font-semibold text-ads-primary-strong underline underline-offset-4"
                href="/contato"
              >
                contato
              </Link>{' '}
              para falar com a equipe.
            </p>,
          ],
        },
        {
          heading: 'Atualizações',
          content: [
            <p key="updates">
              Esta política deve ser revisada antes da publicação e sempre que
              houver mudança relevante nas integrações ou finalidades de
              tratamento. Última atualização: 25 de setembro de 2026.
            </p>,
          ],
        },
      ]}
      title="Política de Privacidade"
    />
  );
}
