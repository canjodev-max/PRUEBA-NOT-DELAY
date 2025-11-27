import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContadorPuntos(){
  const [players, setPlayers] = useState([
    { id:1, name:'Jugador 1', score:0, color:'from-turquesa to-violeta' },
    { id:2, name:'Jugador 2', score:0, color:'from-violeta to-rojo' }
  ])
  const [editing, setEditing] = useState(null)

  const add = ()=> setPlayers(p=> [...p,{ id:Date.now(), name:`Jugador ${p.length+1}`, score:0, color:'from-verde to-turquesa' }])
  const remove = (id)=> setPlayers(p=> p.length>1 ? p.filter(x=>x.id!==id) : p)
  const change = (id,delta)=> setPlayers(p=> p.map(x=> x.id===id? {...x, score: Math.min(10, x.score+delta)}:x))
  const rename = (id,val)=> setPlayers(p=> p.map(x=> x.id===id? {...x, name:val}:x))
  const reset = ()=> setPlayers(p=> p.map(x=> ({...x, score:0})))

  const winner = players.find(p => p.score >= 10)

  return (
    <div className="w-full max-w-5xl mx-auto px-2 sm:px-4">
      <div className="flex items-center justify-between mb-4 sm:mb-6 gap-2 flex-wrap">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Contador de Puntos</h3>
        <div className="flex gap-2 sm:gap-2.5">
          <motion.button whileTap={{scale:0.95}} onClick={add} className="px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-turquesa text-black rounded-lg text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap">+ Jugador</motion.button>
          <motion.button whileTap={{scale:0.95}} onClick={reset} className="px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 glass-effect text-white rounded-lg text-xs sm:text-sm md:text-base font-semibold">Reiniciar</motion.button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <AnimatePresence>
          {players.map(p=> (
            <motion.div key={p.id} layout initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0.9}} className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-5 relative">
              {winner && winner.id===p.id && (
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-amarillo to-naranja rounded-full grid place-items-center text-xl">👑</div>
              )}
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                {editing===p.id ? (
                  <input autoFocus value={p.name} onChange={e=>rename(p.id,e.target.value)} onBlur={()=>setEditing(null)} onKeyDown={e=> e.key==='Enter'&& setEditing(null)} className="bg-white/10 border border-white/20 rounded-lg px-2 sm:px-3 py-1 text-sm sm:text-base md:text-lg text-white font-semibold flex-1 mr-2"/>
                ):(
                  <h4 onClick={()=>setEditing(p.id)} className="text-base sm:text-lg md:text-xl text-white font-bold cursor-pointer hover:text-turquesa truncate flex-1">{p.name}</h4>
                )}
                {players.length>1 && <motion.button whileTap={{scale:0.9}} onClick={()=>remove(p.id)} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-red-500/20 text-red-400 text-sm sm:text-base flex-shrink-0">✕</motion.button>}
              </div>
              <motion.div key={p.score} initial={{scale:1.1}} animate={{scale:1}} className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r ${p.color} text-transparent bg-clip-text mb-3 sm:mb-4 text-center`}>{p.score}</motion.div>
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                <motion.button whileTap={{scale:0.95}} onClick={()=>change(p.id,-2)} className="py-2 sm:py-2.5 md:py-3 bg-rojo/20 hover:bg-rojo/30 rounded-lg text-rojo font-bold text-sm sm:text-base md:text-lg">-2</motion.button>
                <motion.button whileTap={{scale:0.95}} onClick={()=>change(p.id,-1)} className="py-2 sm:py-2.5 md:py-3 bg-naranja/20 hover:bg-naranja/30 rounded-lg text-naranja font-bold text-sm sm:text-base md:text-lg">-1</motion.button>
                <motion.button whileTap={{scale:0.95}} onClick={()=>change(p.id,+1)} className="py-2 sm:py-2.5 md:py-3 bg-verde/20 hover:bg-verde/30 rounded-lg text-verde font-bold text-sm sm:text-base md:text-lg">+1</motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
