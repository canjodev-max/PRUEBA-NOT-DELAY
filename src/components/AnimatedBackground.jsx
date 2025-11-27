import { motion } from 'framer-motion'

export default function AnimatedBackground(){
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-black">
      {/* Círculo turquesa - esquina superior izquierda */}
      <motion.div 
        className="absolute -top-32 -left-32 w-64 h-64 rounded-full" 
        style={{background:'radial-gradient(circle, #64AEC5 0%, transparent 70%)'}}
        animate={{ scale:[1, 1.1, 1], opacity:[0.3, 0.4, 0.3] }}
        transition={{ duration:8, repeat:Infinity }}
      />
      
      {/* Círculo violeta - esquina superior derecha */}
      <motion.div 
        className="absolute -top-32 -right-32 w-64 h-64 rounded-full" 
        style={{background:'radial-gradient(circle, #7F5DC9 0%, transparent 70%)'}}
        animate={{ scale:[1, 1.15, 1], opacity:[0.3, 0.45, 0.3] }}
        transition={{ duration:9, repeat:Infinity, delay:1 }}
      />
      
      {/* Círculo rojo - esquina inferior izquierda */}
      <motion.div 
        className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full" 
        style={{background:'radial-gradient(circle, #DB4E40 0%, transparent 70%)'}}
        animate={{ scale:[1, 1.12, 1], opacity:[0.3, 0.42, 0.3] }}
        transition={{ duration:10, repeat:Infinity, delay:2 }}
      />
      
      {/* Círculo verde - esquina inferior derecha */}
      <motion.div 
        className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full" 
        style={{background:'radial-gradient(circle, #7EAB74 0%, transparent 70%)'}}
        animate={{ scale:[1, 1.08, 1], opacity:[0.3, 0.38, 0.3] }}
        transition={{ duration:11, repeat:Infinity, delay:3 }}
      />
      
      {/* Círculo amarillo - centro arriba */}
      <motion.div 
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full" 
        style={{background:'radial-gradient(circle, #EAB04B 0%, transparent 70%)'}}
        animate={{ scale:[1, 1.2, 1], opacity:[0.2, 0.35, 0.2] }}
        transition={{ duration:7, repeat:Infinity, delay:0.5 }}
      />
    </div>
  )
}
