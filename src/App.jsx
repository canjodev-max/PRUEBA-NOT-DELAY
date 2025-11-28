import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import SplashScreen from './SplashScreen'
import GameLibrary from './GameLibrary'
import GameMenu from './GameMenu'
import GameFunction from './GameFunction'
import AnimatedBackground from './components/AnimatedBackground'
import InstallPrompt from './components/InstallPrompt'

function App(){
  const [screen, setScreen] = useState('splash')
  const [selectedGame, setSelectedGame] = useState(null)
  const [selectedFunction, setSelectedFunction] = useState(null)

  useEffect(()=>{
    if(screen==='splash'){
      const t = setTimeout(()=>setScreen('library'), 2000)
      return ()=>clearTimeout(t)
    }
  },[screen])

  const onSelectGame = (g)=>{ setSelectedGame(g); setScreen('menu') }
  const onSelectFunction = (f)=>{ setSelectedFunction(f); setScreen('function') }
  const onBack = () => {
    if(screen==='function'){ setSelectedFunction(null); setScreen('menu') }
    else if(screen==='menu'){ setSelectedGame(null); setScreen('library') }
  }

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <InstallPrompt />
      <AnimatePresence mode="wait">
        {screen==='splash' && <SplashScreen key="splash"/>}
        {screen==='library' && <GameLibrary key="lib" onSelect={onSelectGame}/>} 
        {screen==='menu' && selectedGame && (
          <GameMenu key="menu" game={selectedGame} onBack={onBack} onSelectFunction={onSelectFunction}/>
        )}
        {screen==='function' && selectedGame && selectedFunction && (
          <GameFunction key="fn" game={selectedGame} functionData={selectedFunction} onBack={onBack}/>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
