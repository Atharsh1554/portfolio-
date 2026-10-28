/**
 * ==============================================================================
 * ATHARSH S — CENTRAL PORTFOLIO DATA CONFIGURATION
 * ==============================================================================
 * Single Source of Truth for all personal branding, academic records,
 * semester results, verified GitHub projects, skills, certifications, and achievements.
 * ==============================================================================
 */

const PORTFOLIO_DATA = {
  // --------------------------------------------------------------------------
  // 1. PERSONAL INFORMATION & BRANDING
  // --------------------------------------------------------------------------
  personal: {
    name: "Atharsh S",
    title: "Pre-Final-Year B.E. Computer Science and Engineering Student",
    roles: [
      "Pre-Final Year CSE Student",
      "Software Developer",
      "Full Stack Engineer",
      "Cloud & Problem Solving Enthusiast"
    ],
    institution: "R.M.D. Engineering College",
    affiliation: "Anna University",
    collegeJoiningYear: 2024,
    academicStatus: "Pre-Final Year",
    expectedGraduationYear: 2028,
    location: "Chennai, Tamil Nadu, India",
    email: "atharshrmd@gmail.com",
    github: "https://github.com/Atharsh1554",
    linkedin: "https://www.linkedin.com/in/atharsh-s/",
    profileImage: "profile.jpg.JPG",
    
    // Requested exact introduction
    introHeading: "Hi, I'm Atharsh S",
    summary: "Hi, I'm Atharsh S, a pre-final-year Computer Science and Engineering student at R.M.D. Engineering College. I enjoy building practical software products, exploring cloud technologies, developing web applications, and solving real-world problems through technology.",
    
    bioParagraphs: [
      "Hi, I'm Atharsh S, a pre-final-year Computer Science and Engineering student at R.M.D. Engineering College. I enjoy building practical software products, exploring cloud technologies, developing web applications, and solving real-world problems through technology.",
      "Having joined R.M.D. Engineering College in 2024, I have completed Semesters 1 through 4 and am currently pursuing Semester 5. In addition to my engineering coursework, I have completed Business Studies at the University of Cambridge, strengthening my strategic planning and product-thinking capabilities alongside deep technical engineering.",
      "As an active developer, I build full-stack web platforms (such as BrokerHub and Millet Market), explore AI systems (such as ForenSight for multimodal forensic reconstruction), and design intuitive user interfaces—having won 1st Place in the Pixel Chef UI/UX design event at UBERTECH'26."
    ],
    careerGoals: "To excel as a high-velocity Software Development Engineer, building scalable cloud-native applications, architecting robust APIs, and deploying software that creates genuine human and economic value."
  },

  // --------------------------------------------------------------------------
  // 2. RESUME CONFIGURATION
  // --------------------------------------------------------------------------
  resume: {
    filePath: "assets/documents/resume.pdf",
    fileName: "resume.pdf",
    lastUpdated: "October 2026",
    summary: "Pre-final year engineering resume detailing verified full-stack projects (BrokerHub, ForenSight, Millet Market), Oracle Cloud & Cambridge credentials, and academic coursework."
  },

  // --------------------------------------------------------------------------
  // 3. ACADEMIC RECORDS & SEMESTER DASHBOARD (PHASE 2 & 4)
  // --------------------------------------------------------------------------
  academics: {
    cumulativeCGPA: "6.75",
    cgpaScale: "10.0",
    latestCompletedSemester: "Semester 4",
    completedSemestersCount: 4,
    totalSemestersCount: 8,
    collegeJoiningYear: 2024,
    expectedGraduation: 2028,
    academicStatus: "Pre-Final Year",
    department: "Computer Science and Engineering",
    lastUpdatedDate: "October 2026",

    // Formal Education History
    educationHistory: [
      {
        id: "college-be",
        level: "Undergraduate (B.E.)",
        institution: "R.M.D. Engineering College",
        affiliation: "Anna University",
        location: "Chennai, Tamil Nadu",
        qualification: "B.E. Computer Science and Engineering",
        joiningYear: 2024,
        duration: "2024 – 2028",
        status: "Currently Pursuing (Pre-Final Year, Sem 5)",
        grade: "CGPA: 6.75 / 10.0",
        marksheetUrl: "assets/documents/marksheet_sem4.pdf",
        hasDocument: false,
        highlights: "Completed Semesters 1 to 4 with solid foundations in Data Structures, Object-Oriented Programming (Java), DBMS, Computer Networks, and Operating Systems. Currently pursuing Semester 5."
      },
      {
        id: "cambridge-business",
        level: "International Certification",
        institution: "University of Cambridge",
        board: "Cambridge Assessment International Education",
        location: "Cambridge, United Kingdom",
        qualification: "Business Studies",
        duration: "Completed",
        status: "Completed",
        grade: "Certified",
        marksheetUrl: "assets/documents/cambridge_business_studies.pdf",
        hasDocument: false,
        highlights: "Rigorous international curriculum spanning strategic planning, organizational leadership, financial analysis, and commercial decision-making."
      },
      {
        id: "school-12th",
        level: "Higher Secondary (12th Grade)",
        institution: "CICSE Affiliated School",
        board: "CICSE (ISC)",
        location: "Tamil Nadu, India",
        qualification: "Class XII (ISC) - Science & Mathematics",
        yearOfCompletion: "2024",
        status: "Completed",
        grade: "Distinction",
        marksheetUrl: "assets/documents/marksheet_12th.pdf",
        hasDocument: false,
        highlights: "Advanced academic training in Physics, Chemistry, and Higher Mathematics."
      },
      {
        id: "school-10th",
        level: "Secondary School (10th Grade)",
        institution: "CICSE Affiliated School",
        board: "CICSE (ICSE)",
        location: "Tamil Nadu, India",
        qualification: "Class X (ICSE)",
        yearOfCompletion: "2022",
        status: "Completed",
        grade: "Distinction",
        marksheetUrl: "assets/documents/marksheet_10th.pdf",
        hasDocument: false,
        highlights: "Strong foundational aptitude in sciences, computer applications, and mathematics."
      }
    ],

    // 5 Semester Cards
    semesters: [
      {
        semNumber: 1,
        title: "Semester 1",
        academicYear: "2024 – 2025 (Odd)",
        status: "Completed",
        sgpa: "Completed",
        cgpa: "Verified",
        resultDate: "Verified",
        marksheetUrl: "assets/documents/marksheet_sem1.pdf",
        hasDocument: false,
        subjects: [
          "Professional Communication",
          "Matrices and Calculus",
          "Engineering Physics",
          "Engineering Chemistry",
          "Problem Solving and Python Programming"
        ]
      },
      {
        semNumber: 2,
        title: "Semester 2",
        academicYear: "2024 – 2025 (Even)",
        status: "Completed",
        sgpa: "Completed",
        cgpa: "Verified",
        resultDate: "Verified",
        marksheetUrl: "assets/documents/marksheet_sem2.pdf",
        hasDocument: false,
        subjects: [
          "Technical Communication",
          "Statistics and Numerical Methods",
          "Physics for Information Science",
          "Basic Electrical and Electronics Engineering",
          "Programming in C"
        ]
      },
      {
        semNumber: 3,
        title: "Semester 3",
        academicYear: "2025 – 2026 (Odd)",
        status: "Completed",
        sgpa: "Completed",
        cgpa: "Verified",
        resultDate: "Verified",
        marksheetUrl: "assets/documents/marksheet_sem3.pdf",
        hasDocument: false,
        subjects: [
          "Discrete Mathematics",
          "Data Structures and Algorithms",
          "Object-Oriented Programming (Java)",
          "Digital Principles and Computer Organization",
          "Database Management Systems"
        ]
      },
      {
        semNumber: 4,
        title: "Semester 4",
        academicYear: "2025 – 2026 (Even)",
        status: "Completed",
        sgpa: "Completed",
        cgpa: "6.75",
        resultDate: "Verified",
        marksheetUrl: "assets/documents/marksheet_sem4.pdf",
        hasDocument: false,
        subjects: [
          "Theory of Computation",
          "Design and Analysis of Algorithms",
          "Operating Systems",
          "Computer Networks",
          "Software Engineering Principles"
        ]
      },
      {
        semNumber: 5,
        title: "Semester 5",
        academicYear: "2026 – 2027 (Odd)",
        status: "Currently Pursuing",
        sgpa: "In Progress",
        cgpa: "In Progress",
        resultDate: "Upcoming",
        marksheetUrl: "",
        hasDocument: false,
        subjects: [
          "Compiler Design",
          "Web Technology & Cloud Frameworks",
          "Artificial Intelligence Fundamentals",
          "Distributed Systems & Security"
        ]
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 4. VERIFIED GITHUB PROJECTS (PHASE 5)
  // --------------------------------------------------------------------------
  projects: [
    {
      id: "proj-brokerhub",
      name: "BrokerHub",
      tagline: "Enterprise Multi-Portal Marketplace & Admin Control Center",
      category: "web",
      categoryLabel: "Web & Enterprise",
      featured: true,
      image: "assets/images/proj_brokerhub.svg",
      problemSolved: "Traditional brokerage markets suffer from unverified credentials, fragmented communication, lack of transaction auditing, and opaque commission settlements.",
      description: "An enterprise-grade administrative management platform engineered for multi-portal marketplace operations. Provides real-time telemetry, broker accreditation workflows, customer management, inventory moderation, and financial transaction tracking.",
      techStack: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "Supabase", "REST APIs"],
      keyFeatures: [
        "Real-time system telemetry and platform health monitoring",
        "Multi-stage broker accreditation and vetting workflows",
        "Customer lead assignment and automated inventory moderation",
        "Financial transaction tracking with escrow ledger logging",
        "Role-based administrative control center with responsive dashboard"
      ],
      githubUrl: "https://github.com/Atharsh1554/BrokerHub",
      liveDemoUrl: "https://www.hendrixbrokerhub.in/",
      mirrorDemoUrl: "https://new-brokerhub.vercel.app",
      status: "Production Deployed",
      architectureNotes: "Built using React 19 and modern Vite tooling with Supabase backend integration and Tailwind CSS v4 styling."
    },
    {
      id: "proj-forensic",
      name: "ForenSight (FORENSIC)",
      tagline: "Multimodal AI Forensic Visualization & Suspect Reconstruction",
      category: "ai",
      categoryLabel: "AI & Full Stack",
      featured: true,
      image: "assets/images/proj_forensic.svg",
      problemSolved: "Law enforcement and investigative teams face critical delays, bias, and subjectivity when translating verbal eyewitness testimony into actionable suspect sketches and crime scene layouts.",
      description: "A prototype multimodal AI system that converts verbal eyewitness testimony into suspect biometric facial sketches and crime scene coordinate layouts. Integrates a robust Python FastAPI backend with an interactive Next.js frontend.",
      techStack: ["Python 3.10+", "FastAPI", "Next.js", "React", "Tailwind CSS", "Uvicorn", "Pytest"],
      keyFeatures: [
        "Natural language eyewitness testimony ingestion pipeline",
        "Multimodal layout generation mapping crime scene entry and exit coordinates",
        "Facial landmark vector estimation and wireframe sketch reconstruction",
        "High-performance asynchronous API endpoints using FastAPI and Uvicorn",
        "Automated backend test suite using Pytest"
      ],
      githubUrl: "https://github.com/Atharsh1554/FORENSIC",
      liveDemoUrl: "",
      status: "Prototype / Research",
      architectureNotes: "Decoupled architecture featuring a FastAPI service processing synthetic data paired with an accessible Next.js UI."
    },
    {
      id: "proj-millets",
      name: "Millet Market",
      tagline: "Transparent Farmer-Harvest Procurement & Direct Marketplace Platform",
      category: "web",
      categoryLabel: "Web & E-Commerce",
      featured: true,
      image: "assets/images/proj_millets.svg",
      problemSolved: "Smallholder millet farmers lack direct transparent procurement pipelines to consumer markets, often losing margins to intermediaries with delayed payments.",
      description: "A farmer-harvest procurement marketplace for millet crops. Farmers submit harvests; the admin team conducts multi-stage physical quality inspections; approved harvests are procured into inventory; and farmers are paid directly via a dedicated payout ledger.",
      techStack: ["TypeScript", "Next.js", "Node.js", "Prisma ORM", "PostgreSQL", "PGlite", "Tailwind CSS"],
      keyFeatures: [
        "Farmer harvest submission portal with crop specifications and batch tracking",
        "Multi-stage hands-on physical inspection workflow with admin verification",
        "Procurement pipeline tracking quantity procured vs inventory allocation",
        "Dedicated farmer payout ledger tracked independently from retail sales",
        "Full-stack database layer powered by Prisma ORM and PostgreSQL / PGlite"
      ],
      githubUrl: "https://github.com/Atharsh1554/millets_marketplace",
      liveDemoUrl: "https://millets-marketplace.vercel.app",
      status: "Deployed on Vercel",
      architectureNotes: "Engineered with Next.js App Router and Prisma ORM supporting embedded PGlite for rapid local testing."
    },
    {
      id: "proj-fooddonation",
      name: "Food Donation App",
      tagline: "Community Surplus Food Redistribution & Hunger Relief Network",
      category: "web",
      categoryLabel: "Social Impact & Web",
      featured: false,
      image: "assets/images/proj_fooddonation.svg",
      problemSolved: "Large quantities of surplus edible food from banquets, restaurants, and events go to waste while local community shelters face severe food insecurity.",
      description: "A web platform engineered to connect surplus food donors with local NGOs and volunteers. Enables instantaneous listing of edible surplus, pickup scheduling, and volunteer dispatch to minimize food waste.",
      techStack: ["JavaScript (ES6+)", "React", "Node.js", "Express", "CSS3", "Vercel"],
      keyFeatures: [
        "Instant donor listing for surplus meals with quantity and safe consumption windows",
        "Live volunteer and shelter pickup request coordination",
        "Geo-location and status tracking for logistics efficiency",
        "Impact ledger quantifying total meals preserved from waste"
      ],
      githubUrl: "https://github.com/Atharsh1554/Food-Donation-APP",
      liveDemoUrl: "https://food-donation-app-ten.vercel.app",
      status: "Deployed on Vercel",
      architectureNotes: "Lightweight, responsive React application deployed on Vercel for high mobile accessibility."
    },
    {
      id: "proj-groomer",
      name: "GROOMER (Slot Booking System)",
      tagline: "Intelligent Real-Time Appointment & Slot Reservation Platform",
      category: "web",
      categoryLabel: "Web Application",
      featured: false,
      image: "assets/images/proj_groomer.svg",
      problemSolved: "Salons and personal care businesses face scheduling chaos, peak-hour double-booking, and long customer wait times with manual appointment logs.",
      description: "A full-stack appointment reservation system that automates service scheduling. Enables users to inspect real-time calendar availability, select specific services, and lock time slots without conflicts.",
      techStack: ["TypeScript", "JavaScript", "Node.js", "Express.js", "HTML5", "CSS3"],
      keyFeatures: [
        "Conflict-free real-time slot reservation logic",
        "Dynamic calendar with date and time-slot availability indicators",
        "Mobile-first responsive interface tailored for appointment booking",
        "Structured modular backend handling customer details and booking status"
      ],
      githubUrl: "https://github.com/Atharsh1554/groomer_mystrio",
      liveDemoUrl: "https://github.com/Atharsh1554/groomer_mystrio",
      status: "Active",
      architectureNotes: "Lightweight Node.js event-driven backend paired with modular frontend views."
    },
    {
      id: "proj-portfolio",
      name: "Atharsh S Developer Portfolio",
      tagline: "High-Performance Interactive Academic & Recruiter Showcase",
      category: "web",
      categoryLabel: "Frontend & Architecture",
      featured: false,
      image: "assets/images/proj_portfolio.svg",
      problemSolved: "Static resume documents cannot dynamically demonstrate in-browser marksheet verification, interactive theme switching, and live code architectures.",
      description: "Personal developer portfolio and academic hub engineered with modern vanilla web standards. Single-source-of-truth architecture, modal document previewer, CGPA tracker, and real-time certification search.",
      techStack: ["HTML5 (Semantic)", "Vanilla CSS3 Tokens", "JavaScript (ES6+)", "GitHub Pages"],
      keyFeatures: [
        "In-app modal document previewer for marksheets, resume, and certificates",
        "Academic dashboard with CGPA tracking and 5 semester cards",
        "Real-time certification search, domain filters, and sorting",
        "Deep charcoal / electric-violet design system with persistent light/dark mode",
        "Single source-of-truth configuration via data/portfolio-data.js"
      ],
      githubUrl: "https://github.com/Atharsh1554/portfolio-",
      liveDemoUrl: "https://atharsh1554.github.io/portfolio-/",
      status: "Production Deployed",
      architectureNotes: "Zero third-party runtime framework dependencies, lightning fast load time, fully static GitHub Pages compatible."
    }
  ],

  // --------------------------------------------------------------------------
  // 5. TECHNICAL SKILLS ARCHITECTURE (PHASE 6)
  // --------------------------------------------------------------------------
  skills: {
    programmingLanguages: [
      { name: "TypeScript", icon: "fab fa-js", level: "Primary", note: "BrokerHub, Millet Market, Groomer" },
      { name: "JavaScript (ES6+)", icon: "fab fa-js-square", level: "Primary", note: "DOM, Async/Await, Web Apps" },
      { name: "Python 3", icon: "fab fa-python", level: "Core", note: "FastAPI, ForenSight AI, Data Science" },
      { name: "Java", icon: "fab fa-java", level: "Core", note: "OOP, Collections, Infosys Springboard" },
      { name: "C / C++", icon: "fas fa-code", level: "Proficient", note: "Data Structures, Algorithms, Pointers" },
      { name: "HTML5 & CSS3", icon: "fab fa-html5", level: "Proficient", note: "Semantic Structure, Flexbox/Grid" }
    ],
    frontendDevelopment: [
      { name: "React 19", icon: "fab fa-react", note: "Hooks, Component Architecture (BrokerHub)" },
      { name: "Next.js", icon: "fas fa-layer-group", note: "App Router, SSR, Full-Stack Frontend" },
      { name: "Tailwind CSS (v4)", icon: "fab fa-css3-alt", note: "Utility-first design, Responsive layout" },
      { name: "Vite", icon: "fas fa-bolt", note: "Build Tooling, Hot Module Replacement" },
      { name: "Modern CSS & Glassmorphism", icon: "fas fa-palette", note: "Tokens, Custom Properties, Dark Mode" },
      { name: "DOM Manipulation", icon: "fas fa-cubes", note: "Vanilla JS, Event Delegation" }
    ],
    backendDevelopment: [
      { name: "Node.js", icon: "fab fa-node-js", note: "Runtime, Event-Driven Backend Architecture" },
      { name: "Express.js", icon: "fas fa-server", note: "Routing, Middleware, HTTP APIs" },
      { name: "FastAPI (Python)", icon: "fas fa-tachometer-alt", note: "High-performance Async APIs (ForenSight)" },
      { name: "RESTful API Architecture", icon: "fas fa-network-wired", note: "Endpoint conventions, JSON handling" },
      { name: "Uvicorn", icon: "fas fa-microchip", note: "ASGI Web Server Implementation" }
    ],
    databases: [
      { name: "PostgreSQL", icon: "fas fa-database", note: "Relational Queries & Schema Design" },
      { name: "Prisma ORM", icon: "fas fa-project-diagram", note: "Type-safe Data Modeling (Millet Market)" },
      { name: "Supabase", icon: "fas fa-fire", note: "Cloud Database, Auth, Telemetry (BrokerHub)" },
      { name: "SQL & Normalization", icon: "fas fa-table", note: "Relational constraints & Indexing" },
      { name: "PGlite", icon: "fas fa-database", note: "Embedded Postgres for Local Testing" }
    ],
    cloudAndDevOps: [
      { name: "Oracle Cloud Infrastructure (OCI)", icon: "fas fa-cloud", note: "2025 Certified Foundation Concepts" },
      { name: "Supabase Cloud", icon: "fas fa-cloud-upload-alt", note: "Live Cloud Backend & Auth" },
      { name: "Vercel Platform", icon: "fas fa-globe", note: "Production deployments (BrokerHub, Millets)" },
      { name: "GitHub Pages & Actions", icon: "fab fa-github", note: "CI/CD & Static Hosting" },
      { name: "Git Version Control", icon: "fab fa-git-alt", note: "Branching, PRs, Rebase, Log tracing" }
    ],
    developerTools: [
      { name: "Visual Studio Code", icon: "fas fa-laptop-code", note: "Extensions, Debugging, Workspaces" },
      { name: "Pytest", icon: "fas fa-check-double", note: "Automated Backend Testing (ForenSight)" },
      { name: "Postman", icon: "fas fa-paper-plane", note: "API Payload Verification" },
      { name: "Chrome DevTools", icon: "fab fa-chrome", note: "Profiling, Network Inspection" },
      { name: "Git CLI", icon: "fas fa-terminal", note: "Command Line Mastery" }
    ],
    uiuxAndOther: [
      { name: "UI/UX Prototyping (Figma)", icon: "fab fa-figma", note: "Winner - 1st Place Pixel Chef @ UBERTECH'26" },
      { name: "Data Science with Python", icon: "fas fa-chart-line", note: "Pandas & NumPy - NPTEL Elite Grade" },
      { name: "Matplotlib & Visualization", icon: "fas fa-chart-bar", note: "Analytical Dashboards" }
    ]
  },

  // --------------------------------------------------------------------------
  // 6. CERTIFICATIONS & CREDENTIALS (PHASE 7)
  // --------------------------------------------------------------------------
  certifications: [
    {
      id: "cert-oci-2025",
      title: "Oracle Cloud Infrastructure 2025",
      issuer: "ORACLE",
      issuerLogoIcon: "fa-cloud",
      issueDate: "2025",
      category: "cloud",
      categoryLabel: "Cloud Computing & AWS/OCI",
      skills: ["Oracle Cloud Infrastructure", "Compute & VCN", "Cloud Storage", "Identity & IAM"],
      documentUrl: "assets/documents/cert_oracle_cloud.pdf",
      hasDocument: false,
      verificationUrl: "https://www.oracle.com/cloud/",
      isVerified: true,
      description: "Comprehensive enterprise cloud architecture certification validating cloud networking, virtual computing, database services, and security compliance in OCI."
    },
    {
      id: "cert-nptel-python",
      title: "Python for Data Science (Elite Grade)",
      issuer: "NPTEL (IIT Madras / Swayam)",
      issuerLogoIcon: "fa-medal",
      issueDate: "2024",
      category: "datascience",
      categoryLabel: "Python & Data Science",
      skills: ["Python", "NumPy", "Pandas", "Statistical Analysis", "Data Visualization"],
      documentUrl: "assets/documents/cert_nptel_python.pdf",
      hasDocument: false,
      verificationUrl: "https://nptel.ac.in/",
      isVerified: true,
      description: "Rigorous certification by IIT Madras covering data structures, exploratory data analysis, mathematical modelling, and numerical computing in Python with Elite distinction."
    },
    {
      id: "cert-infosys-java",
      title: "Java Programming Fundamentals",
      issuer: "Infosys Springboard",
      issuerLogoIcon: "fa-certificate",
      issueDate: "2024",
      category: "programming",
      categoryLabel: "Programming & DSA",
      skills: ["Java", "Object-Oriented Programming", "Inheritance & Polymorphism", "Collections"],
      documentUrl: "assets/documents/cert_infosys_java.pdf",
      hasDocument: false,
      verificationUrl: "https://infyspringboard.onwingspan.com",
      isVerified: true,
      description: "Core Java engineering program validating solid grasp of object-oriented design patterns, encapsulation, exception handling, and functional paradigms."
    },
    {
      id: "cert-infosys-dsa",
      title: "Introduction to Binary Trees & Sorting",
      issuer: "Infosys Springboard",
      issuerLogoIcon: "fa-project-diagram",
      issueDate: "2024",
      category: "programming",
      categoryLabel: "Programming & DSA",
      skills: ["Binary Trees", "BST", "QuickSort & MergeSort", "Algorithmic Complexity"],
      documentUrl: "assets/documents/cert_infosys_trees.pdf",
      hasDocument: false,
      verificationUrl: "https://infyspringboard.onwingspan.com",
      isVerified: true,
      description: "In-depth algorithmic analysis of hierarchical data structures, binary search trees, tree traversals, and asymptotic time/space complexity analysis."
    },
    {
      id: "cert-cambridge-business",
      title: "Business Studies Certification",
      issuer: "University of Cambridge",
      issuerLogoIcon: "fa-university",
      issueDate: "Completed",
      category: "other",
      categoryLabel: "Management & Strategy",
      skills: ["Strategic Management", "Financial Analysis", "Project Planning", "Global Commerce"],
      documentUrl: "assets/documents/cambridge_business_studies.pdf",
      hasDocument: false,
      verificationUrl: "https://www.cambridge.org/",
      isVerified: true,
      description: "International qualification strengthening organizational leadership, strategic resource management, and commercial product awareness."
    },
    {
      id: "cert-energy-swaraj",
      title: "Energy Literacy Training",
      issuer: "Energy Swaraj Foundation",
      issuerLogoIcon: "fa-leaf",
      issueDate: "2024",
      category: "other",
      categoryLabel: "General Learning",
      skills: ["Renewable Energy", "Carbon Literacy", "Sustainability Practice", "Ecological Systems"],
      documentUrl: "assets/documents/cert_energy_swaraj.pdf",
      hasDocument: false,
      verificationUrl: "https://energyswaraj.org/",
      isVerified: true,
      description: "Formal certification on global climate trends, carbon footprint mitigation, and sustainable energy transitions."
    }
  ],

  // --------------------------------------------------------------------------
  // 7. ACHIEVEMENTS & AWARDS (PHASE 9)
  // --------------------------------------------------------------------------
  achievements: [
    {
      id: "achieve-pixelchef",
      title: "1st Place Winner — Pixel Chef (UI/UX Design)",
      issuer: "UBERTECH'26 National Technical Symposium &bull; SRM IST Vadapalani",
      date: "2026",
      icon: "fa-trophy",
      description: "Won First Place in the competitive UI/UX design event 'Pixel Chef' at UBERTECH'26, demonstrating rapid wireframing, user-centric problem solving, design aesthetics, and interactive prototyping.",
      hasProof: true,
      documentUrl: ""
    },
    {
      id: "achieve-nptel",
      title: "NPTEL Elite Grade in Python for Data Science",
      issuer: "Ministry of Education & IIT Madras",
      date: "2024",
      icon: "fa-award",
      description: "Secured top-bracket Elite distinction in the national Indian Institute of Technology examination for Python scientific computing and exploratory data analysis.",
      hasProof: true,
      documentUrl: "assets/documents/cert_nptel_python.pdf"
    },
    {
      id: "achieve-oracle",
      title: "Oracle Cloud Infrastructure 2025 Credential",
      issuer: "ORACLE University",
      date: "2025",
      icon: "fa-cloud-check",
      description: "Demonstrated technical mastery over enterprise cloud paradigms including Virtual Cloud Networks, Object Storage, and Identity Administration.",
      hasProof: true,
      documentUrl: "assets/documents/cert_oracle_cloud.pdf"
    },
    {
      id: "achieve-cambridge",
      title: "Cambridge Business Studies Credential",
      issuer: "University of Cambridge",
      date: "Completed",
      icon: "fa-certificate",
      description: "Awarded international credential in Business Studies, recognizing acumen in organizational leadership, operational management, and quantitative finance.",
      hasProof: true,
      documentUrl: "assets/documents/cambridge_business_studies.pdf"
    }
  ],

  // --------------------------------------------------------------------------
  // 8. INTERNSHIPS, TRAINING & EXPERIENCE (PHASE 8)
  // --------------------------------------------------------------------------
  experience: [
    {
      id: "exp-brokerhub-dev",
      type: "Product Engineering & Architecture",
      typeBadge: "Live Production Product",
      organization: "BrokerHub Admin Control Center",
      role: "Lead Frontend & Dashboard Architect",
      duration: "2025 – Present",
      status: "Active / Deployed",
      location: "Chennai, India",
      description: "Engineered and deployed the BrokerHub enterprise multi-portal administration platform using React 19, TypeScript, and Supabase. Designed telemetry monitoring, broker accreditation workflows, and escrow tracking.",
      technologies: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "Supabase", "REST APIs"],
      skillsAcquired: ["Enterprise Dashboard Architecture", "State Management", "Telemetry", "Authentication"],
      documentUrl: "",
      projectUrl: "https://www.hendrixbrokerhub.in/"
    },
    {
      id: "exp-fullstack-training",
      type: "Technical Practicum & Software Labs",
      typeBadge: "Engineering Program",
      organization: "R.M.D. Engineering College — Software Labs",
      role: "Full Stack & Cloud Practicum",
      duration: "2024 – Present",
      status: "Active",
      location: "Chennai, India",
      description: "Completed Semesters 1 through 4 covering Data Structures & Algorithms, Java Object-Oriented Design, Relational Database Engineering, Operating Systems, and Computer Networks. Currently pursuing Semester 5 coursework.",
      technologies: ["Java", "Python", "TypeScript", "PostgreSQL", "Prisma ORM", "Git"],
      skillsAcquired: ["Database Normalization", "Algorithmic Complexity", "API Design", "Agile Testing"],
      documentUrl: "",
      projectUrl: "https://github.com/Atharsh1554"
    },
    {
      id: "exp-cambridge",
      type: "Academic Program & Certification",
      typeBadge: "International Credential",
      organization: "University of Cambridge",
      role: "Student — Business Studies Program",
      duration: "Completed",
      status: "Completed",
      location: "Cambridge, UK / Online",
      description: "Completed rigorous coursework in Business Studies, cultivating managerial insight, strategic problem-framing, and operational analysis that directly complements technical software development.",
      technologies: ["Strategic Planning", "Project Management", "Business Case Analysis", "Risk Assessment"],
      skillsAcquired: ["Analytical Thinking", "Cross-Disciplinary Strategy", "Communication", "Decision Making"],
      documentUrl: "assets/documents/cambridge_business_studies.pdf",
      projectUrl: ""
    },
    {
      id: "exp-internship-target",
      type: "Industry Internship Opportunity",
      typeBadge: "Open to Offers",
      organization: "Seeking Pre-Final Year Software Engineering Internships",
      role: "Software Development Engineer Intern / Cloud Engineer Intern",
      duration: "Upcoming / Open to Offers",
      status: "Seeking Opportunities",
      location: "Chennai / Bangalore / Remote",
      description: "Actively seeking pre-final year software engineering internships to contribute to high-velocity engineering teams building scalable cloud web products, distributed backends, or robust APIs.",
      technologies: ["TypeScript", "React", "Python", "FastAPI", "Node.js", "Cloud"],
      skillsAcquired: ["Agile Development", "Production Software Lifecycle", "System Design"],
      documentUrl: "",
      projectUrl: "mailto:atharshrmd@gmail.com"
    }
  ],

  // --------------------------------------------------------------------------
  // 9. CORE PHILOSOPHY
  // --------------------------------------------------------------------------
  philosophy: [
    {
      icon: "fa-code",
      title: "Clean Architecture",
      text: "Writing readable, maintainable, and type-safe code that scales gracefully across engineering teams."
    },
    {
      icon: "fa-lightbulb",
      title: "First-Principles Problem Solving",
      text: "Deconstructing complex system requirements into modular, testable components before writing production code."
    },
    {
      icon: "fa-rocket",
      title: "Production-Grade Execution",
      text: "Shipping real products—such as BrokerHub and Millet Market—with end-to-end user workflows and deployments."
    },
    {
      icon: "fa-users",
      title: "Collaborative Leadership",
      text: "Combining engineering precision with Cambridge business strategy to build software that creates tangible value."
    }
  ]
};

// Export to window for browser consumption
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
