import React from 'react'
import SearchBar from '@/components/SearchBar';
import Filters from '@/components/Filters';

export default function CarCatalogue({handleSetFuel, handleSetYear, fuel , year, handleModel}:any) {

    

    const carOptions = ['gas', 'diesel', 'electricity'];
    const yearOptions = ['2015','2016','2017','2018','2019','2020','2021','2022','2023','2024'];
    const setFilter = (value:string)=>{
        console.log('filter vlaue', value);
        if(yearOptions.includes(value)){
            handleSetYear(value);
        }
        else{
            handleSetFuel(value);
        }
    }
    return (
        <div className='w-[90%] mx-auto' id='carcatalogue'>
            <div>
                <h1 className='text-5xl font-bold '>Car Catalogue</h1>
                <p className='text-lg my-3'>Explore out cars you might like</p>
            </div>

            <div className='flex justify-between items-center'>
                <SearchBar  handleModel={handleModel}/>
                <div className='flex items-center'>
                    <Filters filterType={fuel} options={carOptions} setFilter={setFilter} key={0}/>
                    <Filters filterType={year} options={yearOptions} setFilter={setFilter} key={1}/>
                </div>
            </div>
        </div>
    )
}
