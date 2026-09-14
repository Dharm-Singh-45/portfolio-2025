'use client';

import { useState } from 'react';

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'architecture' | 'microservices' | 'metrics'>('architecture');

  const flagshipProject = {
    title: 'Rajasthan Test Series & ITS Enterprise Ecosystem',
    subtitle: 'Distributed Microservices EdTech SaaS & CBT Exam Simulator Engine',
    description:
      'Architected and engineered an end-to-end distributed test series ecosystem comprising 7 microservices and frontend platforms. Features real-time NTA/TCS iON style CBT exam attempt simulator, instant score & percentile evaluation, async Bull Queue notification delivery, bilingual SME content authoring studio, affiliate campaign & promoter commission tracking, and Razorpay subscription billing.',
    technologies: [
      'Next.js 16 (App Router)',
      'NestJS Microservices',
      'React 19',
      'TypeScript',
      'MongoDB & Mongoose',
      'Redis & Bull Queue',
      'WhatsApp API Integration',
      'Razorpay & Webhooks',
      'LaTeX / MathJax Engine',
      'Redux Toolkit',
      'Tailwind CSS v4',
      'Vite & PWA',
    ],
    liveLink: 'https://www.rajasthantestseries.com',
    subservices: [
      {
        name: 'Rajasthan Test Series (Student Web App)',
        repo: 'rajasthan-test-series-frontend',
        tech: 'Next.js 16 (App Router), React 19, Redux Toolkit, Tailwind CSS v4, PWA, Razorpay',
        badge: 'Frontend Portal',
        icon: '🎓',
        description:
          'Student exam portal featuring NTA/TCS iON styled timed CBT test attempt interface, instant score reports, section analysis, percentile leaderboard, LaTeX math rendering, and offline service worker capability.',
      },
      {
        name: 'Core Service Engine',
        repo: 'core_service',
        tech: 'NestJS, MongoDB, Passport JWT Auth, Razorpay Webhooks, WhatsApp API, CRON',
        badge: 'Core Backend Microservice',
        icon: '⚙️',
        description:
          'Central backend managing user accounts, authentication, test submission session state, live evaluation algorithms, rank/percentile distribution, WhatsApp messaging hooks, and Razorpay payment webhook processing.',
      },
      {
        name: 'Builder Dashboard Studio',
        repo: 'builder_dashboard',
        tech: 'React 19, Vite, React Router, MathJax, Axios, Tailwind CSS',
        badge: 'Content Authoring Frontend',
        icon: '✍️',
        description:
          'WYSIWYG & Markdown content authoring studio for Subject Matter Experts (SMEs) to construct bilingual (Hindi & English) question papers, upload math equations with MathJax, set marking rules, and test preview.',
      },
      {
        name: 'Builder Microservice',
        repo: 'builder_services',
        tech: 'NestJS, MongoDB, Swagger, TS-Morph, Ingestion Pipeline',
        badge: 'Content Taxonomy Microservice',
        icon: '📚',
        description:
          'Microservice powering deep taxonomy (Exams → Subjects → Topics → Subtopics), bulk bilingual question ingestion, question version control, and dynamic paper generation.',
      },
      {
        name: 'Campaign & Affiliate Microservice',
        repo: 'campaign-service',
        tech: 'NestJS, MongoDB, Passport JWT, Analytics Engine',
        badge: 'Marketing Microservice',
        icon: '📣',
        description:
          'Growth & affiliate marketing microservice managing discount coupon engines, promoter referral tracking, automated commission payout calculation, and lead tracking.',
      },
      {
        name: 'Notification Queue Service',
        repo: 'rts-notification-service',
        tech: 'NestJS, Redis, Bull Queues, Handlebars, Nodemailer, WhatsApp API, Cron',
        badge: 'Async Messaging Microservice',
        icon: '📩',
        description:
          'Event-driven background queue worker handling transactional emails and WhatsApp alerts (OTP, password reset, receipts, scorecards) with 0ms UI latency for API calls.',
      },
      {
        name: 'Admin Dashboard Portal',
        repo: 'rts-admin-dashboard',
        tech: 'Next.js 16, React 19, Tailwind CSS',
        badge: 'Admin Console',
        icon: '🛡️',
        description:
          'Enterprise administration panel for sales analytics, promoter payouts, user management, exam creation oversight, and automated payment reconciliations.',
      },
    ],
  };

  const projects = [
    {
      title: 'E-Commerce Website',
      description:
        'Fully functional E-Commerce Application using MERN stack with user authentication, role-based access (Admin & User), product management with category search, shopping cart, order management with Stripe payment integration, and admin dashboard for order and user management.',
      technologies: ['React', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Stripe'],
      image: '🛒',
      githubLink: 'https://github.com/Dharm-Singh-45/mern-electronice-ecommerce-Dec2024-Deploy',
      liveLink: 'https://mern-electronice-ecommerce-dec2024-5id3.onrender.com/',
    },
    {
      title: 'Hospital Management - Book Appointment',
      description:
        'Frontend of Hospital Management System allowing patients to register, log in, and book appointments with doctors. Patients can select doctors, book appointments based on available times, and send messages to hospital staff. Features simple, user-friendly design for easy navigation.',
      technologies: ['React', 'CSS', 'Axios', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
      image: '🏥',
      githubLink: 'https://github.com/Dharm-Singh-45/hospital-Management/tree/main/frontend',
      liveLink: 'https://hospital-management-patientside.onrender.com/',
    },
    {
      title: 'One Hour Study',
      description:
        'An EdTech startup platform founded in 2019 connecting parents with qualified home tuition teachers. Features subject & location teacher discovery, automated attendance tracking, and integrated payment gateway.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Payment Gateway'],
      image: '📚',
      liveLink: 'https://www.onehourstudy.com/',
      isProduction: true,
    },
    {
      title: 'Strive',
      description:
        'Hospital & Insurance Agency Staff Management System (US-Based). Built with role-based access control for 4 user roles, real-time staff management, automated CRON jobs, and Twilio API integration for patient communications.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Twilio API', 'RBAC'],
      image: '🏥',
      link: '#',
    },
    {
      title: 'Speedcloud',
      description:
        'Built responsive and scalable frontend interfaces using React, Tailwind CSS, and Zustand for state management. Focused on delivering smooth, intuitive user experience with optimized UI performance and component reusability.',
      technologies: ['React', 'Tailwind CSS', 'Zustand', 'Node.js', 'Express.js'],
      image: '☁️',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Architectural solutions and production-grade applications engineered with modern technology stacks.
          </p>
        </div>

        {/* HERO FLAGSHIP CARD: RAJASTHAN TEST SERIES & ITS SYSTEM */}
        <div className="mb-16 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 rounded-3xl p-8 lg:p-12 shadow-2xl text-white border border-blue-500/30 relative overflow-hidden group">
          {/* Subtle Background Glow Decorative Elements */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="px-4 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-xs md:text-sm rounded-full tracking-wider uppercase shadow-md flex items-center gap-2">
                <span>🔥</span> Flagship Enterprise System
              </span>
              <span className="text-blue-300 font-mono text-xs md:text-sm bg-blue-900/60 px-3 py-1 rounded-lg border border-blue-400/20">
                7 Distributed Repositories / Services
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 tracking-tight">
              {flagshipProject.title}
            </h3>
            <p className="text-blue-300 text-lg md:text-xl font-medium mb-6">
              {flagshipProject.subtitle}
            </p>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-5xl">
              Architected and engineered an end-to-end distributed test series ecosystem serving <strong>9,000+ real student test-takers</strong> with <strong>top Google search rankings</strong>. Comprising 7 microservices and frontend platforms, it features real-time NTA/TCS iON style CBT exam attempt simulator, instant score & percentile evaluation, async Bull Queue notification delivery, bilingual SME content authoring studio, affiliate campaign & promoter commission tracking, and Razorpay subscription billing.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-slate-900/70 p-4 sm:p-6 rounded-2xl border border-white/10">
              <div className="text-center border-r border-white/10 last:border-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">9,000+</div>
                <div className="text-xs sm:text-sm text-gray-300 mt-1 font-medium">Real Student Test-Takers</div>
              </div>
              <div className="text-center md:border-r border-white/10 last:border-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">Top Ranked</div>
                <div className="text-xs sm:text-sm text-gray-300 mt-1 font-medium">On Google Search (SEO)</div>
              </div>
              <div className="text-center border-r border-white/10 last:border-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">7</div>
                <div className="text-xs sm:text-sm text-gray-300 mt-1 font-medium">Microservices & Apps</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-purple-400">0 ms</div>
                <div className="text-xs sm:text-sm text-gray-300 mt-1 font-medium">Async Bull Queue Latency</div>
              </div>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {flagshipProject.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1.5 bg-blue-500/20 text-blue-200 rounded-lg text-xs sm:text-sm font-medium border border-blue-400/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {flagshipProject.liveLink && (
                <a
                  href={flagshipProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-extrabold rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-200 flex items-center gap-2"
                >
                  <span>🌐</span> Live Platform (rajasthantestseries.com) →
                </a>
              )}
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <span>🔍</span> Explore Architecture →
              </button>
            </div>
          </div>
        </div>

        {/* OTHER PROJECTS GRID */}
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Other Key Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group flex flex-col justify-between"
            >
              <div>
                <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 text-6xl text-center h-48 flex items-center justify-center">
                  {project.image}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0 flex flex-wrap gap-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center"
                  >
                    {project.isProduction ? 'Visit Production Site →' : 'Live Demo →'}
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 font-semibold hover:text-gray-700 transition-colors inline-flex items-center"
                  >
                    GitHub →
                  </a>
                )}
                {project.link && project.link !== '#' && !project.liveLink && (
                  <a
                    href={project.link}
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ARCHITECTURE & DEEP-DIVE MODAL FOR RECRUITERS */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-blue-500/30 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col text-white">
            {/* Modal Header */}
            <div className="p-6 sm:p-8 bg-slate-950/80 border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="text-blue-400 font-mono text-xs uppercase tracking-wider font-semibold">
                  Architectural Deep-Dive
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Rajasthan Test Series & ITS System Architecture
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors text-xl font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-white/10 bg-slate-900 px-6 sm:px-8 gap-4 sm:gap-8">
              <button
                onClick={() => setActiveTab('architecture')}
                className={`py-4 text-sm sm:text-base font-semibold border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'architecture'
                    ? 'border-blue-500 text-blue-400'
                    : 'border-transparent text-gray-400 hover:text-gray-200'
                }`}
              >
                📐 Architecture Diagram
              </button>
              <button
                onClick={() => setActiveTab('microservices')}
                className={`py-4 text-sm sm:text-base font-semibold border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'microservices'
                    ? 'border-blue-500 text-blue-400'
                    : 'border-transparent text-gray-400 hover:text-gray-200'
                }`}
              >
                🧩 7 Microservices & Portals
              </button>
              <button
                onClick={() => setActiveTab('metrics')}
                className={`py-4 text-sm sm:text-base font-semibold border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'metrics'
                    ? 'border-blue-500 text-blue-400'
                    : 'border-transparent text-gray-400 hover:text-gray-200'
                }`}
              >
                ⚡ Engineering Highlights
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
              {activeTab === 'architecture' && (
                <div className="space-y-6">
                  <div className="bg-slate-950/70 p-6 rounded-2xl border border-white/10">
                    <h4 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                      <span>🔄</span> End-to-End System Topology
                    </h4>
                    <div className="space-y-4 text-gray-300 text-sm sm:text-base">
                      <div className="p-4 bg-blue-950/40 rounded-xl border border-blue-500/20">
                        <span className="font-bold text-white">Frontend Tier:</span> 3 decoupled web applications — Student Exam App (Next.js 16 PWA), Content Authoring Studio (React 19 + Vite), and Management Admin Dashboard (Next.js 16).
                      </div>
                      <div className="p-4 bg-indigo-950/40 rounded-xl border border-indigo-500/20">
                        <span className="font-bold text-white">Backend Microservices Tier:</span> 4 targeted NestJS microservices isolating domains — Core Exam Engine & Auth, Content Builder Taxonomy, Campaign & Promoter Commissions, and Async Redis/Bull Queue Notification Worker.
                      </div>
                      <div className="p-4 bg-purple-950/40 rounded-xl border border-purple-500/20">
                        <span className="font-bold text-white">Data & Messaging Tier:</span> MongoDB database clusters with indexed schemas, Redis for Bull Queue task queuing, and Razorpay webhook integrations.
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-950/50 p-5 rounded-xl border border-white/10">
                      <h5 className="font-bold text-white mb-2">⏱️ CBT Exam Attempt Engine</h5>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                        Real-time timer synchronization, section switching, question bookmarking, auto-save state, and offline PWA capability to prevent student data loss during internet drops.
                      </p>
                    </div>
                    <div className="bg-slate-950/50 p-5 rounded-xl border border-white/10">
                      <h5 className="font-bold text-white mb-2">📊 Instant Percentile & Rank Engine</h5>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                        Evaluates test attempts upon submission, generating instant score distribution, section accuracy metrics, negative marking deductions, and rank comparison.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'microservices' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {flagshipProject.subservices.map((service, index) => (
                    <div
                      key={index}
                      className="bg-slate-950/60 p-5 rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-2xl">{service.icon}</span>
                          <span className="px-2.5 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded-full border border-blue-400/30">
                            {service.badge}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-1">{service.name}</h4>
                        <div className="text-xs font-mono text-blue-400 mb-3">repo: {service.repo}</div>
                        <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-white/10 text-xs text-gray-400 font-mono">
                        <span className="text-gray-500">Tech:</span> {service.tech}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'metrics' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div className="bg-blue-950/40 p-5 rounded-xl border border-blue-500/30 text-center">
                      <div className="text-3xl font-extrabold text-blue-400">9,000+</div>
                      <div className="text-xs text-gray-300 mt-1 font-medium">Real Student Users</div>
                    </div>
                    <div className="bg-emerald-950/40 p-5 rounded-xl border border-emerald-500/30 text-center">
                      <div className="text-3xl font-extrabold text-emerald-400">#1 Ranked</div>
                      <div className="text-xs text-gray-300 mt-1 font-medium">Google Search SEO</div>
                    </div>
                    <div className="bg-indigo-950/40 p-5 rounded-xl border border-indigo-500/30 text-center">
                      <div className="text-3xl font-extrabold text-indigo-400">Bull Queue</div>
                      <div className="text-xs text-gray-300 mt-1 font-medium">0ms API Queue Blocking</div>
                    </div>
                    <div className="bg-purple-950/40 p-5 rounded-xl border border-purple-500/30 text-center">
                      <div className="text-3xl font-extrabold text-purple-400">Bilingual</div>
                      <div className="text-xs text-gray-300 mt-1 font-medium">Hindi & English Ingestion</div>
                    </div>
                  </div>

                  <div className="bg-slate-950/70 p-6 rounded-2xl border border-white/10 space-y-3 text-sm text-gray-300">
                    <h4 className="text-base font-bold text-white mb-2">Key Production & Engineering Accomplishments:</h4>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400">▸</span>
                      <span><strong>9,000+ Active Student Test-Takers:</strong> Scaled distributed platform to handle thousands of real students taking live competitive exam test series with zero downtime.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-400">▸</span>
                      <span><strong>Google Organic Search SEO Leadership:</strong> Optimized Next.js server-rendering, dynamic sitemaps, and exam keyword taxonomy achieving top organic rank placement on Google search.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400">▸</span>
                      <span><strong>Async WhatsApp & Bull Queue Messaging:</strong> Integrated WhatsApp API & Redis Bull Queues in NestJS for instant OTPs, exam reminders, and scorecard alerts with 0ms API blocking.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400">▸</span>
                      <span><strong>Bilingual & LaTeX/MathJax Equation Engine:</strong> Built parsing microservice supporting dynamic MathJax equations, complex test taxonomy, and dual-language (Hindi & English) question banks.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400">▸</span>
                      <span><strong>Razorpay Payments & Automated Reconciliation:</strong> Integrated Razorpay checkout, webhooks, and background reconciliation scripts (`reconcile-payments`) for automated sales accounting.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400">▸</span>
                      <span><strong>Promoter Affiliate & Campaign Engine:</strong> Created automated commission calculation engine with unique referral links, coupon attribution, and lead tracking analytics.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-slate-950 border-t border-white/10 flex items-center justify-between">
              <a
                href={flagshipProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-400/30 font-semibold rounded-xl transition-colors text-xs sm:text-sm flex items-center gap-2"
              >
                <span>🌐</span> Visit Live Site (rajasthantestseries.com) →
              </a>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors cursor-pointer text-sm"
              >
                Close Architecture View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


