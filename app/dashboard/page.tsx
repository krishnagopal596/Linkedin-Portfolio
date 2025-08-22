'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, BarChart3, Users, Code, Star, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link 
                href="/"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Portfolio</span>
              </Link>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Portfolio Analytics Dashboard</h1>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Projects</p>
                  <p className="text-3xl font-bold text-gray-900">8</p>
                </div>
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">GitHub Stars</p>
                  <p className="text-3xl font-bold text-gray-900">285</p>
                </div>
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Repository Forks</p>
                  <p className="text-3xl font-bold text-gray-900">104</p>
                </div>
                <div className="p-3 bg-green-100 rounded-lg">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Views</p>
                  <p className="text-3xl font-bold text-gray-900">9.2K</p>
                </div>
                <div className="p-3 bg-purple-100 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Project Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Project Categories</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Robotics & AI</span>
                  <span className="font-semibold text-gray-900">2 projects</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Security & Cryptography</span>
                  <span className="font-semibold text-gray-900">2 projects</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Cloud & DevOps</span>
                  <span className="font-semibold text-gray-900">1 project</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Full Stack Java</span>
                  <span className="font-semibold text-gray-900">2 projects</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Framework & Modern Web</span>
                  <span className="font-semibold text-gray-900">2 projects</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Top Technologies</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Java & Spring Boot</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Python</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">React & Next.js</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">AWS & Cloud</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Cryptography</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Added RFID Encryption Security Project</p>
                  <p className="text-sm text-gray-600">New security project with AES-128 encryption and Arduino integration</p>
                </div>
                <span className="text-sm text-gray-500">2 days ago</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Updated AWS Deployment Interface</p>
                  <p className="text-sm text-gray-600">Enhanced GUI application for simplified AWS resource management</p>
                </div>
                <span className="text-sm text-gray-500">1 week ago</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Portfolio Website Redesign</p>
                  <p className="text-sm text-gray-600">Complete overhaul with Next.js 14 and improved project organization</p>
                </div>
                <span className="text-sm text-gray-500">2 weeks ago</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
