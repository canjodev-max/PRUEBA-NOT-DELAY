import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Cronometro({ onExit }){
  const [localTime, setLocalTime] = useState(15)
  const [globalTime, setGlobalTime] = useState(120)
  const [running, setRunning] = useState(false)
  const [showFinishedModal, setShowFinishedModal] = useState(false)
  const audioContextRef = useRef(null)

  // Función para reproducir pitido
  const playBeep = () => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)()
      }
      const ctx = audioContextRef.current
      const oscillator = ctx.createOscillator()
      const gainNode = ctx.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(ctx.destination)
      
      oscillator.frequency.value = 800
      oscillator.type = 'sine'
      
      gainNode.gain.setValueAtTime(0.3, ctx.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1)
      
      oscillator.start(ctx.currentTime)
      oscillator.stop(ctx.currentTime + 1)
    } catch (error) {
      console.log('Audio no disponible')
    }
  }

  useEffect(()=>{
    if(!running) return
    const i = setInterval(()=>{
      setLocalTime(p => {
        if(p <= 1) {
          playBeep()
          return 0
        }
        return p - 1
      })
    },1000)
    return ()=>clearInterval(i)
  },[running])

  useEffect(()=>{
    if(!running || globalTime<=0) return
    const i = setInterval(()=>{
      setGlobalTime(p => {
        if(p<=1){ setRunning(false); setShowFinishedModal(true); return 0 }
        return p-1
      })
    },1000)
    return ()=>clearInterval(i)
  },[running, globalTime])

  const tap = ()=>{ 
    if(showFinishedModal) return
    if(!running) {
      setRunning(true)
    } else {
      setLocalTime(15)
    }
  }
  
  const finalizarRonda = (e)=>{ 
    e.stopPropagation()
    setLocalTime(15)
    setGlobalTime(120)
    setRunning(false)
  }
  
  const resetAll = ()=>{ setLocalTime(15); setGlobalTime(120); setRunning(false); setShowFinishedModal(false) }
  const exit = ()=>{ resetAll(); if(onExit) onExit() }
  const fmt = s => `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`

  return (
    <div className="relative w-full h-[70vh] sm:h-[75vh] flex flex-col items-center select-none" onClick={tap}>
      <motion.div 
        className="mt-4 sm:mt-6 mb-8 sm:mb-12 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white/10 backdrop-blur border border-white/20 shadow-lg" 
        initial={{opacity:0,y:-10}} 
        animate={{opacity:1,y:0}}
      >
        <span className={`text-base sm:text-lg md:text-xl font-bold ${globalTime<=30?'text-rojo':globalTime<=60?'text-amarillo':'text-violeta'}`}>{fmt(globalTime)}</span>
      </motion.div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <motion.div key={localTime} className={`font-black leading-none text-glow ${localTime<=5?'text-rojo':localTime<=8?'text-amarillo':'text-turquesa'} text-[45vw] sm:text-[40vw] md:text-[35vw] lg:text-[30vw] xl:text-[25vw]`} initial={{scale:0.9,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:0.25}}>{localTime}</motion.div>
        <motion.p className="mt-4 text-xs sm:text-sm md:text-base text-gray-400 text-center px-4" animate={{opacity:running?0.5:1}}>{running?'Toca para reiniciar':'Toca para iniciar'}</motion.p>
      </div>

      {/* Botón Finalizar Ronda */}
      <motion.button
        onClick={finalizarRonda}
        whileTap={{ scale: 0.95 }}
        className="mb-6 px-4 py-2 text-xs sm:text-sm font-semibold bg-naranja/20 hover:bg-naranja/30 text-naranja rounded-lg border border-naranja/40"
      >
        Finalizar Ronda
      </motion.button>

      <AnimatePresence>
        {showFinishedModal && (
          <motion.div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <motion.div className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 w-full max-w-sm text-center" initial={{scale:0.6,y:40}} animate={{scale:1,y:0}} exit={{scale:0.6,y:40}} transition={{type:'spring',stiffness:180,damping:14}}>
              <motion.div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-violeta to-rojo flex items-center justify-center text-2xl sm:text-3xl" animate={{rotate:[0,8,-8,0]}} transition={{duration:0.6,repeat:Infinity,repeatDelay:3}}>🏁</motion.div>
              <h2 className="text-xl sm:text-2xl font-black text-white mb-2 sm:mb-3">Fin de la Ronda</h2>
              <p className="text-gray-400 mb-4 sm:mb-6 text-xs sm:text-sm">Tiempo finalizado</p>
              <div className="flex gap-2 sm:gap-3">
                <motion.button whileTap={{scale:0.9}} whileHover={{scale:1.05}} onClick={resetAll} className="flex-1 py-2.5 sm:py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-verde to-turquesa text-xs sm:text-sm">Reiniciar</motion.button>
                <motion.button whileTap={{scale:0.9}} whileHover={{scale:1.05}} onClick={exit} className="flex-1 py-2.5 sm:py-3 rounded-xl font-semibold text-white glass-effect text-xs sm:text-sm">Salir</motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
