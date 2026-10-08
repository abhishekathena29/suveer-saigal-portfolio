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
