export default function Certifications() {
  const certifications = [
    {
      name: 'Certification Name',
      issuer: 'Issuing Organization',
      date: '2024',
      credentialId: 'Credential ID: ABC123',
      link: '#',
      description: 'Brief description of what this certification covers',
    },
    // Add more certifications as needed
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">🏆</div>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {cert.date}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {cert.name}
              </h3>
              <p className="text-blue-600 font-semibold mb-2">
                {cert.issuer}
              </p>
              {cert.credentialId && (
                <p className="text-sm text-gray-600 mb-3">
                  {cert.credentialId}
                </p>
              )}
              {cert.description && (
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>
              )}
              {cert.link && cert.link !== '#' && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center text-sm"
                >
                  View Certificate →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

