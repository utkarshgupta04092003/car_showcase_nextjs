'use client';
import React, { useState } from 'react'

export default function Filters({filterType, options}) {

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () =>{
        setIsOpen(!isOpen);
    }
    
    return (
        <div className='m-3 m relative '>

            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-black bg-white hover:bg-gray-100 focus:ring-1 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center border border-gray-300 shadow-sm" type="button" onClick={handleClick}>{filterType} <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
            </button>

            <div id="dropdown" className={`${!isOpen ? "hidden" : "flex"} z-10 bg-white divide-y divide-gray-100 rounded-lg shadow 0 absolute overflow-scroll`}
            onClick={handleClick}>
                <ul class="py-2 text-sm text-gray-700 max-h-48 " aria-labelledby="dropdownDefaultButton">
                    
                    {
                        options?.map((option, index)=>(

                            <li>
                                <span class="block px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer" key={index}>{option}</span>
                            </li>
                        ))
                    }
                    
                </ul>
            </div>

        </div>
    )
}
