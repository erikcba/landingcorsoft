import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Trabajos from './sections/Trabajos'
import Servicios from './sections/Servicios'

const App = () => {
  return (
    <div className='bg-slate-900 h-svh'>
      <Navbar/>  
      <Hero/>
      <Servicios/>
      <Trabajos/>
    </div>
  )
}

export default App