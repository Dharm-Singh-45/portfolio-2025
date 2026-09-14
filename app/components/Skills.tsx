export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Redux', level: 85 },
        { name: 'Zustand', level: 80 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 92 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'shadcn UI', level: 80 },
      ],
    },
    {
      title: 'Backend & Architecture',
      skills: [
        { name: 'NestJS', level: 90 },
        { name: 'Node.js & Express.js', level: 88 },
        { name: 'Microservices Architecture', level: 88 },
        { name: 'MongoDB & Mongoose', level: 88 },
        { name: 'Redis & Bull Queue', level: 85 },
        { name: 'WhatsApp API Integration', level: 85 },
        { name: 'Razorpay & Reconciliation', level: 85 },
        { name: 'RESTful APIs & Swagger', level: 90 },
      ],
    },
    {
      title: 'Data Structures & Algorithms',
      skills: [
        { name: 'Problem Solving', level: 85 },
        { name: 'Data Structures', level: 85 },
        { name: 'Algorithms', level: 80 },
        { name: 'LeetCode', level: 85 },
        { name: 'Time & Space Complexity', level: 80 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Postman', level: 85 },
        { name: 'Jira', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'VS Code', level: 95 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

