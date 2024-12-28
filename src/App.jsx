import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Trabajos from './sections/Trabajos'
import Servicios from './sections/Servicios'
import Precios from './sections/Precios'

const App = () => {
  return (
    <div className='bg-slate-900'>
      <Navbar/>  
      <Hero/>
      <Servicios/>
      <Trabajos/>
      <Precios/>
    </div>
  )
}

export default App