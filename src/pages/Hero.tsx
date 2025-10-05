/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'
import { motion } from 'framer-motion'
import personal from '../data/personal.json'
import ContactModal from './ContactModal'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
}

export default function Hero() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <motion.section id="home" className="section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] items-center gap-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-sm text-neutral-400"
              variants={fadeUp}
              transition={{ delay: 0.1 }}
            >
              {personal.role}
            </motion.p>
            <motion.h1 
              className="mt-2 text-4xl md:text-6xl font-extrabold tracking-tight"
              variants={fadeUp}
              transition={{ delay: 0.2 }}
            >
              {personal.name}
            </motion.h1>
            <motion.p 
              className="mt-4 text-neutral-300 max-w-xl"
              variants={fadeUp}
              transition={{ delay: 0.3 }}
            >
              {personal.summary}
            </motion.p>
            <motion.div 
              className="mt-6 flex gap-3"
              variants={fadeUp}
              transition={{ delay: 0.4 }}
            >
              <motion.a 
                href="#projects" 
                className="px-4 py-2 rounded-md btn-accent transition-transform hover:scale-[1.02]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.button 
                onClick={() => setIsContactOpen(true)}
                className="px-4 py-2 rounded-md btn-outline transition-colors hover:bg-white/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in touch
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="flex items-center justify-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.div 
              className="glass p-2 rounded-full transition-transform hover:scale-105"
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.5 }
              }}
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              {personal.avatar ? (
                <img 
                  src={personal.avatar} 
                  alt={`${personal.name} avatar`} 
                  className="h-40 w-40 md:h-56 md:w-56 rounded-full object-cover"
                />
              ) : (
                <div className="h-40 w-40 md:h-56 md:w-56 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,.12),transparent)]" />
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </>
  )
}