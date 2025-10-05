/* eslint-disable react/react-in-jsx-scope */
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaTwitter, FaReddit } from "react-icons/fa"
import personal from '../data/personal.json'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Links() {
  return (
    <motion.section id="links" className="section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
      <h2 className="section-title">Links</h2>
      <motion.div className="mt-6" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="glass p-6 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:ring-1 hover:ring-white/10">
          {/* Links Header */}
          <div className="flex flex-col mb-6">
            <h3 className="text-xl font-semibold text-white mb-1">Social & Professional Links</h3>
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium text-neutral-300">@ Connect With Me</span>
              <span className="text-sm text-neutral-400 bg-white/5 border border-white/10 px-2 py-1 rounded-full">
                Social
              </span>
            </div>
          </div>
          
          {/* Links Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: 'GitHub',
                url: personal.links.github,
                icon: <FaGithub className="text-2xl" />,
                description: 'View my code repositories and projects',
                color: 'from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700',
                textColor: 'text-gray-700 dark:text-gray-200',
                borderColor: 'border-gray-200 dark:border-gray-600'
              },
              {
                name: 'LinkedIn',
                url: personal.links.linkedin,
                icon: <FaLinkedin className="text-2xl" />,
                description: 'Connect with me professionally',
                color: 'from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-700',
                textColor: 'text-blue-700 dark:text-blue-200',
                borderColor: 'border-blue-200 dark:border-blue-600'
              },
              {
                name: 'Twitter',
                url: personal.links.twitter,
                icon: <FaTwitter className="text-2xl" />,
                description: 'Follow me for updates and thoughts',
                color: 'from-sky-100 to-sky-200 dark:from-sky-800 dark:to-sky-700',
                textColor: 'text-sky-700 dark:text-sky-200',
                borderColor: 'border-sky-200 dark:border-sky-600'
              },
              {
                name: 'Reddit',
                url: personal.links.reddit,
                icon: <FaReddit className="text-2xl" />,
                description: 'Join discussions and communities',
                color: 'from-orange-100 to-orange-200 dark:from-orange-800 dark:to-orange-700',
                textColor: 'text-orange-700 dark:text-orange-200',
                borderColor: 'border-orange-200 dark:border-orange-600'
              }
            ].filter(link => link.url).map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="group block p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${link.color} ${link.textColor}`}>
                    {link.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {link.name}
                    </h4>
                    <p className="text-xs text-neutral-400">
                      {link.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-500 truncate flex-1 mr-2">
                    {link.url}
                  </span>
                  <span className="text-xs text-blue-400 group-hover:text-blue-300 transition-colors">
                    Visit →
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
          
          {/* Additional Info */}
          <div className="mt-6 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1 h-4 bg-green-400 rounded-full"></span>
              <h4 className="text-sm font-semibold text-white">Quick Connect</h4>
            </div>
            <p className="text-sm text-neutral-300">
              Feel free to reach out through any of these platforms. I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
} 