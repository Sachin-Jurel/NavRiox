import React from 'react'
import { motion } from "framer-motion";


const Features = ({features}) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="group relative"
                >
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full transition-all duration-300 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                    <div className="relative w-16 h-16 mb-6 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-purple-500/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-purple-400"></Icon>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent relative">
                      {feature.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed relative">
                      {feature.description}
                    </p>

                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors duration-500"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
  )
}

export default Features
