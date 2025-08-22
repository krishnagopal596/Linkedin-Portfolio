import type { Project } from '../types/portfolio'

// Projects organized by complexity (most → least complex)
export const projects: Project[] = [
  // 1. Most Complex - Real-Time Motion Retargeting
  {
    title: 'Real-Time Motion Retargeting for 14-DoF Humanoid',
    description:
      'Maps 3D upper-body poses (MediaPipe, OpenCV) to a Unitree G1 via an analytical inverse-kinematics solver for shoulder/elbow/wrist. Added smoothing and velocity limits for stable jabs/blocks, plus live 3D debugging (Matplotlib, Pygame) and lightweight action classification (Scikit-learn).',
    technologies: [
      'Python',
      'OpenCV',
      'MediaPipe',
      'Analytical Inverse Kinematics',
      'Unitree G1',
      'Matplotlib',
      'Pygame',
      'Scikit-learn',
    ],
    github: 'https://github.com/krishnagopal596/Real-Steel-Humanoid-Robot',
    featured: true,
    stats: { stars: 28, forks: 8, views: 850 },
  },

  // 2. Cloud-Native Enterprise Authentication
  {
    title: 'Cloud-Native Enterprise Authentication Service',
    description:
      'Spring Boot + PostgreSQL service for registration/login and role-based access with Spring Security/JWT. Designed as a modular microservice, containerized and deployable on Kubernetes for straightforward scaling and maintenance.',
    technologies: [
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'Spring Security',
      'JWT',
      'Docker',
      'Kubernetes',
      'Microservices',
    ],
    github: 'https://github.com/krishnagopal596/Cloud-Native-Enterprise-App',
    featured: true,
    stats: { stars: 35, forks: 12, views: 1200 },
  },

  // 3. Hospital Management System
  {
    title: 'Hospital Management System & Employee Portal',
    description:
      'Spring Boot services tuned with MySQL and Redis caching; React/Angular dashboards reduced manual workflows and improved stakeholder visibility. Emphasis on clean API design and reliable data flows.',
    technologies: [
      'Spring Boot',
      'MySQL',
      'Redis',
      'React',
      'Angular',
      'REST APIs',
      'Healthcare Management',
    ],
    github: 'https://github.com/krishnagopal596/HMS-Spring',
    featured: true,
    stats: { stars: 31, forks: 9, views: 1100 },
    private: true,
  },

  // 4. Interactive Portfolio Analytics Dashboard
  {
    title: 'Interactive Portfolio Analytics Dashboard',
    description:
      'React SPA that streams real-time data (WebSocket), manages state with Redux, and renders readable charts (Chart.js). Bundle split and lazy loading to keep interactions snappy.',
    technologies: [
      'React',
      'WebSocket',
      'Redux',
      'Chart.js',
      'Bundle Splitting',
      'Lazy Loading',
      'Real-time Data',
    ],
    github: 'https://github.com/krishnagopal596/linkedin-portfolio',
    live: 'https://krishna-portfolio.vercel.app',
    featured: true,
    stats: { stars: 15, forks: 3, views: 450 },
  },

  // 5. Augmented Reality for E-Learning
  {
    title: 'Augmented Entities for E-Learning (Web AR)',
    description:
      'Browser-based AR that places glTF models into real scenes using React + Three.js/WebGL/WebXR. Includes annotation, simple interactions, and asset optimizations for smooth classroom use.',
    technologies: [
      'React',
      'Three.js',
      'WebGL',
      'WebXR',
      'glTF',
      'Augmented Reality',
      'E-Learning',
    ],
    github: 'https://github.com/krishnagopal596/Augmented-Reality',
    featured: false,
    stats: { stars: 18, forks: 4, views: 520 },
  },

  // 6. ROS2 TurtleBot3 Simulation
  {
    title: 'ROS2 TurtleBot3 Simulation',
    description:
      'Dockerized ROS 2 workspace to reproduce navigation/control experiments without hardware, useful for quick iteration and demos.',
    technologies: [
      'ROS2',
      'Docker',
      'TurtleBot3',
      'Navigation',
      'Control Systems',
      'Simulation',
    ],
    github: 'https://github.com/krishnagopal596/ros2-turtlebot3-sim',
    featured: false,
    stats: { stars: 12, forks: 2, views: 380 },
  },

  // 7. AWS User Interface
  {
    title: 'AWS User Interface',
    description:
      'React front end with a Python backend to list and trigger common EC2/S3/Lambda operations, simplifying day-to-day cloud tasks.',
    technologies: [
      'React',
      'Python',
      'AWS SDK',
      'EC2',
      'S3',
      'Lambda',
      'REST API',
    ],
    github: 'https://github.com/krishnagopal596/AWS-User-Interface',
    featured: false,
    stats: { stars: 38, forks: 15, views: 1400 },
  },

  // 8. Employee Certification UI
  {
    title: 'Employee-Certification-UI',
    description:
      'Front-end for an internal certification portal with status tracking and responsive layouts for different roles.',
    technologies: [
      'React',
      'JavaScript',
      'CSS',
      'Responsive Design',
      'Admin Dashboard',
      'Status Tracking',
    ],
    github: 'https://github.com/krishnagopal596/Employee-certification-ui',
    featured: false,
    stats: { stars: 22, forks: 5, views: 650 },
    private: true,
  },

  // 10. RFID Encryption
  {
    title: 'RFID Encryption',
    description:
      'Prototype of a secure RFID access workflow with encrypted tag data and periodic key rotation to protect credentials at rest and in transit.',
    technologies: [
      'Arduino',
      'AES-128',
      'RFID-RC522',
      'MySQL',
      'C++',
      'Python',
      'Cryptography',
      'Key Rotation',
    ],
    github: 'https://github.com/krishnagopal596/RFID-Encryption',
    featured: false,
    stats: { stars: 52, forks: 25, views: 2800 },
  },

  // 11. Secure Hash Algorithms Suite
  {
    title: 'Secure Hash Algorithms Suite',
    description:
      'Java/Python utilities combining SHA-256 (integrity), RSA (key exchange/signatures), and AES (symmetric encryption) with examples and tests.',
    technologies: [
      'Java',
      'Python',
      'SHA-256',
      'RSA',
      'AES',
      'Cryptography',
      'Key Generation',
      'Integrity Checks',
    ],
    github: 'https://github.com/krishnagopal596/Crypto-Hash',
    featured: false,
    publication: 'IEEE Publication',
    stats: { stars: 45, forks: 22, views: 2100 },
  },

  // 12. URL Slicer (Least Complex)
  {
    title: 'URL Slicer',
    description:
      'Tiny utility that breaks URLs into scheme/host/path/query components for debugging and preprocessing.',
    technologies: [
      'Python',
      'URL Parsing',
      'String Processing',
      'Debugging Tools',
    ],
    github: 'https://github.com/krishnagopal596/urlslicer',
    featured: false,
    stats: { stars: 8, forks: 2, views: 200 },
  },
]

