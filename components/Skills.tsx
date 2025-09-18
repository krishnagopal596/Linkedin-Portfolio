'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Shield, Brain } from 'lucide-react'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: [
      { name: 'Java', level: 95 },
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'SQL', level: 90 },
      { name: 'Shell Scripting', level: 75 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Code,
    skills: [
      { name: 'Spring Boot', level: 95 },
      { name: 'Hibernate', level: 90 },
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Django', level: 75 },
      { name: 'Flask', level: 70 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      { name: 'AWS', level: 85 },
      { name: 'Docker', level: 90 },
      { name: 'Kubernetes', level: 80 },
      { name: 'Jenkins', level: 85 },
      { name: 'GitHub Actions', level: 80 },
      { name: 'Terraform', level: 70 },
    ],
  },
  {
    title: 'Databases & Messaging',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Redis', level: 75 },
      { name: 'Kafka', level: 85 },
      { name: 'SAP BODS', level: 80 },
    ],
  },
  {
    title: 'Testing & Security',
    icon: Shield,
    skills: [
      { name: 'JUnit', level: 90 },
      { name: 'Mockito', level: 85 },
      { name: 'Postman', level: 90 },
      { name: 'Swagger', level: 80 },
      { name: 'RBAC', level: 85 },
      { name: 'JWT', level: 90 },
    ],
  },
  {
    title: 'AI & Computer Vision',
    icon: Brain,
    skills: [
      { name: 'OpenCV', level: 85 },
      { name: 'MediaPipe', level: 80 },
      { name: 'TensorFlow', level: 75 },
      { name: 'Scikit-learn', level: 70 },
      { name: 'Matplotlib', level: 85 },
      { name: 'Pygame', level: 80 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across full-stack development, cloud infrastructure, and emerging technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-600"
            >
              <div className="flex items-center mb-6">
                <category.icon className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ATS-Friendly Skills Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Technical Skills Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-gray-700 dark:text-gray-300">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Languages</h4>
              <p>Java, Python, JavaScript, TypeScript, SQL, Shell Scripting</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Frameworks</h4>
              <p>Spring Boot, Hibernate, Django, Flask, Node.js, React</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Cloud and DevOps</h4>
              <p>AWS, Docker, Kubernetes, Terraform, Jenkins, GitHub Actions</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Databases and Messaging</h4>
              <p>PostgreSQL, MySQL, MongoDB, SQL Server, Redis, Kafka, SAP BODS</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Testing and Security</h4>
              <p>JUnit, Mockito, Postman, Swagger, Secure SDLC, RBAC, JWT</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI and Vision</h4>
              <p>TensorFlow, Scikit-learn, OpenCV, MediaPipe, Matplotlib, Pygame</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 