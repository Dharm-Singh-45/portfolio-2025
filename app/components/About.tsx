'use client';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate developer crafting innovative solutions with modern technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <span className="text-3xl mr-4">💻</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Full Stack Developer</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    I'm a software developer with a strong focus on the MERN stack,
                    including React, Redux Toolkit, Node.js, Express, and MongoDB.
                    With a solid foundation in frontend and backend development, I
                    build user-centered web applications that are functional and
                    responsive.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <span className="text-3xl mr-4">📚</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Teaching Experience</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    I have over five years of tutoring experience in Maths and
                    Science, which has sharpened my skills in explaining complex ideas
                    clearly and helping others understand technical concepts effectively.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <span className="text-3xl mr-4">🧮</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Data Structures & Algorithms</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    I have strong problem-solving skills and a deep understanding of data structures and algorithms.
                    I've solved over 100+ LeetCode problems covering arrays, linked lists, trees, graphs, dynamic
                    programming, and more. This helps me write efficient, optimized code and tackle complex
                    algorithmic challenges.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <span className="text-3xl mr-4">🚀</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Learning</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    I'm passionate about staying updated with the latest technologies and best practices.
                    I actively explore advanced concepts like microservices, cloud deployment, and
                    performance optimization. I'm always excited to learn new tools and tackle challenging
                    projects that push my boundaries as a developer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-8 lg:p-10 shadow-xl border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Highlights</h3>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center border border-gray-100">
                <div className="text-5xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-700 font-semibold text-lg">Projects</div>
                <div className="text-gray-500 text-sm mt-1">Completed & Deployed</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center border border-gray-100">
                <div className="text-5xl font-bold text-blue-600 mb-2">3+</div>
                <div className="text-gray-700 font-semibold text-lg">Years Experience</div>
                <div className="text-gray-500 text-sm mt-1">Professional Development</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center border border-gray-100">
                <div className="text-5xl font-bold text-blue-600 mb-2">23+</div>
                <div className="text-gray-700 font-semibold text-lg">Technologies</div>
                <div className="text-gray-500 text-sm mt-1">Mastered & Working</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center border border-gray-100">
                <div className="text-5xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-700 font-semibold text-lg">LeetCode Problems</div>
                <div className="text-gray-500 text-sm mt-1">Solved & Practiced</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

