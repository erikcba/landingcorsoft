import React from 'react'
import FaqItem from '../components/FaqItem'

const Faq = () => {

    const preguntas = [
        {
            pregunta: "¿En cuánto tiempo recibo mi sitio web?",
            respuesta:"En un plazo máximo de 15 dias hábiles recibirás tu sitio web completo y funcionando."
        },
        {
            pregunta: "¿Qué incluye el servicio?",
            respuesta: "Vas a recibir el sitio web de tu negocio con soporte técnico y la estrategia de anuncios que mejor se adapte a vos. A su vez durante el tiempo que dure la campaña se incluyen modificaciones al sitio y ajustes de la campaña publicitaria."

        },
        {
            pregunta: "¿Necesito pagar mantenimiento?",
            respuesta: "Se paga una mensualidad para el mantenimiento y optimización de anuncios, y el correcto funcionamiento de tu página web."
        },
        {
            pregunta: "¿Cómo puedo pagar?",
            respuesta: "Aceptamos todos los medios de pago. Si abonás por medio de trasnferencia bancaria obtenés un 15% de descuento."
        }
    ]

    return (
        <div id='faq' className='container mx-auto my-40 flex flex-col gap-20 items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-gray-100 text-center text-5xl font-bold leading-none pb-4 px-4'>Preguntas Frecuentes</h1>
                <p className='text-gray-400 text-2xl'>Resuelve tus dudas en esta sección</p>
            </div>
            <ul className='flex flex-col gap-12 w-full '>
                {
                    preguntas.map((item, index) => (
                        <FaqItem key={index} pregunta={item.pregunta} respuesta={item.respuesta} />
                    ))
                }
            </ul>
        </div>
    )
}

export default Faq