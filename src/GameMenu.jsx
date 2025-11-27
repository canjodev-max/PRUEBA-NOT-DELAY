import { motion } from 'framer-motion'

export default function GameMenu({ game, onBack, onSelectFunction }){
  return (
    <div className="absolute inset-0 p-4 sm:p-6 overflow-y-auto">
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 flex-wrap">
        <motion.button onClick={onBack} whileTap={{ scale:0.95 }} className="glass-effect w-10 h-10 sm:w-12 sm:h-12 rounded-full text-white text-xl sm:text-2xl flex-shrink-0">←</motion.button>
        <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl flex items-center gap-2 sm:gap-3 flex-wrap">
          <span className="flex items-center gap-2">{game.icon} {game.name}</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {game.functions.map(f => (
          <motion.button key={f.id} whileHover={{ scale:1.02 }} whileTap={{ scale:0.97 }} onClick={()=>onSelectFunction(f)} className="glass-effect rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center text-white min-h-[120px] sm:min-h-[140px] flex flex-col justify-center items-center">
            <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-3">{f.icon}</div>
            <div className="text-xl sm:text-2xl md:text-3xl font-semibold">{f.name}</div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
