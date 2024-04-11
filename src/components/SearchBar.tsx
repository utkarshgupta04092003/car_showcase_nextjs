import Image from 'next/image'
import React from 'react'

export default function SearchBar() {
  return (
    <div className='w-1/2 flex mt-10'>
      <div className=' flex p-2 bg-gray-100 pl-3 rounded-l-full w-1/2'>
        <Image src={'/car-logo.svg'} width={30} height={30} alt='input logo'/>
        <input type="text" className='outline-none p-1 ml-2 bg-gray-100'
        placeholder='Volkswagen...'/>
      </div>

      <div className=' flex p-2 bg-gray-100 pl-3 rounded-r-full w-1/2'>
        <Image src={'/model-icon.png'} width={30} height={30} alt='input logo'/>
        <input type="text" className='outline-none p-1 ml-2 bg-gray-100'
        placeholder='Tiguan...'/>
      </div>

      <div className="btn flex items-center">
        <button>
          <Image src={'/magnifying-glass.svg'} width={50} height={50} alt='search logo'/>
        </button>
      </div>
     
    </div>
  )
}
