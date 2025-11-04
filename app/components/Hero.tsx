'use client';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8 animate-fade-in flex justify-center">
            <div className="relative overflow-hidden rounded-full border-4 border-white shadow-2xl ring-4 ring-blue-100">
              <img
                src="/profile-photo.jpg"
                alt="Dharm Singh"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover scale-125 object-center"
                onError={(e) => {
                  // Hide image if not found
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            Hi, I'm <span className="text-blue-600">Dharm Singh</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-4 animate-fade-in-delay">
            Full Stack Developer
          </p>
          <div className="mb-4 animate-fade-in-delay-2">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm md:text-base font-semibold border-2 border-green-300">
              🚀 Open to Freelance Work
            </span>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 animate-fade-in-delay-2">
            I build beautiful, responsive, and user-friendly web applications
            using modern technologies and best practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
            <button
              onClick={() => {
                const element = document.getElementById('projects');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <a
              href="/Dharm-singh-fullstack-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl text-center flex items-center justify-center gap-2"
            >
              <span>📄</span>
              View Resume
            </a>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

