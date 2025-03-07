import React from 'react'
import mktImg from '../assets/marketing-img.jpg'



const SubHero = () => {
    return (
        <div className='md:py-40 py-20 flex flex-col items-center justify-center bg-slate-950'>
            <div className='container mx-auto flex flex-col items-center justify-center gap-20'>
                <div className='flex flex-row items-center justify-center gap-5'>
                    <div className='w-full md:w-1/2 px-6 md:px-0'>
                        <div className='flex flex-col md:items-start items-center justify-center gap-3 w-full'>
                            <p className='px-2 py-1 bg-sky-800 text-slate-200 rounded-md'>Maximiza resultados</p>
                            <h1 className='text-gray-100 text-center md:text-5xl text-4xl font-bold leading-none py-3'>Te ayudamos a vender más</h1>
                            <div>
                                <p className='text-gray-400 md:text-2xl text-xl py-2 text-start'>
                                    En cor-soft transformamos tu presencia digital en resultados tangibles. No solo gestionamos campañas, creamos experiencias que conectan con tu audiencia ideal.
                                </p>
                            </div>
                        </div>
                        <ul className='flex flex-col items-start justify-center gap-5 pt-5'>
                            <li className='text-gray-100 text-xl text-start flex flex-row items-center justify-center gap-2'><span className='rounded-full leading-none bg-sky-800'> <box-icon name='check' color='#3bc1e8' ></box-icon></span> Aumenta tu visibilidad online y alcanza a más clientes potenciales</li>
                            <li className='text-gray-100 text-xl text-start flex flex-row items-center justify-center gap-2'><span className='rounded-full leading-none bg-sky-800'> <box-icon name='check' color='#3bc1e8' ></box-icon></span> Convierte visitantes en clientes con estrategias de conversión probadas</li>
                            <li className='text-gray-100 text-xl text-start flex flex-row items-center justify-center gap-2'><span className='rounded-full leading-none bg-sky-800'> <box-icon name='check' color='#3bc1e8' ></box-icon></span> Fideliza a tu audiencia con comunicaciones personalizadas</li>
                            <li className='text-gray-100 text-xl text-start flex flex-row items-center justify-center gap-2'><span className='rounded-full leading-none bg-sky-800'> <box-icon name='check' color='#3bc1e8' ></box-icon></span> Optimiza tu inversión publicitaria con decisiones basadas en datos</li>
                        </ul>
                    </div>
                    <div className='w-1/2 hidden md:block'>
                        <img className=' rounded-lg overflow-hidden' src={mktImg} alt="imagen de marketing" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubHero