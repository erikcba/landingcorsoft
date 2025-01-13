import React from 'react'


const Form = () => {
    return (
        <>
            <form data-aos="fade-left" className='grid grid-cols-1 gap-4 md:w-3/4 w-full backdrop-blur-lg bg-sky-900 bg-opacity-50 px-5 py-8 border-l-4 border-cyan-800 hover:border-cyan-600 transition-all ease-in-out duration-300  ' action="">
                <input className='h-14 px-4 bg-transparent text-white border-b-2 border-sky-900 placeholder-slate-200 placeholder:text-xl text-xl focus:outline-none focus:border-cyan-500' placeholder='Nombre' type="text" />
                <input className='h-14 px-4 bg-transparent text-white border-b-2 border-sky-900 placeholder-slate-200 placeholder:text-xl text-xl focus:outline-none focus:border-cyan-500' placeholder='Mail' type="text" />
                <input className='h-14 px-4 bg-transparent text-white border-b-2 border-sky-900 placeholder-slate-200 placeholder:text-xl text-xl focus:outline-none focus:border-cyan-500' placeholder='Negocio/Empresa' type="text" />
                <input className='h-14 px-4 bg-transparent text-white border-b-2 border-sky-900 placeholder-slate-200 placeholder:text-xl text-xl focus:outline-none focus:border-cyan-500' placeholder='Consulta' type="text" />
                <button className='bg-sky-600 h-14 py-2 px-3 rounded text-white text-xl sm:text-2xl font-medium hover:bg-sky-400 mt-6 transition-all ease-in-out duration-300 '>Solicita tu cotización</button>
            </form>
        </>
    )
}

export default Form
