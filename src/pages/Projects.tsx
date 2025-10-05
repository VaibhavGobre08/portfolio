/* eslint-disable react/react-in-jsx-scope */
import { motion } from 'framer-motion'
import projects from '../data/projects.json'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
}

export default function Projects() {
  return (
    <motion.section id="projects" className="section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
      <h2 className="section-title">Projects</h2>
      <motion.div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {(projects as any[]).map((p) => (
          <motion.article key={p.id} className="glass p-6 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:ring-1 hover:ring-white/10" variants={fadeUp}>
            {/* Project Title and Type Header */}
            <div className="flex flex-col mb-4">
              <h3 className="text-xl font-semibold text-white mb-1">{p.title}</h3>
              <div className="flex items-center gap-2">
                <span className="text-lg font-medium text-neutral-300">@{p.purpose}</span>
                <span className="text-sm text-neutral-400 bg-white/5 border border-white/10 px-2 py-1 rounded-full">
                  {p.id === 'portfolio' ? 'Portfolio' : 'Web App'}
                </span>
              </div>
            </div>
            
            {/* Project Status */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <p className="text-sm text-neutral-400">
                Completed Project
              </p>
            </div>
            
            {/* Project Description */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                <span className="w-1 h-4 bg-blue-400 rounded-full mr-2"></span>
                Project Overview
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed">{p.description}</p>
            </div>
            
            {/* Technologies Used */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                <span className="w-1 h-4 bg-purple-400 rounded-full mr-2"></span>
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag: string) => (
                  <span 
                    key={tag} 
                    className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-800 dark:to-purple-800 text-blue-700 dark:text-blue-200 font-medium border border-blue-200 dark:border-blue-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Project Links */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                <span className="w-1 h-4 bg-green-400 rounded-full mr-2"></span>
                Project Links
              </h4>
              <div className="flex flex-wrap gap-2">
                {p.links.github && (
                  <div>
                    <span className="mr-2">🔗</span>
                    <a className="inline-flex items-center text-blue-400 hover:text-blue-300 underline transition-colors text-sm" href={p.links.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  )
} 