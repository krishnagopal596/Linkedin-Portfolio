'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ChevronDown, ChevronUp, Award, BookOpen, Code2, TrendingUp, Users, Zap } from 'lucide-react'
import { useState } from 'react'
import { experiences } from '../data/experiences'

export default function Experiences() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const publications = [
    {
      title: "Secure Hash Algorithm Using SHA-256, RSA, and AES",
      description: "Developed a multi-layered encryption model for secure data transmission by integrating SHA-256 for hashing, 128-bit RSA for asymmetric encryption, and 16-byte AES for symmetric encryption to ensure end-to-end data protection.",
      publisher: "IEEE",
      link: "https://ieeexplore.ieee.org/document/9792989",
      year: "2023"
    }
  ]

  const achievements = [
    {
      icon: TrendingUp,
      title: "99.9% System Uptime",
      description: "Achieved enterprise-grade reliability through comprehensive observability frameworks"
    },
    {
      icon: Zap,
      title: "85% Defect Reduction",
      description: "Implemented automated testing strategies reducing production issues significantly"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led cross-functional teams of 8+ developers and mentored junior developers"
    },
    {
      icon: Award,
      title: "Performance Optimization",
      description: "Improved system performance by 40%+ through advanced caching and optimization techniques"
    }
  ]

  const projects = [
    {
      title: "Cloud-Native Authentication Service",
      period: "Feb 2024 - March 2024",
      description: "Architected scalable microservices platform with PostgreSQL integration, implementing BCrypt encryption and JWT-based authentication system.",
      technologies: ["Spring Boot", "PostgreSQL", "Docker", "JWT", "OpenAPI/Swagger"],
      highlights: [
        "Engineered containerized deployment strategy using Docker and Docker Compose",
        "Integrated comprehensive OpenAPI/Swagger documentation with automated API testing",
        "Implemented Spring Boot Actuator for real-time health monitoring"
      ]
    },
    {
      title: "Humanoid Robot Motion Retargeting System",
      period: "Sep 2023 - Jan 2024",
      description: "Developed real-time motion capture and analysis system using Python, OpenCV, and MediaPipe, processing 3D human pose data for robotic applications.",
      technologies: ["Python", "OpenCV", "MediaPipe", "TensorFlow", "Scikit-learn", "Matplotlib"],
      highlights: [
        "Achieved 80% accuracy in motion pattern recognition and classification",
        "Created custom inverse kinematics solver for 14-DOF humanoid robot",
        "Reduced motion jitter by 60% through advanced smoothing filters"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent mb-6">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            4+ years of experience architecting enterprise solutions across <span className="font-semibold text-primary-600 dark:text-primary-400">insurance, payroll, and ERP domains</span> with expertise in modern technologies and innovative approaches
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <achievement.icon className="w-10 h-10 text-primary-600 dark:text-primary-400 mb-4" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">{achievement.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{achievement.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Professional Experience */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Professional Experience
          </h3>
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-8 last:mb-0"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <Code2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {experience.role}
                        </h3>
                        <p className="text-xl font-semibold bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400 bg-clip-text text-transparent">
                          {experience.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary-500" />
                        <span className="font-medium">{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary-500" />
                        <span className="font-medium">{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="mt-4 lg:mt-0 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-blue-500 text-white rounded-xl hover:from-primary-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {expandedIndex === index ? (
                      <>
                        Hide Details <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Show Details <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Description */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 mb-6">
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
                    {experience.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-gradient-to-r from-blue-100 to-primary-100 dark:from-blue-900 dark:to-primary-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-700 hover:shadow-md transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="border-t border-gray-200 dark:border-gray-600 pt-6"
                  >
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary-500" />
                      Key Achievements & Impact
                    </h4>
                    <div className="grid gap-4">
                      {experience.highlights?.map((highlight, highlightIndex) => (
                        <motion.div
                          key={highlightIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: highlightIndex * 0.1 }}
                          className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl border border-green-200 dark:border-green-700/50"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-3 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-200 leading-relaxed font-medium">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Key Projects & Research
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{project.period}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Publications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Publications & Research
          </h3>
          <div className="max-w-4xl mx-auto">
            {publications.map((publication, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold mb-3">{publication.title}</h4>
                    <p className="text-blue-100 mb-4 leading-relaxed">{publication.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                          {publication.publisher}
                        </span>
                        <span className="text-blue-200 text-sm">{publication.year}</span>
                      </div>
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-semibold"
                      >
                        View Publication
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 dark:from-gray-800 dark:to-blue-800 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-blue-500/10" />
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6">Ready to Build the Future Together?</h3>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Looking to contribute my expertise in <span className="font-semibold text-primary-300">enterprise Java development</span>, 
                <span className="font-semibold text-blue-300"> cloud technologies</span>, and 
                <span className="font-semibold text-purple-300"> innovative system architecture</span> to teams building transformative software solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-blue-500 text-white rounded-xl hover:from-primary-600 hover:to-blue-600 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Let's Connect
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center px-8 py-4 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-200 font-semibold border border-white/20"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}