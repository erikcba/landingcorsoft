import React from 'react'
import ServiciosCard from '../components/ServiciosCard'

const Servicios = () => {

    const designIcon = <box-icon type='logo' size='lg' color='#67e8f9' name='sketch'></box-icon>
    const codeIcon = <box-icon name='code-alt' size='lg' color='#67e8f9'></box-icon>
    const searchIcon = <box-icon name='search-alt-2' size='lg' color='#67e8f9'></box-icon>
    const suportIcon = <box-icon name='support' size='lg' color='#67e8f9' ></box-icon>
    const googleIcon = <box-icon name='google' type='logo' size='lg' color='#67e8f9' ></box-icon>
    const metaIcon = <box-icon name='facebook' type='logo' size='lg' color='#67e8f9' ></box-icon>
    

    return (
        <section id='servicios' data-aos="fade-up" className='bg-slate-900 md:my-40 my-20 px-6 md:px-0'>
            <div className='container mx-auto flex flex-col md:gap-20 gap-12'>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <h1 className='text-gray-100 text-center md:text-5xl text-4xl font-bold leading-none px-4 pt-3'>Nuestros servicios</h1>
                    <p className='text-gray-400 text-xl text-center md:text-2xl' >Estrategias personalizadas para maximizar tu retorno de inversión</p>
                </div>
                <div className='grid md:grid-cols-3 gap-4  '>
                    <ServiciosCard icono={designIcon} titulo={'Diseño Web'} descripcion={'Un diseño moderno y una arquitectura optimizada garantizan que tu sitio destaque en cualquier dispositivo y proporcione una experiencia fluida a tus visitantes.'} />
                    <ServiciosCard icono={codeIcon} titulo={'Aplicaciones Web Personalizadas'} descripcion={'Desarrollamos aplicaciones web a medida para satisfacer necesidades específicas de tu negocio, integrando funcionalidades personalizadas, sistemas complejos y tecnologías modernas.'} />
                    <ServiciosCard icono={searchIcon} titulo={'SEO y Rendimiento'} descripcion={'Nos enfocamos en optimizar tu sitio web no solo visualmente, sino también en términos de rendimiento y posicionamiento en motores de búsqueda.'} />
                    <ServiciosCard icono={suportIcon} titulo={'Mantenimiento y Soporte Técnico'} descripcion={'Nos encargamos de que tu sitio web esté siempre en óptimas condiciones, con actualizaciones regulares de software, parches de seguridad y soluciones rápidas a problemas técnicos.'} />
                    <ServiciosCard icono={googleIcon} titulo={'Google Ads'} descripcion={'Campañas de búsqueda, display y shopping optimizadas para conversión.'} />
                    <ServiciosCard icono={metaIcon} titulo={'Meta Ads'} descripcion={'Anuncios segmentados que conectan con tu audiencia ideal.'} />
                    
                </div>
            </div>

        </section>
    )
}

export default Servicios
