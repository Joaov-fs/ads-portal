# Formato de notícias do PortalFina

Cada notícia é **um arquivo TypeScript** em `src/content/files/news/` e **uma linha** em
`src/content/files/news/index.ts`. Não há painel: a IA entrega o arquivo pronto e ele entra pelo GitHub.

## Regras editoriais (valem para toda notícia)

1. **Fato verificável.** Todo número vem de fonte oficial (Banco Central, IBGE, Receita Federal, INSS,
   Ministério do Trabalho e Emprego, MDS, Caixa, Diário Oficial). Nada de "segundo especialistas".
2. **Um número por frase, em reais.** Troque adjetivos por exemplos: "salário de R$ 3.000 paga R$ 248,60 de INSS".
3. **Exemplo calculado.** Todo exemplo deve ser conferido na calculadora do portal antes de publicar.
4. **Fontes pelo nome.** Cite o documento ou a página ("Lei 15.270/2025", "INSS: tabela de contribuição mensal de 2026").
   Use `url` só quando levar a uma página oficial estável e fizer sentido para o leitor.
5. **Leva para uma calculadora.** `featuredCalculators` com 1 a 3 slugs reais de `/calculadoras`.
6. **Sem repetição.** Cada seção diz algo novo. Não reescreva a descrição no primeiro parágrafo.
7. **Sem promessas.** Benefícios e prazos: "tem direito quem cumpre os requisitos", nunca "você vai receber".
8. **Sem travessão (— ou –).** Nem em título, subtítulo, seção, tabela ou fonte. Use dois-pontos, vírgula ou ponto. O travessão sozinho só vale como célula vazia de tabela.
9. **Número da capa.** O **primeiro item de `highlights`** aparece por cima da imagem da capa: número curto
   (até 14 caracteres, ex.: `R$ 1.741`, `26/10`, `13,75%`) e legenda (até 40 caracteres). O teste
   `pipeline.test.ts` reprova a notícia sem esse primeiro destaque.
10. **Imagem obrigatória: capa + uma no meio do texto.** Toda notícia tem `coverImage` (aparece na home, nas
    listas, na página e no compartilhamento do WhatsApp/Google) e uma `image` na 2ª seção, para o leitor
    continuar rolando. O padrão é ilustração própria, desenhada pelo gerador do projeto:
    - crie uma cena nova em `scripts/covers/scenes.py` (veja as regras no topo do arquivo: objetos do
      assunto, números iguais aos da notícia, sem logotipo de órgão ou marca) e rode
      `python3 scripts/covers/make.py <cena> <slug>`. Saem `public/images/news/<slug>.jpg` e
      `<slug>-detalhe.jpg`;
    - confira as duas imagens antes de publicar (abra o arquivo e olhe);
    - crédito: `'Ilustração: PortalFina'`.
      Foto de terceiros só com licença livre explícita (ex.: Agência Brasil, CC BY), com o crédito exigido
      (`'Foto: Nome/Agência Brasil'`). Dar crédito não basta: foto de jornal, banco pago ou Google Imagens não
      pode ser usada.

## Modelo do arquivo

```ts
import type { NewsDocument } from '../../types';

export const newsSlugDaNoticia = {
  kind: 'news',
  slug: 'slug-curto-com-palavras-chave', // minúsculas, hífens, sem acento
  title: 'Título com o fato e o número principal', // até ~110 caracteres
  description:
    'Uma frase de 120 a 160 caracteres com o que mudou e o efeito prático.',
  category: 'trabalho', // beneficios | economia | financas | trabalho | utilidades
  coverImage: {
    src: '/images/news/slug-curto-com-palavras-chave.jpg',
    alt: 'O que a imagem mostra, em uma frase.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'equipe-editorial', // sempre este: "Redação PortalFina"
  publishedAt: '2026-10-01', // AAAA-MM-DD
  updatedAt: '2026-10-01',
  tags: ['salario', 'inss', 'trabalho'], // ajudam a ligar com guias e calculadoras
  featuredCalculators: ['inss', 'salario-liquido'], // slugs de calculadoras que já existem
  highlights: [
    // 3 ou 4 números do topo ("Em números")
    {
      value: 'R$ 8.475,55',
      label: 'Teto de contribuição',
      note: 'Acima disso o desconto não aumenta.',
    },
  ],
  sections: [
    // 3 a 5 seções
    {
      heading: 'Pergunta ou afirmação direta',
      image: {
        // na 2ª seção: o close gerado junto com a capa
        src: '/images/news/slug-curto-com-palavras-chave-detalhe.jpg',
        alt: 'O que o detalhe mostra.',
        caption: 'Uma frase que ligue a imagem ao texto.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: ['Parágrafo 1.', 'Parágrafo 2.'],
      table: {
        // opcional
        caption: 'Legenda da tabela',
        columns: ['Coluna A', 'Coluna B'],
        rows: [
          ['a1', 'b1'],
          ['a2', 'b2'],
        ],
      },
    },
  ],
  faq: [
    // 2 ou 3 perguntas reais do leitor
    { question: 'Pergunta?', answer: 'Resposta curta e objetiva.' },
  ],
  sources: [
    // 2 a 4 fontes oficiais
    { label: 'INSS: tabela de contribuição mensal de 2026' },
    { label: 'Receita Federal', url: 'https://www.gov.br/receitafederal/' },
  ],
} as const satisfies NewsDocument;
```

## Como publicar

1. Crie `src/content/files/news/<slug>.ts` com o modelo acima.
2. Em `src/content/files/news/index.ts`, acrescente o `import` e o nome na lista `newsFiles`.
3. Faça o commit na `main`. A Vercel publica sozinha e o teste `pipeline.test.ts` garante que os slugs
   das calculadoras existem e que não há slugs repetidos.

## Calculadoras disponíveis (slugs)

`rescisao-clt`, `seguro-desemprego`, `decimo-salario`, `irrf`, `horas-extras`, `fgts-multa`, `inss`,
`contador-de-dias`, `porcentagem`, `cdi`, `financiamento-sac-price`, `reajuste-aluguel`, `bolsa-familia`,
`pis`, `das-limite-mei`, `custo-funcionario-clt`, `fator-r`, `salario-por-hora`, `adicional-noturno`,
`dsr`, `banco-de-horas`, `ferias-proporcionais`, `decimo-proporcional`, `aviso-previo`, `plr-ppr-liquido`,
`vale-transporte`, `insalubridade`, `periculosidade`, `pensao-alimenticia`, `custo-demissao`, `pro-labore`,
`inss-autonomo`, `simples-nacional`, `excesso-limite-mei`, `das-mei-atraso`, `bpc`, `salario-maternidade`,
`auxilio-incapacidade`, `ipva`, `cdb-liquido`, `cdb-x-poupanca`, `tesouro-selic`, `lci-lca`,
`conversao-taxa-mensal-anual`, `juros-simples`, `simulador-de-emprestimo`, `amortizacao-antecipada`,
`ferias`, `juros-compostos`, `salario-liquido`.
