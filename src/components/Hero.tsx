'use client';
import React from 'react'
import CustomButton from './CustomButton';
import Image from 'next/image';
import './custom.css'

export default function Hero() {

    const handleButton = () => {
        const scrollToContact = () => {
            const contactSection = document.getElementById('carcatalogue');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        };
        scrollToContact();
    }


    return (
        <div className='w-fullflex-1 md:flex'>

            <div className='flex-col w-full md:w-1/2 py-16 md:pt-32 p-16 sm:p-24 md:p-32 justify-around items-stretch'>
                <h1 className='font-bold text-5xl lg:text-7xl leading-tight'>Find, book, rent a car—quick and super easy!</h1>
                <p className='text-2xl my-5 md:my-10'>Streamline your car rental experience with our effortless booking process.</p>

                <CustomButton title="Explore Cars" buttonStyle=' p-2 px-6 rounded-full bg-blue-600 text-white text-lg hover:bg-blue-700' handleClick={handleButton} />
            </div>

            <div
                className="right w-full md:w-2/3 h-[75vh] md:h-[90vh] md:flex items-center hidden overflow-hidden">
                <div className=' flex justify-end relative '>
                    <Image src={'/hero2.png'} alt='hero image' width={200000} height={100000}
                        className='w-4/5 md:w-[90%] mr-5 ' />
                    <div className='hero__image-overlay overflow-hidden '></div>
                </div>


            </div>
        </div>
    )
}
