/* eslint-disable react/react-in-jsx-scope */
import { motion } from 'framer-motion'
import education from '../data/education.json'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
}

export default function Education() {
  return (
    <motion.section id="education" className="section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
      <h2 className="section-title">Education</h2>
      <motion.div className="mt-6 grid gap-6 md:grid-cols-2" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {(education as any[]).map((e, idx) => (
          <motion.div key={idx} className="glass p-6 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:ring-1 hover:ring-white/10" variants={fadeUp}>
            {/* Degree and School Header */}
            <div className="flex flex-col mb-4">
              <h3 className="text-xl font-semibold text-white mb-1">{e.degree}</h3>
              <div className="flex items-center gap-2">
                <span className="text-lg font-medium text-neutral-300">{e.school}</span>
                <span className="text-sm text-neutral-400 bg-white/5 border border-white/10 px-2 py-1 rounded-full">
                  {e.location}
                </span>
              </div>
            </div>
            
            {/* Duration */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <p className="text-sm text-neutral-400">
                {e.start} – {e.end}
              </p>
            </div>
            
            {/* Education Type Badge */}
            <div className="flex items-center gap-2 mb-4">
              <h4 className="text-sm font-semibold text-white flex items-center">
                <span className="w-1 h-4 bg-blue-400 rounded-full mr-2"></span>
                Education Level
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-800 dark:to-purple-800 text-blue-700 dark:text-blue-200 font-medium border border-blue-200 dark:border-blue-600">
                {e.degree.includes('B.Tech') ? 'Bachelor\'s Degree' : 'High School'}
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-800 dark:to-teal-800 text-green-700 dark:text-green-200 font-medium border border-green-200 dark:border-green-600">
                {e.degree.includes('Information') ? 'Computer Science' : 'General Education'}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
} 