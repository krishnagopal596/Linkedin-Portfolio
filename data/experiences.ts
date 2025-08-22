import type { Experience } from '../types/portfolio'

export const experiences: Experience[] = [
  {
    company: 'ADP',
    role: 'Software Developer',
    period: 'May 2021 – Aug 2023',
    location: 'Hyderabad, India',
    description:
      'Led development of enterprise payroll and wage garnishment systems using Spring Boot microservices. Migrated legacy MuleSoft flows to Kafka-based event-driven architecture, achieving significant performance improvements and scalability.',
    technologies: ['Java', 'Spring Boot', 'MongoDB', 'Kafka', 'Kubernetes', 'Jenkins', 'Docker', 'MuleSoft'],
    highlights: [
      'Redesigned payroll APIs resulting in 40% improved latency and 3x client concurrency',
      'Successfully migrated synchronous MuleSoft flows to Kafka-based microservices',
      'Implemented automated CI/CD pipelines with Jenkins, Docker, and GitHub Actions',
      'Maintained SOC 2 and GDPR compliance throughout development lifecycle',
      'Optimized Kubernetes deployments for better resource utilization and scaling',
    ],
  },
  {
    company: 'Mindtree',
    role: 'Full‑Stack Developer Intern',
    period: 'Jan 2021 – May 2021',
    location: 'Hyderabad, India',
    description:
      'Developed comprehensive hospital and employee management portals with full-stack capabilities. Implemented optimized Spring Boot services with MySQL tuning and Redis caching for improved performance.',
    technologies: ['Spring Boot', 'MySQL', 'Redis', 'Angular', 'React', 'JUnit', 'Docker'],
    highlights: [
      'Built internal dashboards reducing manual reporting by 30%',
      'Achieved 98% test coverage with comprehensive JUnit testing',
      'Implemented Redis caching reducing database load by 50%',
      'Optimized MySQL queries improving response times by 40%',
      'Containerized applications using Docker for consistent deployment',
    ],
  },
  {
    company: 'Cognizant',
    role: 'SAP BODS Intern',
    period: 'Jun 2020 – Dec 2020',
    location: 'Hyderabad, India',
    description:
      'Developed and optimized ETL pipelines for enterprise data migration projects handling over 1TB of data. Implemented automated data cleansing and validation processes to ensure data integrity.',
    technologies: ['SAP BODS', 'SQL', 'ETL', 'Data Migration', 'Stored Procedures', 'Data Quality'],
    highlights: [
      'Accelerated ETL jobs by 40% through query tuning and pipeline optimization',
      'Processed 1TB+ enterprise data with automated cleansing and validation',
      'Improved data integrity across downstream systems by 95%',
      'Developed reusable stored procedures reducing development time by 60%',
      'Implemented data quality checks ensuring 99.9% accuracy in migrations',
    ],
  },
]

