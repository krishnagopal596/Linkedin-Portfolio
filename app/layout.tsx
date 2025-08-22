import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Krishna Gopal Madhavaram - Software Engineer',
  description: 'Software Engineer & Computer Science Graduate Student at Iowa State University. Specializing in backend systems, cloud infrastructure, and robotics applications.',
  keywords: 'Software Engineer, Computer Science, Iowa State University, Backend Development, Cloud Infrastructure, Robotics',
  authors: [{ name: 'Krishna Gopal Madhavaram' }],
  openGraph: {
    title: 'Krishna Gopal Madhavaram - Software Engineer',
    description: 'Software Engineer & Computer Science Graduate Student at Iowa State University',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 