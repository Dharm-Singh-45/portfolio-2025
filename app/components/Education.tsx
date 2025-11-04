export default function Education() {
  const education = [
    {
      degree: 'Master of Business Administration (MBA)',
      field: 'Finance and HR',
      institution: 'Jai Narain Vyas University, Jodhpur',
      year: '2022',
    },
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Electronics and Communication Engineering',
      institution: 'Jodhpur Institute Of Engineering And Technology, Jodhpur',
      year: '2019',
    },
    {
      degree: 'Class 12',
      field: 'PCM (Physics, Chemistry, Mathematics)',
      institution: '',
      year: '2012 - 2013',
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg lg:text-xl text-blue-600 font-semibold mb-2">
                    {edu.field}
                  </p>
                  {edu.institution && (
                    <p className="text-base lg:text-lg text-gray-700 font-medium">
                      {edu.institution}
                    </p>
                  )}
                </div>
                <div className="ml-4 flex-shrink-0">
                  <span className="inline-block px-3 py-1.5 lg:px-4 lg:py-2 bg-blue-600 text-white rounded-full font-semibold text-sm lg:text-base whitespace-nowrap">
                    {edu.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

