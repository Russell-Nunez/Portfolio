import type { Content } from "./types";


export const en: Content = {
  htmlLang: "en",
  meta: {
    title: "Russell Nunez | Senior Full Stack Software Engineer",
    description:
      "Senior full stack software engineer working with Node.js, TypeScript, React, React Native and Python. High-availability applications, microservices and AI solutions for CVC, Ambev and TOTVS.",
    ogTitle: "Russell Antonio Nunez Godoy",
    ogSubtitle: "Senior Full Stack Software Engineer",
  },
  nav: {
    about: "About",
    impact: "Impact",
    projects: "Projects",
    experience: "Experience",
    stack: "Tech",
    contact: "Contact",
    menu: "Main navigation",
    skip: "Skip to content",
  },
  ui: {
    theme: "Toggle theme",
    language: "Language",
    back: "Back to projects",
    next: "Next project",
    demo: "View demo",
    tryIt: "Try it",
    tour: "Video tour",
    gallery: "Images",
    code: "View code",
    caseStudy: "Case study",
    problem: "Problem",
    solution: "Solution",
    impact: "Impact",
    stack: "Stack",
  },
  hero: {
    title: "Senior Full Stack Software Engineer",
    tagline: "High-availability applications and AI solutions, with results you can measure.",
    location: "Araraquara, SP, Brazil · Open to remote and hybrid",
    resume: "Download resume",
    contact: "Get in touch",
  },
  about: {
    heading: "About",
    paragraphs: [
      "I am a senior full stack software engineer. I build high-availability applications, APIs, microservices and complex integrations with Node.js, TypeScript, React, React Native and Python.",
      "In recent years I took AI solutions to production: a support chatbot that cut 40% of tickets, AI agents in an ERP that reduced support costs by 60%, and a neural network that raised the productivity of a mining operation by 20%.",
      "I have worked on projects for CVC, Ambev and TOTVS, and I have served as technical lead. I like work that can be measured in numbers and code the next developer can maintain.",
    ],
  },
  companies: {
    label: "Delivered for",
    names: ["CVC", "Ambev", "TOTVS", "Capgemini"],
  },
  impact: {
    heading: "Impact",
    items: [
      { value: "+20%", label: "productivity in a mining operation, with a neural network for fleet allocation" },
      { value: "-40%", label: "support tickets with an AI chatbot" },
      { value: "-60%", label: "support cost with AI agents inside an ERP" },
      { value: "-25%", label: "cloud cost after restructuring the database" },
      { value: "30 → 10 min", label: "CI/CD validation and release cycle" },
      { value: "-50%", label: "maintenance time on point-of-sale systems, with automated cache cleanup" },
      { value: "+15%", label: "revenue in the AI dynamic pricing pilot" },
    ],
  },
  projects: {
    heading: "Projects",
    viewCase: "Read case study",
    items: {
      "casa-aurora": {
        title: "Casa Aurora: interactive 3D floor plan",
        summary: "A two-story house with a pool and gourmet area, explorable in 3D right in the browser.",
        metric: { value: "3D", label: "interactive in the browser" },
        problem: "2D floor plans make it hard to see proportions, circulation and how the house behaves by day and by night.",
        solution:
          "A real-time 3D scene with removable floors, per-room cameras, a day/night cycle, lights, doors and a guided tour. Built with React, Three.js and React Three Fiber.",
        impact: ["Guided tour through the rooms", "Day/night, floor and facade toggles", "Runs in the browser, no install"],
      },
      gfitpro: {
        title: "GFitPro: gym app for students and trainers",
        summary: "Mobile and web app with workouts, ranking, body assessments, nutrition and invoices, for two roles.",
        metric: { value: "2 roles", label: "student and trainer" },
        problem: "Gyms tend to spread workouts, body assessments, billing and communication across different tools, and students lose track of their own progress.",
        solution: "A React Native app with Expo that runs on iOS, Android and web. Students follow workouts, XP and ranking, assessments with date-to-date comparison, nutrition, invoices and files. Trainers manage students and record assessments. Authentication is a NestJS API with Prisma and SQLite. The UI follows a custom design system with tokens, condensed typography and animated components.",
        impact: ["Complete student and trainer flows, including new assessment and comparison", "Custom design system applied to every screen", "Real login against a NestJS API; the rest of the data is still mocked"],
        modules: [{ title: "Home", body: "Daily summary with rank, streak and shortcuts to what matters." }, { title: "Workout", body: "Exercises with sets, load, estimated time and XP per session." }, { title: "Ranking and XP", body: "Levels, achievements and position among students to keep motivation up." }, { title: "Nutrition", body: "Calories, macros, hydration and logged meals, with a daily goal." }, { title: "Body assessment", body: "Body composition, measurements and health, explained in plain language." }, { title: "Compare assessments", body: "Pick two dates and see weight, fat and muscle evolution." }, { title: "Invoices", body: "Plan, due date and payment history with status filters." }, { title: "Files", body: "Plans, exams and progress photos organized by category." }, { title: "Trainer: students", body: "Student list with search, filters and reassessment alerts." }, { title: "Trainer: student", body: "Student profile, latest assessment and a shortcut to record a new one." }],
      },
      "edit-ai": {
        title: "Edit AI: AI video studio",
        summary: "Captions, cuts, editing, covers, translation and audio cleanup in one place, running on your PC.",
        metric: { value: "7", label: "video tools" },
        problem: "Captioning and editing videos for social media takes several tools, subscriptions and time repeating the same steps.",
        solution: "A local pipeline with faster-whisper and FFmpeg, exposed by a FastAPI service with async jobs and history. Express mode uses Gemini to transcribe, correct, translate, suggest cuts and generate covers, with a Redis cache to avoid reprocessing and wasted credits. Captions are burned into the MP4 with ready-made styles. The front end is React, Vite and Tailwind, and everything starts with Docker Compose.",
        impact: ["Burned-in captions with box, outline, shadow and neon styles", "Automatic editing that cuts silence and filler, with transitions", "Local processing, with optional cloud AI"],
        modules: [{ title: "Captions", body: "Ready-made box, outline, shadow and neon styles, with a vertical preview." }, { title: "Edit", body: "Smart cutting of silence and filler, with adjustable aggressiveness and transitions." }, { title: "Create cover", body: "A 16:9 cover generated from a video scene, with a phrase and variations." }, { title: "Clean audio", body: "Removes noise and normalizes volume on your PC, with adjustable strength." }, { title: "Translate captions", body: "Translates SRT line by line, keeping each cue's timing." }],
      },
      "fleet-optimization": {
        title: "Fleet Optimization Neural Network",
        summary: "Truck and equipment allocation in a mining operation, driven by a neural network.",
        metric: { value: "+20%", label: "productivity" },
        problem:
          "In mining operations, matching trucks and equipment efficiently directly affects productivity and fuel consumption.",
        solution:
          "A neural network that matches trucks and equipment, backed by Docker data pipelines running on AWS and Azure. Part of the operational monitoring platform at HOP AI.",
        impact: ["+20% productivity", "-15% fuel consumption"],
      },
      "support-chatbot": {
        title: "AI Support Chatbot",
        summary: "Automated support powered by an LLM, integrated with the platform APIs.",
        metric: { value: "-40%", label: "tickets" },
        problem: "The volume of support tickets put pressure on the team and on support costs.",
        solution:
          "An LLM-based support chatbot, with APIs in Node.js and TypeScript and data in PostgreSQL. Built at Cortex IA.",
        impact: ["-40% support tickets"],
      },
      "erp-ai-agents": {
        title: "ERP with AI Agents",
        summary: "AI agents for finance, HR and accounting in an ERP for small businesses.",
        metric: { value: "-60%", label: "support cost" },
        problem: "Small businesses rely on human support for finance, HR and accounting routines.",
        solution: "AI agents embedded in the ERP, covering finance, HR and accounting. Built at Cortex IA.",
        impact: ["-60% support cost across finance, HR and accounting"],
      },
      "dynamic-pricing": {
        title: "Dynamic Pricing AI",
        summary: "Prices adjusted by seasonality, weather and market conditions.",
        metric: { value: "+15%", label: "revenue in the pilot" },
        problem: "Setting prices that follow seasonality, weather and market movements.",
        solution: "An AI pricing model that considers seasonality, weather and market. Built at Cortex IA.",
        impact: ["+15% revenue in the pilot"],
      },
      "fgts-automation": {
        title: "Large-scale Document and FGTS Automation",
        summary: "Python automation for a case involving about 16,000 employees.",
        metric: { value: "~1 week", label: "to structure the evidence" },
        problem:
          "A case involving about 16,000 employees and R$ 10 million in exposure required processing documents and checking each person's FGTS (Brazilian severance fund) on a short deadline.",
        solution:
          "Python automation for document processing and FGTS lookups at Caixa, built at Grupo Provac.",
        impact: ["Evidence structured in about 1 week", "Scope of ~16,000 employees and R$ 10 million in exposure"],
      },
      "cicd-optimization": {
        title: "CI/CD Pipeline Optimization",
        summary: "A validation and release pipeline three times shorter.",
        metric: { value: "30 → 10 min", label: "per delivery" },
        problem: "The validation and release cycle took about 30 minutes, slowing the team down.",
        solution: "A restructured CI/CD pipeline, using Azure and Docker, delivered at Clarifiquei.",
        impact: ["Validation and release from 30 to 10 minutes"],
      },
    },
  },
  experience: {
    heading: "Experience",
    items: [
      {
        company: "OPAH IT",
        client: "client CVC",
        role: "Mid-level Front-End Developer",
        period: "Aug 2025 - Sep 2026",
        bullets: [
          "React and React Native on a high-volume travel platform.",
          "Search, booking, payment and checkout, with a focus on performance and accessibility.",
          "Improved the team's CI/CD.",
        ],
      },
      {
        company: "HOP AI",
        role: "Senior Full Stack Developer",
        period: "Oct 2025 - May 2026",
        bullets: [
          "Operational monitoring for mining, with APIs and microservices in Node.js, Python and SQL.",
          "Docker data pipelines on AWS and Azure.",
          "Neural network to match trucks and equipment: +20% productivity and -15% fuel.",
        ],
      },
      {
        company: "Cortex IA",
        role: "Senior Full Stack Developer",
        period: "Mar 2025 - Dec 2025",
        bullets: [
          "AI support chatbot: -40% tickets.",
          "ERP with AI agents: -60% support cost.",
          "AI pricing: +15% revenue in the pilot. APIs in Node.js and TypeScript, PostgreSQL, MongoDB and AWS.",
        ],
      },
      {
        company: "Clarifiquei",
        role: "Software Engineer II",
        period: "May 2025 - Dec 2025",
        bullets: [
          "Web and mobile with React, React Native and Node.",
          "CI/CD cut from 30 to 10 minutes, with Azure and Docker.",
        ],
      },
      {
        company: "Rede Industrial",
        client: "client Ambev",
        role: "Tech Lead / Senior Full Stack Developer",
        period: "Sep 2024 - Mar 2025",
        bullets: [
          "Technical leadership on projects with Node.js, .NET, Python and SQL on Azure.",
          "Database restructuring: -25% cloud cost.",
        ],
      },
      {
        company: "Grupo Provac",
        role: "Mid-level Full Stack Developer",
        period: "Mar 2024 - Sep 2024",
        bullets: [
          "Python automation for a case with about 16,000 employees and R$ 10 million in exposure.",
          "Document processing and FGTS lookups at Caixa, with evidence structured in about 1 week.",
        ],
      },
      {
        company: "TOTVS",
        role: "Junior Systems Analyst",
        period: "Aug 2023 - Mar 2024",
        bullets: [
          "SQL and PL/SQL.",
          "Automated cache cleanup on point-of-sale systems across 10 to 20 stores: -50% maintenance time.",
        ],
      },
      {
        company: "Capgemini",
        role: "Junior Full Stack Developer",
        period: "Nov 2020 - Aug 2023",
        bullets: ["Large-scale enterprise projects with .NET, Node.js, React, Python and SQL."],
      },
    ],
  },
  stack: {
    heading: "Tech",
    groups: {
      languages: "Languages",
      frontend: "Frontend",
      backend: "Backend",
      data: "Databases",
      cloud: "Cloud & DevOps",
      architecture: "Architecture and practices",
    },
  },
  education: {
    heading: "Education and Certifications",
    degreesLabel: "Education",
    degrees: [
      { name: "Software Engineering", school: "Estácio", period: "expected 2028" },
      { name: "Systems Analysis and Development", school: "UCA", period: "expected 2026" },
    ],
    certsLabel: "Certifications",
    certs: [
      { name: "Cloud Computing", issuer: "IBM" },
      { name: "Software Architecture and Modern System Design" },
      { name: "Agile Management: Scrum, Kanban and Scaled Agile" },
      { name: "HTML5 and CSS3", issuer: "University of Michigan" },
      { name: "HTML, CSS and JavaScript", issuer: "Johns Hopkins University" },
    ],
  },
  languages: {
    heading: "Languages",
    items: [
      { name: "Spanish", level: "native" },
      { name: "Portuguese", level: "fluent" },
      { name: "English", level: "intermediate" },
    ],
  },
  contact: {
    heading: "Let's talk",
    text: "I am open to senior full stack engineering roles, remote or hybrid.",
    email: "Send an email",
  },
  footer: {
    rights: "All rights reserved.",
    built: "Built with Next.js and TypeScript.",
  },
};
