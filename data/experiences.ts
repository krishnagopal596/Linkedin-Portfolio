import type { Experience } from '../types/portfolio'

export const experiences: Experience[] = [
  {
    company: 'State Farm Insurance',
    role: 'Java Software Engineer | Full Stack',
    period: 'June 2024 - Present',
    location: 'Bloomington, Illinois',
    description:
      'Analyzed system requirements and collaborated with development teams to design scalable software workflows and backend services using Java 21 and Spring Boot, reducing manual workflow effort by 65%.',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'Spring MVC', 'Spring Batch', 'React', 'Angular', 'TypeScript', 'Azure AKS', 'Docker', 'WebSocket', 'OAuth2', 'JWT', 'Node.js'],
    highlights: [
      'Engineered high performance backend services with concurrent processing using thread pools and CompletableFuture, improving throughput for large scale business operations.',
      'Designed event driven microservices using Apache Kafka with optimized partitioning and consumer groups, reducing system response latency by 40%.',
      'Built scalable batch processing pipelines using Spring Batch and optimized database architecture through SQL tuning and indexing, reducing query execution time by 60%.',
      'Troubleshot complex production bugs through log analysis, debugging, and application testing, while validating application functionality and security using JUnit, Mockito, and Spring Security, reducing production defects by 80%.',
    ],
  },
    {
    company: 'Iowa State University',
    role: 'Graduate Research Assistant',
    period: 'Aug 2023 - Jun 2024',
    location: 'Ames, Iowa, United States',
    description:
      'Developed real-time motion tracking algorithms using Python, MediaPipe, and OpenCV to convert human motion into robotic control signals for a humanoid robot.',
    technologies: ['Python', 'MediaPipe', 'OpenCV', 'MuJoCo'],
    highlights: [
      'Developed real time motion tracking algorithms using Python, MediaPipe, and OpenCV to convert human motion into robotic control signals for a humanoid robot.',
      'Implemented inverse kinematics and validated functionality using MuJoCo, achieving 95% pose accuracy while reducing system latency by 60%.',
    ],
  },
  {
    company: 'ADP',
    role: 'Java Developer',
    period: 'June 2022 - Aug 2023',
    location: 'Hyderabad, India',
    description:
      'Developed enterprise microservices using Spring Boot integrating with ERP systems to process business data and expose scalable backend services.',
    technologies: ['Java', 'Spring Boot', 'Spring Batch', 'Spring Cloud', 'React', 'TypeScript', 'Confluent Kafka', 'MongoDB', 'Redis', 'OAuth2', 'JWT', 'Node.js', 'Docker', 'Kubernetes', 'Jenkins'],
    highlights: [
      'Built secure REST APIs implementing OAuth 2.0 and JWT authentication to enable secure client data ingestion.',
      'Implemented event driven architecture using Confluent Kafka enabling asynchronous communication across distributed services.',
      'Integrated MongoDB for flexible data storage and Redis caching to improve response time for frequently accessed data.',
      'Implemented API rate limiting using the Token Bucket algorithm to protect services from excessive requests during peak traffic.',
      'Contributed to automated deployment pipelines using Jenkins and Kubernetes (OpenShift) improving release reliability.',
    ],
  },

  {
    company: 'Cognizant',
    role: 'Java Developer',
    period: 'April 2021 - May 2022',
    location: 'Hyderabad, India',
    description:
      'Participated in the full Software Development Life Cycle (SDLC) including requirement analysis, application design, Java development, testing, debugging, and deployment of enterprise applications.',
    technologies: ['Java', 'Spring Boot', 'Java Servlets', 'Java Beans', 'REST APIs', 'Oracle', 'PostgreSQL'],
    highlights: [
      'Developed clean and scalable backend services using Java, Spring Boot, Java Servlets, and REST APIs supporting high volume enterprise transaction processing.',
      'Built system integrations using REST and SOAP web services, enabling reliable communication between modern applications and legacy platforms.',
      'Improved Oracle and PostgreSQL database performance through query tuning, indexing, and persistence optimization, reducing query latency by 50%.',
    ],
  },
]

