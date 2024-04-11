import React from 'react'
import SearchBar from '@/components/SearchBar';
import Filters from '@/components/Filters';

export default function CarCatalogue() {
    const carOptions = ["Fuel", "Gas", "Electricity"];
    const yearOptions = ['2015','2016','2017','2018','2019','2020','2021','2022','2023','2024'];
    return (
        <div className='w-[90%] mx-auto'>
            <div>
                <h1 className='text-5xl font-bold '>Car Catalogue</h1>
                <p className='text-lg my-3'>Explore out cars you might like</p>
            </div>

            <div className='flex justify-between items-center'>
                <SearchBar />
                <div className='flex items-center'>
                    <Filters filterType="Fuel" options={carOptions}/>
                    <Filters filterType="Year" options={yearOptions}/>
                </div>
            </div>
        </div>
    )
}
