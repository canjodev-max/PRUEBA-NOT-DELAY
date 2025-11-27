import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Cronometro40(){
  const [time, setTime] = useState(40)
  const [running, setRunning] = useState(false)
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
      setTime(p => {
        if(p <= 1) {
          playBeep()
          return 0
        }
        return p - 1
      })
    },1000)
    return ()=>clearInterval(i)
  },[running])

  const tap = ()=>{ 
    if(!running) {
      setRunning(true)
    } else {
      setTime(40)
    }
  }

  return (
    <div className="relative w-full flex flex-col items-center justify-center select-none py-4" onClick={tap}>
      <motion.div 
        key={time} 
        className={`font-black leading-none text-glow ${time<=10?'text-rojo':time<=20?'text-amarillo':'text-turquesa'} text-[18vw] sm:text-[14vw] md:text-[10vw] lg:text-[8vw] xl:text-[6vw]`} 
        initial={{scale:0.9,opacity:0}} 
        animate={{scale:1,opacity:1}} 
        transition={{duration:0.25}}
      >
        {time}
      </motion.div>
      <motion.p className="mt-2 text-xs sm:text-sm text-gray-400 text-center px-4" animate={{opacity:running?0.5:1}}>
        {running?'Toca para reiniciar':'Toca para iniciar'}
      </motion.p>
    </div>
  )
}
