import React from 'react';
import logo from '../assets/cor.png';

const Navbar = () => {
    return (
        <nav className='flex flex-row items-center justify-between pt-5 pb-2 fixed top-0 left-0 w-full z-50 shadow-sm backdrop-blur-md bg-sky-900 bg-opacity-10'>
            <div className='relative flex flex-row items-center justify-between  xl:gap-10 w-1/2 md:w-full'>
                <a href="#" className='w-48 flex flex-col items-center  justify-center xl:ml-auto xl:mr-auto select-none hover:cursor-pointer'>
                    <h1 className='logo text-4xl md:text-6xl text-white font-semibold leading-10'>cor.soft</h1>
                    <p className='logo text-white text-md md:text-lg tracking-widest '>web services</p>
                </a>
                <ul className='xl:gap-10 hidden md:flex flex-row'>
                    <a className='text-white text-lg font-medium hover:scale-110 transition-transform ease-in-out' href="#servicios">Servicios</a>
                    <a className='text-white text-lg font-medium hover:scale-110 transition-transform ease-in-out' href="#trabajos">Trabajos</a>
                    <a className='text-white text-md md:text-lg md:block hidden font-medium hover:scale-110 transition-transform ease-in-out' href="#faq">FAQ</a>
                </ul>
            </div>
            <ul className='flex flex-row w-1/2 md:w-full items-center justify-center xl:gap-10'>
                <a href='https://wa.me/5493518192829' target='_blank' rel='noreferrer'  className='bg-sky-500 py-2 px-3 rounded-lg text-white text-sm md:text-lg font-medium hover:bg-sky-400'>CONTACTANOS</a>
            </ul>
        </nav>
    );
};

export default Navbar;
