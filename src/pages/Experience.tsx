/* eslint-disable react/react-in-jsx-scope */
import data from "../data/experience.json"

type ExperienceItem = {
  company: string
  role: string
  start: string
  end: string
  location: string
  summary: string
  highlights: string[]
  tech: string[]
}

export default function Experience() {
  const items = data as ExperienceItem[]
  
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold ms-12 mb-16 text-left bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Professional Experience
      </h2>
      
      {/* Timeline Container */}
      <div className="relative">
        {/* Central Timeline Bar - Increased thickness */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"></div>
        
        {/* Timeline Items */}
        <div className="space-y-20">
          {items.map((item, idx) => {
            const isLeft = idx % 2 === 0
            
            return (
              <div key={idx} className={`relative flex items-center min-h-[200px] ${isLeft ? "justify-start" : "justify-end"}`}>
                {/* Timeline Circle with dark theme styling */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className="relative">
                    {/* Outer circle - dark themed */}
                    {/* <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-white/10 shadow-xl animate-pulse">
                        <span className="text-xs font-semibold text-neutral-300">{item.start.split('-')[0]}</span>
                    </div> */}
                    {/* Inner dot - dark themed - properly sized and centered */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white/30 rounded-full"></div>
                    {/* Date badge - showing only year */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white/5 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full shadow-lg">
                      <span className="text-xs font-semibold text-neutral-300">{item.start.split('-')[0]}</span>
                    </div>
                  </div>
                </div>
                
                {/* Experience Card with reduced gap and proper padding */}
                <div className={`w-5/12 ${isLeft ? "pr-1 pl-12" : "pl-1 pr-12"}`}>
                  <div className="relative group">
                    {/* Connecting line from timeline bar to card - properly positioned */}
                    <div className={`absolute top-3 ${isLeft ? "right-0" : "left-0"} w-12 h-1 bg-gradient-to-r ${isLeft ? "from-blue-400 to-white/40" : "from-white/40 to-blue-400"} shadow-sm`}></div>
                    
                    {/* Card Content styled like project cards */}
                    <div className="glass p-5 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:ring-1 hover:ring-white/10">
                      {/* Company and Role Header */}
                      <div className="flex flex-col mb-4">
                        <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-medium text-neutral-300">@ {item.company}</span>
                          <span className="text-sm text-neutral-400 bg-white/5 border border-white/10 px-2 py-1 rounded-full">
                            {item.location}
                          </span>
                        </div>
                      </div>
                      
                      {/* Duration */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <p className="text-sm text-neutral-400">
                          {item.start} – {item.end}
                        </p>
                      </div>
                      
                      {/* Summary */}
                      <p className="text-sm text-neutral-300 mb-4">{item.summary}</p>
                      
                      {/* Highlights */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {item.highlights.map((highlight, i) => (
                            <li key={i} className="text-sm text-neutral-300 flex items-start">
                              <span className="text-blue-400 mr-3 mt-1 text-xs">▶</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Tech Stack */}
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.tech.map((tech) => (
                            <span 
                              key={tech} 
                              className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-neutral-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Timeline End Indicator - dark themed circle */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 z-20">
          <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-4 border-white/10 shadow-lg"></div>
        </div>
      </div>
    </section>
  )
}