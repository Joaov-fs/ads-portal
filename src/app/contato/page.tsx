import { InstitutionalPageTemplate } from '@/components/content';
import { siteConfig } from '@/config/site';
import { buildInstitutionalMetadata } from '@/content';

const description =
  'Entre em contato com a equipe do PortalFina para dúvidas, correções ou parcerias.';

export const metadata = buildInstitutionalMetadata(
  'Contato',
  description,
  '/contato',
);

export default function ContactPage() {
  return (
    <InstitutionalPageTemplate
      description={description}
      sections={[
        {
          heading: 'Fale com a equipe',
          content: [
            siteConfig.contactEmail ? (
              <p key="email">
                Envie sua mensagem para{' '}
                <a
                  className="font-semibold text-ads-primary-strong underline underline-offset-4"
                  href={`mailto:${siteConfig.contactEmail}`}
                >
                  {siteConfig.contactEmail}
                </a>
                .
              </p>
            ) : (
              <p key="unavailable">
                O canal de contato será exibido aqui quando estiver configurado
                para o ambiente de produção.
              </p>
            ),
          ],
        },
        {
          heading: 'Correções editoriais',
          content: [
            <p key="corrections">
              Ao relatar uma correção, informe o endereço da página, o trecho em
              questão e, quando possível, uma fonte pública para conferência.
            </p>,
          ],
        },
        {
          heading: 'Privacidade',
          content: [
            <p key="privacy">
              Não envie dados financeiros, documentos, senhas ou outras
              informações pessoais sensíveis pelos canais de contato.
            </p>,
          ],
        },
      ]}
      title="Contato"
    />
  );
}
