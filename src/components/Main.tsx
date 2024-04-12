'use client';
import React, { useEffect, useState } from 'react'
import CarCatalogue from './CarCatalogue'
import CarContainer from './CarContainer'
import { Data } from '../../types';
import axios from 'axios';

export default function Main() {

    const [fuel, setFuel] = useState<string>();
    const [year, setYear] = useState<string>();
    const [data, setData] = useState<Data[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
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
            finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    const fetchFilteredData = async (fuel: string | undefined, year: string | undefined) => {
        try {
            setIsLoading(true);
            const { data } = await axios.post('/api/getfilterdata', { fuel, year });
            console.log('filtered data', data);
            if (data.status) {
                setData(data.data);
            }
            else {
                alert('something went wrong');
            }


        } catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false);
        }
    }
    const fetchDataByModel = async (make: string | undefined, model: string | undefined) => {
        try {
            setIsLoading(true);
            const { data } = await axios.post('/api/filterbymodel', { make, model });
            console.log('filtered data', data);
            if (data.status) {
                setData(data.data);
            }
            else {
                alert('something went wrong');
            }


        } catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false);
        }
    }

    const handleLoadMore = async () =>{
        console.log('clicked handle load more');
        try {
            const {data:resdata} = await axios.get('/api/loadmore');
            console.log('fetched data', data);
            if(resdata.status){
                setData(data?.concat(resdata.data) || null);
            }
            
        } catch (error) {
            alert("Something went wrong");
        }
    }


    const handleSetFuel = async (value: string) => {
        console.log('set fuel', value)
        setFuel(value);
        fetchFilteredData(value, year);
    }
    const handleSetYear = async (value: string) => {
        console.log('set year', value);
        setYear(value);
        fetchFilteredData(fuel, value);
    }
    const handleModel = (make: string, model: string) => {
        console.log(make, model);
        fetchDataByModel(make, model);
    }

    return (
        <div>
            <CarCatalogue handleSetFuel={handleSetFuel} handleSetYear={handleSetYear} year={year} fuel={fuel} handleModel={handleModel} />
            {
                isLoading ? <p className='text-2xl font-semibold text-center my-32'>Loading...</p> :
                    <CarContainer data={data} handleLoadMore={handleLoadMore} />
            }

        </div>
    )
}
