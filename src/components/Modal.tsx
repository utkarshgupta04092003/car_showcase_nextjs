import Image from 'next/image'
import React from 'react'
import { ModalProps } from '../../types'

export default function Modal({ data, onClick }: ModalProps) {
    return (
        <div className=' fixed top-0 left-0 w-full h-screen bg-gray-50 '>
            <div className='fixed top-10 left-[30%] opacity-1 text-black'>

                <div  className="relative p-4 w-full max-w-xl max-h-full min-w-[400px]  ">
                    <div  className="relative bg-white rounded-lg shadow ">
                        <div  className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                            <h3  className="text-xl font-semibold text-gray-900 capitalize">
                                {data?.make} {data?.model}
                            </h3>
                            <button type="button"  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center 0" data-modal-hide="default-modal" onClick={() => onClick()}>
                                <svg  className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span  className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div  className="p-4 md:p-5 space-y-4 relative flex justify-center">
                            <Image src={'/pattern.png'} width={1000} height={1500} className='w-[90%] h-[150px] absolute' alt='pattern'/>
                            <div className='flex justify-center '>

                                <Image src={'/democar.webp'} width={1000} height={1500} className='w-[200px] h-[120px] 
                            relative' alt='democar'/>
                            </div>
                        </div>
                        <div className='flex justify-around mt-5'>

                            <div className='w-1/4 flex justify-center  '>
                                <Image src={'/carfront.webp'} width={500} height={500} alt='front'/>
                            </div>

                            <div className='w-1/4 flex justify-center  '>
                                <Image src={'/cartop.webp'} width={500} height={500} alt='top'/>
                            </div>

                            <div className='w-1/4 flex justify-center  '>
                                <Image src={'/carback.webp'} width={500} height={500} alt='back'/>
                            </div>

                        </div>

                        <div className="details  ">
                            <table className='table-auto   mx-auto w-[90%]'>
                                <tbody>
                                    <tr className="flex justify-between">
                                        <td>City Mpg</td>
                                        <td>{data?.city_mpg}</td>
                                    </tr>
                                    <tr className="flex justify-between">
                                        <td>Class</td>
                                        <td>{data?.class}</td>
                                    </tr>
                                    <tr className="flex justify-between">
                                        <td>Combination Mpg</td>
                                        <td>{data?.combination_mpg}</td>
                                    </tr>
                                    <tr className="flex justify-between">
                                        <td>Cylinders</td>
                                        <td>{data?.cylinders}</td>
                                    </tr>
                                    <tr className="flex justify-between">
                                        <td>Displacement</td>
                                        <td>{data?.displacement}</td>
                                    </tr>
                                    <tr className="flex justify-between">
                                        <td>Drive</td>
                                        <td>{data?.drive}</td>
                                    </tr>
                                    <tr className="flex justify-between">
                                        <td>Fuel Type</td>
                                        <td>{data?.fuel_type}</td>
                                    </tr>
                                    <tr className="flex justify-between">
                                        <td>Highway Mpg</td>
                                        <td>{data?.highway_mpg}</td>
                                    </tr>
                                    <tr className="flex justify-between">
                                        <td>Make</td>
                                        <td>{data?.make}</td>
                                    </tr>
                                    <tr className="flex justify-between">
                                        <td>Model</td>
                                        <td>{data?.model}</td>
                                    </tr>
                                    <tr className="flex justify-between">
                                        <td>Transmission</td>
                                        <td>{data?.transmission}</td>
                                    </tr>
                                    <tr className="flex justify-between">
                                        <td>Year</td>
                                        <td>{data?.year}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
