import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import WeatherWidget from './components/WeatherWidget'
import CurrencyDisplay from './components/CurrecyDisplay'
function App() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Projects />
      <Contact />
      <div className="api_list">
        <WeatherWidget />
        <CurrencyDisplay />
      </div>
      
    </>
  )
}

export default App
