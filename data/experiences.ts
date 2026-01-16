import type { Experience } from '../types/portfolio'

export const experiences: Experience[] = [
  {
    company: 'State Farm Insurance',
    role: 'Software Engineer',
    period: 'June 2024 - Present',
    location: 'Bloomington, Illinois, United States',
    description:
      'Building GenAI-powered microservices and full-stack applications for insurance claims processing, integrating RAG pipelines and LLM workflows with enterprise systems.',
    technologies: ['Java', 'Spring Boot', 'React', 'JUnit', 'Mockito', 'Test-Driven Development'],
    highlights: [
      'Built LLM-integrated workflow pipelines using Spring AI and LangChain4j to transform unstructured claim narratives into structured data for automated routing',
      'Integrated GenAI services into existing claims workflows via REST APIs and Kafka event streams, implementing event-driven architecture to ensure data consistency across microservices',
      'Solved policy data retrieval challenges by implementing MySQL sharding and archiving strategies for RAG context queries, enabling efficient retrieval from large datasets',
      'Enhanced system observability by integrating Prometheus, Grafana, and AWS CloudWatch for monitoring, and improved code quality through Test-Driven Development practices using JUnit, Mockito, and SonarQube',
      'Developed responsive frontend dashboards with Angular and React, implementing real-time status updates and AI-assisted decision support using NgRx/Redux state management',
    ],
  },
  {
    company: 'ADP',
    role: 'Member Technical',
    period: 'Jun 2022 - Aug 2023',
    location: 'Hyderabad, Telangana, India',
    description:
      'Migrated legacy systems to Spring Boot microservices and built event-driven payroll processing platforms serving enterprise clients.',
    technologies: ['Java', 'Spring Boot', 'React', 'Selenium', 'TestNG', 'Automated Testing'],
    highlights: [
      'Migrated legacy MuleSoft components to Spring Boot microservices as part of ERP modernization initiative, improving system maintainability and scalability',
      'Solved distributed transaction management challenges across payroll microservices by implementing transaction coordination patterns to handle concurrent processing and ensure data consistency',
      'Addressed performance bottlenecks in payroll reconciliation by integrating Redis for caching and Apache Kafka for asynchronous processing, enabling efficient handling of peak processing periods',
      'Automated manual reconciliation processes using Python scripts for data validation and matching, eliminating manual effort and preventing processing errors in payroll datasets',
      'Built React-based lien management interfaces with data grids, forms, and filtering capabilities, improving workflow management for HR teams',
      'Configured CI/CD pipelines using Jenkins and Kubernetes for automated deployments, implementing automated testing to improve deployment reliability',
    ],
  },
  {
    company: 'LTI Mindtree',
    role: 'Software Engineer',
    period: 'May 2021 - June 2022',
    location: 'Hyderabad, Telangana, India',
    description:
      'Developed Spring Boot microservices for insurance policy servicing and billing operations, integrating with legacy mainframe systems.',
    technologies: ['Java', 'Spring Boot', 'Angular', 'REST Assured', 'API Testing', 'Postman'],
    highlights: [
      'Developed Spring Boot microservices for policy servicing and billing operations, implementing REST APIs for policy renewal, premium calculation, and payment processing, integrating with legacy mainframe systems via SOAP services',
      'Built integration components using Spring Integration patterns for asynchronous message processing between policy management and billing systems, ensuring data consistency across services',
      'Solved database performance issues by optimizing complex Oracle SQL queries with multi-table joins, creating indexes and applying result caching to improve data retrieval performance',
      'Developed Angular admin dashboards for policy servicing operations including policy search, premium adjustments, and billing reconciliation, implementing real-time data updates using REST APIs',
      'Automated report generation using Python and Shell scripts for policy statements, premium notices, and billing summaries, eliminating manual work for back-office teams',
    ],
  },
]

