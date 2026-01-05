import type { Experience } from '../types/portfolio'

export const experiences: Experience[] = [
  {
    company: 'State Farm Insurance',
    role: 'Java Full Stack Engineer',
    period: 'June 2024 – Present',
    location: 'Bloomington, IL',
    description:
      'Building GenAI-powered microservices and full-stack applications for insurance claims processing, integrating RAG pipelines and LLM workflows with enterprise systems.',
    technologies: ['Java 21', 'Spring Boot 3.x', 'Spring AI', 'LangChain4j', 'RAG', 'Vector Embeddings', 'Angular 14+', 'React 18', 'TypeScript', 'Apache Kafka', 'MySQL', 'AWS CloudWatch', 'Prometheus', 'Grafana'],
    highlights: [
      'Built LLM-integrated workflow pipelines using Spring AI and LangChain4j, processing 10,000+ claims daily with 95%+ accuracy',
      'Integrated GenAI services into claims workflows via REST APIs and Kafka, ensuring data consistency across 15+ microservices and reducing latency by 40%',
      'Optimized policy data retrieval using MySQL sharding strategies, improving performance by 60% for 500K+ policy records',
      'Enhanced system observability with Prometheus, Grafana, and CloudWatch, achieving 85%+ code coverage and reducing production incidents by 30%',
      'Developed responsive frontend dashboards with Angular and React, implementing real-time status updates and AI-assisted decision support',
    ],
  },
  {
    company: 'ADP',
    role: 'Java Full Stack Developer',
    period: 'June 2022 – August 2023',
    location: 'Hyderabad, India',
    description:
      'Migrated legacy systems to Spring Boot microservices and built event-driven payroll processing platforms serving enterprise clients.',
    technologies: ['Java', 'Spring Boot', 'Spring Batch', 'React', 'TypeScript', 'D3.js', 'Redis', 'Apache Kafka', 'MongoDB', 'Jenkins', 'Kubernetes', 'OAuth2', 'JWT', 'Python'],
    highlights: [
      'Migrated legacy MuleSoft components to Spring Boot microservices, reducing deployment time by 50% and supporting 2M+ payroll transactions monthly',
      'Implemented distributed transaction management across microservices, ensuring 99.9% transaction success rate for 500K+ enterprise users',
      'Optimized payroll reconciliation with Redis caching and Kafka async processing, improving API response times by 55% during peak periods handling 100K+ concurrent requests',
      'Automated manual reconciliation processes using Python scripts, reducing manual effort by 70% and processing 50K+ records daily',
      'Built React-based lien management interfaces, reducing processing time by 45% for 10K+ monthly lien operations',
      'Configured CI/CD pipelines with Jenkins and Kubernetes, reducing production incidents by 35% through automated testing',
    ],
  },
  {
    company: 'LTI Mindtree',
    role: 'Java Full Stack Developer',
    period: 'July 2020 – May 2022',
    location: 'Hyderabad, India',
    description:
      'Developed Spring Boot microservices for insurance policy servicing and billing operations, integrating with legacy mainframe systems.',
    technologies: ['Java', 'Spring Boot', 'Spring Integration', 'Angular', 'Oracle', 'SOAP', 'REST APIs', 'Spring Security', 'JWT', 'Python', 'Shell Scripting'],
    highlights: [
      'Developed Spring Boot microservices for policy servicing and billing, handling 50K+ policy transactions monthly via REST/SOAP APIs',
      'Built integration components using Spring Integration patterns, processing 30K+ messages daily with 99.5% reliability',
      'Optimized Oracle database query performance, reducing execution time by 50% through indexing and result caching',
      'Developed Angular admin dashboards for policy operations, serving 200+ concurrent users with real-time data updates',
      'Automated report generation using Python and Shell scripts, reducing manual work by 60% and generating 5K+ reports monthly',
    ],
  },
]

