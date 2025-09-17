import type { Experience } from '../types/portfolio'

export const experiences: Experience[] = [
  {
    company: 'State Farm Insurance',
    role: 'Java Full Stack Developer',
    period: 'June 2024 – Present',
    location: 'Bloomington, IL',
    description:
      'Developed enterprise microservices platform for insurance systems using Spring Boot and modern frontend technologies. Implemented cloud-native solutions on Azure with comprehensive testing and monitoring frameworks.',
    technologies: ['Java', 'Spring Boot', 'Angular 14+', 'React 18', 'TypeScript', 'Azure AKS', 'Docker', 'Kubernetes', 'Apache Kafka', 'PostgreSQL', 'AWS CloudWatch', 'Grafana'],
    highlights: [
      'Developed enterprise microservices platform using Spring Boot and Hibernate/JPA with advanced connection pooling',
      'Implemented integration for policy, billing, and claims systems using secure REST/SOAP APIs with SSO and JWT',
      'Built responsive applications with Angular 14+ and React 18 using NgRx and Redux for state management',
      'Implemented cloud-native deployment on Azure AKS with Docker containerization and CI/CD pipelines',
      'Achieved 99.9% uptime through comprehensive observability framework and circuit breaker patterns',
      'Reduced production defects by 85% through automated testing with JUnit, Cypress, and Selenium',
      'Improved page load times by 45% through frontend performance optimization and bundle optimization',
      'Reduced code duplication by 60% through custom Angular directives and React hooks',
    ],
  },
  {
    company: 'ADP',
    role: 'Java Backend Developer',
    period: 'June 2022 – Aug 2023',
    location: 'Hyderabad, India',
    description:
      'Developed Spring Boot microservices for ERP modernization and lien management systems. Implemented event-driven communication patterns using Confluent Kafka and built dynamic React interfaces for HR workflows.',
    technologies: ['Java', 'Spring Boot', 'Confluent Kafka', 'MongoDB', 'Redis', 'React', 'TypeScript', 'D3.js', 'Chart.js', 'Jenkins', 'Kubernetes', 'OAuth2', 'JWT'],
    highlights: [
      'Developed Spring Boot microservices integrating with ERP systems for payroll data processing',
      'Contributed to migration from MuleSoft to Spring Boot microservices, improving maintainability by 30%',
      'Implemented event-driven communication patterns using Confluent Kafka for asynchronous messaging',
      'Built dynamic React interfaces with TypeScript enabling HR teams to manage complex lien workflows',
      'Created real-time dashboards for payroll analytics using D3.js and Chart.js',
      'Reduced processing latency by 30% through Spring Batch optimization and custom schedulers',
      'Enhanced API response times by 40% using MongoDB optimization and Redis caching strategies',
      'Developed comprehensive test automation suites covering unit, integration, and regression testing',
    ],
  },
  {
    company: 'Life Insurance Corporation of India',
    role: 'Java Full Stack Developer',
    period: 'July 2020 – May 2022',
    location: 'Hyderabad, India',
    description:
      'Developed ERP modules for policy and payment processing using Java and Spring Boot. Created Angular-based forms and dashboards with responsive layouts for back-office operations and customer-facing applications.',
    technologies: ['Java', 'Spring Boot', 'Hibernate', 'Angular', 'Bootstrap', 'HTML5', 'CSS3', 'JavaScript', 'Oracle', 'Spring Security', 'JUnit', 'Docker', 'Git'],
    highlights: [
      'Developed ERP modules for policy and payment processing using Java, Spring Boot, and Hibernate',
      'Built RESTful APIs to integrate customer workflows with internal systems',
      'Created Angular-based forms and dashboards with responsive layouts and client-side validation',
      'Developed customer-facing web pages enabling policyholders to view policy information and make payments',
      'Designed Oracle database tables and relationships following established schemas',
      'Implemented Spring Security configurations for user authentication and session management',
      'Worked with Hibernate annotations and JPA mappings for entity relationships and database interactions',
      'Gained experience deploying applications to development environments using Docker containers',
    ],
  },
]

