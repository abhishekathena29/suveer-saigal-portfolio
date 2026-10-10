export const RESUME_URL = '/Resume%20-%20Suveer%20Saigal.pdf'
export const NEEV_URL = 'https://www.neevventures.in/'
export const EMAIL = 'suveersaigal09@gmail.com'

export const NAV = [
  { path: '/neev-ventures', label: 'Neev Ventures' },
  { path: '/experience', label: 'Experience' },
  { path: '/research', label: 'Research' },
  { path: '/honors', label: 'Honors' },
  { path: '/press', label: 'Press' },
  { path: '/resume', label: 'Resume' },
  { path: '/contact', label: 'Contact' },
]

export const STATS = [
  { value: '20,000', label: 'women reached through outreach' },
  { value: '1,000+', label: 'women entrepreneurs engaged directly' },
  { value: '6', label: 'Indian states' },
  { value: 'Top 0.4%', label: 'Blue Ocean Competition, 173 countries' },
]

export const NEEV_PILLARS = [
  {
    title: 'Financial literacy',
    text: 'Small-group workshops on digital payments, savings, borrowing and government schemes, in Hindi and English.',
  },
  {
    title: 'Enterprise building',
    text: 'Turning local skills into products and steady, dignified income, from product development to legal onboarding.',
  },
  {
    title: 'Market access',
    text: 'Branding, packaging, storytelling and last-mile market reach with partners like Frontier Markets.',
  },
]

export const NEEV_MILESTONES = [
  'Grew from a 150-woman artisan pilot in Narnaul to 1,000+ women entrepreneurs and artisans.',
  'Two-year MoU with the Indian Institute of Governance and Leadership to archive Neev training modules.',
  'ODOP implementation framework built with the Narnaul SDM office, scaled toward 5,000+ women.',
  'Partners: Navjyoti India Foundation, India Vision Foundation, Nisarg Foundation, Frontier Markets, HIPA, IIGL.',
]

export const GALLERY = [
  { src: '/images/neev-hero.jpg', alt: 'Suveer in conversation with women from a self-help group' },
  { src: '/images/session-1.jpg', alt: 'A Neev Ventures workshop for women entrepreneurs' },
  { src: '/images/navjeevan-session.jpg', alt: 'Suveer leading a Project Navjeevan session' },
  { src: '/images/documentary.jpeg', alt: 'A woman entrepreneur with her packaged food products' },
  { src: '/images/session-2.jpg', alt: 'Financial literacy training in progress' },
  { src: '/images/workshop-1.jpg', alt: 'Workshop participants holding their certificates' },
  { src: '/images/navjeevan.jpeg', alt: 'The team at a newly launched tailoring unit' },
  { src: '/images/workshop-3.jpg', alt: 'Women attending a Neev Ventures training session' },
]

export type Role = {
  title: string
  org: string
  period: string
  points: string[]
}

export const LEADERSHIP: Role[] = [
  {
    title: 'Founder',
    org: 'Project Navjeevan',
    period: 'Jan 2026 – Present',
    points: [
      'Mentors formerly incarcerated women rebuilding economic independence; 40 women mentored and ₹2 lakh raised in seed support.',
      'Participants now earn about ₹6,000–8,000 a month, from zero prior income.',
      'Directed the documentary “Rebuilding Freedom”, recognized at three film festivals and adopted by India Vision Foundation.',
    ],
  },
  {
    title: 'Intern, Research & Documentation',
    org: 'Haryana Institute of Public Administration',
    period: 'Summer 2026',
    points: [
      'Designed a bilingual SHG Digital Literacy & Scheme Navigation Module, now part of HIPA’s mandatory officer training.',
      'Recognized by the Director General, HIPA, for capacity-building work.',
    ],
  },
  {
    title: 'District-Level ODOP Pilot',
    org: 'Office of the SDM, Narnaul',
    period: 'Sep 2025 – Feb 2026',
    points: [
      'Worked with Aniruddh Yadav, IAS, on an ODOP framework for women-led SHGs, with train-the-trainer workshops.',
    ],
  },
  {
    title: 'Intern',
    org: 'Passionfruit AI, New York',
    period: 'June 2025',
    points: ['Market research, competitor analysis and content planning for an AI discoverability company.'],
  },
  {
    title: 'Venture Capital Intern',
    org: 'SailThru Ventures, New Delhi',
    period: 'Dec 2024 – Jan 2025',
    points: ['Evaluated Shark Tank India startups and presented investment memos to the investment committee.'],
  },
  {
    title: 'Secretary, Social Initiatives · Head, Entrepreneurship Society',
    org: 'The Shri Ram School',
    period: '2025 – Present',
    points: [
      'Led a Labour Day drive for 120 support staff and a school-supplies relief drive for children in Pahalgam.',
      'Runs weekly workshops, simulations and pitch competitions for 40 students.',
    ],
  },
]

export const RESEARCH = [
  {
    tag: 'Publication',
    title: 'Empirical Study of the Effects of One District One Product (ODOP) Initiative on Indian Export Performance: A Panel Data Analysis',
    meta: 'International Journal of Social Science Research and Review, Vol. 9, Issue 1 (2026)',
  },
  {
    tag: 'Presentation',
    title: 'Sigma Xi Student Research Showcase 2026',
    meta: 'Selected to present the ODOP research at a peer-reviewed international forum',
  },
  {
    tag: 'Research Assistant',
    title: 'Prof. Daniel Fehder, Georgia Tech Scheller College of Business',
    meta: 'Ongoing work on the economics of entrepreneurship and innovation',
  },
]

export const PROGRAMS = [
  'Wharton Global Youth Program, Essentials of Entrepreneurship (2025)',
  'Stanford Pre-Collegiate Studies, Strategic Marketing (2024)',
  'Ashoka University Horizons, Being Entrepreneurial (2024)',
  'Harvard Youth Leadership Program (2023)',
]

export const HONORS = [
  { title: 'NSDC Youth Contributor', org: 'National Skill Development Corporation', year: '2026' },
  { title: 'BRICS CCI Young Fellow', org: 'Changemaker Award in Social Impact', year: '2026' },
  { title: 'Young Entrepreneur Rising Star', org: 'Atmanirbhar MSME & Startup Awards', year: '2026' },
  { title: 'CREST Gold Award', org: 'British Science Association', year: '2026' },
  { title: 'Blue Ocean Top 100', org: 'Out of 23,000 entrants from 173 countries', year: '2025' },
  { title: 'National Economics Olympiad', org: 'SRCC, All India Rank 43', year: '2025' },
  { title: 'Youngest Entrepreneur Mentor', org: 'Navjyoti India Foundation', year: '' },
  { title: 'IMO Southeast Asia, Bronze', org: 'National level', year: '2024' },
]

export const ACADEMICS = [
  { value: '1530', label: 'SAT' },
  { value: '5 × 4', label: 'AP Psych, Micro, Macro, Calc BC' },
  { value: '98.6%', label: 'Grade 10, ICSE' },
  { value: 'Top 0.1%', label: 'Nationally in 4 ICSE subjects' },
]

export const PRESS = [
  {
    outlet: 'Outlook India',
    title: 'Neev Ventures: How Suveer Saigal Built a Bridge for 20,000 Women',
    url: 'https://share.google/x2WKqtAO2V6OURRe5',
  },
  {
    outlet: 'Impressive Times',
    title: 'When No One Else Would, He Did. Suveer Saigal is rebuilding lives one woman at a time.',
    url: 'https://share.google/uqWWqUJqM9uREVZgf',
  },
]

export const BEYOND = [
  { title: 'Stage 4 Change', text: 'Co-founded a student theatre initiative; raised ₹1.6 lakh for 175 children with special needs.' },
  { title: 'Guitar', text: 'Nine years of training, Trinity Rock & Pop Grade 6, performed at India International Centre.' },
  { title: 'Drama', text: 'Lead roles on stage; LAMDA Grade 7 with Merit.' },
  { title: 'Languages', text: 'English, Hindi and Spanish (DELE A1 & A2).' },
]

export const HERO_TAGS = ['Social Entrepreneur', 'Researcher', 'Economics', 'Filmmaker', 'Changemaker']

export type ResumeEntry = {
  title: string
  org?: string
  period?: string
  points?: string[]
}

export const RESUME = {
  education: {
    school: 'The Shri Ram School, Moulsari, Gurugram',
    board: 'Council for the Indian School Certificate Examinations',
    period: '2013 – Present',
    grades: ['Grade 12 · ISC Curriculum', 'Grade 10 · 98.6%', 'Grade 9 · 93.3%'],
    points: [
      'Consistently ranked among the top three students through high school; Scholar of the Year and 30+ Subject Excellence and Subject Topper recognitions.',
      'CISCE Certificates of Merit for ranking in the top 0.1% nationally in History, Civics & Geography, English, and Spanish (ICSE 2025).',
    ],
  },
  testing: [
    { label: 'SAT', value: '1530', detail: 'Math 780 · Reading & Writing 750' },
    { label: 'AP Psychology', value: '5' },
    { label: 'AP Microeconomics', value: '5' },
    { label: 'AP Macroeconomics', value: '5' },
    { label: 'AP Calculus BC', value: '5' },
  ],
  honors: [
    { title: 'NSDC Youth Contributor', org: 'Entrepreneurship & Livelihood Development, National Skill Development Corporation, Ministry of Skill Development & Entrepreneurship', period: '2026' },
    { title: 'BRICS CCI Young Fellow', org: 'Changemaker Award in Social Impact and Entrepreneurship; among the youngest participants', period: '2026' },
    { title: 'Young Entrepreneur Rising Star Award', org: 'Atmanirbhar MSME & Startup Awards, Chamber of Indian Micro, Small & Medium Enterprises', period: '2026' },
    { title: 'Blue Ocean Student Entrepreneur Competition', org: 'Top 100 Finalist, top 0.43% of 23,000 participants from 173 countries' },
    { title: 'CREST Gold Award', org: 'British Science Association, for research on the One District One Product initiative', period: '2026' },
    { title: 'National Economics Olympiad', org: 'Shri Ram College of Commerce, All India Rank 43', period: '2025' },
    { title: 'Youngest Entrepreneur Mentor Award', org: 'Navjyoti India Foundation, presented by Dr. Kiran Bedi' },
    { title: 'Bronze Medal, International Math Olympiad Southeast Asia', org: 'National Level; DELE Spanish A1 & A2 Diplomas, Instituto Cervantes', period: '2024' },
    { title: 'Prayukti Award & School Innovator Award', org: 'Lateral Thinking; Innovator Award for Neev Ventures, The Shri Ram School' },
  ] as ResumeEntry[],
  leadership: [
    {
      title: 'Founder',
      org: 'Neev Ventures',
      period: 'Jan 2025 – Present',
      points: [
        'Founded a social enterprise advancing women-led Self-Help Groups and underserved women entrepreneurs through financial literacy, market access, branding, digital enablement, and enterprise-development support.',
        'Expanded direct engagement from a 150+ woman artisan pilot in Narnaul to 1,000+ women entrepreneurs, artisans, and community members, with broader outreach approaching 20,000 beneficiaries.',
        'Secured a two-year MoU with the Indian Institute of Governance and Leadership to archive and integrate Neev training modules into its institutional repository.',
        'Developed an ODOP implementation framework with the Narnaul SDM office; SHG toolkit components documented by HIPA as practitioner references.',
        'Built partnerships with Navjyoti India Foundation, India Vision Foundation, Nisarg Foundation, Frontier Markets, HIPA, and IIGL; recognized by NSDC.',
      ],
    },
    {
      title: 'Founder',
      org: 'Project Navjeevan',
      period: 'Jan 2026 – Present',
      points: [
        'Founded an enterprise-development and mentorship initiative supporting formerly incarcerated women in rebuilding economic independence.',
        'Mentored 40 women and raised ₹2 lakh in seed support for micro-enterprises in tailoring, beauty services, and food; participants now earn ₹6,000–₹8,000 monthly from zero prior income.',
        'Directed and produced the documentary “Rebuilding Freedom”, adopted by India Vision Foundation as a flagship public-awareness campaign.',
        'Best Young Filmmaker Under 18 (Indian Independent Film Festival); Best Student Short Film (Crown Wood International Film Festival); Honorable Mention (Makizhmithran International Film Festival).',
      ],
    },
    {
      title: 'Student Council Secretary, Social Initiatives',
      org: 'The Shri Ram School',
      period: '2025 – 2026',
      points: [
        'Organized a school-wide Labour Day collection for approximately 120 support staff and a technology and online-safety session for staff.',
        'Led a relief drive for schoolchildren in Pahalgam, Kashmir, mobilizing stationery, bags, water bottles, and essential supplies.',
      ],
    },
    {
      title: 'Head, Entrepreneurship Society',
      org: 'The Shri Ram School',
      period: '2025 – Present',
      points: ['Led weekly workshops, business simulations, and pitch competitions for 40 students.'],
    },
  ] as ResumeEntry[],
  experience: [
    {
      title: 'Intern, Research & Documentation Division',
      org: 'Haryana Institute of Public Administration (HIPA)',
      period: 'Summer 2026',
      points: [
        'Designed a bilingual SHG Digital Literacy & Scheme Navigation Module, integrated into HIPA’s mandatory officer-training cycle.',
        'Recognized by the Director General, HIPA, for contributions to capacity-building and practitioner-oriented documentation.',
      ],
    },
    {
      title: 'District-Level ODOP Pilot',
      org: 'Office of the Sub-Divisional Magistrate, Narnaul',
      period: 'Sep 2025 – Feb 2026',
      points: [
        'Worked with Aniruddh Yadav, IAS, to develop an ODOP framework for women-led SHGs; conducted train-the-trainer workshops.',
        'Framework scaled by the SDM office toward 5,000+ women and forwarded to HIPA for state-level evaluation.',
      ],
    },
    {
      title: 'Intern',
      org: 'Passionfruit AI, New York',
      period: 'June 2025',
      points: [
        'Market research, competitor-landscape analysis, content planning, and performance-data review for an AI-driven SEO, GEO and AEO company.',
      ],
    },
    {
      title: 'Venture Capital Intern',
      org: 'SailThru Ventures, New Delhi',
      period: 'Dec 2024 – Jan 2025',
      points: [
        'Evaluated pitches and business models of startups featured on Shark Tank India; prepared investment memos and presented to the investment committee.',
      ],
    },
  ] as ResumeEntry[],
  research: [
    {
      title: '“Empirical Study of the Effects of One District One Product (ODOP) Initiative on Indian Export Performance: A Panel Data Analysis”',
      org: 'International Journal of Social Science Research and Review, Vol. 9, Issue 1 (2026)',
    },
    { title: 'Sigma Xi Student Research Showcase 2026', org: 'Selected to present the ODOP research at a peer-reviewed international forum' },
    { title: 'Research Assistant to Assoc. Prof. Daniel Fehder', org: 'Georgia Institute of Technology, Scheller College of Business; economics of entrepreneurship and innovation' },
  ] as ResumeEntry[],
  programs: [
    { title: 'Wharton Global Youth Program', org: 'Essentials of Entrepreneurship', period: '2025', points: ['Co-developed “Nutrify”, a fitness-band concept; placed second in final team pitches.'] },
    { title: 'Stanford Pre-Collegiate Studies', org: 'Strategic Marketing', period: '2024', points: ['Co-developed a Gen Z repositioning strategy for Listerine; received a commendation letter.'] },
    { title: 'Ashoka University Horizons', org: 'Being Entrepreneurial', period: '2024', points: ['Co-developed an AI-enabled mental-health app concept informed by a 50-participant survey.'] },
    { title: 'Harvard Youth Leadership Program', period: '2023', points: ['Co-developed a financial-literacy initiative for marginalized communities.'] },
  ] as ResumeEntry[],
  extracurriculars: [
    { title: 'Co-Founder, Stage 4 Change', period: '2025 – Present', points: ['Directed three David Ives productions; raised ₹1.6 lakh to support 175 children with special needs.'] },
    { title: 'Guitar, Trinity Rock & Pop', period: '2017 – Present', points: ['Grade 6 certified; performed at India International Centre; preparing for Grade 8.'] },
    { title: 'Drama, LAMDA', period: '2024 – Present', points: ['Lead roles in school and independent productions; LAMDA Grade 7 with Merit.'] },
    { title: 'Founder, Stretchimals', period: '2023 – Present', points: ['Dropshipping venture for hobby toys; ₹30,000 in revenue and 200+ website visitors.'] },
    { title: 'The Investors Blueprint, CapGrow Capital', period: '2024', points: ['3rd of 20 in the portfolio strategy challenge; 1st in the stock-market simulation.'] },
  ] as ResumeEntry[],
  skills: [
    { label: 'Research & Data', items: ['Research design', 'Survey development', 'Field research', 'Market analysis', 'Policy analysis', 'Impact measurement'] },
    { label: 'Business & Leadership', items: ['Social entrepreneurship', 'Venture analysis', 'Branding', 'Digital marketing', 'Workshop facilitation', 'Stakeholder engagement'] },
    { label: 'Languages', items: ['English (Professional)', 'Hindi (Native)', 'Spanish (Conversational)'] },
  ],
}
