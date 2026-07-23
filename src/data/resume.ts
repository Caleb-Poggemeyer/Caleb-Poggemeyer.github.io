export const profile = {
  name: "Caleb Poggemeyer",
  title: "Computer Engineering Student — AI Emphasis",
  tagline:
    "Building full-stack AI tools and embedded systems. Graduating May 2026 from the University of Nebraska–Lincoln.",
  location: "Lincoln, NE",
  email: "cpoggemeyer2004@gmail.com",
  phone: "402-874-1553",
  linkedin: "https://linkedin.com/in/PLACEHOLDER",
  github: "https://github.com/PLACEHOLDER",
  resumeUrl: "/resume.pdf",
};

export const education = {
  school: "University of Nebraska–Lincoln",
  degree: "B.S. in Computer Engineering (AI Emphasis)",
  date: "Expected May 2026",
  gpa: "3.52",
  honors: ["Nebraska Regents Scholarship Recipient", "Dean's List"],
};

export const skillGroups = [
  {
    label: "Languages",
    skills: ["C", "C#", "Java", "Python", "SQL", "Assembly", "VHDL"],
  },
  {
    label: "Frameworks / Technologies",
    skills: [
      "React",
      "Axios",
      ".NET 8",
      "ASP.NET Web API",
      "Entity Framework Core",
      "TensorFlow",
      "Keras",
      "Hugging Face",
      "scikit-learn",
    ],
  },
  {
    label: "Data / ML Tools",
    skills: ["NumPy", "pandas", "SciPy", "Matplotlib", "Seaborn"],
  },
  {
    label: "Tools",
    skills: [
      "Git",
      "GitHub Actions",
      "Pytest",
      "xUnit",
      "Arduino IDE",
      "Linux/Unix",
      "Jupyter Notebook",
      "VS Code",
    ],
  },
];

export const focusAreas = [
  "AI Engineering",
  "Prompt Engineering",
  "Full-Stack Development",
  "Embedded Systems",
];

export type Project = {
  id: string;
  title: string;
  role?: string;
  status?: string;
  stack: string;
  image: string;
  bullets: string[];
  links?: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    id: "senior-design",
    title: "Senior Design Project",
    role: "Squad Lead",
    stack: "Embedded Systems, Arduino",
    image: "/projects/senior-design.svg",
    bullets: [
      "Leading a six-person team developing an industry-sponsored automated air impact wrench with integrated paint-marking for CLAAS.",
      "Designing the embedded control system integrating vibration sensing, RPM detection, relay control, and automated paint application.",
      "Coordinating hardware/software integration, prototype testing, and weekly technical reviews with the sponsor.",
    ],
    links: [{ label: "Case Study", url: "#" }],
  },
  {
    id: "prompt-forge",
    title: "Prompt Forge",
    status: "In Progress",
    stack: "React, .NET 8, EF Core",
    image: "/projects/prompt-forge.svg",
    bullets: [
      "Developing a full-stack AI platform using React 19 (Axios), .NET 8 Web API, EF Core, and SQLite that guides users through a structured interview to generate optimized prompts for Claude, Gemini, and Llama 3.",
      "Built a dual-track LLM evaluation pipeline combining human ratings with an automated Gemini \"LLM-as-Judge\" scorer using a shared seven-dimension rubric and exponential backoff for reliable API pacing.",
      "Designed a 108-prompt benchmark with professional and learner evaluators to measure quality and inter-rater agreement, backed by 89 xUnit tests and a CSV ingestion pipeline for evaluation data.",
    ],
    links: [
      { label: "GitHub", url: "#" },
      { label: "Live Demo", url: "#" },
    ],
  },
  {
    id: "fullstack-webapp",
    title: "Full-Stack Web Application",
    stack: "React, C#, SQL",
    image: "/projects/fullstack-webapp.svg",
    bullets: [
      "Built a web application with search functionality using React, C#/.NET, and SQL.",
      "Collaborated in an Agile team to implement features, integrate backend APIs, and debug frontend/backend interactions.",
      "Implemented CI workflows with GitHub Actions to automate testing and ensure code quality.",
    ],
    links: [{ label: "GitHub", url: "#" }],
  },
  {
    id: "price-comparison",
    title: "Price Comparison Application",
    stack: "C#, REST APIs",
    image: "/projects/price-comparison.svg",
    bullets: [
      "Built a backend application that queries the Amazon API and parses NET32 JSON data to compare product pricing across vendors.",
      "Implemented data parsing and normalization pipelines to standardize pricing from multiple sources.",
      "Designed the application with a modular backend architecture to support future frontend integration.",
    ],
    links: [{ label: "GitHub", url: "#" }],
  },
];

export type ExperienceItem = {
  id: string;
  org: string;
  role: string;
  date: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "dance-studio",
    org: "Nebraska City Dance Studio",
    role: "Audio Director",
    date: "Summers 2021–2025",
    bullets: [
      "Managed live sound production for annual performances with 100+ attendees.",
      "Diagnosed and resolved technical issues under time-critical conditions while coordinating with instructors.",
    ],
  },
  {
    id: "tennis-director",
    org: "City of Nebraska City",
    role: "Summer Tennis Director",
    date: "Summers 2021–2024",
    bullets: [
      "Led a youth tennis program serving 30+ participants weekly while maintaining a safe learning environment.",
      "Adapted lesson plans and schedules to accommodate varying skill levels.",
    ],
  },
];

export type LeadershipItem = {
  id: string;
  org: string;
  role: string;
  date: string;
};

export const leadership: LeadershipItem[] = [
  { id: "eagle-scout", org: "Boy Scouts of America", role: "Eagle Scout", date: "2009–2021" },
  {
    id: "broomball",
    org: "UNL Intramural Broomball Team",
    role: "Vice President",
    date: "2022–Present",
  },
  {
    id: "tennis-team",
    org: "UNL Intramural Tennis Team",
    role: "Member",
    date: "2022–Present",
  },
];
