import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Trabajos from './sections/Trabajos'
import Servicios from './sections/Servicios'
import Faq from './sections/Faq'
import SubHero from './sections/SubHero'
import Contacto from './sections/Contacto'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div className='bg-slate-900'>
      <Navbar/>  
      <Hero/>
      <SubHero/>
      <Servicios/>
      <Trabajos/>
      <Faq/>
      <Contacto/>
      <Footer/>
    </div>
  )
}

export default App