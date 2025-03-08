import React from 'react'
import Form from '../components/Form'


const Contacto = () => {
    return (
        <section id='contacto' data-aos="fade-up" className='bg-slate-950 md:py-40 py-20 px-6 md:px-0'>
            <div className='container mx-auto flex md:flex-row flex-col items-center justify-center  md:gap-20 gap-12'>
                <div className='flex flex-col justify-start items-start gap-5 md:px-32'>
                    <h1 className='md:text-5xl text-4xl text-gray-200 font-bold text-start ' >¿Listo para Impulsar tu Negocio?</h1>
                    <p className='md:text-2xl text-xl text-gray-300 text-start'>Agenda una consulta gratuita y analicemos juntos cómo podemos ayudarte a alcanzar tus objetivos.</p>
                    <div className='flex flex-col items-start justify-center gap-2'>
                        <p className='text-gray-200 text-lg flex flex-row items-center justify-center gap-2 font-medium'><box-icon name='envelope' color='white'></box-icon> contacto@cor-soft.com</p>
                        <p className='text-gray-200 text-lg flex flex-row items-center justify-center gap-2 font-medium'><box-icon name='whatsapp' type='logo' color='white' ></box-icon> +54 9 3518192829</p>
                    </div>
                </div>
                <div className='md:w-1/2 w-full'>
                    <Form />
                </div>
            </div>
        </section>
    )
}

export default Contacto