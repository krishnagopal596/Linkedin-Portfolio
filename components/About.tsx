'use client'

import { motion } from 'framer-motion'
import { Download, Award, ChevronDown, ChevronUp, GraduationCap, Briefcase } from 'lucide-react'
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
            Java | Spring Boot | Angular | React | Selenium | Playwright
          </p>
        </motion.div>

        {/* Interactive Statistics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto"
        >
          {[
            { number: 4, suffix: '+', label: 'Years Experience', color: 'blue', icon: '💼' },
            { number: 3.7, suffix: '', label: 'GPA', color: 'green', icon: '🎓' },
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
              Building and testing enterprise applications using <strong className="text-primary-600 dark:text-primary-400">Java</strong>, <strong className="text-primary-600 dark:text-primary-400">Spring Boot</strong>, <strong className="text-primary-600 dark:text-primary-400">Angular</strong>, <strong className="text-primary-600 dark:text-primary-400">React</strong>, <strong className="text-primary-600 dark:text-primary-400">Selenium</strong>, <strong className="text-primary-600 dark:text-primary-400">Playwright</strong>, and <strong className="text-primary-600 dark:text-primary-400">API testing</strong> tools across insurance, payroll, and ERP domains. Master of Science in Computer Science from <strong className="text-primary-600 dark:text-primary-400">Iowa State University</strong> (GPA: 3.7/4.0). Currently at <strong className="text-primary-600 dark:text-primary-400">State Farm Insurance</strong>.
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
                  title: "Research Publication",
                  icon: "📚",
                  description: "IEEE paper published",
                  details: "Secure Hash Algorithm Using SHA-256, RSA, and AES - Published in IEEE"
                },
                {
                  title: "Academic Excellence",
                  icon: "🏆",
                  description: "Global Scholars Award",
                  details: "Recognition for graduate excellence at Iowa State University"
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
                    Master of Science - MS, Computer Science
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    Iowa State University
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    August 2023 - August 2025 • GPA: 3.7/4.0
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
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Bachelor of Technology - BTech, Electronics and Communication Engineering
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    Vardhaman College of Engineering (VCEH)
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    July 2018 - August 2022
                  </p>
                </div>
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
                      {['Distributed Systems', 'Advanced Software Engineering', 'Cloud Computing & Security'].map((course) => (
                        <span key={course} className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Awards</h5>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-center">
                        <Award className="w-4 h-4 mr-2 text-yellow-500" />
                        Global Scholars Award for Graduate Excellence
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 