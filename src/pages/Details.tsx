/* eslint-disable react/react-in-jsx-scope */
import { motion } from 'framer-motion'
import personal from '../data/personal.json'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Details() {
  return (
    <motion.section id="details" className="section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
      <h2 className="section-title">Personal Details</h2>
      <motion.div className="mt-6" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="glass p-6 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:ring-1 hover:ring-white/10">
          {/* Personal Details Header */}
          <div className="flex flex-col mb-6">
            <h3 className="text-xl font-semibold text-white mb-1">Contact Information</h3>
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium text-neutral-300">@ Personal Details</span>
              <span className="text-sm text-neutral-400 bg-white/5 border border-white/10 px-2 py-1 rounded-full">
                Contact
              </span>
            </div>
          </div>
          
          {/* Details List */}
          <div className="space-y-4">
            {[
              { label: 'Full Name', value: personal.name, icon: '👤' },
              { label: 'Current Company', value: personal.current_company, icon: '💼' },
              { label: 'Role', value: personal.role, icon: '💼' },
              { label: 'Email', value: personal.email, icon: '📧' },
              { label: 'Phone', value: personal.phone, icon: '📱' },
              { label: 'Address', value: personal.address, icon: '📍' },
              { label: 'Gender', value: personal.gender, icon: '⚧' },
            ].map((detail, idx) => (
              <motion.div 
                key={detail.label} 
                className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <span className="text-2xl">{detail.icon}</span>
                <div className="flex-1">
                  <div className="text-sm text-neutral-400 font-medium">{detail.label}</div>
                  <div className="text-white font-semibold">{detail.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
} 