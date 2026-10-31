import type { NewsDocument } from '../../types';

export const newsFiesRemanescentes2026 = {
  kind: 'news',
  slug: 'fies-vagas-remanescentes-2026-inscricao-ate-3-de-novembro-50-mil-vagas-e-renda-de-ate-3-salarios',
  title:
    'Fies: 50 mil vagas remanescentes com inscrição até 3 de novembro e renda de até 3 salários por pessoa',
  description:
    'O MEC abriu 50 mil vagas remanescentes do Fies, com inscrição gratuita até 3/11. Veja quem pode se inscrever, a regra de renda em reais e as datas até 30/11.',
  category: 'financas',
  coverImage: {
    src: '/images/news/fies-vagas-remanescentes-2026-inscricao-ate-3-de-novembro-50-mil-vagas-e-renda-de-ate-3-salarios.jpg',
    alt: 'Calendário de novembro com o dia 3 marcado, documento com as datas do Fies, celular mostrando 50 mil vagas e etiqueta com o prazo de 3/11.',
    credit: 'Ilustração: PortalFina',
  },
  authorId: 'pedro-bueno-salvador',
  publishedAt: '2026-10-31',
  updatedAt: '2026-10-31',
  tags: ['fies', 'financiamento-estudantil', 'mec', 'enem', 'educacao'],
  featuredCalculators: ['porcentagem', 'juros-compostos'],
  highlights: [
    {
      value: '50 mil',
      label: 'Vagas remanescentes do Fies',
      note: 'Só valem para contratar o financiamento no 2º semestre de 2026.',
    },
    {
      value: '3/11',
      label: 'Último dia para se inscrever',
      note: 'A inscrição é gratuita e feita no Portal Acesso Único.',
    },
    {
      value: 'R$ 4.863',
      label: 'Renda máxima por pessoa',
      note: 'Três salários mínimos de R$ 1.621.',
    },
    {
      value: '16/11',
      label: 'Resultado da chamada única',
      note: 'Quem ficar na lista de espera é chamado de 25 a 30/11.',
    },
  ],
  sections: [
    {
      heading: 'O que o MEC abriu e até quando dá para se inscrever',
      paragraphs: [
        'O Ministério da Educação abriu em 26 de outubro as inscrições para as vagas remanescentes do Fundo de Financiamento Estudantil (Fies) do segundo semestre de 2026. São 50 mil vagas em todo o país, em instituições privadas de ensino superior que aderiram à oferta. As inscrições são gratuitas e terminam na terça-feira, 3 de novembro, o que deixa o fim de semana e a segunda-feira como últimos dias para quem ainda não se inscreveu.',
        'A inscrição é feita apenas pelo Portal Acesso Único, com login Gov.br. O edital, de número 76/2026, não permite prorrogar a contratação: as vagas valem somente para financiar o semestre em curso, e quem perder o prazo precisa esperar uma próxima oferta.',
        'Vale lembrar que 2 de novembro é feriado de Finados, mas a inscrição é digital e não depende de agência ou de expediente. O que depende de atenção é o seu cadastro: o acesso pelo Gov.br precisa estar funcionando antes da última hora.',
      ],
    },
    {
      heading: 'Quem pode participar e a conta da renda',
      image: {
        src: '/images/news/fies-vagas-remanescentes-2026-inscricao-ate-3-de-novembro-50-mil-vagas-e-renda-de-ate-3-salarios-detalhe.jpg',
        alt: 'Detalhe da ilustração: documento com as datas de inscrição, resultado e validação das vagas remanescentes do Fies.',
        caption: 'As datas do edital: inscrição até 3/11 e resultado em 16/11.',
        credit: 'Ilustração: PortalFina',
      },
      paragraphs: [
        'Pelo edital, tem direito a concorrer quem fez o Enem a partir de 2010, com média igual ou superior a 450 pontos nas cinco provas e nota acima de zero na redação. Também é preciso ter renda familiar mensal bruta de até três salários mínimos por pessoa e condições de cumprir a frequência mínima exigida pela instituição no segundo semestre.',
        'A conta da renda é feita por pessoa. Com o salário mínimo de R$ 1.621, três salários mínimos somam R$ 4.863 por integrante da família. Some todos os rendimentos brutos da casa e divida pelo número de moradores. Em uma família de 4 pessoas com renda bruta de R$ 7.200, a conta é R$ 7.200 ÷ 4 = R$ 1.800 por pessoa, abaixo do limite de R$ 4.863. Nesse caso, a renda não impede a inscrição.',
        'Outra forma de ver o limite é pelo total da casa: uma família de 3 pessoas pode ter até R$ 14.589 de renda bruta mensal (3 × R$ 4.863), e uma de 4 pessoas, até R$ 19.452 (4 × R$ 4.863). Atender à renda não garante a vaga: a pré-seleção depende também das notas e das vagas de cada curso.',
      ],
      table: {
        caption: 'Exemplos da renda por pessoa (salário mínimo de R$ 1.621)',
        columns: [
          'Família',
          'Renda bruta',
          'Renda por pessoa',
          'Limite de R$ 4.863',
        ],
        rows: [
          ['4 pessoas', 'R$ 7.200', 'R$ 1.800', 'Dentro do limite'],
          ['3 pessoas', 'R$ 14.589', 'R$ 4.863', 'No limite'],
          ['4 pessoas', 'R$ 3.000', 'R$ 750', 'Dentro do limite'],
        ],
      },
    },
    {
      heading: 'Fies Social: metade das vagas para a renda mais baixa',
      paragraphs: [
        'O edital reserva 50% das vagas remanescentes ao Fies Social. Para essas vagas, a renda familiar mensal por pessoa precisa ser de até meio salário mínimo, ou R$ 810,50, e o cadastro no CadÚnico precisa estar atualizado. O MEC considera as informações atualizadas até 8 de outubro de 2026, então atualizar o cadastro agora não vale para esta edição.',
        'No exemplo acima, a família de 4 pessoas com renda de R$ 3.000 tem R$ 750 por pessoa, valor abaixo de R$ 810,50. Se o CadÚnico dela estava atualizado até 8 de outubro, ela se enquadra na regra de renda do Fies Social. Já a família com R$ 7.200 tem R$ 1.800 por pessoa e concorre apenas nas demais vagas.',
        'Os pré-selecionados no Fies Social podem pedir financiamento de até 100% dos encargos educacionais, conforme as regras do programa. As taxas, as condições de pagamento depois da formatura e o valor das mensalidades dependem do edital e de cada curso, e por isso devem ser conferidos no Portal Acesso Único antes de assinar.',
      ],
    },
    {
      heading:
        'Calendário depois da inscrição e o que muda para quem for aprovado',
      paragraphs: [
        'Encerrada a inscrição, o resultado da chamada única sai em 16 de novembro. Nos dias 17 e 18 de novembro, os pré-selecionados passam pela validação das informações na instituição de ensino. De 25 a 30 de novembro acontece a convocação pela lista de espera. Os dados da instituição sobre o aproveitamento acadêmico dos inscritos são registrados de 4 a 6 de novembro.',
        'Há uma etapa nova: a instituição verifica se o candidato tem condições de atingir a frequência mínima exigida no mesmo curso, turno e instituição escolhidos, antes da pré-seleção e novamente na validação. Quem escolher um turno que não consegue frequentar corre o risco de ser barrado.',
        'Para o orçamento, a regra prática é simples: financiar o curso não elimina a dívida, apenas a empurra para depois. Quem pretende assinar deve estimar quanto das mensalidades será financiado, simular o efeito dos juros ao longo dos anos e guardar os documentos pedidos na validação. As calculadoras de juros compostos e de porcentagem do portal ajudam a comparar cenários.',
      ],
    },
  ],
  faq: [
    {
      question:
        'Até quando posso me inscrever nas vagas remanescentes do Fies?',
      answer:
        'Até 3 de novembro de 2026, de forma gratuita, pelo Portal Acesso Único, com login Gov.br. O edital não prevê prorrogação do prazo.',
    },
    {
      question: 'Quem tem direito a se inscrever?',
      answer:
        'Quem fez o Enem a partir de 2010 com média mínima de 450 pontos nas cinco provas e nota acima de zero na redação, tem renda familiar bruta de até três salários mínimos por pessoa e condições de cumprir a frequência mínima do semestre.',
    },
    {
      question: 'O que é o Fies Social?',
      answer:
        'É a reserva de 50% das vagas remanescentes para quem tem renda familiar por pessoa de até meio salário mínimo e CadÚnico atualizado até 8 de outubro de 2026. Os pré-selecionados podem pedir financiamento de até 100% dos encargos educacionais.',
    },
  ],
  sources: [
    {
      label:
        'Agência Gov: Fies remanescentes, inscrições abertas nesta segunda (26)',
      url: 'https://agenciagov.ebc.com.br/noticias/202610/fies-remanescentes-inscricoes-abertas-nesta-segunda-26',
    },
    {
      label:
        'Agência Gov: publicado edital para a edição de vagas remanescentes',
      url: 'https://agenciagov.ebc.com.br/noticias/202609/fies-publicado-edital-para-a-edicao-de-vagas-remanescentes',
    },
    {
      label: 'MEC: Edital nº 76/2026 do Fies',
      url: 'https://www.gov.br/mec/pt-br/fies/arquivos/2026/edital_n_76_22092026.pdf',
    },
    {
      label: 'Portal Acesso Único: Fies',
      url: 'https://acessounico.mec.gov.br/fies',
    },
    {
      label: 'Agência Brasil: salário mínimo de R$ 1.621 começa a ser pago',
      url: 'https://agenciabrasil.ebc.com.br/economia/noticia/2026-02/salario-minimo-de-r-1621-comeca-ser-pago-nesta-segunda',
    },
  ],
} as const satisfies NewsDocument;
