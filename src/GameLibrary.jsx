import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const games=[
  { id:1, name:'TELEPATUTTI', color:'from-verde to-turquesa', functions:[
    {id:3, name:'Contador', icon:'📊', component:'contador'},
    {id:2, name:'Cronómetro', icon:'⏲️', component:'cronometro40'},
    {id:1, name:'Manual', icon:'📖', component:'manual'}
  ]},
  { id:2, name:'¡EY, VOS!', color:'from-amarillo to-naranja', functions:[
    {id:1, name:'Dado', icon:'🎲', component:'dado'},
    {id:2, name:'Cronómetro', icon:'⏱️', component:'cronometro'},
    {id:3, name:'Manual', icon:'📖', component:'manualeyos'}
  ]}
]

export default function GameLibrary({ onSelect }){
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState(null)

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstallPrompt(true)
      
      // Ocultar después de 5 segundos
      setTimeout(() => {
        setShowInstallPrompt(false)
      }, 5000)
    }

    window.addEventListener('beforeinstallprompt', handler)

    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return
    
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    
    setDeferredPrompt(null)
    setShowInstallPrompt(false)
  }

  return (
    <div className="absolute inset-0 p-4 sm:p-6 md:p-8 overflow-y-auto flex flex-col items-center justify-center">
      
      {/* Install Prompt */}
      <AnimatePresence>
        {showInstallPrompt && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -20, x: 20 }}
            className="fixed top-4 right-4 z-50 glass-effect rounded-xl p-4 border border-turquesa/30 max-w-xs"
          >
            <p className="text-white text-sm mb-3">¿Instalar Not Delay en tu dispositivo?</p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleInstall}
              className="w-full py-2 px-4 bg-gradient-to-r from-turquesa to-verde rounded-lg text-black font-bold text-sm"
            >
              Instalar
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <h2 className="text-white font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 md:mb-10 text-center">Biblioteca de Juegos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-3xl mx-auto">
        {games.map(g=> (
          <motion.button key={g.id}
            whileHover={{ scale:1.02 }} whileTap={{ scale:0.97 }}
            onClick={()=>onSelect(g)}
            className={`glass-effect rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center bg-gradient-to-r ${g.color} bg-clip-text text-transparent min-h-[120px] sm:min-h-[140px] flex flex-col justify-center items-center`}
          >
            <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">{g.name}</div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
