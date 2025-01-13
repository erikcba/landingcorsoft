import React from 'react';
import logo from '../assets/cor.png';

const Navbar = () => {
    return (
        <nav className='flex flex-row items-center justify-between pt-5 pb-2 fixed top-0 left-0 w-full z-50 shadow-sm backdrop-blur-md bg-sky-900 bg-opacity-10'>
            <div className='relative flex flex-row items-center justify-between xl:gap-10 w-full'>
                <a href="#" className='w-48 flex flex-col items-center justify-center mx-auto xl:ml-auto xl:mr-auto select-none hover:cursor-pointer'>
                    <h1 className='logo text-6xl text-white font-semibold leading-10'>cor.soft</h1>
                    <p className='logo text-white text-lg tracking-widest'>web services</p>
                </a>
                <ul className='xl:gap-10 hidden sm:flex flex-row'>
                    <a className='text-white text-lg font-medium hover:scale-110 transition-transform ease-in-out' href="#servicios">Servicios</a>
                    <a className='text-white text-lg font-medium hover:scale-110 transition-transform ease-in-out' href="#trabajos">Trabajos</a>
                    <a className='text-white text-lg font-medium hover:scale-110 transition-transform ease-in-out' href="#precios">Precios</a>
                </ul>
            </div>
            <ul className='hidden sm:flex flex-row w-full items-center justify-center xl:gap-10'>
                <a className='text-white text-lg font-medium hover:scale-110 transition-transform ease-in-out' href="">FAQ</a>
                <button className='bg-sky-500 py-2 px-3 rounded-lg text-white text-lg font-medium hover:bg-sky-400'>CONTACTANOS</button>
            </ul>
        </nav>
    );
};

export default Navbar;
