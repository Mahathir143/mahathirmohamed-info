/* ============================================================
   EDIT ME — every word on the page comes from this file.
   Components never contain copy; they only render this data.
   ============================================================ */

export const profile = {
  name: "Mahathir Mohamed",
  // Cycled by the typing animation in the hero — reorder or add freely.
  roles: [
    ".NET Full Stack Developer",
    ".NET Developer",
    "Web Application Developer",
    "React.js Developer",
    "SQL Server Developer",
    "API Developer",
  ],
  location: "Ramanathapuram, Tamil Nadu, India",
  email: "mahathirmd143@gmail.com",
  phone: "+91 63801 14331",
  // Swap this import in Hero.jsx for your own photo — see src/assets/README.
  avatarAlt: "Mahathir Mohamed",
  // Served from /public — drop a new resume.pdf in the public/ folder to replace it.
  resumeUrl: "/MahathirMohamedResume.pdf",
};

// EDIT THESE — replace with your real profile URLs.
export const socials = {
  github: "https://github.com/Mahathir143",
  linkedin: "https://linkedin.com/in/mahathir-mohamed-6a7231233",
};

export const stats = [
  { code: "BACKEND-01", label: "Years .NET & C# Development", value: "5.4+" },
  { code: "FRONTEND-02", label: "Years React.js Development", value: "3+" },
  { code: "ARCH-03", label: "Years Microservices Architecture", value: "4+" },
  { code: "DATABASE-04", label: "Years SQL Server Development", value: "5+" },
];

export const summary =
  "I'm a Senior .NET Full Stack Developer with 5.4+ years of experience designing and developing scalable, secure, and high-performance web applications using Microsoft technologies.\n\n" +
  "My core expertise includes C#, .NET 8, ASP.NET Core Web API, MVC, Entity Framework Core, SQL Server, PostgreSQL, and Microservices architecture.\n\n" +
  "I specialize in building enterprise-level applications with clean architecture, RESTful APIs, authentication, database optimization, and performance-focused solutions. I also have experience developing modern user interfaces using React.js, Next.js, JavaScript, HTML5, and CSS3 to deliver complete end-to-end applications.\n\n" +
  "Having worked across Logistics, Banking, Retail POS, and Travel domains, I focus on writing clean, maintainable code and delivering reliable software solutions that create real business value.";

export const skillGroups = [
  {
    icon: "code",
    title: "Programming Languages",
    tags: [
      "C#",
      "JavaScript",
      "SQL",
      "HTML5",
      "CSS3",
      "SCSS"
    ],
  },
  {
    icon: "server",
    title: "Backend & APIs",
    tags: [
      ".NET 8",
      "ASP.NET Core",
      ".Net Framework",
      "RESTful APIs",
      "EF Core",
      "Dapper",
      "ADO.NET",
      "Express.js"
    ],
  },
  {
    icon: "code",
    title: "Frontend",
    tags: [
      "React.js",
      "Next.js",
      "Bootstrap",
      "Responsive UI/UX",
      "UI Theming (Light/Dark/Multicolour)"
    ],
  },
  {
    icon: "database",
    title: "Databases",
    tags: [
      "SQL Server",
      "PostgreSQL",
      "MySQL",
      "Stored Procedures",
      "Query Optimization",
      "Database Design"
    ],
  },
  {
    icon: "layers",
    title: "Architecture & Patterns",
    tags: [
      "Microservices",
      "Clean Architecture",
      "MVC",
      "Layered Architecture",
      "Monolithic",
      "CQRS",
      "Repository Pattern",
      "Unit of Work"
    ],
  },
  {
    icon: "cloud",
    title: "DevOps & Cloud",
    tags: [
      "Git",
      "Bitbucket",
      "Azure DevOps (Basics)",
      "Docker (Basics)",
      "CI/CD (Basics)",
      "IIS Deployment"
    ],
  },
  {
    icon: "wrench",
    title: "Tools & IDEs",
    tags: [
      "Visual Studio 2022",
      "VS Code",
      "SSMS",
      "MySQL Workbench",
      "pgAdmin",
      "Postman",
      "Jira",
      "IIS",
      "Swagger"
    ],
  },
];

// Chronological, oldest first — rendered as a tracking route in Experience.jsx
export const route = [
  {
    code: "DEC 2020 - OCT 2022",
    org: "Tripwerkz India Pvt Ltd",
    role: "Software Developer",
    place: "Chennai",
    status: "COMPLETED",
    detail:
      "Built React.js frontend modules and REST APIs for a global travel booking platform — hotels, flights, transfers. Integrated third-party inventory (TBO Holidays, Hotelbeds) and shipped booking and payment flows in an Agile team.",
  },
  {
    code: "OCT 2022 - DEC 2025",
    org: "Easy Outdesk Pvt Ltd",
    role: "Senior Software Developer",
    place: "Pondicherry",
    // status: "IN TRANSIT",
    status: "COMPLETED",
    detail:
      "Own React.js and Next.js frontends across logistics, banking, and retail POS products, backed by .NET 8 microservices behind an Ocelot gateway. Shipped Cargo Booking, Container Tracking, and Truck Allocation; mentor juniors and run code reviews.",
  },
  {
    code: "Aug 2026 - Oct 2026",
    org: "Vega Intelli Soft Pvt Ltd",
    role: "Senior .Net Developer (Contractor / Hybrid at UST)",
    place: "Chennai",
    // status: "IN TRANSIT",
    status: "COMPLETED",
    detail:
      "Working as a contractor in a hybrid model at UST for the US-based healthcare client Elevance Health, contributing to the migration of legacy MVC applications to modern Web API architecture. Developing backend features and enterprise solutions using .NET Framework, .NET Core, and C#, collaborating with cross-functional teams in Agile environments using Jira and Bitbucket, and testing and validating APIs using Postman.",
  }
];

export const projects = [
  {
    name: "Elevance Health Care Project",
    org: "Vega Intelli Soft Pvt Ltd (Client: UST)",
    featured: true,
    featuredTitle: ".Net, C#",
    description: "Healthcare domain project focused on modernizing legacy ASP.NET MVC applications into scalable Web API services.",
    points: [
      "Migrating legacy MVC applications to modern Web API architecture using .NET Framework, .NET Core, and C#.",
      "Developing backend components and testing REST APIs, endpoints, and data contracts using Postman.",
      "Managing tasks, sprints, branching, and pull requests using Jira and Bitbucket in an Agile environment.",
    ],
    stack: [".NET Framework", ".NET Core", "C#", "Web API", "MVC", "Jira", "Bitbucket", "Postman"],
  },
  {
    name: "Cargo Bridge Logistics System",
    org: "Easy Outdesk Pvt Ltd",
    featured: true,
    featuredTitle: ".Net, MSSQL",
    description: "End-to-end shipment lifecycle — booking through delivery reporting.",
    points: [
      "Cargo booking, container tracking, shipment management",
      "Role-based secure REST API access",
      "Built with unit testing under Agile/Scrum",
    ],
    stack: [".NET 8", "MVC", "EF Core", "MSSQL Server", "RDLC"],
  },
  {
    name: "Integrated Truck Management System",
    org: "Easy Outdesk Pvt Ltd",
    featured: true,
    featuredTitle: ".Net, PostgreSQL",
    description: "Yard and transportation management for empty-container logistics at scale.",
    points: [
      "Truck allocation and empty container tracking",
      "Microservices architecture behind an Ocelot API Gateway",
      "Led a 2-developer team through Agile delivery",
    ],
    stack: [".NET 8", "EF Core", "PostgreSQL", "Microservices", "RDLC"],
  },
  {
    name: "Banking Middleware & UI",
    org: "Easy Outdesk Pvt Ltd",
    featured: true,
    featuredTitle: ".Net, SQL",
    description: "Middleware and dashboard connecting modern APIs to legacy banking rails.",
    points: [
      "Remittance creation and transaction enquiry services",
      "JWT-secured RESTful APIs",
      "WCF integration with legacy banking systems",
    ],
    stack: [".NET 8", "Web API", "EF Core", "WCF", "MSSQL Server"],
  },
  {
    name: "Dynamic Input Screen (DIS)",
    org: "Easy Outdesk Pvt Ltd",
    featured: true,
    featuredTitle: "React, Next, MySQL ",
    description:
      "A configurable platform that turns database schema into live, validated forms — no redeploy needed to add a field.",
    points: [
      "Database-driven dynamic form generation",
      "Responsive UI built in React.js and Next.js",
      "Real-time REST API integration with configurable workflows",
    ],
    stack: ["React.js", "Next.js", "Express.js", "MySQL"],
  },
  {
    name: "Hypermart POS Billing",
    org: "Easy Outdesk Pvt Ltd",
    featured: true,
    featuredTitle: ".Net, MSSQL",
    description: "Point-of-sale system for supermarket billing and inventory.",
    points: [
      "Billing, invoicing, and sales reporting",
      "Inventory and transaction management",
      "Query and stored procedure optimization for peak-hour load",
    ],
    stack: [".NET 8", "MVC", "ADO .NET", "MSSQL Server", "RDLC"],
  },
  {
    name: "Tripwerkz Travel Platform",
    org: "Tripwerkz India Pvt Ltd",
    featured: true,
    featuredTitle: ".Net Core, React, SQL",
    description:
      "Consumer booking platform for hotels, flights, tours, transfers, and events, live at tripwerkz.com.",
    points: [
      "React.js frontend modules for search, booking, and checkout",
      "Third-party inventory integration (TBO Holidays, Hotelbeds)",
      "Real-time availability and transparent pricing at booking time",
    ],
    stack: ["React.js", ".NET Core 3.1", "EF Core", "Microservices", "SQL Server", "Crystal Reports"],
  }
];

export const education = {
  degree: "Bachelor of Computer Application (BCA)",
  school: "Syed Hameedha Arts & Science College",
  period: "2016 — 2019",
  focus: "Computer Science & Application Development",
};
