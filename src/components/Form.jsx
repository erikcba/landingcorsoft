import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Form = () => {
    const [state, handleSubmit] = useForm("xdkenykb");
    const [errors, setErrors] = useState({});

    const validateForm = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        let newErrors = {};

        if (!formData.get("name").trim()) newErrors.name = "El nombre es obligatorio";
        if (!formData.get("mail").trim()) newErrors.mail = "El email es obligatorio";
        if (!/\S+@\S+\.\S+/.test(formData.get("mail"))) newErrors.mail = "Ingresa un email válido";
        if (!formData.get("empresa").trim()) newErrors.empresa = "La empresa es obligatoria";
        if (!formData.get("message").trim()) newErrors.message = "El mensaje es obligatorio";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            handleSubmit(event);
        }
    };

    return (
        <form onSubmit={validateForm} className='grid grid-cols-1 gap-2 w-full backdrop-blur-lg bg-white rounded-lg p-7'>
            <h1 className='text-sky-900 text-2xl font-semibold'>Solicitá información</h1>

            <label className='text-sky-900 font-semibold' htmlFor="name">Nombre</label>
            <input name="name" id="name" className='h-12 px-4 bg-transparent rounded-md text-gray-800 border border-sky-300 text-xl focus:outline-offset-4 focus:outline-sky-500' type="text" />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <label className='text-sky-900 font-semibold' htmlFor="mail">Mail</label>
            <input name="mail" id="mail" className='h-12 px-4 bg-transparent rounded-md text-gray-800 border border-sky-300 text-xl focus:outline-offset-4 focus:outline-sky-500' type="email" />
            {errors.mail && <p className="text-red-500 text-sm">{errors.mail}</p>}
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <label className='text-sky-900 font-semibold' htmlFor="empresa">Empresa</label>
            <input name="empresa" id="empresa" className='h-12 px-4 bg-transparent rounded-md text-gray-800 border border-sky-300 text-xl focus:outline-offset-4 focus:outline-sky-500' type="text" />
            {errors.empresa && <p className="text-red-500 text-sm">{errors.empresa}</p>}

            <label className='text-sky-900 font-semibold' htmlFor="message">Consulta</label>
            <textarea name="message" id="message" className='py-1 px-2 bg-transparent rounded-md text-gray-800 border border-sky-300 text-xl focus:outline-offset-4 focus:outline-sky-500'></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            {state.succeeded ? (
                <p className='h-14 py-2 px-3 rounded text-sky-600 text-xl text-center font-medium mt-6'>
                    ¡Mensaje enviado!
                </p>
            ) : (
                <button type="submit" disabled={state.submitting} className='bg-sky-600 h-14 py-2 px-3 rounded text-white text-xl font-medium hover:bg-sky-400 mt-6 transition-all'>
                    Solicita tu cotización
                </button>
            )}
        </form>
    );
};

export default Form;

