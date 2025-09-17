'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Shield, Brain } from 'lucide-react'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: [
      { name: 'Java', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 90 },
      { name: 'SQL', level: 90 },
      { name: 'HTML5', level: 85 },
      { name: 'CSS3', level: 85 },
    ],
  },
  {
    title: 'Enterprise Frameworks',
    icon: Code,
    skills: [
      { name: 'Spring Boot', level: 95 },
      { name: 'Spring Security', level: 90 },
      { name: 'Hibernate/JPA', level: 90 },
      { name: 'Angular', level: 90 },
      { name: 'React', level: 85 },
      { name: 'RESTful APIs', level: 95 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      { name: 'AWS', level: 85 },
      { name: 'Azure AKS', level: 80 },
      { name: 'Docker', level: 90 },
      { name: 'Kubernetes', level: 85 },
      { name: 'Jenkins', level: 85 },
      { name: 'GitHub Actions', level: 80 },
    ],
  },
  {
    title: 'Database Technologies',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'Oracle', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Redis', level: 85 },
      { name: 'Apache Kafka', level: 85 },
      { name: 'PL/SQL', level: 80 },
    ],
  },
  {
    title: 'Testing & Quality Assurance',
    icon: Shield,
    skills: [
      { name: 'JUnit', level: 90 },
      { name: 'Mockito', level: 85 },
      { name: 'Cypress', level: 85 },
      { name: 'Selenium WebDriver', level: 85 },
      { name: 'TestNG', level: 80 },
      { name: 'Postman', level: 90 },
    ],
  },
  {
    title: 'Security & Authentication',
    icon: Shield,
    skills: [
      { name: 'OAuth2', level: 90 },
      { name: 'JWT', level: 90 },
      { name: 'SSO', level: 85 },
      { name: 'Spring Security', level: 90 },
      { name: 'API Security', level: 85 },
      { name: 'Data Encryption', level: 80 },
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
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Programming Languages</h4>
              <p>Java, JavaScript, TypeScript, Python, SQL, HTML5, CSS3, C++, Ruby</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Enterprise Frameworks</h4>
              <p>Spring Boot, Spring Security, Spring MVC, Hibernate/JPA, Angular, React, Node.js, RESTful APIs, Microservices</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Cloud & DevOps</h4>
              <p>AWS (EC2, S3, RDS, Lambda, CloudWatch), Azure (AKS, App Service), Docker, Kubernetes, Jenkins, GitHub Actions, CI/CD</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Database Technologies</h4>
              <p>PostgreSQL, MySQL, MongoDB, Oracle, Redis, SQL Server, Apache Kafka, Database Design, Query Optimization</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Testing & Quality Assurance</h4>
              <p>JUnit, Mockito, Cypress, Selenium, TestNG, Test-Driven Development, Integration Testing, Performance Testing</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Security & Authentication</h4>
              <p>OAuth 2.0, JWT, Spring Security, SSO, RBAC, API Security, Data Encryption, Secure SDLC</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 