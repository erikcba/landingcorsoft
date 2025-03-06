import React from 'react'
import mktImg from '../assets/marketing-img.jpg'



const SubHero = () => {
    return (
        <div className='py-32 flex flex-col items-center justify-center bg-slate-950'>
            <div className='container mx-auto flex flex-col items-center justify-center gap-20'>
                <div className='flex flex-row items-center justify-center gap-5'>
                    <div className='w-1/2'>
                        <div className='flex flex-col items-start justify-center gap-3 w-full'>
                            <p className='px-2 py-1 bg-sky-800 text-slate-200 rounded-md'>Maximiza resultados</p>
                            <h1 className='text-gray-100 text-center text-5xl font-bold leading-none py-3'>Te ayudamos a vender más</h1>
                            <div>
                                <p className='text-gray-400 text-2xl py-2 text-start'>
                                    En cor-soft transformamos tu presencia digital en resultados tangibles. No solo gestionamos campañas, creamos experiencias que conectan con tu audiencia ideal.
                                </p>
                            </div>
                        </div>
                        <ul className='flex flex-col items-start justify-center gap-5 pt-5'>
                            <li className='text-gray-300 text-xl text-start flex flex-row items-center justify-center gap-2'><box-icon name='check' color='#0be61b' ></box-icon> Aumenta tu visibilidad online y alcanza a más clientes potenciales</li>
                            <li className='text-gray-300 text-xl text-start flex flex-row items-center justify-center gap-2'><box-icon name='check' color='#0be61b' ></box-icon> Convierte visitantes en clientes con estrategias de conversión probadas</li>
                            <li className='text-gray-300 text-xl text-start flex flex-row items-center justify-center gap-2'><box-icon name='check' color='#0be61b' ></box-icon> Fideliza a tu audiencia con comunicaciones personalizadas</li>
                            <li className='text-gray-300 text-xl text-start flex flex-row items-center justify-center gap-2'><box-icon name='check' color='#0be61b' ></box-icon> Optimiza tu inversión publicitaria con decisiones basadas en datos</li>
                        </ul>
                    </div>
                    <div className='w-1/2'>
                        <img className=' rounded-lg overflow-hidden' src={mktImg} alt="imagen de marketing" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubHero