import React from 'react'

const TrabajosCard = ({ titulo, icono, descripcion, link, bgClass }) => {
    return (
        <div className={`h-96 relative ${bgClass} bg-cover rounded-md overflow-hidden group bg-top select-none`}>
            <div className="absolute inset-0 rounded-md bg-gradient-to-b from-transparent to-black"></div>
            <div className='relative z-10 h-full w-full bg-black rounded-md bg-opacity-30 backdrop-blur-none group-hover:backdrop-blur-sm transition-all duration-500'>
                <div className=' relative z-10 flex flex-col gap-4 h-full w-full items-start p-10 justify-end transition-all duration-500 '>
                    <div className='flex flex-row items-center gap-2 justify-center  '>
                        {icono}
                        <h2 className='text-4xl font font-semibold text-white '>{titulo}</h2>
                    </div>
                    <div className='flex flex-col gap-4 justify-end items-start '>
                        <p id='cardDescription' className='text-gray-100 '>{descripcion}</p>
                        <a className='flex flex-row items-center gap-2 justify-center' href={link}>
                            <button className='bg-cyan-600 flex flex-row items-center rounded justify-center gap-3 text-gray-100 font-medium py-2 px-3'><box-icon name='link-external' size='sm' color='white' ></box-icon> Ver proyecto</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrabajosCard
