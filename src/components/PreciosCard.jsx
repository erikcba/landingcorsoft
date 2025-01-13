import React from 'react'

const PreciosCard = ({ titulo, descripcion, precio, caracteristica }) => {
    return (
        <div className='bg-slate-800 sm:w-1/3 w-full border border-slate-700 rounded-md hover:border-cyan-600 hover:shadow-cyan-950 transition-all ease-in-out shadow-lg select-none'>
            <div className='flex flex-col items-start justify-between h-full p-5 sm:p-10 gap-10'>
                <div className='flex flex-col'>
                    <h1 className='text-zinc-100 font-semibold sm:pb-0 pb-4 text-3xl'>{titulo}</h1>
                    <p className='text-zinc-400 text-md sm:text-lg'>{descripcion}</p>
                </div>
                <div className='flex flex-col sm:flex-row items-center sm:items-end gap-2 mx-auto'>
                    <h1 className='text-zinc-100 font-bold text-3xl sm:text-4xl'>{precio}</h1>
                    <p className='text-zinc-400 font-medium'>/proyecto</p>
                </div>
                <ul>
                    {caracteristica}
                </ul>
                <div className='flex justify-center w-full'>
                    <button className='bg-cyan-600 flex flex-row items-center rounded justify-center gap-3 text-gray-100 font-medium py-2 px-3 w-full hover:bg-cyan-400 transition-all duration-300 ease-in-out ' >Empezá ahora</button>
                </div>
            </div>
        </div>
    )
}

export default PreciosCard
