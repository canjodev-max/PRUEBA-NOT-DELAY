import { motion } from 'framer-motion'
import Cronometro from './components/Cronometro'
import Dado from './components/Dado'
import ContadorPuntos from './components/ContadorPuntos'
import Cronometro40 from './components/Cronometro40'
import Manual from './components/Manual'
import ManualEyVos from './components/ManualEyVos'

function GameFunction({ game, functionData, onBack }){
  const renderComponent = () => {
    switch(functionData.component){
      case 'cronometro': return <Cronometro onExit={onBack} />
      case 'dado': return <Dado />
      case 'contador': return <ContadorPuntos />
      case 'cronometro40': return <Cronometro40 />
      case 'manual': return <Manual />
      case 'manualeyos': return <ManualEyVos />
      default: return <div className="text-gray-400">Componente no encontrado</div>
    }
  }

  return (
    <div className="absolute inset-0 p-4 sm:p-6 overflow-y-auto">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <motion.button 
          onClick={onBack} 
          whileTap={{ scale:0.95 }} 
          className="glass-effect px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-white text-sm sm:text-base font-semibold flex items-center gap-2"
        >
          <span className="text-lg sm:text-xl">←</span>
          Salir
        </motion.button>
      </div>
      <div className="w-full grid place-items-center">
        <div className="w-full">
          {renderComponent()}
        </div>
      </div>
    </div>
  )
}

export default GameFunction
