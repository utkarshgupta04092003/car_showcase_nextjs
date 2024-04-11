'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import Modal from '@/components/Modal';
import { CarCardProps } from '../../types';
export default function CarCard({data, index, onClick}: CarCardProps) {


  return (
    <div className='hover:shadow-lg rounded-3xl bg-blue-50 hover:bg-white min-w-[250px]  p-3 w-[23%] group/button mt-10'>

      <h1 className='font-semibold text-2xl pl-5'>{data?.make} {data?.model}</h1>
      <div className="rate text-2xl pl-5 my-3">
        <sup>$</sup><span className='font-semibold'>52 </span><sub>/day</sub>
      </div>
      <div className="img w-full my-5">
        <Image src={'/democar.webp'} height={1000} width={1000} alt='demo car' className='w-full' />
      </div>
      <div className="details flex justify-around my-5 group-hover/button:hidden">


        <div className="automatic flex-col items-center justify-center">
        <Image src={'/steering-wheel.svg'} height={25} width={25} alt='automatic' className='mx-auto' />
          <p>Automatic</p>
        </div>

        <div className="automatic flex-col items-center justify-center">
        <Image src={'/tire.svg'} height={25} width={25} alt='automatic' className='mx-auto' />
          <p className='capitalize'>{data?.drive}</p>
        </div>


        <div className="automatic flex-col items-cener justify-center">
          <Image src={'/gas.svg'} height={25} width={20} alt='automatic' className='mx-auto' />
          <p>1{data?.city_mpg}MPG</p>
        </div>

        
      </div>

      <div className="btn hidden group-hover/button:flex  p-2 w-[90%] bg-blue-600 text-white rounded-full mx-auto text-center justify-around items-center" onClick={()=>onClick(index)}>View more
      <Image src={'/right-arrow.svg'} width={30} height={20} alt='right arrow'/></div>

    
      
    </div>
  )
}
