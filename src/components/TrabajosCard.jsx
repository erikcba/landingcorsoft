import React from 'react'

const TrabajosCard = ({ titulo, icono, descripcion, link, bgClass }) => {
    return (
        <div className={`h-96 relative ${bgClass} bg-cover overflow-hidden bg-top select-none`}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <div className='relative z-10 backdrop-blur-none hover:backdrop-blur-sm hover:scale-105 transition-all duration-500 flex flex-col gap-4 h-full w-full items-start p-10 justify-end  bg-black bg-opacity-30 '>
                <div className='flex flex-row items-center gap-2 justify-center'>
                    {icono}
                    <h2 className='text-4xl font font-semibold text-white '>{titulo}</h2>
                </div>
                <div className='flex flex-col gap-4 justify-end items-start '>
                    <p className='text-gray-100 '>{descripcion}</p>
                    <a className='flex flex-row items-center gap-2 justify-center' href={link}>
                        <button className='bg-zinc-900 flex flex-row items-center rounded justify-center gap-3 text-gray-100 font-medium py-2 px-3'><box-icon name='show' size='sm' color='#29bbef' ></box-icon> Ver proyecto</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TrabajosCard
