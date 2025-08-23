/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
const repoName = 'Linkedin-Portfolio'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: isGithubActions ? `/${repoName}/` : undefined,
  basePath: isGithubActions ? `/${repoName}` : undefined,
  images: {
    unoptimized: true,
    domains: ['media.licdn.com', 'images.unsplash.com'],
  },
}

module.exports = nextConfig 