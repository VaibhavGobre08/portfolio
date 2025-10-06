/* eslint-disable react/react-in-jsx-scope */
import { motion } from 'framer-motion'
import certifications from '../data/certifications.json'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
}

export default function Certifications() {
  return (
    <motion.section id="certifications" className="section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
      <h2 className="section-title">Certifications</h2>
      <motion.ul className="mt-6 grid gap-6 md:grid-cols-2" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {(certifications as any[]).map((c, idx) => (
          <motion.li key={idx} className="glass p-6 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:ring-1 hover:ring-white/10" variants={fadeUp}>
            {/* Certification Title and Issuer Header */}
            <div className="flex flex-col mb-4">
              <h3 className="text-xl font-semibold text-white mb-1">{c.title}</h3>
              <div className="flex items-center gap-2">
                <span className="text-lg font-medium text-neutral-300">@ {c.issuer}</span>
                <span className="text-sm text-neutral-400 bg-white/5 border border-white/10 px-2 py-1 rounded-full">
                  {c.year}
                </span>
              </div>
            </div>
            
            {/* Certification Year */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <p className="text-sm text-neutral-400">
                Certified in {c.year}
              </p>
            </div>
            
            {/* Certification Details */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                <span className="w-1 h-4 bg-purple-400 rounded-full mr-2"></span>
                Certification Details
              </h4>
              <div className="space-y-2">
                <div className="text-sm text-neutral-300 flex items-start">
                  <span className="text-purple-400 mr-3 mt-1 text-xs">▶</span>
                  Industry-recognized certification from {c.issuer}
                </div>
                <div className="text-sm text-neutral-300 flex items-start">
                  <span className="text-purple-400 mr-3 mt-1 text-xs">▶</span>
                  Validates expertise in {c.title.includes('AWS') ? 'Cloud Computing' : 'Web Development'}
                </div>
              </div>
            </div>
            
            {/* Certification Type and Link */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                <span className="w-1 h-4 bg-blue-400 rounded-full mr-2"></span>
                Verification
              </h4>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-800 dark:to-pink-800 text-purple-700 dark:text-purple-200 font-medium border border-purple-200 dark:border-purple-600">
                  {c.title.includes('AWS') ? 'System Design' : 'System Design'}
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-800 dark:to-cyan-800 text-blue-700 dark:text-blue-200 font-medium border border-blue-200 dark:border-blue-600">
                  Professional
                </span>
              </div>
              <div>
                <span className="mr-2">🔗</span>
                <a className="inline-flex items-center text-blue-400 hover:text-blue-300 underline transition-colors" href={c.link} target="_blank" rel="noreferrer">
                  View Certificate
                </a>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  )
} 