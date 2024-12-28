import React from 'react'

const ServiciosCard = ({ titulo, descripcion, icono }) => {
    return (
        <div className='group backdrop-blur-md bg-slate-800 bg-opacity-50 border rounded-md border-slate-700 hover:border-cyan-600 hover:shadow-cyan-950 transition-all ease-in-out shadow-lg select-none p-5 flex flex-col items-center justify-start gap-4'>
            <div className='flex flex-col items-center justify-center h-40 '>
                <div className='group-hover:animate-pulse '>
                    {icono}
                </div>
                <h1 className='text-2xl font-semibold text-white text-center w-full'>{titulo}</h1>
            </div>
            <div className='border-t border-slate-500 w-full pt-4'>
                <p className='text-gray-300 text-md font-normal text-left my-auto py-4'>{descripcion}</p>
            </div>
        </div>
    )
}

export default ServiciosCard
