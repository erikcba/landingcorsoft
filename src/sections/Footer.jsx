import React from 'react'

const Footer = () => {
  return (
    <section id='footer' className='bg-slate-900 md:py-10 py-5 px-6 md:px-0'>
      <div className='flex md:flex-row flex-col justify-around items-center gap-6 md:gap-0 '>
        <a href="#" className='flex flex-col items-center justify-center select-none hover:cursor-pointer'>
          <h1 className='logo text-2xl md:text-3xl text-white font-semibold leading-none'>cor.soft</h1>
          <p className='logo text-white text-md md:text-lg tracking-widest leading-none'>web services</p>
        </a>
        <div className='flex flex-row gap-5 items-center justify-center'>
          <a href="https://www.instagram.com/cor.soft/" target="_blank" rel="noreferrer">
            <box-icon type='logo' color="white" size="sm" name='instagram'></box-icon>
          </a>
          <a href="https://wa.me/5493518192829" target="_blank" rel="noreferrer">
            <box-icon name='whatsapp' color="white" size="sm" type='logo' ></box-icon>
          </a>
        </div>
        <p className='text-gray-200 '>
          ©2025 Cor-soft. Todos los derechos reservados.
        </p>
      </div>
    </section>
  )
}

export default Footer