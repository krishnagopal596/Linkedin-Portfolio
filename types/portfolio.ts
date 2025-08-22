export type ProjectStats = {
  stars: number
  forks: number
  views: number
}

export type Project = {
  title: string
  description: string
  image?: string
  technologies: string[]
  github?: string
  live?: string
  featured?: boolean
  private?: boolean
  publication?: string
  stats?: ProjectStats
}

export type Experience = {
  company: string
  role: string
  period: string
  location: string
  description: string
  technologies: string[]
  highlights?: string[]
}

