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
    <div id='trabajos' data-aos="fade-up" className='bg-gray-950 md:py-40 py-20'>
      <div className='container mx-auto flex flex-col md:gap-20 gap-12 px-6 md:px-0'>
        <div className='flex flex-col items-center justify-center gap-5'>
          <h1 className='text-gray-100 text-center md:text-5xl text-4xl font-bold leading-none px-4 pt-3'>Trabajos realizados</h1>
          <p className='text-gray-400 md:text-2xl text-xl text-center' >Empresas que confiaron en nosotros</p>
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
          <TrabajosCard titulo={'AORA Bella Vista'} icono={aoraIcon} bgClass='bg-aora-bella-vista' link={'https://aorabellavista.com/'} descripcion={'Sitio web moderno y sencillo para desarrollista inmobiliaria. Cuenta con integracion a WhatsApp y formulario de contacto'} />
          <TrabajosCard titulo={'G&D Consultoras'} icono={gydIcon} bgClass='bg-gyd-web' link={'https://gydconsultoras.com/'} descripcion={'Landing page para consultora de marketing minimalista y moderna. Posee integracion a WhatsApp y formulario de contacto con verificacion Captcha'} />
          <TrabajosCard titulo={'BeSingular'} icono={beIcon} bgClass='bg-besingular-web' link={'https://www.besingular.com.ar'} descripcion={'Sitio web para agencia publicitaria, con secciones de trabajos realizados, WhatsApp y formulario de contacto'} />
          <TrabajosCard titulo={'Prevencion parasitosis intestinal'} icono={prevenIcon} bgClass='bg-prevencion-parasitosis' link={'https://prevencionparasitosisintestinal.com.ar/'} descripcion={'Sitio web para campaña medica con distintas secciones de informacion e integracion de redes'} />
          <TrabajosCard titulo={'Opercussion'} icono={operIcon} bgClass='bg-opercussion' link={'https://opercussion.com/'} descripcion={'Sitio web para banda de percusion con selector de idioma (Alemán, Inglés) reproductor de musica, noticias e integracion de redes sociales'} />
          <TrabajosCard titulo={'Arroyo Electromecanica'} icono={arroyoIcon} bgClass='bg-arroyo-web' link={'https://arroyoservice.com/'} descripcion={'Landing page para empresa de service electrodomesticos, con integracion de redes sociales y WhatsApp'} />
          <TrabajosCard titulo={'Chillhop World '} icono={operIcon} bgClass='bg-chillhopworld' link={'https://arroyoservice.com/'} descripcion={'Sitio web de sello discografico, con sus ultimos lanzamientos y conexion con spotify para escuchar su playlist'} />
          <div className='w-full h-96 border-2 border-dashed border-sky-500 rounded-md flex flex-col items-center justify-center gap-2'>
            <box-icon name='user-pin' color="#0ea5e9" size="lg"></box-icon>
            <h2 className='text-4xl font-semibold text-sky-500'>Tu negocio</h2>
            <p className='text-gray-400 text-xl text-center px-4'>¡Vos también te podés sumar a nuestra lista de clientes que optaron por mejorar su presencia online!</p>
            <button className='bg-sky-500 py-2 mt-6 px-3 rounded-lg text-white text-sm md:text-lg font-medium hover:bg-sky-400 flex items-center justify-center gap-2'>SUMATE <box-icon name='whatsapp' color="white" type='logo' ></box-icon></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trabajos