# Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Building and testing enterprise applications using **Selenium**, **Playwright**, **Spring Boot**, **Angular**, **React**, **Java**, **TypeScript**, and **API testing** tools across insurance, payroll, and ERP domains.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Modern UI**: Clean, professional design with smooth animations
- **GitHub Integration**: Real-time GitHub stats and repository information
- **Interactive Components**: Dynamic sections for projects, skills, and experience
- **Resume Integration**: Professional resume available in markdown format
- **Performance Optimized**: Built with Next.js for optimal performance

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd Linkedin-Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Dashboard.tsx
│   ├── Experiences.tsx
│   ├── Hero.tsx
│   ├── LinkedInCoverGenerator.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── ThemeToggle.tsx
├── contexts/              # React contexts
│   └── ThemeContext.tsx
├── data/                  # Static data
│   ├── experiences.ts
│   └── projects.ts
├── types/                 # TypeScript type definitions
│   └── portfolio.ts
├── java-fullstack-developer-resume.md  # Professional resume
└── public/               # Static assets
```

## Customization

### Personal Information
Update your personal information in the respective component files:
- `components/Hero.tsx` - Main hero section
- `components/About.tsx` - About section
- `components/Contact.tsx` - Contact information

### Projects and Experience
Modify the data files:
- `data/projects.ts` - Your projects
- `data/experiences.ts` - Your work experience

### Resume
The professional resume is available in markdown format:
- `java-fullstack-developer-resume.md` - Professional resume

### Styling
The project uses Tailwind CSS. You can customize:
- Colors in `tailwind.config.ts`
- Global styles in `app/globals.css`
- Component-specific styles in individual component files

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## About

**Krishna Madhavaram**  
Building and testing enterprise applications using **Selenium**, **Playwright**, **Spring Boot**, **Angular**, **React**, **Java**, **TypeScript**, and **API testing** tools across insurance, payroll, and ERP domains.

**Education**: Master of Science in Computer Science, Iowa State University (GPA: 3.7/4.0)

## Contact

- **Email**: [krishnagopal596@gmail.com](mailto:krishnagopal596@gmail.com)
- **Phone**: +1 515 916 3183
- **Portfolio**: [Live Demo](https://krishna-portfolio.vercel.app)
- **GitHub**: [krishnagopal596](https://github.com/krishnagopal596)
- **LinkedIn**: [Connect with me](https://www.linkedin.com/in/krishna-madhavaram)

For questions or support, please contact [krishnagopal596@gmail.com](mailto:krishnagopal596@gmail.com).