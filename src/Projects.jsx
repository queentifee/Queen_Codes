

import React from 'react';

const FlexDisplay = () => {
  const projects = [
    {
  id: "peenly-app",
  title: "PEENLY – Networking & Learning Platform for Children",
  description: "A secure, LinkedIn-style platform designed for children to connect with tutors, mentors, and peers under guardian supervision, featuring in-app messaging, book recommendations, and curated educational resources.",
  stack: ["MongoDB", "JavaScript", "Node.js", "Twilio", "SendGrid", "JWT", "WebSockets"],
  features: [
    "Guardian-controlled messaging between tutors and children",
    "Personalized book recommendations by age, genre, and subject",
    "Profile creation with academic and extracurricular interests",
    "Real-time notifications for messages and resource updates"
  ],
  performance: "Optimized for fast load times and responsive mobile-first design",
  architecture: "Monorepo with modular components and API routes",
  demo: "#",
  apiDocs: "#",
  endpoints: [
    { method: "GET", path: "/api/v1/milestones", description: "Fetch milestones" },
    { method: "POST", path: "/api/v1/messages", description: "Send messages between guardian and tutor accounts" },
    { method: "GET", path: "/api/v1/post/:id", description: "Retrieve posts by a user" }
  ]
},

{
  id: "code-mentor-ai",
  title: "Code Mentor – AI-Powered Programming Learning Agent",
  description: "An adaptive AI-powered learning assistant that generates personalized programming learning paths and guidance for developers across multiple languages and skill levels.",
  stack: ["Mastra", "Gemini 2.0 Flash", "TypeScript", "Node.js", "AI Agents"],
  features: [
    "Adaptive AI agent capable of supporting 15+ programming languages",
    "Personalized learning roadmaps based on user skill level",
    "Three structured learning levels: Beginner, Intermediate, and Advanced",
    "AI-generated explanations, exercises, and learning guidance",
    "Dynamic curriculum generation to reduce manual research",
    "Modular AI workflow design using Mastra",
    "Optimized prompt orchestration for consistent AI responses"
  ],
  performance: "Reduced manual programming curriculum research time by approximately 60% through automated AI-driven roadmap generation",
  architecture: "Agent-based architecture using Mastra for orchestration with Gemini 2.0 Flash powering adaptive responses and roadmap generation",
  github: "https://github.com/queentifee/code-mentor.git",
  documentation: "#",
  capabilities: [
    "Generate personalized programming learning roadmaps",
    "Explain coding concepts interactively",
    "Suggest practice exercises based on skill level",
    "Support learning across multiple programming languages"
  ]
},

    {
  id: "devconnect-api",
  title: "DevConnect – Developers Networking Platform",
  description: "Backend API for a networking platform where developers connect, follow each other, and share bug-solving journals. Designed for scalability, secure data handling, and smooth developer experience.",
  stack: ["Node.js", "Express", "MongoDB", "OpenRouter (LLM)", "Render", "Multer", "Swagger"],
  features: [
    "Secure authentication and authorization",
    "User and profile management",
    "Follow/unfollow system for developers",
    "Journaling feature for sharing bug-solving experiences",
    "File uploads for profile images via Multer",
    "Interactive API documentation with Swagger",
    "AI-powered debugging via OpenRouter LLM"
  ],
  performance: "Deployed on Render with optimized queries and minimal API response latency",
  architecture: "RESTful API with modular controllers and services",
  github: "https://github.com/queentifee/DevConnect",
  demo: "#",
  apiDocs: "https://devconnect-zz93.onrender.com/api-docs",
  endpoints: [
    { method: "POST", path: "/api/auth/signup", description: "Register new developer account" },
    { method: "GET", path: "/api/users/:id", description: "Retrieve developer profile by ID" },
    { method: "POST", path: "/api/follow/:id", description: "Follow another developer" },
    { method: "POST", path: "/api/buglog", description: "Create a new bug-log entry" },
    { method: "GET", path: "/api/buglog", description: "Fetch all bug-log entries" }
  ]
},

  {
  id: "wallet-service-api",
  title: "Wallet Service API – Fintech-Ready Payment & Transfer Backend",
  description: "A secure wallet backend system that enables users to manage balances, perform transfers, and process payments safely with Paystack integration.",
  stack: ["NestJS", "TypeScript", "PostgreSQL", "Prisma/TypeORM", "Google OAuth 2.0", "Paystack API", "JWT"],
  features: [
    "Secure user authentication using JWT and Google OAuth 2.0",
    "Wallet creation and balance management for users",
    "Idempotent wallet transfers to prevent duplicate transactions",
    "Paystack payment gateway integration for deposits",
    "Transaction history tracking and management",
    "RESTful API with modular NestJS architecture",
    "Robust validation and error handling"
  ],
  performance: "Designed with idempotent transaction handling and database constraints to reduce duplicate transaction risks by approximately 90%",
  architecture: "Scalable modular architecture using NestJS with service, controller, and repository layers",
  github: "https://github.com/queentifee/wallet_service",
  documentation: "#",
  apiDocs: "https://walletservice-queentifee7847-wtxm4swf.leapcell.dev/api/docs",

  endpoints: [
    { method: "POST", path: "/auth/google", description: "Authenticate users using Google OAuth 2.0" },
    { method: "GET", path: "/wallet", description: "Retrieve user's wallet details and balance" },
    { method: "POST", path: "/wallet/deposit", description: "Fund wallet using Paystack" },
    { method: "POST", path: "/wallet/transfer", description: "Transfer funds securely between wallets with idempotency protection" },
    { method: "GET", path: "/transactions", description: "Fetch transaction history for a user" }
  ]
}

  ];

  const ProjectCard = ({ project }) => {
    const [tab, setTab] = React.useState('overview');

    const renderTabContent = () => {
      switch (tab) {
        case 'overview':
          return (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium">Performance</h4>
                  <p className="text-sm text-gray-500">{project.performance}</p>
                </div>
                <div>
                  <h4 className="font-medium">Architecture</h4>
                  <p className="text-sm text-gray-500">{project.architecture}</p>
                </div>
              </div>
              <div>
                <h4 className="font-medium">Key Features</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.features.map((feature) => (
                    <span key={feature} className="text-xs px-2 py-1 border rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        case 'endpoints':
          return (
            <div className="space-y-4">
              {project.endpoints.map((endpoint, idx) => (
                <div key={idx} className="p-3 bg-gray-100 border rounded">
                  <div className="flex items-center space-x-3 mb-1">
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded text-white ${
                        endpoint.method === 'GET' ? 'bg-green-600' :
                        endpoint.method === 'POST' ? 'bg-blue-600' : 'bg-orange-500'
                      }`}
                    >
                      {endpoint.method}
                    </span>
                    <code className="text-sm">{endpoint.path}</code>
                  </div>
                  <p className="text-sm text-gray-500">{endpoint.description}</p>
                </div>
              ))}
            </div>
          );
        
         
      }
    };

    return (
      <div className="border rounded-lg p-6 bg-white shadow-sm">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <span key={tech} className="bg-gray-200 text-xs px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>

        {/* Tabs */}
        <div className="mb-4">
          <div className="flex space-x-2 mb-2">
            <button
              className={`text-sm px-3 py-1 rounded ${
                tab === 'overview' ? 'bg-black text-white' : 'bg-gray-200'
              }`}
              onClick={() => setTab('overview')}
            >
              Overview
            </button>
            {/* <button
              className={`text-sm px-3 py-1 rounded ${
                tab === 'endpoints' ? 'bg-black text-white' : 'bg-gray-200'
              }`}
              onClick={() => setTab('endpoints')}
            >
              API
            </button> */}
           
          </div>
          {renderTabContent()}
        </div>

        {/* Action buttons */}
        <div className="flex space-x-2 mt-4">
          <a href={project.github} className="text-sm border px-3 py-1 rounded hover:bg-gray-100">
            GitHub
          </a>
         
          <a href={project.apiDocs} className="text-sm bg-black text-white px-3 py-1 rounded">
            API Docs
          </a>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <div className="container mx-auto px-6 lg:px-10 ">
                {/* Title */}
               <h2 className="bebas-neue-goals text-left my-2 text-2xl font-bold text-black">
                   Projects
               </h2>

                {/* Line Section */}
               <div className="relative w-4/4 mx-auto">
                   <div className="w-full h-0.5 bg-gray-200"></div>
                  <div className="w-32 mb-0.5 h-0.5 bg-purple-500"></div>
                </div>
           
          <p className="text-gray-600 mt-9 mb-9 max-w-2xl mx-auto">
            Production-ready APIs and systems built with modern technologies and best practices
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlexDisplay

