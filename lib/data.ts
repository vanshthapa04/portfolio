export type Project = {
  slug: string;
  name: string;
  tagline: string;
  problem: string;
  features: string[];
  stack: string[];
  image: string;
  github: string;
  demo: string | null;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "recruiter-lens",
    name: "RecruiterLens",
    tagline: "Smart resume screening platform",
    problem:
      "Job seekers rarely know why their resume gets filtered before a human ever reads it. RecruiterLens compares a resume against a real job description and returns an ATS score, missing keywords, and concrete recommendations — turning a black-box rejection into an actionable checklist.",
    features: [
      "ATS score calculation",
      "Resume parsing and structuring",
      "Job description matching",
      "Missing keyword detection",
      "AI-generated recommendations"
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "AI APIs"],
    image: "/projects/recruiterlens.png",
    github: "https://github.com/vanshthapa04/RecruiterLens",
    demo: "https://recruiter-lens-vanshthapa04s-projects.vercel.app/",
    featured: true
  },
  {
    slug: "commerceiq",
    name: "CommerceIQ",
    tagline: "E-commerce sales analytics dashboard",
    problem:
      "Businesses generate massive amounts of sales data, but extracting meaningful insights can be difficult. CommerceIQ transforms raw e-commerce data into interactive dashboards, helping identify revenue trends, customer behavior, product performance, and operational bottlenecks for better business decisions.",
    features: [
      "Interactive Tableau dashboard",
      "End-to-end ETL pipeline",
      "SQL analytics and business KPIs",
      "Customer and product performance analysis",
      "Revenue, delivery, and payment insights"
    ],
    stack: ["Python", "SQL", "PostgreSQL", "Tableau", "Pandas"],
    image: "/projects/commerceiq.png",
    github: "https://github.com/vanshthapa04/CommerceIQ",
    demo: "",
    featured: true
  },
  {
    slug: "peoplepulse",
    name: "PeoplePulse",
    tagline: "Employee engagement analytics platform",
    problem:
      "Organizations often struggle to understand employee satisfaction until it impacts productivity and retention. PeoplePulse centralizes employee feedback, survey responses, and workforce metrics to uncover engagement trends, identify potential risks, and support data-driven HR decisions.",
    features: [
      "Employee and manager surveys",
      "Workforce engagement analytics",
      "Interactive HR dashboards",
      "Department-wise performance insights",
      "Survey response and sentiment analysis"
    ],
    stack: ["React", "Node.js", "Express.js", "PostgreSQL", "Chart.js"],
    image: "/projects/peoplepulse.png",
    github: "https://github.com/vanshthapa04/PeoplePulse",
    demo: "https://peoplepulse-ai-3atjcus4thmozr2hjrfwdb.streamlit.app/",
    featured: true
  },
  {
    slug: "repomind-ai",
    name: "RepoMind AI",
    tagline: "AI-powered repository analyzer",
    problem:
      "Onboarding onto an unfamiliar codebase is slow — cloning a repo tells you nothing about its architecture. RepoMind AI reads a GitHub repository and generates an instant summary of its structure, tech stack, and core features.",
    features: [
      "Repository structure analysis",
      "AI-generated architecture summary",
      "Tech stack detection",
      "Feature and pattern detection"
    ],
    stack: ["React", "Node.js", "Express", "GitHub REST API", "Gemini API"],
    image: "/projects/repomind.png",
    github: "https://github.com/vanshthapa04/RepoMindAI",
    demo: "https://repo-mind-ai.vercel.app/",
    featured: true
  },
  {
    slug: "hireready-ai",
    name: "HireReady AI",
    tagline: "ATS scoring and interview preparation",
    problem:
      "Career prep tools are scattered across five different apps. HireReady AI consolidates resume scoring, interview practice, and feedback into a single platform.",
    features: [
      "ATS score checker",
      "AI-driven interview preparation",
      "Resume feedback",
      "Career guidance"
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: "/projects/hireready.png",
    github: "https://github.com/vanshthapa04/HireReadyAI-frontend-",
    demo: "https://hire-ready-ai-frontend.vercel.app/",
    featured: true
  },
  {
    slug: "sql-sandbox",
    name: "SQL Sandbox",
    tagline: "Real-time PostgreSQL playground",
    problem:
      "Learning SQL usually means setting up a local database first. SQL Sandbox removes that barrier with a zero-setup, browser-based query editor.",
    features: [
      "Real-time SQL execution",
      "PostgreSQL integration",
      "Assignment-based learning flow",
      "Query result visualization"
    ],
    stack: ["React", "Node.js", "PostgreSQL"],
    image: "/projects/sqlsandbox.png",
    github: "https://github.com/vanshthapa04/CipherSchools-sql-studio",
    demo: null,
    featured: false
  },
  {
    slug: "knowledgehub",
    name: "KnowledgeHub",
    tagline: "AI-powered personalized learning roadmap",
    problem:
      "Generic course platforms don't adapt to a learner's existing level. KnowledgeHub generates a personalized roadmap and tracks progress through it.",
    features: [
      "Secure authentication",
      "Personalized roadmap generation",
      "Course and progress management",
      "Responsive dashboard"
    ],
    stack: ["MERN", "JWT"],
    image: "/projects/knowledgehub.png",
    github: "https://github.com/vanshthapa04/EdTechApp",
    demo: "https://ed-tech-app-five.vercel.app/",
    featured: false
  },
  {
    slug: "aichatbuddy",
    name: "AIChatBuddy",
    tagline: "AI-powered chatbot application",
    problem:
      "A lightweight, self-hosted conversational AI app built to explore real-time chat architecture backed by the Gemini API.",
    features: [
      "Real-time conversation flow",
      "Gemini API integration",
      "Persistent chat history"
    ],
    stack: ["Node.js", "Express", "MongoDB", "Gemini API"],
    image: "/projects/aichatbuddy.png",
    github: "https://github.com/vanshthapa04/AiChatBuddy",
    demo: "https://ai-chat-buddy-jade.vercel.app/",
    featured: false
  },
  {
    slug: "jobvista-ui",
    name: "JobVista UI",
    tagline: "Modern responsive job listings frontend",
    problem:
      "A clean, fast frontend for browsing job listings, built to practice component architecture and responsive layout systems without a heavy framework.",
    features: [
      "Responsive listing grid",
      "Filter and search UI",
      "Component-driven architecture"
    ],
    stack: ["React", "Vite", "CSS3"],
    image: "/projects/jobvista.png",
    github: "https://github.com/vanshthapa04/JobVista-ui",
    demo: "https://job-vista-ui.vercel.app/",
    featured: false
  }
];

export const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  Backend: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  Database: ["PostgreSQL", "MongoDB", "Prisma ORM"],
  Tools: ["Git", "GitHub", "Vercel", "Postman"]
};

export const experience = [
  {
    role: "MERN Stack Developer Trainee",
    company: "Gokboru Tech Pvt. Ltd.",
    period: "2025",
    points: [
      "Built scalable full-stack applications using the MERN stack.",
      "Developed RESTful APIs with authentication and secure backend architecture.",
      "Designed responsive UI components and improved overall user experience."
    ]
  }
];

export const achievements = [
  {
    title: "HackAI 2025",
    description:
      "Selected as a finalist for building innovative AI-powered solutions during the national-level hackathon."
  },
  {
    title: "Web-A-Thon 2.0",
    description:
      "Reached finalist stage by developing scalable, user-focused web applications under tight deadlines."
  },
  {
    title: "Volunteer recognition",
    description:
      "Recognized for contribution, collaboration, and active participation in community initiatives."
  }
];

export const social = {
  github: "https://github.com/vanshthapa04",
  linkedin: "https://www.linkedin.com/in/vansh-thapa-8b0169255/",
  email: "vanshthapa14988@gmail.com",
  resume: "/resume.pdf"
};
