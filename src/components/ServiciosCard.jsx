import React from 'react'

const ServiciosCard = ({ titulo, descripcion, icono }) => {
    return (
        <div className='group backdrop-blur-md bg-gray-950 bg-opacity-50 rounded-md  transition-all ease-in-out shadow-md select-none hover:shadow-xl p-5 flex flex-col items-center justify-start gap-4'>
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
