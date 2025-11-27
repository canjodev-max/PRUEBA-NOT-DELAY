import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Dado(){
  const [value, setValue] = useState(1)
  const [isRolling, setIsRolling] = useState(false)
  const roll = ()=>{
    if(isRolling) return
    setIsRolling(true)
    let c=0
    const it = setInterval(()=>{
      setValue(Math.floor(Math.random()*6)+1)
      c++
      if(c>10){ clearInterval(it); setValue(Math.floor(Math.random()*6)+1); setIsRolling(false) }
    },100)
  }

  const pattern = {
    1:[[4]], 2:[[0],[8]], 3:[[0],[4],[8]], 4:[[0,2],[6,8]], 5:[[0,2],[4],[6,8]], 6:[[0,2],[3,5],[6,8]]
  }[value] || [[4]]

  return (
    <motion.div className="w-full h-[70vh] sm:h-[75vh] flex flex-col items-center justify-center cursor-pointer px-4" onClick={roll} initial={{opacity:0}} animate={{opacity:1}}>
      <motion.p className="text-gray-400 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 text-center" animate={{ opacity: isRolling ? 0 : 1 }}>👆 Toca para lanzar</motion.p>
      <motion.div
        animate={{ rotateX: isRolling ? [0,360,720,1080] : 0, rotateY: isRolling ? [0,360,720,1080] : 0, scale: isRolling ? [1,1.1,1.2,1] : 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="w-[70vw] h-[70vw] max-w-[280px] max-h-[280px] sm:w-64 sm:h-64 bg-gradient-to-br from-white to-gray-200 rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden"
        style={{ transformStyle:'preserve-3d' }}
      >
        <div className="grid grid-cols-3 grid-rows-3 w-full h-full p-6">
          {[...Array(9)].map((_,i)=> (
            <div key={i} className="flex items-center justify-center">
              <AnimatePresence>
                {pattern.flat().includes(i) && (
                  <motion.div initial={{scale:0}} animate={{scale:1}} exit={{scale:0}} className="w-6 h-6 bg-black rounded-full"/>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="mt-4 sm:mt-6 text-center">
        <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-1 sm:mb-2">Resultado</p>
        <motion.div key={value} initial={{scale:1.5,opacity:0}} animate={{scale:1,opacity:1}} className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-violeta text-glow">{value}</motion.div>
      </div>
    </motion.div>
  )
}
