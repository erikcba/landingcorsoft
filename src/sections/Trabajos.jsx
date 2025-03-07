import React from 'react'
import TrabajosCard from '../components/TrabajosCard'

const Trabajos = () => {


  const prevenIcon = <box-icon name='capsule' size='md' type='solid' color='#29bbef' ></box-icon>
  const gydIcon = <box-icon name='chalkboard' size='md' color='#29bbef'></box-icon>
  const aoraIcon = <box-icon name='building-house' color='#29bbef' size='md' ></box-icon>
  const beIcon = <box-icon name='bar-chart-alt-2' size='md' type='solid' color='#29bbef' ></box-icon>
  const operIcon = <box-icon name='music' color='#29bbef' size='md'></box-icon>
  const arroyoIcon = <box-icon name='wrench' color='#29bbef' size='md'></box-icon>

  return (
    <div id='trabajos' data-aos="fade-up" className='bg-gray-950 py-40'>
      <div className='container mx-auto flex flex-col gap-20'>
        <div className='flex flex-col items-center justify-center gap-5'>
          <h1 className='text-gray-100 text-center text-5xl font-bold leading-none px-4 pt-3'>Trabajos realizados</h1>
          <p className='text-gray-400 text-2xl' >Empresas que confiaron en nosotros</p>
        </div>
        <div className='grid grid-cols-2 gap-6'>
          <TrabajosCard titulo={'AORA Bella Vista'} icono={aoraIcon} bgClass='bg-aora-bella-vista' link={'https://aorabellavista.com/'} descripcion={'Sitio web moderno y sencillo para desarrollista inmobiliaria. Cuenta con integracion a WhatsApp y formulario de contacto'} />
          <TrabajosCard titulo={'G&D Consultoras'} icono={gydIcon} bgClass='bg-gyd-web' link={'https://gydconsultoras.com/'} descripcion={'Landing page para consultora de marketing minimalista y moderna. Posee integracion a WhatsApp y formulario de contacto con verificacion Captcha'} />
          <TrabajosCard titulo={'BeSingular'} icono={beIcon} bgClass='bg-besingular-web' link={'https://www.besingular.com.ar'} descripcion={'Sitio web para agencia publicitaria, con secciones de trabajos realizados, WhatsApp y formulario de contacto'} />
          <TrabajosCard titulo={'Prevencion parasitosis intestinal'} icono={prevenIcon} bgClass='bg-prevencion-parasitosis' link={'https://prevencionparasitosisintestinal.com.ar/'} descripcion={'Sitio web para campaña medica con distintas secciones de informacion e integracion de redes'} />
          <TrabajosCard titulo={'Opercussion'} icono={operIcon} bgClass='bg-opercussion' link={'https://opercussion.com/'} descripcion={'Sitio web para banda de percusion con selector de idioma (Alemán, Inglés) reproductor de musica, noticias e integracion de redes sociales'} />
          <TrabajosCard titulo={'Arroyo Electromecanica'} icono={arroyoIcon} bgClass='bg-arroyo-web' link={'https://arroyoservice.com/'} descripcion={'Landing page para empresa de service electrodomesticos, con integracion de redes sociales y WhatsApp'} />
        </div>
      </div>
    </div>
  )
}

export default Trabajos