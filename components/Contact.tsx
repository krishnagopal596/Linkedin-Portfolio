'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Calendar, Github, Linkedin, ExternalLink } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to discuss projects, opportunities, or just say hello.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                    <a 
                      href="mailto:krishnagopal596@gmail.com"
                      className="text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      krishnagopal596@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">Ames, Iowa, United States</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <Calendar className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Work Authorization</h4>
                    <p className="text-gray-600 dark:text-gray-300">F-1 OPT (Available September 2025)</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Professional Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Professional Links
              </h3>
              
              <div className="space-y-4">
                <a
                  href="https://github.com/krishnagopal596"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 group"
                >
                  <div className="p-2 bg-gray-900 dark:bg-white rounded-lg">
                    <Github className="w-5 h-5 text-white dark:text-gray-900" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                      GitHub Profile
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">krishnagopal596</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                </a>

                <a
                  href="https://linkedin.com/in/krishna-gopal-madhavaram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 group"
                >
                  <div className="p-2 bg-linkedin rounded-lg">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                      LinkedIn Profile
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Krishna Gopal Madhavaram</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Collaborate?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                I'm currently seeking full-time opportunities in software engineering, 
                particularly in backend development, cloud infrastructure, and robotics. 
                Let's discuss how we can work together!
              </p>
              <a
                href="mailto:krishnagopal596@gmail.com?subject=Portfolio Contact - Let's Connect"
                className="inline-flex items-center space-x-2 px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold"
              >
                <Mail className="w-5 h-5" />
                <span>Send Message</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 