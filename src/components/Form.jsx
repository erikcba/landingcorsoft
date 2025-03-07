import React, { useState } from 'react'


const Form = () => {

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [consulta, setConsulta] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        
    }



    return (
        <>
            <form onSubmit={handleSubmit} data-aos="fade-left" className='grid grid-cols-1 gap-2 w-full backdrop-blur-lg bg-white rounded-lg p-7' action="">
                <h1 className='text-sky-900 text-2xl font-semibold' >Solicitá información</h1>
                <label className='text-sky-900 font-semibold' htmlFor="name">Nombre</label>
                <input onChange={e => setName(e.target.value)} required className='h-12 px-4 bg-transparent rounded-md text-gray-800 border border-sky-300 placeholder-slate-200 placeholder:text-xl text-xl focus:outline-offset-4 focus:outline-sky-500'  type="text" />
                <label className='text-sky-900 font-semibold' htmlFor="mail">Mail</label>
                <input onChange={e => setMail(e.target.value)} required className='h-12 px-4 bg-transparent rounded-md text-gray-800 border border-sky-300 placeholder-slate-200 placeholder:text-xl text-xl focus:outline-offset-4 focus:outline-sky-500' type="mail" />
                <label className='text-sky-900 font-semibold' htmlFor="phone">Empresa</label>
                <input onChange={e => setPhone(e.target.value)} required className='h-12 px-4 bg-transparent rounded-md text-gray-800 border border-sky-300 placeholder-slate-200 placeholder:text-xl text-xl focus:outline-offset-4 focus:outline-sky-500' type="text" />
                <label className='text-sky-900 font-semibold' htmlFor="consulta">Consulta</label>
                <textarea onChange={e => setConsulta(e.target.value)} required  className='py-1 px-2 bg-transparent rounded-md text-gray-800 border border-sky-300 placeholder-slate-200 placeholder:text-xl text-xl focus:outline-offset-4 focus:outline-sky-500' type="text" />
                <button className='bg-sky-600 h-14 py-2 px-3 rounded text-white text-2xl font-medium hover:bg-sky-400 mt-6 transition-all ease-in-out duration-300 '>Solicita tu cotización</button>
            </form>
        </>
    )
}

export default Form
