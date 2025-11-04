export default function Experience() {
  const experiences = [
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
        'Developed a web platform enabling students and teachers to register, connect, and manage tuition services based on subject, fees, and location.',
        'Implemented search and filter functionality for students to find teachers according to specific requirements.',
        'Integrated a secure payment gateway to allow parents to pay tuition fees directly through the platform.',
        'Built an attendance management system where students can mark teacher absences, triggering extra class time allocation to cover missed sessions.',
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

