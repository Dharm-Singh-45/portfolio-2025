export default function Projects() {
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
        'A comprehensive web platform connecting students and teachers for tuition services. Features include registration, search & filter by subject/fees/location, secure payment gateway integration, and attendance management system.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Payment Gateway'],
      image: '📚',
      link: '#',
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
            Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
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
                <div className="flex flex-wrap gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center"
                    >
                      Live Demo →
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

