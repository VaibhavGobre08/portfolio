/* eslint-disable react/react-in-jsx-scope */
import { motion } from 'framer-motion'
import { FaJava, FaAws, FaPython , FaMicrochip } from "react-icons/fa"
import { SiSpringboot, SiPostgresql, SiMysql } from "react-icons/si"

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Skills() {
  const skills = [
    { name: "Java", icon: <FaJava className="text-red-600" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-700" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
    { name: "SQL", icon: <SiMysql className="text-yellow-600" /> },
    { name: "AWS", icon: <FaAws className="text-orange-400" /> },
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
     { name: "Machine Learning", icon: <FaMicrochip className="text-teal-500" /> }
  ];
  
  return (
    <motion.section id="skills" className="section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
      <h2 className="section-title">Skills & Tech</h2>
      <motion.div className="mt-6" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="glass p-6 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:ring-1 hover:ring-white/10">
          {/* Skills Header */}
          <div className="flex flex-col mb-6">
            <h3 className="text-xl font-semibold text-white mb-1">Technical Skills</h3>
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium text-neutral-300">@ Technologies & Tools</span>
              <span className="text-sm text-neutral-400 bg-white/5 border border-white/10 px-2 py-1 rounded-full">
                Expertise
              </span>
            </div>
          </div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {skills.map((skill, idx) => (
              <motion.div 
                key={skill.name} 
                className="flex flex-col items-center justify-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <div className="text-3xl">{skill.icon}</div>
                <div className="text-sm font-medium text-white text-center">{skill.name}</div>
              </motion.div>
            ))}
          </div>
          
          {/* Skills Summary */}
          <div className="mt-6 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1 h-4 bg-purple-400 rounded-full"></span>
              <h4 className="text-sm font-semibold text-white">Skill Categories</h4>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { category: 'Backend Development', skills: 'Java, Spring Boot, Python' },
                { category: 'Database Management', skills: 'PostgreSQL, SQL, Data Optimization' },
                { category: 'Cloud & DevOps', skills: 'AWS, Cloud Infrastructure, Deployment' }
              ].map((category) => (
                <div key={category.category} className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-sm font-semibold text-white mb-1">{category.category}</div>
                  <div className="text-xs text-neutral-400">{category.skills}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
} 