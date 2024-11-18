import React from 'react'
import TrabajosCard from '../components/TrabajosCard'

const Trabajos = () => {


  const prevenIcon = <box-icon name='capsule' size='md' type='solid' color='#29bbef' ></box-icon>
  const gydIcon = <box-icon name='chalkboard' size='md' color='#29bbef'></box-icon>
  const aoraIcon = <box-icon name='building-house' color='#29bbef' size= 'md' ></box-icon>
  const beIcon = <box-icon name='bar-chart-alt-2' size='md' type='solid' color='#29bbef' ></box-icon>

  return (
    <div id='trabajos' data-aos="fade-up" className='bg-slate-900 mb-24 py-12'>
      <div className='container mx-auto flex flex-col gap-20'>
        <div className='flex flex-col items-center justify-center gap-20'>
          <h1 className='text-gray-100 text-center text-5xl font-bold border-l-8 border-cyan-600 bg-slate-800 leading-none pb-4 px-4 pt-3 shadow-lg select-none hover:border-cyan-400 transition-transform duration-300 ease-in-out'>Proyectos realizados</h1>
        </div>
        <div className='grid grid-cols-2 gap-6'>
          <TrabajosCard titulo={'AORA Bella Vista'} icono={aoraIcon} bgClass='bg-aora-bella-vista' descripcion={'lorem ipsum dolor sit amet'} />
          <TrabajosCard titulo={'G&D Consultoras'} icono={gydIcon} bgClass='bg-gyd-web' descripcion={'lorem ipsum dolor sit amet'} />
          <TrabajosCard titulo={'BeSingular'} icono={beIcon} bgClass='bg-besingular-web' descripcion={'lorem ipsum dolor sit amet'} />
          <TrabajosCard titulo={'Prevencion parasitosis intestinal'} icono={prevenIcon} bgClass='bg-prevencion-parasitosis' descripcion={'lorem ipsum dolor sit amet'} />
        </div>
      </div>
    </div>
  )
}

export default Trabajos