'use client'

import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent SSR issues by not rendering until mounted
  if (!mounted) {
    return (
      <div className="fixed top-4 right-4 z-50 p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
    )
  }

  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-200"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? (
          <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
        ) : (
          <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  )
}
