'use client'

import { motion } from 'framer-motion'
import { Download, Award, Users, Code, BookOpen, ChevronDown, ChevronUp, ExternalLink, Calendar, GraduationCap, Briefcase, Star, TrendingUp } from 'lucide-react'
import { useState } from 'react'

export default function About() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Java Full Stack Developer at State Farm & Computer Science Graduate Student at Iowa State University
          </p>
        </motion.div>

        {/* Interactive Statistics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { number: 4, suffix: '+', label: 'Years Experience', color: 'blue', icon: '💼' },
            { number: 3.7, suffix: '', label: 'GPA', color: 'green', icon: '🎓' },
            { number: 3, suffix: '', label: 'Companies', color: 'purple', icon: '🏢' },
            { number: 1, suffix: '', label: 'IEEE Paper', color: 'orange', icon: '📄' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 dark:from-${stat.color}-900/20 dark:to-${stat.color}-800/20 rounded-xl p-6 text-center cursor-pointer group relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <motion.div 
                  className={`text-3xl font-bold text-${stat.color}-600 dark:text-${stat.color}-400 mb-2`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {stat.number}{stat.suffix}
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <Code className="w-6 h-6 mr-3 text-primary-600" />
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { name: 'Java', level: 95, category: 'Backend', color: 'red' },
              { name: 'Spring Boot', level: 90, category: 'Framework', color: 'green' },
              { name: 'React', level: 85, category: 'Frontend', color: 'blue' },
              { name: 'Angular', level: 80, category: 'Frontend', color: 'red' },
              { name: 'PostgreSQL', level: 85, category: 'Database', color: 'blue' },
              { name: 'Kubernetes', level: 75, category: 'DevOps', color: 'blue' },
              { name: 'AWS', level: 80, category: 'Cloud', color: 'orange' },
              { name: 'Docker', level: 85, category: 'DevOps', color: 'blue' },
              { name: 'TypeScript', level: 80, category: 'Language', color: 'blue' },
              { name: 'Kafka', level: 70, category: 'Messaging', color: 'purple' }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`group relative cursor-pointer`}
              >
                <div className={`px-4 py-2 rounded-full bg-${skill.color}-100 dark:bg-${skill.color}-900/30 text-${skill.color}-800 dark:text-${skill.color}-300 text-sm font-medium border border-${skill.color}-200 dark:border-${skill.color}-700 hover:shadow-lg transition-all duration-300 hover:border-${skill.color}-300 dark:hover:border-${skill.color}-600`}>
                  {skill.name}
                </div>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                  {skill.category} • {skill.level}%
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 mb-8 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Briefcase className="w-6 h-6 mr-3 text-primary-600" />
              Professional Summary
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Java Full Stack Developer specializing in GenAI solutions with 4+ years building enterprise applications for insurance and payroll sectors. 
              Currently developing RAG-powered microservices at <strong className="text-primary-600 dark:text-primary-400">State Farm Insurance</strong> while pursuing Master's in Computer Science at <strong className="text-primary-600 dark:text-primary-400">Iowa State University</strong> (GPA: 3.7/4.0).
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <Award className="w-6 h-6 mr-3 text-primary-600" />
              Key Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "GenAI Integration",
                  icon: "🤖",
                  description: "10K+ claims daily with 95%+ accuracy",
                  details: "Built RAG pipelines with Spring AI and LangChain4j"
                },
                {
                  title: "Performance Optimization",
                  icon: "⚡",
                  description: "60% performance improvement",
                  details: "Optimized queries and implemented caching strategies"
                },
                {
                  title: "Microservices Architecture",
                  icon: "🔄",
                  description: "15+ microservices, 40% latency reduction",
                  details: "Event-driven architecture with Kafka and Kubernetes"
                },
                {
                  title: "Code Quality",
                  icon: "🔐",
                  description: "85%+ code coverage, 30% fewer incidents",
                  details: "TDD practices with JUnit, Mockito, and SonarQube"
                },
                {
                  title: "Research Publication",
                  icon: "📚",
                  description: "IEEE paper published",
                  details: "RFID encryption security research"
                },
                {
                  title: "Academic Excellence",
                  icon: "🏆",
                  description: "Global Scholars Award",
                  details: "Recognition for graduate excellence"
                }
              ].map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {achievement.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 font-medium">
                      {achievement.description}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {achievement.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Career Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-6 mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Calendar className="w-6 h-6 mr-3 text-primary-600" />
              Career Journey
            </h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-600"></div>
              {[
                {
                  year: 'June 2024 - Present',
                  title: 'Java Full Stack Engineer',
                  company: 'State Farm Insurance',
                  description: 'GenAI-powered microservices & RAG pipelines',
                  icon: '🏢',
                  highlights: ['Spring AI', 'LangChain4j', 'RAG', 'Kafka']
                },
                {
                  year: 'June 2022 - Aug 2023',
                  title: 'Java Full Stack Developer',
                  company: 'ADP',
                  description: 'ERP Modernization & Payroll Processing',
                  icon: '💼',
                  highlights: ['Microservices', 'Kafka', 'React', 'MongoDB']
                },
                {
                  year: 'July 2020 - May 2022',
                  title: 'Java Full Stack Developer',
                  company: 'LTI Mindtree',
                  description: 'Insurance Policy Servicing & Billing',
                  icon: '🏦',
                  highlights: ['Spring Boot', 'Oracle', 'Angular', 'Microservices']
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative flex items-start mb-6 last:mb-0 group cursor-pointer"
                >
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="absolute left-3 w-3 h-3 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"
                  ></motion.div>
                  <div className="ml-8 bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md hover:shadow-xl transition-all duration-300 flex-1 group-hover:border-primary-200 dark:group-hover:border-primary-700 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center">
                        <span className="text-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </span>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-primary-600 dark:text-primary-400 font-medium text-sm">
                            {item.company}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {item.highlights.map((highlight, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                    <span className="inline-block bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 px-2 py-0.5 rounded-full text-xs font-medium group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
                      {item.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-primary-600" />
                Education & Credentials
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
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Master of Science in Computer Science
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    Iowa State University
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Expected Graduation: August 2025 • GPA: 3.7/4.0
                  </p>
                </div>
                <a
                  href="/Krishna_Madhavaram_Resume_JFS.docx"
                  download
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 hover:scale-105 transform"
                >
                  <Download className="w-4 h-4" />
                  <span>Resume</span>
                </a>
              </div>
              
              <motion.div
                initial={false}
                animate={{ height: expandedSection === 'education' ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-gray-200 dark:border-gray-600 space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Relevant Coursework</h5>
                    <div className="flex flex-wrap gap-2">
                      {['Distributed Systems', 'Cloud Computing', 'Machine Learning', 'Database Systems', 'Software Engineering', 'Computer Networks'].map((course) => (
                        <span key={course} className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Certifications & Awards</h5>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-center">
                        <Award className="w-4 h-4 mr-2 text-yellow-500" />
                        Global Scholars Award recipient
                      </li>
                      <li className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-2 text-blue-500" />
                        IEEE publication on RFID encryption security
                      </li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Credentials:</strong> Unofficial transcript available on request • 
                    <strong>Professional Development:</strong> Ongoing study in distributed systems and cloud security
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 