export default function Experience() {
  const experiences = [
    {
      title: 'Founder & Lead Full Stack Architect',
      company: 'Rajasthan Test Series (ITS System)',
      location: 'India',
      period: 'April 2026–Present',
      description: [
        'Built and launched as an independent SaaS venture (side project alongside full-time career) serving 9,000+ real student test-takers with top Google search rankings.',
        'Architected a distributed EdTech SaaS ecosystem consisting of 7 microservices & frontend applications using NestJS, Next.js 16 (App Router), React 19, MongoDB, and Redis.',
        'Engineered high-concurrency NTA/TCS iON styled CBT exam simulator with real-time response evaluation, section switching, and instant percentile leaderboard generation.',
        'Implemented async event-driven notification queue system using Redis & Bull Queues, eliminating HTTP API blocking for transactional emails.',
        'Designed bilingual content builder studio enabling Subject Matter Experts to ingest, structure, and publish multilingual question banks and exam papers.',
        'Built growth campaign engine managing affiliate promoter accounts, discount coupons, referral link tracking, and automated commission calculations.',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Damco Solutions',
      location: 'Noida, India',
      period: 'September 2025–Present',
      description: [
        'Engineered admin dashboard and test platform for UH project supporting new hospital employee onboarding',
        'Architected backend APIs using Node.js, Express, Azure Storage Table, Azure Blob Storage, and PostgreSQL with caching layer',
        'Integrated Azure services to fetch and manage data with 30% faster response times',
        'Created frontend using Next.js and React.js with complete audit and event log tracking for 500 daily users',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'NxtGen Cloud Technologies',
      location: 'Bangalore',
      period: 'April 2025 – July 2025',
      description: [
        'Built responsive and scalable frontend interfaces using React, Tailwind CSS, and Zustand for state management.',
        'Focused on delivering a smooth, intuitive, and user-friendly experience to enhance customer satisfaction.',
        'Collaborated with cross-functional teams to ensure efficient workflow and integration with backend services.',
        'Contributed to improving UI performance and optimizing component reusability for better scalability.',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'One Hour Study',
      location: 'Jodhpur',
      period: 'August 2023 - March 2025',
      description: [
        'Engineered web platform enabling students and parents to discover, connect, and manage home tuition services based on subject, fees, and location.',
        'Implemented search and filter functionality for parents to find qualified home tuition teachers matching specific subject requirements.',
        'Integrated secure payment gateway allowing parents to pay tuition fees directly through the platform.',
        'Built an attendance management system for tracking teacher sessions and extra class allocations.',
      ],
    },
    {
      title: 'Technical Consultant',
      company: 'Novulis Consulting Pvt Ltd',
      location: 'Hyderabad',
      period: 'August 2022 - July 2023',
      description: [
        'Strive – Hospital & Insurance Agency Staff Management System (US-Based)',
        'Designed and implemented a role-based access control system for four user roles, ensuring structured and secure access.',
        'Built real-time staff and caregiver management features with improved punch validation via Kiosk and Normal Punch methods.',
        'Automated data handling by creating CRON jobs for data updates and email notifications, improving operational efficiency by 25%.',
        'Integrated Twilio API for automated patient communications, reducing response time by 40%.',
      ],
    },
    {
      title: 'Full Stack Web Developer',
      company: 'AttainU (Internship)',
      location: 'Bangalore',
      period: 'December 2021 - May 2022',
      description: [
        'Built a full-stack web app for 1,000+ users with secure authentication and efficient CRUD-based course/profile management.',
        'Improved MongoDB performance, boosting data retrieval speed by 40%.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-300 flex flex-col"
            >
              <div className="mb-5 pb-5 border-b border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 flex-1">
                    {exp.title}
                  </h3>
                  <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold text-xs lg:text-sm whitespace-nowrap shadow-md ml-3 flex-shrink-0">
                    {exp.period}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-lg lg:text-xl text-blue-600 font-semibold">
                    {exp.company}
                  </p>
                  {exp.location && (
                    <>
                      <span className="text-gray-400">•</span>
                      <p className="text-base text-gray-600 font-medium">
                        {exp.location}
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div className="flex-1">
                {Array.isArray(exp.description) ? (
                  <ul className="space-y-2.5">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-2.5 mt-1.5 flex-shrink-0 text-sm">▸</span>
                        <span className="text-gray-700 leading-relaxed text-sm lg:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    {exp.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

