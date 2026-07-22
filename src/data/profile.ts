export const person = {
  name: 'Jules Avila',
  title: 'Product · Engineering · Automation · Growth',
  tagline:
    'I build systems that scale, lead teams that ship, and turn manual work into automation — deep engineering roots, product thinking, and a growing focus on applied AI.',
  email: 'julioavilasaavedra@gmail.com',
  location: 'Merida, Mexico (LATAM, remote-first)',
  links: {
    linkedin: 'https://www.linkedin.com/in/jules-avila-74b72469/',
    github: 'https://github.com/JuliusCesarius',
    medium: 'https://medium.com/@smartjulius',
  },
};

export const now = {
  eyebrow: 'Right now',
  heading: 'Building DashOne.ai',
  body: 'I lead engineering and product for DashOne, building AI-native automation and distributed systems for LATAM mid-market and enterprise clients — including a multi-agent AI system (Dante) that runs our own operations, communications, and content with minimal human intervention.',
  href: 'https://dashone.ai',
  linkLabel: 'dashone.ai',
  previously: {
    body: 'Before that, I led product and technical architecture for iLuk AI from zero — an AI-native regulatory compliance platform automating KYC, KYB, and AML workflows — as Chief Product Officer and interim CTO.',
    href: 'https://iluk.ai',
    linkLabel: 'iluk.ai',
  },
};

export const metrics = [
  { value: '20+', label: 'years across engineering, product & AI' },
  { value: '$600K+', label: 'annual savings driven at 500 Global' },
  { value: '70%', label: 'onboarding time cut at RunaHR' },
  { value: '2x', label: 'active users grown while NPS held' },
  { value: '30', label: 'engineers led across orgs' },
  { value: '10+', label: 'countries operated across' },
];

export type Job = {
  title: string;
  company: string;
  companyHref?: string;
  period: string;
  region: string;
  bullets: string[];
};

export const jobs: Job[] = [
  {
    title: 'Cofounder & Engineering Lead',
    company: 'DashOne.ai',
    companyHref: 'https://dashone.ai',
    period: '2026 — Present',
    region: 'Merida, Mexico (LATAM)',
    bullets: [
      'Architected and built a multi-agent AI system (Dante) that runs operations, communications, and content generation autonomously across LinkedIn, Instagram, and WhatsApp.',
      'Lead delivery for AI-native automation and distributed systems engagements across LATAM mid-market and enterprise clients, from architecture through production.',
      'Built the technical delivery model — fixed-scope engagement structure, engineering process, and lead generation system — from scratch.',
    ],
  },
  {
    title: 'Cofounder, Chief Product Officer & Interim CTO',
    company: 'iLuk AI',
    companyHref: 'https://iluk.ai',
    period: '2025 — 2026',
    region: 'Mexico (Remote)',
    bullets: [
      'Defined the AI Workers architecture and agentic system design for an AI-native regulatory compliance platform (KYC, KYB, AML automation).',
      'Led engineering and product design teams through weekly execution cycles, translating business requirements into technical architecture.',
      'Focused on scalable automation, reducing manual work and improving release readiness across the platform.',
    ],
  },
  {
    title: 'Senior Technical Program Manager',
    company: '500 Global',
    period: '2023 — 2025',
    region: 'Silicon Valley (Remote, 10+ countries)',
    bullets: [
      'Owned Systems Operations end-to-end — architecture, integration, and reliability across 10+ platforms spanning CRM, legal, finance, and communications, deployed across 10+ countries.',
      'Delivered an automated investment lifecycle platform integrating CRM, Legal, and Finance, eliminating manual workflows and driving $600K+ in annual cost savings.',
      'Introduced CI/CD pipelines that cut deployment cycles from monthly to weekly, and established engineering OKRs for real accountability.',
      'Initiated a cloud-native data platform strategy to support analytics and compliance at scale.',
    ],
  },
  {
    title: 'Senior Technical Product Manager',
    company: 'Hola Cash',
    period: '2021 — 2023',
    region: 'Mexico City (Fintech, Regulated)',
    bullets: [
      'Defined and implemented service-oriented, domain-driven architecture to improve platform scalability and reliability.',
      'Led API strategy for external partners using OpenAPI standards, and drove infrastructure modernization with the CTO.',
      'Implemented CI/CD best practices and performance monitoring, improving deployment frequency and system resilience.',
    ],
  },
  {
    title: 'Product Manager',
    company: 'RunaHR',
    period: '2020 — 2021',
    region: 'Mexico City (Payroll Platform)',
    bullets: [
      'Led Core Product, SRE, and Internal Tools across 25+ engineers, owning architecture decisions, hiring, and delivery process.',
      'Cut onboarding time 70% (6–8 weeks to 2 weeks) and optimized delivery cycle time from 2 months to ~1.3 weeks.',
      'Migrated 5 monitoring tools into Datadog (25% cost reduction) and introduced Amplitude analytics for data-driven engineering decisions.',
    ],
  },
  {
    title: 'Tech Lead, Scrum Master & Agile Coach',
    company: 'GBM',
    period: '2013 — 2020',
    region: "Mexico City (Mexico's largest brokerage)",
    bullets: [
      'Led a 26-member engineering team through a full re-architecture and cloud migration of a regulated, customer-facing investment platform, zero tolerance for downtime.',
      'Implemented a BFF (Backend for Frontend) pattern and re-architected Application Services for scalability, maintainability, and performance.',
      'Delivered the company\'s first cloud-native platform with modern CI/CD, coaching the team through LeSS to sustain delivery beyond direct involvement.',
    ],
  },
];

export const earlier = {
  title: 'Full-Stack Developer, IT Manager & Project Lead',
  companies: 'AVIS Mexico · Softtek · Evoluciona Móvil · GICSA · Smartechnology',
  period: '2006 — 2013',
  body: 'Built and shipped scalable web platforms, booking engines, and partner web services. Led distributed engineering teams — the hands-on technical depth that underpins 20+ years of engineering judgment.',
};

export type CaseStudy = {
  company: string;
  title: string;
  problem: string;
  solution: string;
  impact: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    company: 'RunaHR',
    title: 'Cutting onboarding from 6 weeks to 2',
    problem:
      'Activation took 3–6 weeks, bottlenecking lead-to-customer conversion. New companies weren\'t reported correctly in billing, skewing metrics.',
    solution:
      'Redesigned the full user journey, improved the data-upload mechanism, and connected onboarding to Salesforce with real-time Slack tracking for Sales.',
    impact: ['Onboarding time cut to 2 weeks', 'Higher NPS and conversion', 'Accurate billing data'],
  },
  {
    company: 'GBM',
    title: 'Rebuilding a brokerage platform from scratch',
    problem:
      'The mutual fund platform was consultation-only, tech-stack was obsolete, and users were reluctant to change.',
    solution:
      'Complete re-design and re-engineering from scratch, migrated to cloud infrastructure with modern CI/CD, and shipped a robo-advisor (GBMAdvisor).',
    impact: ["First cloud platform for the company", 'Active users and AUM grew significantly', 'NPS recovered post-launch'],
  },
  {
    company: '500 Global',
    title: 'Automating the investment lifecycle',
    problem:
      'A fragmented, reactive tooling stack across CRM, legal, and finance created manual deal workflows and duplicated licenses.',
    solution:
      'Built the operating model and governance from scratch, consolidated tooling, and delivered an integrated investment lifecycle platform.',
    impact: ['$600K+ annual cost savings', 'Deployments moved monthly → weekly', 'Real OKR accountability for leadership'],
  },
];

export const philosophy = {
  eyebrow: 'How I work',
  heading: 'A few things I hold to be true',
  quotes: [
    'Excellence is a habit, not an act — quality is everyone\'s responsibility.',
    'Behind every great achievement is a team. I cannot and do not do it alone.',
    'All problems are people problems — human interactions are the key to good collaboration.',
    'Data informs, intuition guides.',
  ],
  mantra: 'Always keep learning, challenge the status quo, and lead by example.',
  hobbies: [
    'Trail running & hiking',
    'Taekwondo',
    'Bouldering',
    'Cooking',
    'Carpentry',
    'Making & listening to music',
  ],
};

export const education = [
  { degree: 'Master in IT Project Management', school: 'Universidad Tecmilenio, Mexico City', year: '2013–2015' },
  { degree: 'Computer Systems Engineer', school: 'Instituto Tecnológico de Mérida', year: '2001–2005' },
];

export const certifications = [
  'Certified ScrumMaster (CSM), Scrum Alliance',
  'Global Startup Labs Diploma, MIT',
  'Elements of AI, University of Helsinki',
];

export const languages = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'C2 Proficient' },
];

export const faqs = [
  {
    question: 'What does Jules Avila do?',
    answer:
      'Jules Avila is an engineering and product leader with 20+ years building distributed systems, leading technical teams, and embedding automation and AI into how organizations operate. He currently leads engineering and product at DashOne.ai, building AI-native automation and distributed systems for LATAM mid-market and enterprise clients.',
  },
  {
    question: 'Is Jules Avila the same person as Julio Avila?',
    answer:
      "Yes. Jules Avila is Julio Avila's professional operating name — the same person, the same 20+ year track record across GBM, RunaHR, Hola Cash, 500 Global, iLuk AI, and DashOne.ai.",
  },
  {
    question: 'What industries has Jules Avila worked in?',
    answer:
      'Fintech and payments, payroll and HR tech, investment platforms, SaaS, and AI-native regulatory compliance (KYC, KYB, AML), across LATAM and US markets.',
  },
  {
    question: "What is Jules Avila's engineering background?",
    answer:
      '20+ years combining hands-on software engineering with product and technical program leadership — starting as a full-stack developer in 2006, later leading distributed-systems re-architectures and engineering teams of 25-30 people at RunaHR and GBM, and running global technology programs across 10+ countries at 500 Global.',
  },
  {
    question: 'How can I get in touch with Jules Avila?',
    answer: `Email ${person.email}, or reach out on LinkedIn (${person.links.linkedin}). His resume is also downloadable at julesavila.com/resume.`,
  },
];
