'use client'

import { motion } from 'framer-motion'
import { Download, ChevronDown, ChevronUp, GraduationCap, Briefcase, Sparkles, Heart } from 'lucide-react'
import { useState } from 'react'

export default function About() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }
  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">  

        {/* Professional summary from resume */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-8"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Java Software Engineer with 4 years of experience designing and developing scalable
            enterprise applications using Java, Spring Boot, and microservices architecture.
            Experienced across the full Software Development Life Cycle (SDLC) including
            requirements analysis, software architecture, system integration, development,
            testing, debugging, and deployment. Strong expertise in building high performance
            backend services, database architectures, and distributed systems using Java,
            JavaScript, Apache Kafka, Spring Batch, REST APIs, and AWS to deliver secure,
            reliable, and user-focused applications.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* EXPERTISE Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Sparkles className="w-6 h-6 mr-3 text-primary-600" />
              Expertise
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-primary-600 dark:text-primary-400 mb-3">Backend Development</h4>
                <p className="text-gray-700 dark:text-gray-300">Java, Spring Boot, Spring Security, Spring MVC, Spring Batch, Microservices architecture, REST APIs, SOAP web services, Hibernate/JPA, OAuth2, JWT, Event-driven systems with Kafka, Spring Integration patterns, MySQL/Oracle/PostgreSQL optimization</p>
              </div>
              <div>
                <h4 className="font-bold text-primary-600 dark:text-primary-400 mb-3">Frontend Development</h4>
                <p className="text-gray-700 dark:text-gray-300">React 18, Angular 14+, TypeScript, HTML5, CSS3, NgRx, Redux state management, Responsive UI/UX, Component-based architecture, WebSocket/SSE, PWA capabilities, CSS Grid, Flexbox, Bootstrap</p>
              </div>
              <div>
                <h4 className="font-bold text-primary-600 dark:text-primary-400 mb-3">Cloud & DevOps</h4>
                <p className="text-gray-700 dark:text-gray-300">Azure AKS, AWS services, Kubernetes, Docker containerization, Jenkins CI/CD pipelines, GitHub Actions, Terraform, Prometheus/Grafana monitoring, CloudWatch observability, blue/green deployments, canary releases</p>
              </div>
              <div>
                <h4 className="font-bold text-primary-600 dark:text-primary-400 mb-3">Testing & Quality</h4>
                <p className="text-gray-700 dark:text-gray-300">JUnit, Mockito, Test-Driven Development (TDD), Integration testing, SonarQube code quality, REST Assured API testing, comprehensive observability, circuit breaker patterns, resilience engineering</p>
              </div>
            </div>
          </motion.div>

          {/* EXPERIENCE Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Briefcase className="w-6 h-6 mr-3 text-primary-600" />
              Experience
            </h3>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Current Role: Java Software Engineer Stack Developer at State Farm Insurance</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">June 2024 - Present | Bloomington, Illinois</p>
                <p className="text-gray-600 dark:text-gray-400">Building enterprise insurance platform with Spring Boot microservices, React/Angular frontends, real-time data synchronization.</p>
              </div>
              <div className="border-l-4 border-primary-600 pl-4 text-sm text-gray-600 dark:text-gray-400">
                <strong>Total Professional Experience:</strong> 4+ years of full-stack Java development across insurance, payroll, and ERP domains, serving clients such as State Farm and ADP with scalable enterprise solutions.
              </div>
            </div>
          </motion.div>


          {/* EDUCATION Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-primary-600" />
                Education
              </h3>
              <button
                onClick={() => toggleSection('education')}
                className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
              >
                <span className="text-sm font-medium">
                  {expandedSection === 'education' ? 'Show Less' : 'Show More'}
                </span>
                {expandedSection === 'education' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                      Master of Science (MS) - Computer Science
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold">
                      Iowa State University
                    </p>
                  </div>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">
                    3.7/4.0 GPA
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  <span className="font-medium">Duration:</span> August 2022 - August 2024 (24 months)
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Location:</span> Ames, Iowa, United States
                </p>
                <motion.div
                  initial={false}
                  animate={{ height: expandedSection === 'education' ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Relevant Coursework</h5>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['Distributed Systems', 'Advanced Software Engineering', 'Cloud Computing & Security', 'Software Testing', 'Database Systems'].map((course) => (
                        <span key={course} className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                          {course}
                        </span>
                      ))}
                    </div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Awards & Recognition</h5>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">★</span>
                        Global Scholars Award for Graduate Excellence
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">★</span>
                        Dean's List recognition for academic performance
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                      Bachelor of Technology (BTech) - Electronics and Communication Engineering
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold">
                      Vardhaman College of Engineering (VCEH)
                    </p>
                  </div>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">
                    3.8/4.0 GPA
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  <span className="font-medium">Duration:</span> July 2018 - August 2022 (49 months)
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Location:</span> Hyderabad, Telangana, India
                </p>
                <motion.div
                  initial={false}
                  animate={{ height: expandedSection === 'education' ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Honors & Distinctions</h5>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">★</span>
                        Topper in Data Structures and Algorithms
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">★</span>
                        Published IEEE research paper in final year
                      </li>                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">★</span>
                        AWS Certified Solutions Architect – Associate (2024)
                      </li>                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* INTERESTS Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Heart className="w-6 h-6 mr-3 text-primary-600" />
              Interests & Passions
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-primary-600 dark:text-primary-400 mb-3">🤖 Generative AI & LLMs</h4>
                <p className="text-gray-700 dark:text-gray-300">Passionate about integrating Large Language Models into enterprise applications using Spring AI and LangChain4j. Building intelligent workflows with RAG architectures, prompt engineering, and AI-powered decision support systems.</p>
              </div>
              <div>
                <h4 className="font-bold text-primary-600 dark:text-primary-400 mb-3">☁️ Cloud-Native Architecture</h4>
                <p className="text-gray-700 dark:text-gray-300">Fascinated by cloud-native patterns including microservices, event-driven systems, Kubernetes orchestration, serverless computing, and distributed architecture design for building scalable enterprise platforms.</p>
              </div>
              <div>
                <h4 className="font-bold text-primary-600 dark:text-primary-400 mb-3">🚀 System Design & Performance</h4>
                <p className="text-gray-700 dark:text-gray-300">Deeply interested in designing high-performance systems with advanced caching strategies, database optimization, circuit breaker patterns, and resilience engineering for production-grade enterprise applications.</p>
              </div>
              <div>
                <h4 className="font-bold text-primary-600 dark:text-primary-400 mb-3">📚 Open Source & Innovation</h4>
                <p className="text-gray-700 dark:text-gray-300">Committed to contributing to the Java ecosystem, exploring cutting-edge frameworks, staying updated with Spring Boot innovations, and sharing knowledge with the developer community.</p>
              </div>
            </div>
          </motion.div>

        </div>
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 dark:from-gray-800 dark:to-blue-800 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-blue-500/10" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Let's Build Something Great Together</h3>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Open to collaborating on full-stack development, microservices architecture, AI integration, and cloud-native solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-500 text-white rounded-xl hover:from-primary-600 hover:to-blue-600 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get In Touch
                </a>
                <a
                  href="/Krishna_Madhavaram_Resume_JFS.docx"
                  download
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-200 font-semibold border border-white/20"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}