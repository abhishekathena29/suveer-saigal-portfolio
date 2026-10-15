export const NEEV_URL = 'https://www.neevventures.in/'
export const EMAIL = 'suveer.saigal2009@gmail.com'

export const NAV = [
  { path: '/neev-ventures', label: 'Neev Ventures' },
  { path: '/project-navjeevan', label: 'Project Navjeevan' },
  { path: '/experience', label: 'Experience' },
  { path: '/research', label: 'Research' },
  { path: '/honors', label: 'Honors' },
  { path: '/music-theatre', label: 'Music & Theatre' },
  { path: '/press', label: 'Press' },
  { path: '/contact', label: 'Contact' },
]

export const NEEV_STATS = [
  { value: '~20,000', label: 'Women empowered' },
  { value: '6', label: 'States reached' },
  { value: '~40%', label: 'Avg. income growth' },
  { value: '30', label: 'Workshops' },
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

export const RESEARCH = [
  {
    tag: 'Publication',
    title: 'Empirical Study of the Effects of One District One Product (ODOP) Initiative on Indian Export Performance: A Panel Data Analysis',
    meta: 'International Journal of Social Science Research and Review, Vol. 9, Issue 1 (2026)',
    url: 'https://ijssrr.com/journal/article/view/3214',
  },
  {
    tag: 'Presentation',
    title: 'Sigma Xi Student Research Showcase 2026',
    meta: 'Selected to present the ODOP research at a peer-reviewed international forum',
  },
]

export type Cert = {
  title: string
  org: string
  img: string
}

export const NEEV_AWARDS: Cert[] = [
  {
    title: 'Blue Ocean Competition, Top 100',
    org: 'Top 0.43% of 23,000+ students from 173 countries',
    img: '/images/certs/blue-ocean.jpg',
  },
  {
    title: 'BRICS CCI Young Fellow',
    org: 'Changemaker in Social Impact & Entrepreneurship, 2026 cohort',
    img: '/images/certs/brics.jpg',
  },
  {
    title: 'Young Entrepreneur Rising Star',
    org: 'Aatmanirbhar MSME & Startup Awards 2026, CIMSME',
    img: '/images/certs/cimsme.jpg',
  },
  {
    title: 'Youngest Entrepreneur Mentor',
    org: 'Presented by Dr. Kiran Bedi',
    img: '/images/certs/kiran-bedi.jpg',
  },
  {
    title: 'NSDC Youth Contributor',
    org: 'National Skill Development Corporation',
    img: '/images/certs/nsdc.jpg',
  },
]

export const RESEARCH_AWARDS: Cert[] = [
  {
    title: 'CREST Gold Award',
    org: 'British Science Association, for the ODOP export-performance research',
    img: '/images/certs/crest-gold.jpg',
  },
]

export type Honor = {
  title: string
  org: string
  // Present only when there's a certificate to show.
  img?: string
}

export const HONORS: Honor[] = [
  {
    title: 'CISCE Certificate of Merit',
    org: 'Top 0.1% nationally in History, Civics & Geography',
    img: '/images/certs/cisce-3-subjects.jpg',
  },
  {
    title: 'CISCE Certificate of Merit',
    org: 'Top 0.1% nationally in Spanish',
    img: '/images/certs/cisce-spanish.jpg',
  },
  {
    title: 'Scholar of the Year',
    org: 'The Shri Ram School, Class X, 2024–25',
    img: '/images/certs/scholar-of-the-year.jpg',
  },
  {
    title: 'Academic Excellence Award',
    org: 'The Shri Ram School, above 90% in all subjects, Class XI, 2025–26',
    img: '/images/certs/academic-excellence-xi.jpg',
  },
  {
    title: 'BRICS CCI Young Fellow',
    org: 'Changemaker Award in Social Impact',
    img: '/images/certs/brics.jpg',
  },
  {
    title: 'Young Entrepreneur Rising Star',
    org: 'Aatmanirbhar MSME & Startup Awards, CIMSME',
    img: '/images/certs/cimsme.jpg',
  },
  {
    title: 'CREST Gold Award',
    org: 'British Science Association',
    img: '/images/certs/crest-gold.jpg',
  },
  {
    title: 'AP Scholar with Honor',
    org: 'College Board',
    img: '/images/certs/ap-scholar.jpg',
  },
  {
    title: 'Innovator Award',
    org: 'The Shri Ram School, for creative and original thinking',
    img: '/images/certs/innovator.jpg',
  },
  {
    title: 'Blue Ocean Top 100',
    org: 'Out of 23,000 entrants from 173 countries',
    img: '/images/certs/blue-ocean.jpg',
  },
  {
    title: 'DELE Spanish Diploma, A2',
    org: 'Instituto Cervantes',
    img: '/images/certs/spanish-diploma.jpg',
  },
  {
    title: 'Youngest Entrepreneur Mentor',
    org: 'Navjyoti India Foundation, presented by Dr. Kiran Bedi',
    img: '/images/certs/kiran-bedi.jpg',
  },
  { title: 'National Economics Olympiad', org: 'SRCC, All India Rank 43' },
  { title: 'IMO Southeast Asia, Bronze', org: 'National level' },
  { title: 'NSDC Youth Contributor', org: 'National Skill Development Corporation' },
]

export const DOCUMENTARY_ID = 'ZZ-DO6HTit8'

export const FILM_AWARDS: Cert[] = [
  { title: 'Best Young Filmmaker Under 18', org: 'Indian Independent Film Festival', img: '/images/certs/film-iiff.jpg' },
  { title: 'Winner, Student Film', org: 'Crown Wood International Film Festival', img: '/images/certs/film-crown-wood.jpg' },
  { title: 'Winner', org: 'Rameshwaram International Film Festival 2026', img: '/images/certs/film-rameshwaram.jpg' },
  { title: 'Best Short Documentary Film', org: 'Aryan International Children’s Film Festival of Jaipur 2026', img: '/images/certs/film-aryan.jpg' },
  { title: 'Best Director, Honorable Mention', org: 'Caravan International Film Festival', img: '/images/certs/film-caravan.jpg' },
  { title: 'Honorable Mention, Best Student Short Film', org: 'Makizhmithran International Film Festival', img: '/images/certs/film-makizhmithran.jpg' },
]

export const MUSIC_THEATRE = [
  {
    title: 'Stage 4 Change',
    role: 'Co-Founder',
    period: '2025 – Present',
    text: 'A student-led theatre initiative. Directed three David Ives productions and raised ₹1.58 lakh, supporting 175 children with special needs through Action For Autism and a life-saving paediatric heart surgery through Koshika Foundation.',
  },
  {
    title: 'Guitar',
    role: 'Trinity College London, Rock & Pop',
    period: '2017 – Present',
    text: 'Nine years of training. Grade 6 certified, performed at India International Centre, and now preparing for Grade 8; plays in a band.',
  },
  {
    title: 'Drama',
    role: 'LAMDA',
    period: '2024 – Present',
    text: 'Lead roles in school and independent productions. LAMDA Level 3 Certificate in Performance (Grade 7), Solo Acting, with Merit.',
  },
]

export const MUSIC_PHOTOS = [
  { src: '/images/music/concert-1.jpg', alt: 'Suveer playing electric guitar with the band at a performance concert' },
  { src: '/images/music/concert-3.jpg', alt: 'Suveer performing a guitar solo on stage', portrait: true },
]

export const THEATRE_PHOTOS = [
  { src: '/images/theatre/play-4.jpg', alt: 'Suveer in costume, greeting the audience on stage' },
  { src: '/images/theatre/play-1.jpg', alt: 'A scene at a desk from a school production' },
  { src: '/images/theatre/play-3.jpg', alt: 'Suveer in costume, mid-scene' },
]

export const MUSIC_THEATRE_CERTS: Cert[] = [
  {
    title: 'Stage 4 Change',
    org: 'Certificate of Appreciation, The Bigger Picture',
    img: '/images/certs/stage-4-change.jpg',
  },
  {
    title: 'Grade 6 Guitar, Rock & Pop',
    org: 'Trinity College London',
    img: '/images/certs/trinity.jpg',
  },
  {
    title: 'Grade 7 Acting, Merit',
    org: 'London Academy of Music & Dramatic Art',
    img: '/images/certs/lamda.jpg',
  },
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
  {
    outlet: 'Lakes Paradise',
    title: 'AICFF 2026 and 16IFF 2026 Announce Award Winners. Rebuilding Freedom named Best Short Documentary/Student Film.',
    url: 'https://www.lakesparadise.com/en/article-51-1_542280.html',
  },
]

export type Experience = {
  title: string
  org: string
  points: string[]
}

export const EXPERIENCE: Experience[] = [
  {
    title: 'Intern, Research & Documentation Division',
    org: 'Haryana Institute of Public Administration (HIPA)',
    points: [
      'Designed a bilingual SHG Digital Literacy & Scheme Navigation Module, integrated into HIPA’s mandatory officer-training cycle.',
      'Recognized by the Director General, HIPA, for contributions to capacity-building and practitioner-oriented documentation.',
    ],
  },
  {
    title: 'District-Level ODOP Pilot',
    org: 'Office of the Sub-Divisional Magistrate, Narnaul',
    points: [
      'Worked with Aniruddh Yadav, IAS, to develop an ODOP framework for women-led SHGs; conducted train-the-trainer workshops.',
      'Framework scaled by the SDM office toward 5,000+ women and forwarded to HIPA for state-level evaluation.',
    ],
  },
  {
    title: 'Intern',
    org: 'Passionfruit AI, New York',
    points: [
      'Market research, competitor-landscape analysis, content planning, and performance-data review for an AI-driven SEO, GEO and AEO company.',
    ],
  },
  {
    title: 'Venture Capital Intern',
    org: 'SailThru Ventures, New Delhi',
    points: [
      'Evaluated pitches and business models of startups featured on Shark Tank India; prepared investment memos and presented to the investment committee.',
    ],
  },
]
