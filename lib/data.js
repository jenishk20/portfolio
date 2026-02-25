export const personalInfo = {
  name: 'Jenish Kothari',
  tagline: 'Building at the intersection of AI and software engineering.',
  roles: [
    'Software Engineer',
    'AI/ML Engineer',
    'Competitive Programmer',
    'Full-Stack Developer',
  ],
  location: 'Boston, MA',
  linkedin: 'https://www.linkedin.com/in/jenishkothari/',
  github: 'https://github.com/jenishk20',
  codeforces: 'https://codeforces.com/profile/jenishk20',
  resumeUrl:
    'https://resume-jenish.s3.us-east-1.amazonaws.com/Word+Resume/Jenish_Kothari_Resume.pdf',
  email: 'kothari.je@northeastern.edu',
};

export const stats = [
  { value: '2x', label: 'Fortune 500 Intern' },
  { value: '$2K', label: 'Hackathon Prize' },
  { value: '94th', label: 'ICPC Rank' },
  { value: '30+', label: 'App Users' },
];

export const workExperience = [
  {
    id: 1,
    company: 'Adobe',
    abbr: 'AD',
    role: 'Software Engineer Intern',
    duration: 'DATE – DATE', // TODO: Update with actual dates
    location: 'Remote',
    iconColor: '#FF0000',
    tags: ['Python', 'RLHF', 'Machine Learning', 'Adobe Firefly', 'React'],
    bullets: [
      'Led RLHF (Reinforcement Learning from Human Feedback) experiments for Adobe Firefly, an enterprise generative AI product used by creative professionals worldwide.',
      'Developed human-feedback data pipelines and fine-tuning workflows to improve model quality and alignment for creative AI outputs.',
    ],
  },
  {
    id: 2,
    company: 'Dell Technologies',
    abbr: 'DL',
    role: 'Software Engineer Intern',
    duration: 'DATE – DATE', // TODO: Update with actual dates
    location: 'Remote',
    iconColor: '#007DB8',
    tags: ['Python', 'LLMs', 'AI Agents', 'REST APIs', 'AWS'],
    bullets: [
      'Built Agentic AI capabilities enabling autonomous task execution and decision-making workflows, significantly reducing manual operational overhead.',
      'Designed and implemented AI agent orchestration pipelines using LLMs and tool-calling frameworks for enterprise automation.',
    ],
  },
  {
    id: 3,
    company: 'ZS Associates',
    abbr: 'ZS',
    role: 'Software Engineer',
    duration: 'Jun 2022 – Dec 2023',
    location: 'Pune, India',
    iconColor: '#6B5CD6',
    tags: ['ReactJS', 'Redux', 'Python', 'PySpark', 'AWS', 'PostgreSQL'],
    bullets: [
      'Achieved 88% efficiency gain by automating file transfer and DQM checks with Python scripting and built a real-time data processing pipeline using PySpark, AWS RDS, and Redshift.',
      'Designed responsive UIs with ReactJS, enhanced scalability with Redux state management, and resolved 100+ technical issues across the stack.',
    ],
  },
  {
    id: 4,
    company: 'Northeastern University',
    abbr: 'NU',
    role: 'Teaching Assistant — CS3520',
    duration: 'May 2024 – Present',
    location: 'Boston, MA',
    iconColor: '#CC0000',
    tags: ['C++', 'OOP', 'Data Structures', 'Algorithms'],
    bullets: [
      'TA for CS3520 Programming in C++, supporting 50+ students with OOP, data structures, and algorithms through 8 hrs/week of office hours.',
      'Collaborated with faculty to develop lecture materials, programming exercises, and exams aligned with course learning objectives.',
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: 'InsureMe',
    award: '🏆 Harvard LiveAI Hackathon Winner',
    tagline: 'AI-powered insurance advisor — built and won at Harvard',
    description:
      'Won the Harvard LiveAI Hackathon by building an AI-first insurance advisory platform that simplifies discovery and delivers personalized insurance recommendations using LLMs.',
    tags: ['AI', 'React', 'Python', 'OpenAI', 'FastAPI'],
    github: null,
    live: 'https://devpost.com/software/insureme-q6m2f9',
    gradient: 'from-emerald-500 to-teal-600',
    photos: [],
  },
  {
    id: 2,
    name: 'Confluent AI Hack',
    award: '💰 $2,000 Cash Prize Winner',
    tagline: 'Real-time AI pipeline with Apache Kafka',
    description:
      'Won $2,000 at the Confluent AI Hackathon by building a real-time AI pipeline using Apache Kafka for event streaming and AI-driven analytics at scale.',
    tags: ['Apache Kafka', 'Python', 'AI', 'Confluent', 'React'],
    github: 'https://github.com/jenishk20/confluent-ai-hack',
    live: null,
    gradient: 'from-violet-500 to-purple-600',
    photos: [],
  },
  {
    id: 3,
    name: 'SplitMate',
    award: '🚀 Founder · 30+ Active Users',
    tagline: 'Smart bill splitting — 30 users and growing',
    description:
      'Founded and built SplitMate, a seamless expense-splitting app. Grown organically to 30 active users with a target of 100+ this month.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Netlify'],
    github: null,
    live: 'https://splitmate-easysplit.netlify.app/',
    gradient: 'from-sky-500 to-blue-600',
    photos: [],
  },
];

export const achievements = [
  {
    id: 1,
    icon: '🏆',
    title: 'Harvard LiveAI Hackathon',
    result: 'Winner',
    year: '2024',
    color: 'from-yellow-500 to-amber-500',
    link: 'https://devpost.com/software/insureme-q6m2f9',
  },
  {
    id: 2,
    icon: '💰',
    title: 'Confluent AI Hackathon',
    result: '$2,000 Cash Prize',
    year: '2024',
    color: 'from-violet-500 to-purple-600',
    link: 'https://github.com/jenishk20/confluent-ai-hack',
  },
  {
    id: 3,
    icon: '🥇',
    title: 'Meta HackerCup 2025',
    result: 'Finalist',
    year: '2025',
    color: 'from-blue-500 to-indigo-600',
    link: null,
  },
  {
    id: 4,
    icon: '🏅',
    title: 'ICPC North America Regionals',
    result: 'Rank 94 / 400+ Teams',
    year: '2024',
    color: 'from-orange-500 to-red-500',
    link: null,
  },
  {
    id: 5,
    icon: '⚡',
    title: 'Codeforces',
    result: 'Specialist',
    year: 'Active',
    color: 'from-cyan-500 to-sky-600',
    link: 'https://codeforces.com/profile/jenishk20',
  },
  {
    id: 6,
    icon: '☁️',
    title: 'AWS Cloud Club',
    result: 'Club Lead @ Northeastern',
    year: '2024–25',
    color: 'from-orange-400 to-orange-600',
    link: null,
  },
];

export const skills = [
  {
    category: 'Languages',
    color: 'text-violet-400',
    items: ['C++', 'Python', 'JavaScript', 'Java', 'C'],
  },
  {
    category: 'Frontend',
    color: 'text-cyan-400',
    items: ['React', 'Next.js', 'Tailwind CSS', 'HTML5', 'Redux'],
  },
  {
    category: 'Backend',
    color: 'text-emerald-400',
    items: ['Node.js', 'Express', 'FastAPI', 'REST APIs'],
  },
  {
    category: 'AI / ML',
    color: 'text-pink-400',
    items: ['RLHF', 'LLMs', 'AI Agents', 'LangChain', 'OpenAI API'],
  },
  {
    category: 'Databases',
    color: 'text-amber-400',
    items: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Redis', 'MySQL'],
  },
  {
    category: 'Cloud & DevOps',
    color: 'text-sky-400',
    items: ['AWS', 'Docker', 'Jenkins', 'Apache Kafka', 'CI/CD'],
  },
];

export const education = [
  {
    id: 1,
    institution: 'Northeastern University',
    degree: 'Master of Science in Computer Science',
    duration: '2024 – 2026',
    location: 'Boston, MA, USA',
    gpa: '3.8 / 4.0',
    logo: '/images/northeastern.png',
    highlights: [
      'Teaching Assistant — CS3520 (C++)',
      'AWS Cloud Club Lead',
      'ICPC North America Regionals',
    ],
  },
  {
    id: 2,
    institution: 'Nirma University',
    degree: 'B.Tech in Computer Science & Engineering',
    duration: '2018 – 2022',
    location: 'Ahmedabad, India',
    gpa: '3.6 / 4.0',
    logo: '/images/nirma.jpg',
    highlights: [
      'Graduated with Distinction',
      'Competitive Programming',
      'AI/ML Research Projects',
    ],
  },
];

export const certifications = [
  {
    id: 1,
    name: 'AWS Solutions Architect Associate',
    image: '/images/certs/saa.png',
  },
  {
    id: 2,
    name: 'AWS Developer Associate',
    image: '/images/certs/dva.png',
  },
  {
    id: 3,
    name: 'AWS Cloud Practitioner',
    image: '/images/certs/clf.png',
  },
];
