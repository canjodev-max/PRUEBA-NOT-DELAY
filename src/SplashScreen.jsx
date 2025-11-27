import { motion } from 'framer-motion'

export default function SplashScreen(){
  return (
    <motion.div 
      className="absolute inset-0 grid place-items-center px-4 bg-black z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="relative flex flex-col items-start justify-center">
        {/* Not - desliza desde la izquierda */}
        <motion.h1
          initial={{ x: '-200vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1, scale: [1, 1.15, 1] }}
          transition={{ 
            x: { duration: 1, ease: [0.34, 1.56, 0.64, 1] },
            opacity: { duration: 0.3 },
            scale: { duration: 0.4, delay: 0.5, ease: 'easeOut' }
          }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white text-glow text-left leading-none"
        >
          not
        </motion.h1>
        
        {/* Delay - desliza desde la derecha */}
        <motion.div className="flex items-baseline">
          <motion.h1
            initial={{ x: '200vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1, scale: [1, 1.15, 1] }}
            transition={{ 
              x: { duration: 1, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] },
              opacity: { duration: 0.3, delay: 0.2 },
              scale: { duration: 0.4, delay: 0.7, ease: 'easeOut' }
            }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white text-glow text-left leading-none"
          >
            delay
          </motion.h1>
          
          {/* Punto que se transforma */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white text-glow leading-none"
          >
            .
          </motion.span>
        </motion.div>

        {/* Círculo de carga que aparece después */}
        <motion.svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ transform: 'translate(-25%, -25%)', width: '200%', height: '200%' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.circle
            cx="50%"
            cy="50%"
            r="48%"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="6"
            strokeLinecap="round"
            initial={{ pathLength: 0, rotate: -90 }}
            animate={{ pathLength: 1, rotate: 270 }}
            transition={{ 
              pathLength: { duration: 1.5, ease: 'easeInOut', delay: 1.2 },
              rotate: { duration: 1.5, ease: 'easeInOut', delay: 1.2 }
            }}
            style={{ transformOrigin: 'center' }}
          />
        </motion.svg>
      </div>
    </motion.div>
  )
}
