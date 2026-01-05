'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Shield, Brain, Sparkles } from 'lucide-react'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    borderColor: 'border-blue-200 dark:border-blue-800',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'Shell Scripting'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Sparkles,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    borderColor: 'border-purple-200 dark:border-purple-800',
    skills: ['Spring Boot', 'Hibernate', 'React', 'Angular', 'Node.js'],
  },
  {
    title: 'GenAI & LLM',
    icon: Brain,
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
    borderColor: 'border-emerald-200 dark:border-emerald-800',
    skills: ['Spring AI', 'LangChain4j', 'RAG', 'Vector Embeddings', 'OpenAI', 'Amazon Bedrock'],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    borderColor: 'border-orange-200 dark:border-orange-800',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Terraform'],
  },
  {
    title: 'Databases & Messaging',
    icon: Database,
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
    borderColor: 'border-indigo-200 dark:border-indigo-800',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Kafka'],
  },
  {
    title: 'Testing & Security',
    icon: Shield,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    borderColor: 'border-green-200 dark:border-green-800',
    skills: ['JUnit', 'Mockito', 'Postman', 'Swagger', 'RBAC', 'JWT'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across full-stack development, GenAI integration, and cloud infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className={`bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 ${category.borderColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg`}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-3`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`px-4 py-2 bg-white dark:bg-gray-900 rounded-lg text-sm font-semibold text-gray-900 dark:text-gray-100 border-2 ${category.borderColor} shadow-md hover:shadow-lg transition-all duration-200 cursor-default font-bold`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ATS-Friendly Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Technical Skills Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Languages', skills: 'Java, Python, JavaScript, TypeScript, SQL, Shell Scripting' },
              { title: 'Frameworks', skills: 'Spring Boot, Hibernate, React, Angular, Node.js' },
              { title: 'GenAI & LLM', skills: 'Spring AI, LangChain4j, RAG, Vector Embeddings, OpenAI, Amazon Bedrock' },
              { title: 'Cloud & DevOps', skills: 'AWS, Docker, Kubernetes, Terraform, Jenkins, GitHub Actions' },
              { title: 'Databases & Messaging', skills: 'PostgreSQL, MySQL, MongoDB, Redis, Kafka' },
              { title: 'Testing & Security', skills: 'JUnit, Mockito, Postman, Swagger, RBAC, JWT' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl"
              >
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.skills}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 