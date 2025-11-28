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

  // Push history state on screen changes so hardware back works
  useEffect(() => {
    if (screen) {
      try {
        const state = { screen, selectedGame, selectedFunction }
        const hash = `#${screen}`
        // Replace for splash to avoid stacking, push for others
        if (screen === 'splash') {
          window.history.replaceState(state, '', hash)
        } else {
          window.history.pushState(state, '', hash)
        }
      } catch {}
    }
  }, [screen, selectedGame, selectedFunction])

  // Handle browser/device back button
  useEffect(() => {
    const onPopState = (e) => {
      const st = e.state || {}
      const target = st.screen || 'library'
      if (target === 'library') {
        setSelectedFunction(null)
        setSelectedGame(null)
        setScreen('library')
      } else if (target === 'menu' && selectedGame) {
        setSelectedFunction(null)
        setScreen('menu')
      } else if (target === 'function' && selectedGame && selectedFunction) {
        setScreen('function')
      } else {
        // Fallback: go to library
        setSelectedFunction(null)
        setSelectedGame(null)
        setScreen('library')
      }
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [selectedGame, selectedFunction])

  const onSelectGame = (g)=>{ setSelectedGame(g); setScreen('menu') }
  const onSelectFunction = (f)=>{ setSelectedFunction(f); setScreen('function') }
  const onBack = () => {
    if (screen === 'function') {
      setSelectedFunction(null); setScreen('menu')
    } else if (screen === 'menu') {
      setSelectedGame(null); setScreen('library')
    } else if (screen === 'library') {
      // Confirm exit from library
      const shouldExit = window.confirm('¿Deseas salir de la aplicación?')
      if (!shouldExit) return
      // Attempt to exit: go back if possible or navigate away
      if (window.history.length > 1) {
        window.history.back()
      } else {
        window.location.href = 'about:blank'
      }
    }
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
