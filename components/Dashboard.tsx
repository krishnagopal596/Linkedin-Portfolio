'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, TrendingUp, Users, Star, Calendar, Code, Database, Cloud, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'

function useSocialMetrics() {
  const [githubFollowers, setGithubFollowers] = useState<number | null>(null)
  const [linkedinFollowers, setLinkedinFollowers] = useState<number | null>(null)
  const [linkedinConnections, setLinkedinConnections] = useState<number | null>(null)
  const [updatedAt, setUpdatedAt] = useState<string | null>(null)

  useEffect(() => {
    // GitHub followers live
    fetch('/api/github/stats')
      .then(r => r.ok ? r.json() : { followers: null })
      .then(j => setGithubFollowers(j.followers ?? null))
      .catch(() => setGithubFollowers(null))
    // LinkedIn counts from localStorage (dashboard-managed)
    try {
      const raw = localStorage.getItem('portfolio.social')
      if (raw) {
        const s = JSON.parse(raw)
        setLinkedinFollowers(s.linkedinFollowers ?? null)
        setLinkedinConnections(s.linkedinConnections ?? null)
        setUpdatedAt(s.updatedAt ?? null)
      }
    } catch {}
  }, [])

  return { githubFollowers, linkedinFollowers, linkedinConnections, updatedAt }
}

const technologies = [
  { name: 'Java', percentage: 95, color: 'bg-orange-500' },
  { name: 'Spring Boot', percentage: 92, color: 'bg-green-600' },
  { name: 'AWS', percentage: 85, color: 'bg-orange-500' },
  { name: 'React', percentage: 82, color: 'bg-blue-500' },
  { name: 'Python', percentage: 88, color: 'bg-blue-400' },
  { name: 'Kafka', percentage: 82, color: 'bg-purple-500' }
]

const achievements = [
  {
    title: 'IEEE Publication',
    description: 'Secure Hash Algorithm Research',
    year: '2022'
  },
  {
    title: 'Global Scholars Award',
    description: 'Graduate Excellence',
    year: '2023'
  },
  {
    title: '98% Test Coverage',
    description: 'Hospital Management System',
    year: '2021'
  },
  {
    title: '40% Performance Improvement',
    description: 'ETL Pipeline Optimization',
    year: '2020'
  }
]

export default function Dashboard() {
  const { githubFollowers, linkedinFollowers, linkedinConnections, updatedAt } = useSocialMetrics()
  const metrics = [
    {
      title: 'GitHub Followers',
      value: githubFollowers ?? '—',
      icon: <Github className="w-6 h-6" />,
      color: 'bg-gray-900',
      description: 'Live from GitHub',
    },
    {
      title: 'LinkedIn Followers',
      value: linkedinFollowers ?? '—',
      icon: <Linkedin className="w-6 h-6" />,
      color: 'bg-linkedin',
      description: updatedAt ? `Updated ${new Date(updatedAt).toLocaleDateString()}` : 'Set in Dashboard',
    },
    {
      title: 'LinkedIn Connections',
      value: linkedinConnections ?? '—',
      icon: <Linkedin className="w-6 h-6" />,
      color: 'bg-linkedin',
      description: updatedAt ? `Updated ${new Date(updatedAt).toLocaleDateString()}` : 'Set in Dashboard',
    },
    {
      title: 'Projects Delivered',
      value: '25+',
      icon: <Code className="w-6 h-6" />,
      color: 'bg-green-600',
      description: 'Production ready',
    },
  ]
  return (
    <section id="dashboard" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Analytics</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Key metrics and achievements that showcase my professional growth and technical expertise
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg text-white ${metric.color}`}>
                  {metric.icon}
                </div>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
              <p className="text-gray-600 font-medium mb-1">{metric.title}</p>
              <p className="text-sm text-gray-500">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technology Proficiency */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Technology Proficiency</h3>
            </div>
            
            <div className="space-y-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                    <span className="text-sm text-gray-500">{tech.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-2 rounded-full ${tech.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-green-100 rounded-lg text-green-600">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Key Achievements</h3>
            </div>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-3 h-3 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                    <p className="text-gray-600 text-sm">{achievement.description}</p>
                    <span className="inline-block mt-1 px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                      {achievement.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Professional Growth Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-50 to-linkedin/10 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Professional Growth Timeline</h3>
            <p className="text-lg text-gray-600">
              My journey from ETL intern to software engineer, showcasing continuous learning and advancement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-6 text-center shadow-md"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">ETL & Data Engineering</h4>
              <p className="text-gray-600 text-sm mb-2">Cognizant Intern</p>
              <p className="text-xs text-gray-500">2020</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 text-center shadow-md"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Full-Stack Development</h4>
              <p className="text-gray-600 text-sm mb-2">Mindtree Intern</p>
              <p className="text-xs text-gray-500">2021</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-6 text-center shadow-md"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Cloud-Native Solutions</h4>
              <p className="text-gray-600 text-sm mb-2">ADP Developer</p>
              <p className="text-xs text-gray-500">2021-2023</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 