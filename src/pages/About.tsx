/* eslint-disable react/react-in-jsx-scope */
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function About() {
  return (
    <motion.section
      id="about"
      className="section"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="section-title">About Me</h2>
      <motion.div className="mt-6" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="glass p-6 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:ring-1 hover:ring-white/10">
          {/* About Header */}
          <div className="flex flex-col mb-6">
            <h3 className="text-xl font-semibold text-white mb-1">Professional Summary</h3>
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium text-neutral-300">@ About Me</span>
              <span className="text-sm text-neutral-400 bg-white/5 border border-white/10 px-2 py-1 rounded-full">
                Overview
              </span>
            </div>
          </div>
          
          {/* About Content */}
          <div className="space-y-4">
            <p className="text-neutral-300 leading-relaxed text-justify">
            Dynamic software engineer with 1.5+ years of expertise in backend systems, microservices, and end-to-end solution 
            delivery. Proficient in Java, Spring Boot, Python, Flask, and SAP Hybris Commerce, with a strong record of 
            architecting resilient APIs, deploying scalable microservices, and seamlessly integrating AI/ML models into live 
            environments. Adept at elevating platform performance in e-commerce and healthcare sectors through innovative 
            problem-solving and cross-functional collaboration.
            </p>
            
            {/* Key Highlights */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1 h-4 bg-blue-400 rounded-full"></span>
                <h4 className="text-sm font-semibold text-white">Key Strengths</h4>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  'Back-End Development',
                  'API Integration',
                  'Database Optimization',
                  'Full-Stack Solutions',
                  'Clean Code Practices',
                  'Team Collaboration'
                ].map((strength) => (
                  <div key={strength} className="flex items-center gap-2 text-sm text-neutral-300">
                    <span className="text-blue-400 text-xs">▶</span>
                    {strength}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}