import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
export async function POST(request: NextRequest) {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    const API_Host = process.env.NEXT_PUBLIC_API_Host;

   

    try {
        const {fuel, year} = await request.json();
        const options = {
            method: 'GET',
            url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
            params: {
                limit: 8,
                fuel: fuel || 0,
                year: year || 2024
            },
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': API_Host,
            }
        };

        const response = await axios.request(options);
        // console.log(response.data);
        return NextResponse.json({status: true, fuel, year, data: response.data});


    } catch (error) {
        return NextResponse.json({ status: false, error, msg: "Internal Server Error" });
    }
}