import type { Content } from "./types";


export const pt: Content = {
  htmlLang: "pt-BR",
  meta: {
    title: "Russell Nunez | Engenheiro de Software Full Stack Sênior",
    description:
      "Engenheiro de software full stack sênior com Node.js, TypeScript, React, React Native e Python. Aplicações de alta disponibilidade, microsserviços e soluções com IA para CVC, Ambev e TOTVS.",
    ogTitle: "Russell Antonio Nunez Godoy",
    ogSubtitle: "Engenheiro de Software Full Stack Sênior",
  },
  nav: {
    about: "Sobre",
    impact: "Impacto",
    projects: "Projetos",
    experience: "Experiência",
    stack: "Tecnologias",
    contact: "Contato",
    menu: "Navegação principal",
    skip: "Ir para o conteúdo",
  },
  ui: {
    theme: "Alternar tema",
    language: "Idioma",
    back: "Voltar aos projetos",
    next: "Próximo projeto",
    demo: "Ver demo",
    tryIt: "Experimente",
    tour: "Tour em vídeo",
    gallery: "Imagens",
    code: "Ver código",
    caseStudy: "Estudo de caso",
    problem: "Problema",
    solution: "Solução",
    impact: "Impacto",
    stack: "Stack",
  },
  hero: {
    title: "Engenheiro de Software Full Stack Sênior",
    tagline: "Aplicações de alta disponibilidade e soluções com IA, com resultados que se medem em números.",
    location: "Araraquara, SP · Disponível para remoto e híbrido",
    resume: "Baixar currículo",
    contact: "Entrar em contato",
  },
  about: {
    heading: "Sobre",
    paragraphs: [
      "Sou engenheiro de software full stack sênior. Construo aplicações de alta disponibilidade, APIs, microsserviços e integrações complexas com Node.js, TypeScript, React, React Native e Python.",
      "Nos últimos anos levei soluções com IA para produção: um chatbot de suporte que reduziu 40% dos tickets, agentes de IA em um ERP que cortaram 60% do custo de suporte e uma rede neural que aumentou em 20% a produtividade de uma operação de mineração.",
      "Atuei em projetos para CVC, Ambev e TOTVS e já exerci a liderança técnica. Gosto de entregas que se medem em números e de código que o próximo desenvolvedor consegue manter.",
    ],
  },
  companies: {
    label: "Já entreguei para",
    names: ["CVC", "Ambev", "TOTVS", "Capgemini"],
  },
  impact: {
    heading: "Impacto",
    items: [
      { value: "+20%", label: "de produtividade em operação de mineração, com rede neural para alocação de frota" },
      { value: "-40%", label: "de tickets de suporte com chatbot de IA" },
      { value: "-60%", label: "de custo de suporte com agentes de IA em um ERP" },
      { value: "-25%", label: "de custo de cloud após reestruturação do banco de dados" },
      { value: "30 → 10 min", label: "no ciclo de validação e liberação do CI/CD" },
      { value: "-50%", label: "de tempo de manutenção em PDVs, com limpeza de cache automatizada" },
      { value: "+15%", label: "de faturamento no piloto de IA de precificação" },
    ],
  },
  projects: {
    heading: "Projetos",
    viewCase: "Ler estudo de caso",
    items: {
      "casa-aurora": {
        title: "Casa Aurora: planta 3D interativa",
        summary: "Sobrado de dois andares com piscina e área gourmet, explorável em 3D direto no navegador.",
        metric: { value: "3D", label: "interativo no navegador" },
        problem: "Plantas baixas em 2D dificultam enxergar proporções, circulação e como a casa se comporta de dia e de noite.",
        solution:
          "Uma cena 3D em tempo real com andares removíveis, câmeras por cômodo, ciclo dia/noite, luzes, portas e um tour guiado. Feita com React, Three.js e React Three Fiber.",
        impact: ["Tour guiado pelos cômodos", "Alternância de dia e noite, andares e fachada", "Roda direto no navegador, sem instalação"],
      },
      gfitpro: {
        title: "GFitPro: app de academia para aluno e professor",
        summary: "App mobile e web com treinos, ranking, avaliações físicas, nutrição e faturas, em dois perfis.",
        metric: { value: "2 perfis", label: "aluno e professor" },
        problem: "Academias costumam espalhar treino, avaliação física, cobrança e comunicação em ferramentas diferentes, e o aluno perde o fio do próprio progresso.",
        solution: "App em React Native com Expo que roda em iOS, Android e web. O aluno acompanha treinos, XP e ranking, avaliações com comparação entre datas, nutrição, faturas e arquivos. O professor gerencia alunos e registra avaliações. A autenticação é uma API NestJS com Prisma e SQLite. A interface segue um sistema de design próprio, com tokens, tipografia condensada e componentes animados.",
        impact: ["Fluxos completos de aluno e professor, incluindo nova avaliação e comparação", "Sistema de design próprio aplicado em todas as telas", "Login real contra API NestJS; demais dados ainda são simulados"],
        modules: [{ title: "Início", body: "Resumo do dia com rank, sequência e atalhos para o que importa." }, { title: "Treino", body: "Exercícios com séries, carga, tempo estimado e XP por sessão." }, { title: "Ranking e XP", body: "Níveis, conquistas e posição entre os alunos para manter a motivação." }, { title: "Nutrição", body: "Calorias, macros, hidratação e refeições registradas, com meta diária." }, { title: "Avaliação física", body: "Composição corporal, medidas e saúde, explicadas em linguagem simples." }, { title: "Comparar avaliações", body: "Escolha duas datas e veja a evolução de peso, gordura e músculo." }, { title: "Faturas", body: "Plano, vencimento e histórico de pagamentos com filtros por situação." }, { title: "Arquivos", body: "Planos, exames e fotos de progresso organizados por categoria." }, { title: "Professor: alunos", body: "Lista de alunos com busca, filtros e alerta de reavaliação." }, { title: "Professor: aluno", body: "Perfil do aluno, última avaliação e atalho para registrar uma nova." }],
      },
      "edit-ai": {
        title: "Edit AI: estúdio de vídeo com IA",
        summary: "Legenda, corte, edição, capa, tradução e limpeza de áudio em um só lugar, rodando no seu PC.",
        metric: { value: "7", label: "ferramentas de vídeo" },
        problem: "Legendar e editar vídeos para redes sociais exige várias ferramentas, assinaturas e tempo repetindo as mesmas etapas.",
        solution: "Pipeline local com faster-whisper e FFmpeg, exposto por uma API FastAPI com jobs assíncronos e histórico. O modo express usa Gemini para transcrever, corrigir, traduzir, sugerir cortes e gerar capas, com cache em Redis para não reprocessar nem gastar créditos. A legenda é queimada no MP4 com estilos prontos. Front-end em React, Vite e Tailwind, e tudo sobe com Docker Compose.",
        impact: ["Legenda queimada no vídeo com estilos de caixa, contorno, sombra e neon", "Edição automática que corta silêncio e enrolação, com transições", "Processamento local, com IA na nuvem opcional"],
        modules: [{ title: "Legendar", body: "Estilos prontos de caixa, contorno, sombra e neon, com pré-visualização em vertical." }, { title: "Editar", body: "Corte inteligente de silêncio e enrolação, com agressividade e transições à escolha." }, { title: "Criar capa", body: "Capa em 16:9 gerada a partir de uma cena do vídeo, com frase e variações." }, { title: "Limpar áudio", body: "Remove ruído e normaliza o volume no PC, com intensidade ajustável." }, { title: "Traduzir legendas", body: "Traduz SRT linha a linha, mantendo o tempo de cada fala." }],
      },
      "fleet-optimization": {
        title: "Rede Neural para Otimização de Frota",
        summary: "Alocação de caminhões e equipamentos em operação de mineração com rede neural.",
        metric: { value: "+20%", label: "de produtividade" },
        problem:
          "Em operações de mineração, combinar caminhões e equipamentos de forma eficiente impacta diretamente a produtividade e o consumo de combustível.",
        solution:
          "Uma rede neural que combina caminhões e equipamentos, apoiada por pipelines de dados em Docker e executada em AWS e Azure. Faz parte da plataforma de monitoramento operacional da HOP AI.",
        impact: ["+20% de produtividade", "-15% de consumo de combustível"],
      },
      "support-chatbot": {
        title: "Chatbot de Suporte com IA",
        summary: "Atendimento de suporte automatizado com LLM, integrado às APIs da plataforma.",
        metric: { value: "-40%", label: "de tickets" },
        problem: "O volume de tickets de suporte pressionava o time e o custo de atendimento.",
        solution:
          "Um chatbot de suporte baseado em LLM, com APIs em Node.js e TypeScript e dados em PostgreSQL. Desenvolvido na Cortex IA.",
        impact: ["-40% de tickets de suporte"],
      },
      "erp-ai-agents": {
        title: "ERP com Agentes de IA",
        summary: "Agentes de IA para financeiro, RH e contabilidade em um ERP para pequenas empresas.",
        metric: { value: "-60%", label: "de custo de suporte" },
        problem:
          "Pequenas empresas dependem de suporte humano para rotinas de financeiro, RH e contabilidade.",
        solution:
          "Agentes de IA embutidos no ERP, atendendo as áreas de financeiro, RH e contabilidade. Desenvolvido na Cortex IA.",
        impact: ["-60% de custo de suporte nas áreas de financeiro, RH e contabilidade"],
      },
      "dynamic-pricing": {
        title: "IA de Precificação Dinâmica",
        summary: "Preços ajustados por sazonalidade, clima e mercado.",
        metric: { value: "+15%", label: "de faturamento no piloto" },
        problem:
          "Definir preços que acompanhem sazonalidade, clima e movimentos de mercado.",
        solution:
          "Um modelo de IA de precificação que considera sazonalidade, clima e mercado. Desenvolvido na Cortex IA.",
        impact: ["+15% de faturamento no piloto"],
      },
      "fgts-automation": {
        title: "Automação de Documentos e FGTS em Larga Escala",
        summary: "Automação em Python para um caso com cerca de 16 mil colaboradores.",
        metric: { value: "~1 semana", label: "para estruturar as evidências" },
        problem:
          "Um caso com cerca de 16 mil colaboradores e R$ 10 milhões de exposição exigia processar documentos e consultar o FGTS de cada pessoa em prazo curto.",
        solution:
          "Automação em Python para processamento de documentos e consulta de FGTS na Caixa, desenvolvida no Grupo Provac.",
        impact: ["Evidências estruturadas em cerca de 1 semana", "Escopo de ~16 mil colaboradores e R$ 10 milhões de exposição"],
      },
      "cicd-optimization": {
        title: "Otimização de Pipeline CI/CD",
        summary: "Pipeline de validação e liberação três vezes mais curto.",
        metric: { value: "30 → 10 min", label: "por entrega" },
        problem:
          "O ciclo de validação e liberação levava cerca de 30 minutos, o que desacelerava o time.",
        solution:
          "Reestruturação do pipeline de CI/CD, com Azure e Docker, feita na Clarifiquei.",
        impact: ["Validação e liberação de 30 para 10 minutos"],
      },
    },
  },
  experience: {
    heading: "Experiência",
    items: [
      {
        company: "OPAH IT",
        client: "cliente CVC",
        role: "Desenvolvedor Front-End Pleno",
        period: "Ago/2025 - Set/2026",
        bullets: [
          "React e React Native em uma plataforma de turismo de alto volume.",
          "Busca, reserva, pagamento e checkout, com foco em performance e acessibilidade.",
          "Evolução do CI/CD do time.",
        ],
      },
      {
        company: "HOP AI",
        role: "Desenvolvedor Full Stack Sênior",
        period: "Out/2025 - Mai/2026",
        bullets: [
          "Monitoramento operacional para mineração, com APIs e microsserviços em Node.js, Python e SQL.",
          "Pipelines de dados em Docker, com AWS e Azure.",
          "Rede neural para combinar caminhões e equipamentos: +20% de produtividade e -15% de combustível.",
        ],
      },
      {
        company: "Cortex IA",
        role: "Desenvolvedor Full Stack Sênior",
        period: "Mar/2024 - Mai/2026",
        bullets: [
          "Chatbot de suporte com IA: -40% de tickets.",
          "ERP com agentes de IA: -60% de custo de suporte.",
          "IA de precificação: +15% de faturamento no piloto. APIs em Node.js e TypeScript, PostgreSQL, MongoDB e AWS.",
        ],
      },
      {
        company: "Clarifiquei",
        role: "Engenheiro de Software II",
        period: "Mai/2025 - Dez/2025",
        bullets: [
          "Web e mobile com React, React Native e Node.",
          "CI/CD reduzido de 30 para 10 minutos, com Azure e Docker.",
        ],
      },
      {
        company: "Rede Industrial",
        client: "cliente Ambev",
        role: "Tech Lead / Desenvolvedor Full Stack Sênior",
        period: "Set/2024 - Mar/2025",
        bullets: [
          "Liderança técnica em projetos com Node.js, .NET, Python e SQL sobre Azure.",
          "Reestruturação do banco de dados: -25% de custo de cloud.",
        ],
      },
      {
        company: "Grupo Provac",
        role: "Desenvolvedor Full Stack Pleno",
        period: "Mar/2024 - Set/2024",
        bullets: [
          "Automação em Python para um caso com cerca de 16 mil colaboradores e R$ 10 milhões de exposição.",
          "Processamento de documentos e consulta de FGTS na Caixa, com evidências estruturadas em cerca de 1 semana.",
        ],
      },
      {
        company: "TOTVS",
        role: "Analista de Sistemas Júnior",
        period: "Ago/2023 - Mar/2024",
        bullets: [
          "SQL e PL/SQL.",
          "Automação da limpeza de cache em PDVs de 10 a 20 lojas: -50% no tempo de manutenção.",
        ],
      },
      {
        company: "Capgemini",
        role: "Desenvolvedor Full Stack Júnior",
        period: "Nov/2020 - Ago/2023",
        bullets: ["Projetos corporativos de grande escala com .NET, Node.js, React, Python e SQL."],
      },
    ],
  },
  stack: {
    heading: "Tecnologias",
    groups: {
      languages: "Linguagens",
      frontend: "Frontend",
      backend: "Backend",
      data: "Banco de Dados",
      cloud: "Cloud & DevOps",
      architecture: "Arquitetura e práticas",
    },
  },
  education: {
    heading: "Formação e Certificações",
    degreesLabel: "Formação",
    degrees: [
      { name: "Engenharia de Software", school: "Estácio", period: "previsão 2028" },
      { name: "Análise e Desenvolvimento de Sistemas", school: "UCA", period: "previsão 2026" },
    ],
    certsLabel: "Certificações",
    certs: [
      { name: "Computação em Nuvem", issuer: "IBM" },
      { name: "Arquitetura de Software e Design de Sistemas Modernos" },
      { name: "Gestão Ágil com Scrum, Kanban e Agile Escalado" },
      { name: "HTML5 e CSS3", issuer: "University of Michigan" },
      { name: "HTML, CSS e JavaScript", issuer: "Johns Hopkins University" },
    ],
  },
  languages: {
    heading: "Idiomas",
    items: [
      { name: "Espanhol", level: "nativo" },
      { name: "Português", level: "fluente" },
      { name: "Inglês", level: "intermediário" },
    ],
  },
  contact: {
    heading: "Vamos conversar?",
    text: "Estou aberto a oportunidades como engenheiro full stack sênior, em modelo remoto ou híbrido.",
    email: "Enviar e-mail",
  },
  footer: {
    rights: "Todos os direitos reservados.",
    built: "Feito com Next.js e TypeScript.",
  },
};
