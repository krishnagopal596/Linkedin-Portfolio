'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Shield, Brain, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

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
      { name: 'Angular', level: 85 },
      { name: 'Node.js', level: 80 },
    ],
  },
  {
    title: 'GenAI & LLM',
    icon: Brain,
    skills: [
      { name: 'Spring AI', level: 85 },
      { name: 'LangChain4j', level: 80 },
      { name: 'RAG', level: 85 },
      { name: 'Vector Embeddings', level: 80 },
      { name: 'OpenAI', level: 75 },
      { name: 'Amazon Bedrock', level: 70 },
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
]

export default function Skills() {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['Programming Languages', 'Frameworks & Libraries']))

  const toggleCategory = (title: string) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(title)) {
      newExpanded.delete(title)
    } else {
      newExpanded.add(title)
    }
    setExpandedCategories(newExpanded)
  }

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
            Comprehensive expertise across full-stack development, GenAI integration, and cloud infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const isExpanded = expandedCategories.has(category.title)
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-600 hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleCategory(category.title)}
                  className="flex items-center justify-between w-full mb-4 group"
                >
                  <div className="flex items-center">
                    <category.icon className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  )}
                </button>
                
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: skillIndex * 0.05 }}
                            className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* ATS-Friendly Skills Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">Technical Skills Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-700 dark:text-gray-300">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Languages</h4>
              <p>Java, Python, JavaScript, TypeScript, SQL, Shell Scripting</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Frameworks</h4>
              <p>Spring Boot, Hibernate, React, Angular, Node.js</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">GenAI & LLM</h4>
              <p>Spring AI, LangChain4j, RAG, Vector Embeddings, OpenAI, Amazon Bedrock</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Cloud and DevOps</h4>
              <p>AWS, Docker, Kubernetes, Terraform, Jenkins, GitHub Actions</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Databases and Messaging</h4>
              <p>PostgreSQL, MySQL, MongoDB, Redis, Kafka</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Testing and Security</h4>
              <p>JUnit, Mockito, Postman, Swagger, RBAC, JWT</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 