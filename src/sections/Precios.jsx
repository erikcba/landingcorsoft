import React from 'react'
import PreciosCard from '../components/PreciosCard'

const Precios = () => {

    const planesPrecio = [
        {
            titulo: "Landing page",
            descripcion: "Ideal para mostrar tus productos o servicios",
            precio: "$89.000 ARS",
            caracteristicas: [
                "Diseño de una página",
                "Formulario de contacto",
                "Optimización SEO",
                "Integración con redes sociales"
            ]
        },
        {
            titulo: "Web Institucional",
            descripcion: "Ideal para presentar tu empresa al mundo",
            precio: "$145.000 ARS",
            popular: true,
            caracteristicas: [
                "Hasta 5 páginas de contenido",
                "Diseño corporativo a elección",
                "Blog integrado",
                "Formularios de contacto avanzados",
                "Optimización SEO",
                "Integración con redes sociales",
            ]
        },
        {
            titulo: "Web Personalizada",
            descripcion: "Solución a medida para necesidades específicas",
            precio: "$185.000 ARS",
            caracteristicas: [
                "Número de páginas ilimitado",
                "Diseño totalmente personalizado",
                "Funcionalidades a medida",
                "Optimización SEO",
                "Soporte prioritario 24/7",
            ]
        }
    ]

    return (
        <div id='precios' className='container mx-auto my-24 flex flex-row gap-4 items-center justify-center'>
            <div className='flex flex-col gap-20 w-full' >
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-gray-100 text-center text-5xl font-bold leading-none pb-4 px-4 pt-3'>Nuestros Precios</h1>
                    <p className='text-gray-400 text-2xl'>Elige el plan perfecto para tu presencia en linea</p>
                </div>
                <div className='flex flex-row gap-6' >
                    {
                        planesPrecio.map((item, index) => (
                            <PreciosCard key={index} titulo={item.titulo} descripcion={item.descripcion} precio={item.precio} caracteristica={item.caracteristicas.map((caracteristica, index) => (
                                <li key={index} className='text-zinc-200 leading-10 text-lg flex flex-row items-center gap-2 '><box-icon name='check' color='#0be61b' ></box-icon> {caracteristica}</li>
                            ))} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Precios
