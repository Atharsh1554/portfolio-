/**
 * ==============================================================================
 * ATHARSH S — CENTRAL PORTFOLIO DATA CONFIGURATION
 * ==============================================================================
 * Edit this single file to update your personal details, academic records,
 * semester SGPAs/CGPA, certifications, projects, experience, and documents.
 * All changes here automatically reflect across the entire portfolio website!
 * ==============================================================================
 */

const PORTFOLIO_DATA = {
  // --------------------------------------------------------------------------
  // 1. PERSONAL INFORMATION & HERO BRANDING
  // --------------------------------------------------------------------------
  personal: {
    name: "Atharsh S",
    title: "Computer Science and Engineering Student",
    roles: [
      "Computer Science Student",
      "Software Developer",
      "Cloud & Problem Solving Enthusiast",
      "Full Stack Explorer"
    ],
    institution: "R.M.D. Engineering College",
    affiliation: "Anna University",
    location: "Chennai, Tamil Nadu, India",
    email: "atharshrmd@gmail.com",
    github: "https://github.com/Atharsh1554",
    linkedin: "https://www.linkedin.com/in/atharsh-s-20462a282/",
    profileImage: "profile.jpg.JPG",
    summary: "Dedicated 2nd-year B.E. Computer Science student at R.M.D. Engineering College with a solid foundation in software engineering, algorithms, and cloud technologies. Combining analytical rigor with Cambridge Business Studies certification to build scalable, impactful digital solutions.",
    bioParagraphs: [
      "Hello! I am Atharsh S, a dedicated 2nd-year B.E. Computer Science and Engineering student at R.M.D. Engineering College with a strong academic foundation and a deep passion for technology.",
      "I have completed Business Studies at the University of Cambridge, which has strengthened my management acumen and strategic thinking skills alongside my technical expertise. As a CICSE alumnus, I bring discipline, adaptability, and a proactive willingness to learn.",
      "My core interests include modern software development, problem-solving, cloud computing, and full-stack innovation. I am actively seeking software engineering internships, collaborative development opportunities, and challenging technical projects to grow both technically and professionally."
    ],
    careerGoals: "To excel as a high-impact Software Development Engineer, engineering scalable cloud-native architectures, designing resilient distributed systems, and solving real-world challenges through elegant, maintainable code."
  },

  // --------------------------------------------------------------------------
  // 2. RESUME CONFIGURATION
  // --------------------------------------------------------------------------
  resume: {
    filePath: "assets/documents/Atharsh_S_Resume.pdf",
    fileName: "Atharsh_S_Resume.pdf",
    lastUpdated: "October 2026",
    summary: "Includes undergraduate coursework, Cambridge Business Studies certification, technical projects (GROOMER, Data Viz), and industry certifications."
  },

  // --------------------------------------------------------------------------
  // 3. ACADEMIC RECORDS & SEMESTER DASHBOARD (PHASE 4 & 5)
  // --------------------------------------------------------------------------
  academics: {
    // Current Cumulative Overview
    cumulativeCGPA: "6.75", // Official CGPA
    cgpaScale: "10.0",
    latestCompletedSemester: "Semester 4",
    completedSemestersCount: 4,
    totalSemestersCount: 8,
    expectedGraduation: 2028,
    status: "Active / In Good Standing",
    department: "Computer Science and Engineering",

    // Formal Education History Cards
    educationHistory: [
      {
        id: "college-be",
        level: "Undergraduate (B.E.)",
        institution: "R.M.D. Engineering College",
        affiliation: "Anna University",
        location: "Chennai, Tamil Nadu",
        qualification: "B.E. Computer Science and Engineering",
        duration: "2024 – 2028",
        status: "Currently Pursuing (3rd Year)",
        grade: "CGPA: 6.75 / 10.0",
        marksheetUrl: "assets/documents/marksheet_sem4.pdf",
        hasDocument: false, // Set to true once PDF is placed in assets/documents/
        highlights: "Core subjects: Data Structures, Object-Oriented Programming (Java), Database Systems, Computer Architecture, Discrete Mathematics."
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
        highlights: "Comprehensive coverage of organizational management, strategic decision-making, accounting, and business operations."
      },
      {
        id: "school-12th",
        level: "Higher Secondary (12th Grade)",
        institution: "CICSE Affiliated Institution",
        board: "CICSE (ISC)",
        location: "Tamil Nadu, India",
        qualification: "Class XII (ISC) - Science & Mathematics",
        yearOfCompletion: "2023",
        status: "Completed",
        grade: "First Class Distinction",
        marksheetUrl: "assets/documents/marksheet_12th.pdf",
        hasDocument: false,
        highlights: "Advanced coursework in Mathematics, Physics, Chemistry, and Computer Applications with high academic discipline."
      },
      {
        id: "school-10th",
        level: "Secondary School (10th Grade)",
        institution: "CICSE Affiliated Institution",
        board: "CICSE (ICSE)",
        location: "Tamil Nadu, India",
        qualification: "Class X (ICSE)",
        yearOfCompletion: "2021",
        status: "Completed",
        grade: "Distinction",
        marksheetUrl: "assets/documents/marksheet_10th.pdf",
        hasDocument: false,
        highlights: "Solid scholastic grounding in sciences, English, computer fundamentals, and quantitative aptitude."
      }
    ],

    // Semester-by-Semester Records
    // (Add new semester objects as you receive official results)
    semesters: [
      {
        semNumber: 1,
        title: "Semester 1",
        academicYear: "2023 – 2024 (Odd)",
        sgpa: "8.50", // UPDATE with exact SGPA
        cgpa: "8.50",
        resultDate: "March 2024",
        status: "Completed",
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
        academicYear: "2023 – 2024 (Even)",
        sgpa: "8.40", // UPDATE with exact SGPA
        cgpa: "8.45",
        resultDate: "August 2024",
        status: "Completed",
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
        academicYear: "2024 – 2025 (Odd)",
        sgpa: "8.45", // UPDATE with exact SGPA
        cgpa: "8.45",
        resultDate: "February 2025",
        status: "Completed",
        marksheetUrl: "assets/documents/marksheet_sem3.pdf",
        hasDocument: false,
        subjects: [
          "Discrete Mathematics",
          "Data Structures and Algorithms",
          "Object-Oriented Programming with Java",
          "Digital Principles and Computer Organization",
          "Database Management Systems"
        ]
      },
      {
        semNumber: 4,
        title: "Semester 4",
        academicYear: "2024 – 2025 (Even)",
        sgpa: "In Progress",
        cgpa: "Pending Evaluation",
        resultDate: "Summer 2025",
        status: "In Progress",
        marksheetUrl: "",
        hasDocument: false,
        subjects: [
          "Theory of Computation",
          "Design and Analysis of Algorithms",
          "Operating Systems",
          "Computer Networks",
          "Software Engineering Principles"
        ]
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 4. CERTIFICATIONS & CREDENTIAL VERIFICATION (PHASE 6)
  // --------------------------------------------------------------------------
  certifications: [
    {
      id: "cert-oci-2025",
      title: "Oracle Cloud Infrastructure 2025",
      issuer: "ORACLE",
      issuerLogoIcon: "fa-cloud",
      issueDate: "2025",
      category: "cloud", // 'cloud' | 'programming' | 'datascience' | 'other'
      categoryLabel: "Cloud Computing & AWS/OCI",
      skills: ["Oracle Cloud Infrastructure", "Compute & VCN", "Cloud Storage", "Identity & IAM"],
      documentUrl: "assets/documents/cert_oracle_cloud.pdf",
      hasDocument: false,
      verificationUrl: "https://www.oracle.com/cloud/",
      isVerified: true,
      description: "Comprehensive enterprise cloud architecture certification covering cloud networking, virtual computing, database services, and security compliance in OCI."
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
      description: "Rigorous 8-week certification by IIT Madras covering data structures, exploratory data analysis, mathematical modelling, and numerical computing in Python with Elite distinction."
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
      description: "Core Java engineering program validating solid grasp of object-oriented design patterns, encapsulation, exceptions handling, and functional paradigms."
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
      description: "International qualification strengthening organizational leadership, strategic resource management, and commercial awareness."
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
  // 5. INTERNSHIPS, TRAINING & WORKSHOPS (PHASE 7)
  // --------------------------------------------------------------------------
  experience: [
    {
      id: "exp-cambridge",
      type: "Academic Program & Certification",
      typeBadge: "International Credential",
      organization: "University of Cambridge",
      role: "Student — Business Studies Program",
      duration: "Completed",
      status: "Completed",
      location: "Cambridge, UK / Online",
      description: "Completed comprehensive coursework in Business Studies, cultivating rigorous managerial insight, strategic problem-framing, and operational analysis that directly complements technical software development.",
      technologies: ["Strategic Planning", "Project Management", "Business Case Analysis", "Risk Assessment"],
      skillsAcquired: ["Analytical Thinking", "Cross-Disciplinary Strategy", "Communication", "Decision Making"],
      documentUrl: "assets/documents/cambridge_business_studies.pdf",
      projectUrl: ""
    },
    {
      id: "exp-fullstack-training",
      type: "Technical Training & Applied Labs",
      typeBadge: "Technical Specialization",
      organization: "R.M.D. Engineering College — Software Labs",
      role: "Full Stack & Algorithms Practicum",
      duration: "2024 – Present",
      status: "Active",
      location: "Chennai, India",
      description: "Participating in intensive hands-on lab sessions covering data structure implementations, full-stack JavaScript architectures (Node.js/Express), and cloud integration workflows.",
      technologies: ["Java", "JavaScript", "Node.js", "Express", "MySQL", "Git"],
      skillsAcquired: ["REST API Design", "Database Normalization", "Git Collaboration", "Test-Driven Development"],
      documentUrl: "",
      projectUrl: "https://github.com/Atharsh1554"
    },
    {
      id: "exp-internship-target",
      type: "Industry Internship Opportunity",
      typeBadge: "Looking for Opportunities",
      organization: "Seeking Summer / Winter 2025–2026 Internships",
      role: "Software Engineering Intern / Cloud Developer Intern",
      duration: "Upcoming / Open to Offers",
      status: "Seeking Opportunities",
      location: "Chennai / Bangalore / Remote",
      description: "Actively seeking opportunities to contribute to high-velocity software engineering teams, building scalable web systems, APIs, or cloud infrastructure tooling.",
      technologies: ["Node.js", "Python", "Java", "Cloud Infrastructure", "Modern Web"],
      skillsAcquired: ["Agile Development", "Production Software Lifecycle", "System Design"],
      documentUrl: "",
      projectUrl: "mailto:atharshrmd@gmail.com"
    }
  ],

  // --------------------------------------------------------------------------
  // 6. PROJECTS SHOWCASE (PHASE 8)
  // --------------------------------------------------------------------------
  projects: [
    {
      id: "proj-groomer",
      name: "GROOMER THE SLOT BOOKING SYSTEM",
      tagline: "Intelligent Real-Time Appointment & Slot Reservation Platform",
      category: "web",
      categoryLabel: "Web Development",
      featured: true,
      image: "assets/images/proj_groomer.svg", // SVG generated fallback or screenshot
      problemSolved: "Traditional salons and grooming businesses suffer from chaotic manual scheduling, customer wait times, and double-booking bottlenecks during peak hours.",
      description: "A robust full-stack web application that automates the appointment reservation lifecycle. It enables users to browse services, select qualified stylists, inspect real-time calendar availability, and lock time slots without conflicts.",
      techStack: ["Node.js", "JavaScript (ES6+)", "Express.js", "HTML5", "CSS3", "REST APIs"],
      keyFeatures: [
        "Conflict-free real-time slot reservation engine",
        "Dynamic calendar with date and time-slot availability indicators",
        "Mobile-first responsive interface tailored for on-the-go booking",
        "Structured modular backend handling customer details and booking status",
        "Clean UX with instant validation and user confirmation receipts"
      ],
      githubUrl: "https://github.com/Atharsh1554/groomer_mystrio",
      liveDemoUrl: "https://github.com/Atharsh1554/groomer_mystrio",
      architectureNotes: "Engineered using lightweight Node.js event-driven backend paired with an accessible, mobile-first frontend."
    },
    {
      id: "proj-dataviz",
      name: "Data Visualization Dashboard",
      tagline: "Automated Tabular Data Analytics & Visual Insights Generator",
      category: "data",
      categoryLabel: "Python & Data Science",
      featured: true,
      image: "assets/images/proj_dataviz.svg",
      problemSolved: "Massive tabular datasets often remain unparsed because domain stakeholders lack time to perform manual exploratory data analysis.",
      description: "An exploratory analytics tool built in Python that ingests multi-column datasets, automates null-value cleansing, performs statistical aggregations, and renders clean Matplotlib visual dashboards.",
      techStack: ["Python 3", "Pandas", "Matplotlib", "NumPy", "Data Wrangling"],
      keyFeatures: [
        "Automated statistical profile generation (mean, median, quartile spreads)",
        "Outlier detection and missing-value imputation pipeline",
        "Multi-dimensional correlation matrices and heatmap representations",
        "Categorical frequency distributions and comparative trend visualizations",
        "Exportable high-resolution charts for research reports"
      ],
      githubUrl: "https://github.com/Atharsh1554",
      liveDemoUrl: "",
      architectureNotes: "Built as an extensible Python pipeline demonstrating functional data processing and scientific plotting."
    },
    {
      id: "proj-portfolio",
      name: "Atharsh S Developer Portfolio",
      tagline: "High-Performance Interactive Academic & Recruiter Showcase",
      category: "web",
      categoryLabel: "Web Development",
      featured: true,
      image: "assets/images/proj_portfolio.svg",
      problemSolved: "Standard resume documents are static and cannot dynamically showcase marksheets, verified certificates, and live codebase interactions.",
      description: "An ultra-fast personal developer portfolio engineered with vanilla web standards. Incorporates a centralized data store, in-browser document viewer for marksheets and certificates, interactive theme switching, and responsive design.",
      techStack: ["HTML5 (Semantic)", "Vanilla CSS3", "JavaScript (ES6+)", "GitHub Pages"],
      keyFeatures: [
        "In-app modal document previewer for official marksheets, PDFs, and certificates",
        "Semester-by-semester academic dashboard with CGPA tracking",
        "Real-time certification search, domain category filters, and date sorting",
        "Deep charcoal / electric-violet visual design system with light/dark persistence",
        "Single source-of-truth configuration via data/portfolio-data.js"
      ],
      githubUrl: "https://github.com/Atharsh1554/portfolio-",
      liveDemoUrl: "https://atharsh1554.github.io/portfolio-/",
      architectureNotes: "Zero third-party framework dependencies, lightning fast load time, fully static GitHub Pages compatible."
    }
  ],

  // --------------------------------------------------------------------------
  // 7. TECHNICAL SKILLS ARCHITECTURE (PHASE 9)
  // --------------------------------------------------------------------------
  skills: {
    programmingLanguages: [
      { name: "Java", icon: "fab fa-java", level: "Core Strength", note: "OOP, Fundamentals, Collections" },
      { name: "Python", icon: "fab fa-python", level: "Core Strength", note: "Data Science, Automation, Scripting" },
      { name: "JavaScript", icon: "fab fa-js-square", level: "Proficient", note: "ES6+, DOM Manipulation, Asynchronous JS" },
      { name: "C / C++", icon: "fas fa-code", level: "Proficient", note: "Pointers, Memory, Data Structures" },
      { name: "HTML5 & CSS3", icon: "fab fa-html5", level: "Proficient", note: "Semantic Structure, Flexbox/Grid, Responsive" }
    ],
    frontendDevelopment: [
      { name: "Modern CSS Architecture", icon: "fab fa-css3-alt", note: "Custom Properties, Glassmorphism, Animations" },
      { name: "Responsive Web Design", icon: "fas fa-mobile-alt", note: "Mobile-first, Viewport optimization" },
      { name: "DOM Manipulation", icon: "fas fa-cubes", note: "Dynamic DOM rendering, Event delegation" },
      { name: "React Fundamentals", icon: "fab fa-react", note: "Component concepts, State hooks" }
    ],
    backendDevelopment: [
      { name: "Node.js", icon: "fab fa-node-js", note: "Server-side runtime, Event-driven architecture" },
      { name: "Express.js", icon: "fas fa-server", note: "Routing, Middleware, HTTP APIs" },
      { name: "RESTful API Design", icon: "fas fa-network-wired", note: "Endpoint conventions, JSON handling" },
      { name: "Session Handling", icon: "fas fa-user-lock", note: "Authentication flows & request tracking" }
    ],
    databasesAndData: [
      { name: "SQL & Relational Databases", icon: "fas fa-database", note: "Schema design, Queries, Normalization" },
      { name: "Pandas", icon: "fas fa-table", note: "Dataframes, Cleansing, Aggregations" },
      { name: "NumPy", icon: "fas fa-square-root-alt", note: "Array operations, Mathematical matrices" },
      { name: "Matplotlib", icon: "fas fa-chart-line", note: "Statistical plots, Histograms, Custom styling" }
    ],
    cloudAndDevOps: [
      { name: "Oracle Cloud Infrastructure (OCI)", icon: "fas fa-cloud", note: "2025 Certified Foundation Concepts" },
      { name: "Git Version Control", icon: "fab fa-git-alt", note: "Branching, Merging, Rebasing, Log tracing" },
      { name: "GitHub Collaboration", icon: "fab fa-github", note: "Pages deployment, Issue tracking, PR reviews" },
      { name: "Command Line / Bash", icon: "fas fa-terminal", note: "PowerShell, Shell navigation, Automation scripts" }
    ],
    developerTools: [
      { name: "Visual Studio Code", icon: "fas fa-laptop-code", note: "Extensions, Debugging, Custom workspaces" },
      { name: "Figma", icon: "fab fa-figma", note: "Wireframing, UI Layout prototypes" },
      { name: "Chrome DevTools", icon: "fab fa-chrome", note: "Performance audits, Network tracing, CSS inspection" },
      { name: "Postman", icon: "fas fa-paper-plane", note: "API payload testing, Request validation" }
    ]
  },

  // --------------------------------------------------------------------------
  // 8. ACHIEVEMENTS & RECOGNITION (PHASE 10)
  // --------------------------------------------------------------------------
  achievements: [
    {
      id: "achieve-nptel",
      title: "NPTEL Elite Grade in Python for Data Science",
      issuer: "Ministry of Education & IIT Madras",
      date: "2024",
      icon: "fa-award",
      description: "Secured top-bracket Elite distinction in the national Indian Institute of Technology examination for Python scientific computing and data analysis.",
      hasProof: true,
      documentUrl: "assets/documents/cert_nptel_python.pdf"
    },
    {
      id: "achieve-cambridge",
      title: "Cambridge Business Studies Credential",
      issuer: "University of Cambridge",
      date: "Completed",
      icon: "fa-certificate",
      description: "Successfully awarded international certification in Business Studies, recognizing acumen in organizational leadership, operational management, and quantitative finance.",
      hasProof: true,
      documentUrl: "assets/documents/cambridge_business_studies.pdf"
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
      id: "achieve-cicse",
      title: "CICSE Board Academic Honors",
      issuer: "Council for the Indian School Certificate Examinations",
      date: "2021 – 2023",
      icon: "fa-graduation-cap",
      description: "Graduated with distinction from the demanding CICSE curriculum, establishing deep foundations in analytical mathematics and scientific enquiry.",
      hasProof: true,
      documentUrl: "assets/documents/marksheet_12th.pdf"
    }
  ],

  // --------------------------------------------------------------------------
  // 9. CORE PHILOSOPHY & WORK ETHIC (FROM ABOUT SECTION)
  // --------------------------------------------------------------------------
  philosophy: [
    {
      icon: "fa-code",
      title: "Clean Code",
      text: "Writing code that is not just functional, but readable, maintainable, and self-documenting. Good code tells a story."
    },
    {
      icon: "fa-lightbulb",
      title: "Problem Solving",
      text: "Every engineering hurdle is an opportunity. Decomposing complex problems into modular, testable steps is second nature."
    },
    {
      icon: "fa-rocket",
      title: "Continuous Innovation",
      text: "Actively keeping pace with modern cloud architectures, frontend design trends, and efficient algorithmic techniques."
    },
    {
      icon: "fa-users",
      title: "Collaboration & Teamwork",
      text: "Valuing active listening, empathetic code reviews, and shared ownership to build resilient engineering cultures."
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
