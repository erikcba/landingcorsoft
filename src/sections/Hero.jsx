import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div id='hero' className=" h-svh flex flex-row items-center justify-center">
      <div className=' md:px-12 py-24 flex flex-col items-start justify-center gap-2 w-1/2 bg-gradient-to-t from-slate-900 from-0% via-slate-800 via-70% to-sky-800 to-100% h-full'>
        <h1 data-aos="fade-right" className='logo text-6xl font-bold text-white  w-full'>Aumenta tus ventas en línea</h1>
        <p data-aos="fade-right" className='logo text-3xl font-normal text-gray-300 mb-2'>Desarrollo web <span className='text-cyan-400'>a medida</span>  para transformar tu presencia online y llevar tu marca <span className='text-cyan-400'>al siguiente nivel</span> </p>
        <div data-aos="fade-up" className='flex flex-row gap-4 mt-4'>
          <p className='text-white text-lg font-semibold backdrop-blur-md border-l-4 hover:border-cyan-600 border-cyan-800 bg-sky-900 bg-opacity-50 py-1 px-2 hover:scale-110 transition-all ease-in-out select-none'>Mostrá.</p>
          <p className='text-white text-lg font-semibold backdrop-blur-md border-l-4 hover:border-cyan-600 border-cyan-800 bg-sky-900 bg-opacity-50 py-1 px-2 hover:scale-110 transition-all ease-in-out select-none'>Promocioná.</p>
          <p className='text-white text-lg font-semibold backdrop-blur-md border-l-4 hover:border-cyan-600 border-cyan-800 bg-sky-900 bg-opacity-50 py-1 px-2 hover:scale-110 transition-all ease-in-out select-none'>Vendé.</p>
        </div>
      </div>
      <div className='w-1/2 md:px-12 bg-hero h-full py-24 flex flex-col items-center justify-center z-10'>
        <form data-aos="fade-left" className='grid grid-cols-1 gap-4 w-3/4 backdrop-blur-lg bg-sky-900 bg-opacity-50 px-5 py-8 border-l-4 border-cyan-800 hover:border-cyan-600 transition-all ease-in-out   ' action="">
          <input className='h-14 px-4 bg-transparent text-white border-b-2 border-sky-900 placeholder-slate-200 placeholder:text-xl text-xl' placeholder='Nombre' type="text" />
          <input className='h-14 px-4 bg-transparent text-white border-b-2 border-sky-900 placeholder-slate-200 placeholder:text-xl text-xl' placeholder='Mail' type="text" />
          <input className='h-14 px-4 bg-transparent text-white border-b-2 border-sky-900 placeholder-slate-200 placeholder:text-xl text-xl' placeholder='Negocio/Empresa' type="text" />
          <input className='h-14 px-4 bg-transparent text-white border-b-2 border-sky-900 placeholder-slate-200 placeholder:text-xl text-xl' placeholder='Consulta' type="text" />
          <button className='bg-sky-600 h-14 py-2 px-3 rounded text-white text-2xl font-medium hover:bg-sky-400 mt-6'>Solicita tu cotización</button>
        </form>
      </div>
    </div>

  )
}

export default Hero