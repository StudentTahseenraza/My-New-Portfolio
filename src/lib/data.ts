export interface Project {
  id: number;
  title: string;
  tech: string;
  description: string;
  image: string;
  liveLink: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'DSA Visualizer',
    tech: 'React + D3',
    description: 'Visualized DSA algorithms like sorting and recursion interactively.',
    image: '/images/DSA.jpeg',
    liveLink: 'https://dsa-visualization-two.vercel.app/',
  },
  {
    id: 2,
    title: 'Internshala Automation Tool',
    tech: 'Node.js + Puppeteer + AI',
    description: 'Automated resume customization, job filtering, and applying.',
    image: '/images/Internshala-automation.webp',
    liveLink: 'https://github.com/yourusername/internshala-automation-tool',
  },
  {
    id: 3,
    title: 'ChatterBox',
    tech: 'React + Socket.io + Node.js',
    description: 'Real-time messaging with auth, groups, typing indicator.',
    image: '/images/ChatterBox.webp',
    liveLink: 'https://chatter-box-app-i25q-glre7yr4g-tahseen-razas-projects.vercel.app/',
  },
  {
    id: 4,
    title: 'Netflix Clone',
    tech: 'Next.js + Firebase',
    description: 'User auth, dynamic video content, and watchlist feature.',
    image: '/images/Netflix.webp',
    liveLink: '/',
  },
  {
    id: 5,
    title: 'Fiverr Clone',
    tech: 'Next.js + TypeScript',
    description: 'Role-based freelance dashboard, secure payment system.',
    image: '/images/fiverr.webp',
    liveLink: 'https://fiverr-clone-gules.vercel.app/',
  },
];

export interface Experience {
  id: number;
  role: string;
  organization: string;
  duration: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Frontend Intern (Incomplete)',
    organization: 'College Tips Startup',
    duration: 'Summer 2025 April - May', // Adjust the duration as needed
    achievements: [
      'Worked on UI/UX improvements for a student-centric platform using React.js.',
      'Gained exposure to startup workflows and frontend development practices.',
      'Internship not completed, hence no certificate awarded.',
    ],
  },
  {
    id: 2,
    role: 'Final Year Project Leader & Department Assistant',
    organization: 'Maulana Azad National Urdu University',
    duration: '2024 – Present',
    achievements: [
      'Led full-stack project teams; enforced Git workflows and sprints.',
      'Collaborated with Assistant Professor on multiple real-time academic and AI-based projects.',
      'Mentored juniors on best coding practices and GitHub collaboration.',
    ],
  },
];

export const aboutMessages: string[] = [
  'I am a Full Stack Developer',
  'My skills in frontend and backend both',
  'I am strong in these skills',
  'Give me one chance',
  'Passionate about building scalable web apps',
  'Experienced in React.js and Node.js',
  'Eager to solve real-world problems',
];