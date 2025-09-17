import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../contexts/ThemeContext'
import ThemeToggle from '../components/ThemeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Krishna Gopal Madhavaram - Full-Stack Java Developer',
  description: 'Experienced Full-stack Java Developer with 4+ years of hands-on experience in enterprise microservices, Spring Boot, Angular, React, and cloud-native deployments.',
  keywords: ['Full-Stack Java Developer', 'Spring Boot', 'Angular', 'React', 'Microservices', 'Cloud Native', 'Enterprise Development', 'Java', 'TypeScript'],
  authors: [{ name: 'Krishna Gopal Madhavaram' }],
  openGraph: {
    title: 'Krishna Gopal Madhavaram - Full-Stack Java Developer',
    description: 'Experienced Full-stack Java Developer with 4+ years of hands-on experience in enterprise microservices and cloud-native deployments.',
    type: 'website',
    url: 'https://krishna-portfolio.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krishna Gopal Madhavaram - Full-Stack Java Developer',
    description: 'Experienced Full-stack Java Developer with 4+ years of hands-on experience in enterprise microservices and cloud-native deployments.',
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
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 