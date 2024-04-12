'use client';
import React, { useEffect, useState } from 'react'
import CarCard from './CarCard';
import Modal from './Modal';
import { CarContainerProps, Data } from '../../types';
import CustomButton from './CustomButton';


export default function CarContainer({ data, handleLoadMore }: CarContainerProps) {
    const [modalData, setModalData] = useState<Data | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleModal = (index: number) => {
        console.log('clicked', index);
        if (index === -1)
            setModalData(null);
        else
            setModalData(data ? data[index] : null);
    }
    const handleLoading = () => {
        setIsLoading(true);
    }
    useEffect(() => {
        setIsLoading(false);
    }, [data])

    return (
        <>
            <div className='w-[90%] mx-auto flex justify-center md:justify-between flex-wrap my-16'>
                {Array.isArray(data) && data?.map((d: Data, index: number) => (
                    <CarCard key={index} data={d} index={index} onClick={handleModal} />
                ))}
                {modalData && <Modal data={modalData} onClick={handleModal} />}

            </div>
            <div className='w-full flex justify-center'>

                {
                    isLoading ?
                        <CustomButton title="Loading..." buttonStyle={`p-2 px-5 rounded-full bg-blue-600 text-white`} /> :

                        <div onClick={handleLoading}>

                            <CustomButton title="Load More" buttonStyle={`p-2 px-5 rounded-full bg-blue-600 text-white`} handleClick={handleLoadMore} />
                        </div>
                }
            </div>
            <div className='h-0 w-[75%] mx-auto my-3 border'></div>
        </>
    )
}
