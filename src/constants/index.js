export const myProjects = [
  {
    id: 1,
    title: "Lyvo Chat Application",
    description:
      "🚀 Lyvo is a real-time chat application built with the MERN + Socket.IO stack, designed for seamless communication and scalability.",
    subDescription: [
      "Implemented real-time 1-on-1 messaging using Socket.IO for instant communication.",
      "Secured user authentication and protected routes with JWT-based session management.",
      "Designed a mobile-responsive UI using React, Vite, TailwindCSS, and DaisyUI with 32 customizable themes.",
      "Managed global state efficiently with Zustand, ensuring a fast and scalable frontend.",
      "Structured the application with a modular folder system for maintainability and scalability.",
      "Added CI/CD pipelines with GitHub Actions and containerized deployment with Docker.",
      "Wrote unit tests to ensure stability and reliability.",
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
    id: 2,
    title: "URL Shortener",
    description:
      "A secure and efficient URL shortener built with the MERN stack, featuring user authentication, analytics, and Dockerized deployment.",
    subDescription: [
      "Implemented anonymous URL creation and custom short links for logged-in users.",
      "Added JWT-based authentication and rate-limiting for production readiness.",
      "Built a clean React interface for quick creation, copy, and management of links.",
      "Added link analytics (clicks, expiry) for insights and control.",
      "Containerized the app with Docker and set up CI/CD using GitHub Actions for seamless deployment.",
      "Wrote unit tests for core backend logic to maintain code quality.",
    ],
    href: "https://github.com/Xsidz/url",
    logo: "",
    image: "/assets/projects/url-shortner.jpg",
    tags: [
      { id: 1, name: "MongoDB", path: "/assets/logos/MongoDB.svg" },
      { id: 2, name: "Express.js", path: "/assets/logos/Express.svg" },
      { id: 3, name: "React", path: "/assets/logos/react.svg" },
      { id: 4, name: "Node.js", path: "/assets/logos/Node.js.svg" },
      { id: 5, name: "Docker", path: "/assets/logos/Docker.svg" },
    ],
  },
  {
    id: 3,
    title: "CSECDPCOE Website",
    description:
      "Official website of Cyber Security Club DPCOE, built to showcase events, achievements, and resources.",
    subDescription: [
      "Developed a dynamic and responsive website for the Cyber Security Club at DPCOE.",
      "Integrated event pages, blogs, and resources for students.",
      "Optimized for SEO and mobile responsiveness to boost visibility and accessibility.",
      "Deployed and maintained for ongoing scalability and updates.",
    ],
    href: "https://csecdpcoe.com",
    logo: "",
    image: "/assets/projects/csecdpcoe.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 4,
    title: "Employee Management System",
    description:
      "A React-based Employee Management System designed for local and small-scale organizations.",
    subDescription: [
      "Implemented CRUD functionality for employee records using React and Local Storage.",
      "Added search, sorting, and filtering for quick record discovery.",
      "Designed a clean, responsive interface with reusable, modular components.",
      "Introduced basic role views (admin/user) to separate actions and visibility.",
      "Architected for future backend integration (Node.js + MongoDB) without major refactors.",
    ],
    href: "https://github.com/Xsidz/Employee-Management-System---React---localStorage",
    logo: "",
    image: "/assets/projects/employee-management.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "HTML5", path: "/assets/logos/html5.svg" },
      { id: 4, name: "CSS3", path: "/assets/logos/css3.svg" },
    ],
  },
  {
    id: 5,
    title: "File Sharing System",
    description:
      "A secure and scalable file-sharing platform using the MERN stack.",
    subDescription: [
      "Built secure upload/download flows with Node.js + Express APIs.",
      "Implemented JWT authentication and role-based access control.",
      "Added tokenized sharing links with optional expiry and revocation.",
      "Stored file metadata efficiently in MongoDB; integrated GridFS for large files.",
      "Designed a polished React + TailwindCSS interface for managing shares and permissions.",
    ],
    href: "https://github.com/Xsidz/file-sharing",
    logo: "",
    image: "/assets/projects/file-sharing.jpg",
    tags: [
      { id: 1, name: "MongoDB", path: "/assets/logos/MongoDB.svg" },
      { id: 2, name: "Express.js", path: "/assets/logos/Express.svg" },
      { id: 3, name: "React", path: "/assets/logos/react.svg" },
      { id: 4, name: "Node.js", path: "/assets/logos/Node.js.svg" },
    ],
  },
  {
    id: 6,
    title: "AI-Powered Resume Matching System",
    description:
      "An intelligent system that matches resumes with job descriptions using FastAPI, Python, and LlamaIndex.",
    subDescription: [
      "Built a React frontend for resume uploads and JD input with realtime feedback.",
      "Developed a FastAPI backend to parse PDFs/Docs and extract structured entities.",
      "Used LlamaIndex + NLP to compute semantic similarity and missing-skill highlights.",
      "Displayed confidence scores, match reasons, and next-step suggestions to recruiters.",
      "Optimized for responsive performance to support rapid screening workflows.",
    ],
    href: "https://github.com/Xsidz/Resume-Matching",
    logo: "",
    image: "/assets/projects/resume-matching.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "FastAPI", path: "/assets/logos/FastAPI.svg" },
      { id: 3, name: "Python", path: "/assets/logos/python.svg" },
      { id: 4, name: "LlamaIndex", path: "/assets/logos/llama.jpg" },
    ],
  },
  {
    id: 7,
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
    title: "Software Engineer Intern",
    job: "Bloom Agency, Pune, Maharashtra",
    date: "Feb 2025 – Apr 2025",
    contents: [
      "Contributed to the development and deployment of client-facing websites, including Aaruhi Jewels (MERN e-commerce) and Vinayak Group Jaipur (WordPress real estate), improving engagement and satisfaction.",
      "Enhanced performance, accessibility, and responsiveness across devices, strengthening Core Web Vitals and user retention.",
      "Adapted quickly to JavaScript, React, Node.js, and WordPress stacks, reducing development bottlenecks by 20%.",
    ],
  },
  {
    title: "Software Engineer Intern",
    job: "MHTECHIN, Pune, Maharashtra",
    date: "Dec 2023 – Jul 2024",
    contents: [
      "Led end-to-end development and deployment of 5+ web/mobile apps (MHTECHIN Website, Academy Website, FarmLancer App, Rush Fashions, Food Delivery WebApp), serving 50,000+ users.",
      "Collaborated with design, marketing, and content teams to launch MHTECHIN Technologies’ online presence, driving a 30% increase in traffic in the first quarter.",
      "Continuously upskilled on emerging tech and best practices to deliver efficient, scalable solutions and faster turnaround.",
    ],
  },
  {
    title: "Content Writer & Web Developer",
    job: "FINNOEXPERT, Pune, Maharashtra",
    date: "Dec 2022 – Mar 2023",
    contents: [
      "Wrote and optimized finance and investment-related content, improving audience engagement and helping increase organic traffic by 25%.",
      "Designed and developed web pages for FinnoExpert, ensuring mobile responsiveness, SEO optimization, and improved user experience.",
      "Collaborated with the core team to align content strategy and website updates with business goals, contributing to stronger brand presence.",
      "Balanced dual responsibilities of content creation and development, showcasing adaptability and effective time management.",
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
