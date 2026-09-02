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
    slug: "ledger",
    name: "Ledger",
    tagline: "Real-time project collaboration workspace for freelancer-client handoff",
    problem:
      "Generic chat apps treat every conversation as disposable — deliverables get buried in scroll history, and there's no shared record of what was promised, sent, or completed. Ledger reframes chat as the interface for a project, not the product itself, pairing real-time messaging with a persistent file library and milestone tracker so freelancers and clients always have a single source of truth for a project's status.",
    features: [
      "Real-time messaging with typing indicators and live presence",
      "Horizontally scalable WebSocket architecture via Redis pub/sub",
      "Project-scoped rooms with invite-code-based membership",
      "Dedicated file library separating shared assets from chat noise",
      "Milestone tracker with live progress bar and status stamps",
      "Async notification queue for offline users"
    ],
    stack: ["React", "Node.js", "Express.js", "Socket.io", "PostgreSQL", "Prisma", "Redis", "Docker", "BullMQ"],
    image: "/projects/ledger.png",
    github: "https://github.com/vanshthapa04/chat-app",
    demo: "https://ledger-chat-app.vercel.app/",
    featured: true
  },
  {
    slug: "internai",
    name: "InternAI",
    tagline: "AI-powered adaptive learning and career hub",
    problem:
      "Students and job seekers rarely get a single platform that adapts to their skills, timeline, and goals — most tools handle only one piece of the puzzle. InternAI unifies roadmap generation, internship matching, mock interviews, coding practice, and resume analysis into one adaptive platform driven by each user's profile.",
    features: [
      "AI-generated skill roadmaps",
      "Internship matching engine",
      "AI mock interviews with feedback",
      "Coding practice environment",
      "Company-specific interview prep",
      "ATS resume analyzer"
    ],
    stack: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "/projects/internai.png",
    github: "https://github.com/vanshthapa04/InternAI",
    demo: "https://getjobji.vercel.app/",
    featured: true
  },
  {
    slug: "phonepe-transaction-analytics",
    name: "PhonePe Transaction Analytics",
    tagline: "Interactive BI dashboard for digital payment data",
    problem:
      "Raw transaction logs don't tell stakeholders where the business is winning or losing. This dashboard transforms a raw PhonePe-style transaction dataset into an interactive Power BI report — surfacing payment success rates, customer demographics, and top-performing services so decisions can be made from evidence instead of guesswork.",
    features: [
      "Executive KPI overview",
      "Monthly transaction trend analysis",
      "Payment success/failure breakdown",
      "Customer segmentation by demographics",
      "Service-wise performance comparison",
      "Weekday vs weekend usage analysis"
    ],
    stack: ["Power BI", "Power Query", "DAX", "Excel"],
    image: "/projects/dashboard.png",
    github: "https://github.com/vanshthapa04/PhonePe-transaction-analytics",
    demo: "",
    featured: true
  },
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
    stack: ["Python", "Pandas", "Numpy", "Streamlit", "Plotly", "Scikit-learn"],
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
  }
];

export const skills = {
  Languages: ["C++17", "JavaScript", "Python", "SQL"],
  "AI and APIs": ["Open AI","Gemini", "Prompt Engineering"],
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  Backend: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Middleware"],
  Database: ["PostgreSQL", "MongoDB", "Prisma ORM", "Neon", "Redis"],
  Tools: ["Git", "GitHub", "Vercel", "Postman", "Docker"],

};

export const experience = [
  {
    role: "Full-Stack Developer Intern",
    company: "Gokboru Tech Pvt. Ltd.",
    period: "2025",
    points: [
      "Built scalable full-stack web applications using the MERN stack, implementing modular architecture, reusable components, efficient state management, and seamless frontend-backend integration.",
      "Developed secure RESTful APIs with Node.js and Express.js, implementing authentication and authorization, database integration, input validation, error handling, and structured backend architecture for reliable application performance.",
      "Designed responsive and reusable UI components using React.js, focusing on intuitive user experiences, responsive layouts, performance optimization, and consistent design across different screen sizes."
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
  },
  {
    title: "Problem-Solving",
    description:
      "Solved 400+ coding problems accross platforms like Leetcode and GeeksforGeeks showcasing thinking ability and problem solving skills."

  }
];

export const social = {
  github: "https://github.com/vanshthapa04",
  linkedin: "https://www.linkedin.com/in/vansh-thapa-8b0169255/",
  email: "vanshthapa14988@gmail.com",
  resume: "/resume.pdf"
};
