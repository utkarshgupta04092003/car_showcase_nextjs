'use client';
import React, { useState } from 'react'
import { FiltersProps } from '../../types';

export default function Filters({filterType, options, setFilter}: FiltersProps) {

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () =>{
        setIsOpen(!isOpen);
    }
    
    return (
        <div className='m-3 relative '>

            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"  className="text-black bg-white hover:bg-gray-100 focus:ring-1 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center border border-gray-300 shadow-sm" type="button" onClick={handleClick}>{filterType || "Select"} <svg  className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
            </button>

            <div id="dropdown" className={`${!isOpen ? "hidden" : "flex"} z-10 bg-white divide-y divide-gray-100 rounded-lg shadow 0 absolute overflow-scroll  overflow-x-hidden`}
            onClick={handleClick}>
                <ul  className="py-2 text-sm text-gray-700 max-h-60 " aria-labelledby="dropdownDefaultButton">
                    
                    {
                        options?.map((option, index)=>(

                            <li onClick={()=>setFilter(option)}>
                                <span className="block px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer" key={index}>{option}</span>
                            </li>
                        ))
                    }
                    
                </ul>
            </div>

        </div>
    )
}
