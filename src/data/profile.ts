export const person = {
  name: 'Jules Avila',
  title: 'Operator · Product & Engineering Leader',
  tagline:
    "I take full ownership of a company, not a function — I make the business sell, the product advance, the team perform, and the numbers move.",
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
  body: "I founded and run DashOne, a Forward Deployed Engineering boutique for LATAM mid-market and enterprise clients. I own sales, delivery, hiring, pricing, and P&L — and I built a multi-agent AI chief of staff (Dante) that runs ops, comms, and content with minimal human intervention.",
  href: 'https://dashone.ai',
  linkLabel: 'dashone.ai',
  previously: {
    body: "Before that, I co-founded iLuk AI from zero — an AI-native regulatory compliance platform specializing in KYC, KYB, and AML automation — as Chief Product Officer and interim CTO.",
    href: 'https://iluk.ai',
    linkLabel: 'iluk.ai',
  },
};

export const metrics = [
  { value: '20+', label: 'years building & scaling tech businesses' },
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
    title: 'Cofounder & CEO Operator',
    company: 'DashOne.ai',
    companyHref: 'https://dashone.ai',
    period: '2026 — Present',
    region: 'Merida, Mexico (LATAM)',
    bullets: [
      'Founded and operate a Forward Deployed Engineering boutique serving LATAM mid-market and enterprise clients — own sales, delivery, hiring, pricing, positioning, and P&L.',
      'Designed the go-to-market model, fixed-scope service packages (4–12 weeks), and lead generation system (AI Readiness Assessment) from scratch.',
      'Built and run a multi-agent AI chief of staff managing operations, communications, and content across LinkedIn, Instagram, and WhatsApp.',
    ],
  },
  {
    title: 'Cofounder, Chief Product Officer & Interim CTO',
    company: 'iLuk AI',
    companyHref: 'https://iluk.ai',
    period: '2025 — 2026',
    region: 'Mexico (Remote)',
    bullets: [
      'Co-built an AI-native regulatory compliance platform from zero: operating model, product architecture, team structure, and go-to-market, simultaneously.',
      'Specialized in KYC, KYB, and AML automation, embedding regulatory compliance directly into AI-native workflows for financial and regulated industries.',
      'Owned product, engineering, and business decisions end-to-end — no functional silos.',
    ],
  },
  {
    title: 'Senior Technical Program Manager — de facto COO of Programs',
    company: '500 Global',
    period: '2023 — 2025',
    region: 'Silicon Valley (Remote, 10+ countries)',
    bullets: [
      'Sole accountable leader for technology, systems, and global platform programs across a global investment firm operating in 10+ countries.',
      'Owned Systems Operations end-to-end — Salesforce, HubSpot, and 10+ integrated platforms across CRM, legal, finance, and comms.',
      'Delivered an automated investment lifecycle platform integrating CRM, Legal, and Finance, driving $600K+ in annual cost savings.',
      'Cut deployment cycles from monthly to weekly and introduced OKRs that gave leadership real accountability for the first time.',
    ],
  },
  {
    title: 'Senior Technical Program Manager — Payments Platform Operator',
    company: 'Hola Cash',
    period: '2021 — 2023',
    region: 'Mexico City (Fintech, Regulated)',
    bullets: [
      'Owned the full payments product portfolio — recurring payments, subscriptions, payment links, fraud dashboard, merchant portal — in a regulated environment.',
      'Aligned Engineering, UX, Legal, Risk, Fraud, and Finance into a single delivery cadence with shared metrics.',
      'Drove architecture decisions (SOA, DDD, OpenAPI) that improved scalability without re-platforming.',
    ],
  },
  {
    title: 'Technical Program & Product Manager — Platform Operator',
    company: 'RunaHR',
    period: '2020 — 2021',
    region: 'Mexico City (Payroll Platform)',
    bullets: [
      'Ran Core Product, SRE, and Internal Tools across 25+ engineers — owned delivery, hiring, tooling, and operating efficiency.',
      'Cut customer onboarding from 6–8 weeks to 2 weeks (70% reduction), removing the biggest friction point in the sales cycle.',
      'Consolidated 5 monitoring tools into Datadog (25% cost cut) and introduced Amplitude analytics for data-driven decisions.',
    ],
  },
  {
    title: 'Tech Lead, Scrum Master & Agile Coach — Investment Platform Rebuild',
    company: 'GBM',
    period: '2013 — 2020',
    region: "Mexico City (Mexico's largest brokerage)",
    bullets: [
      'Led a 26-member team through a full re-architecture and cloud migration of the GBMfondos investment platform, zero tolerance for downtime.',
      'Drove KYC, KYB, and AML compliance automation across onboarding and transaction workflows.',
      'Grew active users and AUM post-migration while recovering NPS, coaching the team through LeSS.',
    ],
  },
];

export const earlier = {
  title: 'Full-Stack Developer, IT Manager & Project Lead',
  companies: 'AVIS Mexico · Softtek · Evoluciona Móvil · GICSA · Smartechnology',
  period: '2006 — 2013',
  body: 'Built and shipped scalable web platforms, booking engines, and partner web services. Led distributed engineering teams — the hands-on technical depth that underpins 20+ years of operating judgment.',
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
  eyebrow: 'How I operate',
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
