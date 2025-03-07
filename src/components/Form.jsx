import React from 'react'


const Form = () => {
    return (
        <>
            <form data-aos="fade-left" className='grid grid-cols-1 gap-4 w-1/2 backdrop-blur-lg bg-white rounded-lg p-7' action="">
                <h1 className='text-sky-900 text-2xl font-semibold' >Solicitá información</h1>
                <label className='text-sky-900 font-semibold' htmlFor="name">Nombre</label>
                <input className='h-12 px-4 bg-transparent rounded-md text-gray-800 border border-sky-300 placeholder-slate-200 placeholder:text-xl text-xl focus:outline-offset-4 focus:outline-sky-500'  type="text" />
                <label className='text-sky-900 font-semibold' htmlFor="mail">Mail</label>
                <input className='h-12 px-4 bg-transparent rounded-md text-gray-800 border border-sky-300 placeholder-slate-200 placeholder:text-xl text-xl focus:outline-offset-4 focus:outline-sky-500' type="text" />
                <label className='text-sky-900 font-semibold' htmlFor="phone">Empresa</label>
                <input className='h-12 px-4 bg-transparent rounded-md text-gray-800 border border-sky-300 placeholder-slate-200 placeholder:text-xl text-xl focus:outline-offset-4 focus:outline-sky-500' type="text" />
                <label className='text-sky-900 font-semibold' htmlFor="consulta">Consulta</label>
                <textarea  className='py-1 px-2 bg-transparent rounded-md text-gray-800 border border-sky-300 placeholder-slate-200 placeholder:text-xl text-xl focus:outline-offset-4 focus:outline-sky-500' type="text" />
                <button className='bg-sky-600 h-14 py-2 px-3 rounded text-white text-2xl font-medium hover:bg-sky-400 mt-6 transition-all ease-in-out duration-300 '>Solicita tu cotización</button>
            </form>
        </>
    )
}

export default Form
