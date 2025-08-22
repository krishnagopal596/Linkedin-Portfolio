'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

export default function About() {
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
            Software Engineer & Computer Science Graduate Student at Iowa State University
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Professional Summary
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I build reliable backend systems and practical interfaces that turn complex data into useful products. 
              I care about secure design, clear ownership, and shipping work that helps users.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Currently pursuing my Master's in Computer Science at <strong className="text-primary-600 dark:text-primary-400">Iowa State University</strong> with a 3.7 GPA, 
              graduating August 2025. Previously worked as a Software Developer at ADP and completed internships at Mindtree and Cognizant. 
              I enjoy learning in collaborative teams and building products that are easy to use and maintain.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-8 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Key Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technical Impact</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Reduced API latency and increased service scalability for payroll systems at ADP</li>
                  <li>• Migrated synchronous workflows to event-driven services with Kafka and Kubernetes</li>
                  <li>• Built authentication service with Spring Boot, PostgreSQL, and Spring Security</li>
                  <li>• Delivered dashboards in React for internal stakeholders</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Research & Development</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• IEEE publication on RFID encryption security</li>
                  <li>• Real-time motion retargeting for humanoid robotics</li>
                  <li>• Cloud-native authentication systems</li>
                  <li>• Global Scholars Award recipient</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Education & Credentials
            </h3>
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
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                >
                  <Download className="w-4 h-4" />
                  <span>Resume</span>
                </a>
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Credentials:</strong> Unofficial transcript available on request • 
                  <strong>Professional Development:</strong> Ongoing study in distributed systems and cloud security
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 