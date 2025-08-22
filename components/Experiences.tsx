'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { experiences } from '../data/experiences'

function Expandable({ title, preview, children }: { title: string; preview: React.ReactNode; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 mb-6 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        <button
          onClick={() => setOpen(!open)}
          className="text-sm px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 text-gray-700 dark:text-gray-300"
          aria-expanded={open}
        >
          {open ? "Hide details" : "Show details"}
        </button>
      </div>

      <div className="mt-4 text-gray-700 dark:text-gray-300">
        {preview}
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200"
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  )
}

export default function Experiences() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey in software development, from internships to full-time roles, 
            focusing on backend systems, cloud infrastructure, and enterprise applications.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Expandable
            title="ADP — Software Developer (Hyderabad, India)"
            preview={
              <ul className="list-disc pl-5 space-y-1">
                <li>Spring Boot microservices for payroll and wage-garnishment</li>
                <li>Kafka migration on Kubernetes; MongoDB optimization</li>
                <li>RBAC and encryption aligned with SOC 2/GDPR</li>
              </ul>
            }
          >
            <ul className="list-disc pl-5 space-y-2">
              <li>Designed REST APIs for wage-garnishment workflows and internal services using Spring Boot; documented with Swagger and validated via Postman collections.</li>
              <li>Migrated sync MuleSoft integrations to Kafka topics/consumers, decoupling services and improving throughput; tuned Kafka clustering for resilience.</li>
              <li>Integrated Workday via SOAP for lien Create/Update/Recall; orchestrated hybrid flows using Workday responses plus internal REST calls.</li>
              <li>Modeled MongoDB collections (e.g., Employee, Organization Info, Payee Info, Student Info) and added indexes for read-heavy endpoints.</li>
              <li>Implemented schedulers for batch payroll jobs; introduced Redis caching where appropriate to reduce hot-path reads.</li>
              <li>Applied role-based access controls and field-level protection (including SSN encryption) aligned with SOC 2/GDPR practices.</li>
              <li>Deployed services to Kubernetes; used Jenkins and Docker for repeatable builds and faster rollouts.</li>
            </ul>
          </Expandable>

          <Expandable
            title="Mindtree — Full-Stack Developer Intern (Hyderabad, India)"
            preview={
              <ul className="list-disc pl-5 space-y-1">
                <li>Spring Boot performance tuning with MySQL/Redis</li>
                <li>React/Angular dashboards for internal users</li>
                <li>JUnit coverage and Dockerized dev/test</li>
              </ul>
            }
          >
            <ul className="list-disc pl-5 space-y-2">
              <li>Profiled slow queries and added indexes/hints; introduced Redis caching for frequent lookups to cut response time.</li>
              <li>Built responsive dashboards (React/Angular) to surface KPIs and reduce manual reporting.</li>
              <li>Wrote comprehensive JUnit tests (unit + integration) to stabilize releases and catch regressions early.</li>
              <li>Containerized services with Docker for consistent dev/test environments.</li>
            </ul>
          </Expandable>

          <Expandable
            title="Cognizant — SAP BODS Intern (Hyderabad, India)"
            preview={
              <ul className="list-disc pl-5 space-y-1">
                <li>ETL pipelines for 1TB+ migrations</li>
                <li>Automated cleansing/validation</li>
                <li>SQL and stored procedure tuning</li>
              </ul>
            }
          >
            <ul className="list-disc pl-5 space-y-2">
              <li>Authored SAP BODS jobs for large-scale extract/transform/load; parameterized for reusability across environments.</li>
              <li>Automated data quality rules and validations to raise confidence in downstream systems.</li>
              <li>Optimized stored procedures and batch operations to shorten nightly ETL windows.</li>
            </ul>
          </Expandable>
        </div>
      </div>
    </section>
  )
}

