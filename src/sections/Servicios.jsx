import React from 'react'
import ServiciosCard from '../components/ServiciosCard'

const Servicios = () => {

    const designIcon = <box-icon type='logo' size='lg' color='#67e8f9' name='sketch'></box-icon>
    const codeIcon = <box-icon name='code-alt' size='lg' color='#67e8f9'></box-icon>
    const searchIcon = <box-icon name='search-alt-2' size='lg' color='#67e8f9'></box-icon>
    const suportIcon = <box-icon name='support' size='lg' color='#67e8f9' ></box-icon>
    

    return (
        <section id='servicios' data-aos="fade-up" className='bg-slate-900 py-24'>
            <div className='container mx-auto flex flex-col gap-20'>
                <div className='flex flex-col items-center justify-center gap-20'>
                    <h1 className='text-gray-100 text-center text-5xl font-bold border-l-8 border-cyan-600 bg-slate-800 leading-none pb-4 px-4 pt-3 shadow-lg select-none hover:border-cyan-400 transition-transform duration-300 ease-in-out'>Nuestros servicios</h1>
                </div>
                <div className='grid grid-cols-4 gap-4'>
                    <ServiciosCard icono={designIcon} titulo={'Diseño Web'} descripcion={'Un diseño moderno y una arquitectura optimizada garantizan que tu sitio destaque en cualquier dispositivo y proporcione una experiencia fluida a tus visitantes.'} />
                    <ServiciosCard icono={codeIcon} titulo={'Aplicaciones Web Personalizadas'} descripcion={'Desarrollamos aplicaciones web a medida para satisfacer necesidades específicas de tu negocio, integrando funcionalidades personalizadas, sistemas complejos y tecnologías modernas.'} />
                    <ServiciosCard icono={searchIcon} titulo={'SEO y Rendimiento'} descripcion={'Nos enfocamos en optimizar tu sitio web no solo visualmente, sino también en términos de rendimiento y posicionamiento en motores de búsqueda.'} />
                    <ServiciosCard icono={suportIcon} titulo={'Mantenimiento y Soporte Técnico'} descripcion={'Nos encargamos de que tu sitio web esté siempre en óptimas condiciones, con actualizaciones regulares de software, parches de seguridad y soluciones rápidas a problemas técnicos.'} />
                </div>
            </div>

        </section>
    )
}

export default Servicios
