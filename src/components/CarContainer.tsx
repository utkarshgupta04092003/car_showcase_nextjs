'use client';
import React, { useState } from 'react'
import CarCard from './CarCard';
import Modal from './Modal';
import { CarContainerProps, Data } from '../../types';


export default function CarContainer({ data }: CarContainerProps) {
    const [modalData, setModalData] = useState<Data | null>(null);



    const handleModal = (index: number) => {
        console.log('clicked', index);
        if (index === -1)
            setModalData(null);
        else
            setModalData(data ? data[index] : null);
    }

    return (
        <div className='w-[90%] mx-auto flex justify-center md:justify-between flex-wrap my-16'>
            {Array.isArray(data) && data?.map((d:Data, index:number) => (
                <CarCard key={index} data={d} index={index} onClick={handleModal} />
            ))}
            {modalData && <Modal data={modalData} onClick={handleModal} />}
        </div>
    )
}
