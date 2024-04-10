'use client';
import React from 'react'
import CustomButton from './CustomButton';


export default function Header() {
  return (
    <div className='fixed z-10 w-full flex justify-between items-center p-2 px-10 bg-white md:bg-transparent'>
      <h1 className='font-bold text-2xl bg-white select-none cursor-pointer'>CarPool</h1>
      <div>
        <CustomButton title="Signin" buttonStyle={`bg-blue-600 md:bg-white rounded-full p-3 px-5 text-white md:text-blue-600`}/> 
      </div>
    </div>
  )
}
