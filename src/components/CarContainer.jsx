'use client';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CarCard from './CarCard';
import Modal from './Modal';

export default function CarContainer() {
    const [data, setData] = useState();
    const [modalData, setModalData] = useState();
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
                }
                else {
                    const data = JSON.parse(localStorage.getItem('cars'));
                    console.log('local storage called')
                    setData(data);
                }
            } catch (error) {
                alert('Something went wrong');
            }
        }
        fetchData();

    }, []);
    const handleModal = (index) => {
        console.log('clicked', index);
        if (index == -1)
            setModalData('');
        else
            setModalData(data[index]);
    }
    return (
        <div className='w-[90%] mx-auto flex justify-center md:justify-between flex-wrap my-16'>

            {
                data?.map((d, index) => (
                    <CarCard data={d} index={index} onClick={handleModal} />
                ))
            }

            {(modalData) && <Modal data={modalData} onClick={handleModal}/>}


        </div>
    )
}
