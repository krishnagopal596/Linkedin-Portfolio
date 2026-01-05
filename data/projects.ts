import type { Project } from '../types/portfolio'

// Projects organized by complexity (most → least complex)
export const projects: Project[] = [
  // 1. Most Complex - Real-Time Motion Retargeting
  {
    title: 'Real-Time Motion Retargeting for 14-DoF Humanoid',
    description:
      'Real-time human pose mapping system that translates 3D upper-body movements to robot control signals using inverse kinematics.',
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
  },

  // 2. Cloud-Native Enterprise Authentication
  {
    title: 'Cloud-Native Enterprise Authentication Service',
    description:
      'Scalable authentication microservice with JWT-based access control, containerized for Kubernetes deployment.',
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
  },

  // 3. Hospital Management System
  {
    title: 'Hospital Management System & Employee Portal',
    description:
      'Full-stack healthcare management platform with real-time dashboards and automated workflow processing.',
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
    private: true,
  },

  // 4. Interactive Portfolio Analytics Dashboard
  {
    title: 'Interactive Portfolio Analytics Dashboard',
    description:
      'Real-time analytics dashboard with WebSocket streaming and interactive data visualization.',
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
  },

  // 5. Augmented Reality for E-Learning
  {
    title: 'Augmented Entities for E-Learning (Web AR)',
    description:
      'Browser-based AR platform for interactive 3D learning experiences using WebXR.',
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
  },

  // 6. ROS2 TurtleBot3 Simulation
  {
    title: 'ROS2 TurtleBot3 Simulation',
    description:
      'Dockerized ROS 2 workspace for robotics simulation and navigation testing.',
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
  },

  // 7. AWS User Interface
  {
    title: 'AWS User Interface',
    description:
      'Web interface for managing AWS resources (EC2, S3, Lambda) with simplified operations.',
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
  },

  // 8. Employee Certification UI
  {
    title: 'Employee-Certification-UI',
    description:
      'Internal certification portal with role-based access and status tracking.',
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
    private: true,
  },

  // 10. RFID Encryption
  {
    title: 'RFID Encryption',
    description:
      'Secure RFID access system with encrypted credentials and automated key rotation.',
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
  },

  // 11. Secure Hash Algorithms Suite
  {
    title: 'Secure Hash Algorithms Suite',
    description:
      'Cryptographic utilities combining SHA-256, RSA, and AES for secure data transmission.',
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
  },

  // 12. URL Slicer (Least Complex)
  {
    title: 'URL Slicer',
    description:
      'Lightweight URL parsing utility for debugging and preprocessing workflows.',
    technologies: [
      'Python',
      'URL Parsing',
      'String Processing',
      'Debugging Tools',
    ],
    github: 'https://github.com/krishnagopal596/urlslicer',
    featured: false,
  },
]

