import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Form from '../components/Form';

const Hero = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div id='hero' className=" h-svh flex flex-col md:flex-row items-center justify-center bg-slate-900 ">
      <div className=' md:px-32 px-6 md:py-24 pt-20 flex flex-col items-start justify-center gap-2 w-full md:w-1/2 h-full'>
        <h1 data-aos="fade-right" className='logo md:text-6xl text-5xl font-bold text-white  w-full'>Aumenta tus ventas en línea</h1>
        <p data-aos="fade-right" className='logo md:text-3xl text-2xl font-normal text-gray-300 mb-2'>Creamos estrategias de marketing y páginas web <span className='text-cyan-400'>a medida</span>  para transformar tu presencia online y llevar tu marca <span className='text-cyan-400'>al siguiente nivel</span> </p>
        <div data-aos="fade-up" className='flex md:flex-row flex-col gap-4 mt-4 w-full'>
          <a className='bg-green-500 py-2 px-6 rounded-md font-semibold text-white text-xl flex flex-row items-center justify-center gap-2 hover:bg-green-600 transition-all duration-300 ease-in-out'>Solicitar Cotización <box-icon type='logo' name='whatsapp' color='white' size='md' ></box-icon> </a>
          <a href='#trabajos' className='bg-slate-200 py-2 px-6 rounded-md font-medium text-gray-800 text-xl flex flex-row items-center justify-center gap-2 hover:bg-slate-300  transition-all duration-300 ease-in-out '>Ver trabajos<box-icon name='chevron-right' color="#1f2937 " size='sm' ></box-icon> </a>
          <div className='block md:hidden mx-auto pt-12'>
            <box-icon name='chevron-down'size="lg" animation='fade-up' color='#e8e3e3' ></box-icon>
          </div>
        </div>
      </div>
      <div className='w-full md:w-1/2 md:px-12 px-6 bg-hero  hidden h-full py-6 md:py-24 md:flex flex-col items-center justify-center z-10'>
        <Form />
      </div>
    </div>

  )
}

export default Hero