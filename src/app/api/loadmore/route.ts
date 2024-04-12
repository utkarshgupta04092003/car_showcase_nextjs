import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(){
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    const API_Host = process.env.NEXT_PUBLIC_API_Host;

    try {
        const options = {
            method: 'GET',
            url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
            params: {
                limit: 8,
                year: new Date().getFullYear()
            },
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': API_Host,
            }
        };

        const response = await axios.request(options);
        return NextResponse.json({status: true, data: response.data});
        
    } catch (error) {
        return NextResponse.json({status: false, msg: 'Something went wrong', error});
    }
}