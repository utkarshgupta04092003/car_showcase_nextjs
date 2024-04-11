'use client';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CarCard from './CarCard';
import Modal from './Modal';

interface CarData {
    // Define properties of your car data here
}

export default function CarContainer() {
    const [data, setData] = useState<CarData[] | null>(null);
    const [modalData, setModalData] = useState<CarData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!localStorage.getItem('cars')) {
                    const { data } = await axios.get('/api/getdata');
                    if (data.status) {
                        setData(data.data);
                        localStorage.setItem('cars', JSON.stringify(data.data))
                        console.log('api called');
                    }
                } else {
                    const dataString = localStorage.getItem('cars');
                    const data = dataString ? JSON.parse(dataString) : null;
                    console.log('local storage called')
                    setData(data);
                }
            } catch (error) {
                alert('Something went wrong');
            }
        }
        fetchData();
    }, []);

    const handleModal = (index: number) => {
        console.log('clicked', index);
        if (index === -1)
            setModalData(null);
        else
            setModalData(data ? data[index] : null);
    }

    return (
        <div className='w-[90%] mx-auto flex justify-center md:justify-between flex-wrap my-16'>
            {data?.map((d, index) => (
                <CarCard key={index} data={d} index={index} onClick={handleModal} />
            ))}
            {modalData && <Modal data={modalData} onClick={handleModal} />}
        </div>
    )
}
