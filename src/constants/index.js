export const myProjects = [
  {
    id: 1,
    title: "Helium — Enterprise AI Agent Platform",
    description:
      "Enterprise-grade multi-tenant AI agent orchestration platform built at NeuralArc with a domain-driven Python/FastAPI backend and Next.js 16 frontend.",
    subDescription: [
      "Architected a domain-driven Python/FastAPI backend with Aurora PostgreSQL, Redis caching, and a Next.js 16/React 19 frontend for multi-tenant AI agent orchestration at scale.",
      "Implemented end-to-end auth & RBAC — migrated to AWS Cognito (OAuth 2.0, OTP, Google) with Redis-cached permission resolution, custom roles, and PostgreSQL Row-Level Security.",
      "Achieved SOC-2/ISO 27001 compliance readiness with enterprise security standards.",
      "Owned AWS infrastructure (ECS, EC2, Aurora with asyncpg pooling, S3/CloudFront, Bedrock) and GCP, deployed a Dockerized 4-service architecture with horizontally scaled workers.",
    ],
    href: "#",
    logo: "",
    image: "/assets/projects/helium.jpg",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/Next.js.svg" },
      { id: 2, name: "Python", path: "/assets/logos/python.svg" },
      { id: 3, name: "FastAPI", path: "/assets/logos/FastAPI.svg" },
      { id: 4, name: "PostgreSQL", path: "/assets/logos/postgresql.svg" },
      { id: 5, name: "AWS", path: "/assets/logos/aws.svg" },
    ],
  },
  {
    id: 2,
    title: "Bees — Multi-Agent Orchestration Engine",
    description:
      "A multi-agent orchestration engine with Queen-Worker-Scout hierarchy, persistent agentic memory, and 50+ MCP integrations — built at NeuralArc.",
    subDescription: [
      "Built Queen-Worker-Scout agent hierarchy using LangChain/LangGraph state machines, Redis checkpointing, and Dramatiq workers enabling concurrent tool calls across 50+ MCP integrations (Gmail, Slack, CRM).",
      "Designed a hybrid agentic memory layer using pgvector HNSW indexes and AWS Bedrock Titan embeddings with weighted semantic retrieval and 4-tier Redis caching.",
      "Implemented LLM-driven memory extraction with contradiction resolution and automatic conversation compaction — enabling persistent agent learning across sessions.",
      "Developed Prism & Mantis AI content pipelines using LangGraph DAGs with Gemini, VEO 3.1, and Deepgram; integrated Stripe-based billing tracking cost per LLM call via LiteLLM.",
    ],
    href: "#",
    logo: "",
    image: "/assets/projects/bees.jpg",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "LangChain", path: "/assets/logos/langchain.svg" },
      { id: 3, name: "LangGraph", path: "/assets/logos/langgraph.svg" },
      { id: 4, name: "Redis", path: "/assets/logos/redis.svg" },
      { id: 5, name: "PostgreSQL", path: "/assets/logos/postgresql.svg" },
    ],
  },
  {
    id: 3,
    title: "Lyvo — Real-Time Chat App",
    description:
      "A WhatsApp-like real-time messenger built with the MERN + Socket.IO stack with Cloudinary image sharing and 30+ themes.",
    subDescription: [
      "Built instant text delivery, online status, and typing indicators using Socket.IO.",
      "Allowed users to share images with Cloudinary support and choose from 30+ themes, increasing user engagement.",
      "Deployed Dockerized services with Nginx reverse proxy for production-ready reliability.",
      "Achieved 40% increase in average session time during testing with a modern mobile-first UI.",
    ],
    href: "https://github.com/Xsidz/Lyvo-messenger",
    logo: "",
    image: "/assets/projects/lyvo.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/Node.js.svg" },
      { id: 3, name: "MongoDB", path: "/assets/logos/MongoDB.svg" },
      { id: 4, name: "Socket.IO", path: "/assets/logos/Socket.io.svg" },
      { id: 5, name: "Docker", path: "/assets/logos/Docker.svg" },
    ],
  },
  {
    id: 4,
    title: "QuickLink — URL Shortener",
    description:
      "A secure and production-ready URL shortener with JWT authentication, analytics dashboard, and Dockerized deployment.",
    subDescription: [
      "Built JWT-based authentication, anonymous URL creation, and custom short links for logged-in users.",
      "Designed REST APIs for scalable URL creation, redirection, and click tracking with 99% accuracy.",
      "Added link analytics (clicks, expiry) for insights and control.",
      "Deployed with Docker + Nginx for frictionless setup and production-ready reliability.",
    ],
    href: "https://github.com/Xsidz/url",
    logo: "",
    image: "/assets/projects/url-shortner.jpg",
    tags: [
      { id: 1, name: "Node.js", path: "/assets/logos/Node.js.svg" },
      { id: 2, name: "Express.js", path: "/assets/logos/Express.svg" },
      { id: 3, name: "MongoDB", path: "/assets/logos/MongoDB.svg" },
      { id: 4, name: "Docker", path: "/assets/logos/Docker.svg" },
    ],
  },
  {
    id: 5,
    title: "Rating System — Store Feedback Platform",
    description:
      "A full-stack store rating platform with role-based access (user, store owner, admin), JWT auth, and interactive analytics dashboards.",
    subDescription: [
      "Built full-stack rating platform with role-based access control (user, store owner, admin) and secure JWT auth.",
      "Automated MySQL schema/table creation to simplify deployments and onboarding.",
      "Created interactive dashboards for rating, updating feedback, and viewing store-wide analytics.",
      "Managed global state with Zustand for a seamless, reactive user experience.",
    ],
    href: "https://github.com/Xsidz",
    logo: "",
    image: "/assets/projects/rating-system.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/Node.js.svg" },
      { id: 3, name: "MySQL", path: "/assets/logos/SQL.svg" },
    ],
  },
  {
    id: 6,
    title: "Plant Disease Detection (Hackathon Winner 2024)",
    description:
      "A hackathon-winning project that detects and classifies plant diseases using deep learning.",
    subDescription: [
      "Built a React, Bootstrap, and TailwindCSS UI for image uploads and results.",
      "Created FastAPI endpoints to run a TensorFlow CNN for disease prediction.",
      "Returned disease name, confidence, and treatment suggestions in JSON.",
      "Implemented robust error handling and input validation for consistent results.",
    ],
    href: "https://www.linkedin.com/posts/siddhesh-kabraa_hackathon-teamhawkai-innovation-activity-7255205177484304384-cjRI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD38dcMBXF4WCTUOb2HQrScrfACJhfnRrgE",
    logo: "",
    image: "/assets/projects/plant-disease.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "FastAPI", path: "/assets/logos/FastAPI.svg" },
      { id: 3, name: "Python", path: "/assets/logos/python.svg" },
      { id: 4, name: "TensorFlow", path: "/assets/logos/tensorflow.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/919527116922?text=Hii,%20I%20want%20to%20build%20a%20project",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/siddhesh-kabraa/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/siddhesh.kabra/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Software Engineer",
    job: "MetLife, Pune, Maharashtra",
    date: "Jul 2026 – Present",
    contents: [
      "Building and maintaining enterprise-grade web applications using React, Next.js, Java, Spring, and Spring Boot.",
      "Developing scalable backend services and REST APIs with Java Spring Boot for high-traffic insurance and financial platforms.",
      "Leveraging Python for automation, data processing, and AI-assisted workflows within the engineering team.",
      "Collaborating across cross-functional teams to deliver reliable, production-ready software solutions.",
    ],
  },
  {
    title: "Full Stack Gen-AI Developer",
    job: "NeuralArc, Pune, Maharashtra",
    date: "Nov 2025 – Aug 2026",
    contents: [
      "Architected Helium — an enterprise AI agent platform with a domain-driven Python/FastAPI backend, Aurora PostgreSQL, Redis caching, and a Next.js 16/React 19 frontend for multi-tenant AI agent orchestration at scale.",
      "Built Bees — a multi-agent orchestration engine with Queen-Worker-Scout hierarchy using LangChain/LangGraph state machines, Redis checkpointing, and Dramatiq workers, enabling concurrent tool calls across 50+ MCP integrations (Gmail, Slack, CRM) with human-in-the-loop guardrails.",
      "Designed a hybrid agentic memory layer using pgvector HNSW indexes and AWS Bedrock Titan embeddings, with weighted semantic retrieval, 4-tier Redis caching, and LLM-driven memory extraction — enabling persistent agent learning across sessions.",
      "Implemented end-to-end auth & RBAC — migrated to AWS Cognito (OAuth 2.0, OTP, Google) with Redis-cached permission resolution and PostgreSQL Row-Level Security, achieving SOC-2/ISO 27001 compliance readiness.",
      "Developed Prism & Mantis AI content pipelines using LangGraph DAGs with Gemini, VEO 3.1, and Deepgram; integrated Stripe-based billing tracking cost per LLM call via LiteLLM.",
      "Owned AWS infrastructure (ECS, EC2, Aurora, S3/CloudFront, Bedrock) and GCP; deployed a Dockerized 4-service architecture with horizontally scaled workers.",
    ],
  },
  {
    title: "Software Engineer Intern",
    job: "Bloom Agency, Pune, Maharashtra",
    date: "Feb 2025 – Apr 2025",
    contents: [
      "Developed and delivered client-facing websites including Aaruhi Jewels (MERN e-commerce) and Vinayak Group Jaipur (WordPress real estate), boosting client engagement and sales visibility.",
      "Enhanced website performance and responsiveness across devices, significantly improving Core Web Vitals and SEO rankings.",
      "Reduced development bottlenecks by 20% through quick adoption of React, Node.js, and WordPress stacks.",
    ],
  },
  {
    title: "Software Engineer Intern",
    job: "MHTECHIN, Pune, Maharashtra",
    date: "Dec 2023 – Jul 2024",
    contents: [
      "Led end-to-end development of 5+ web/mobile apps (MHTECHIN Website, FarmLancer, Rush Fashions, Food Delivery WebApp) serving 50,000+ active users.",
      "Spearheaded the company’s online launch, driving a 30% increase in web traffic in a single quarter.",
      "Worked cross-functionally with design, marketing, and content teams to ensure faster delivery and wide product adoption.",
      "Implemented modern stacks (React.js, MongoDB, Express.js, Flutter), reducing project turnaround time by 25%.",
    ],
  },
];

export const reviews = [
  {
    name: "Alok",
    username: "@novaium",
    body:
      "Siddhesh quickly understood our requirements at Novaium and delivered clean, scalable solutions. Communication was clear, timelines were met, and the results were future-proof.",
    img: "https://robohash.org/alok",
  },
  {
    name: "Ananya",
    username: "@fashionpur",
    body:
      "A great partner to work with—Siddhesh built a fast, responsive e-commerce experience that improved our checkout flow and customer satisfaction at FashionPur.",
    img: "https://robohash.org/ananya",
  },
  {
    name: "Himansh Gayekwad",
    username: "@sukshna",
    body:
      "Reliable, detail-oriented, and proactive. Siddhesh helped us ship critical Sukshna features ahead of schedule without compromising quality.",
    img: "https://robohash.org/himansh",
  },
  {
    name: "Samartha Phophale",
    username: "@finnoexpert",
    body:
      "From planning to delivery, Siddhesh’s code quality and structured approach stood out. Our FinnoExpert project launched smoothly and performs excellently.",
    img: "https://robohash.org/samartha",
  },
];
