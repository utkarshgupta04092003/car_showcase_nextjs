import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
export async function POST(request: NextRequest) {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    const API_Host = process.env.NEXT_PUBLIC_API_Host;

   

    try {
        const {make, model} = await request.json();
        
        const options = {
            method: 'GET',
            url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
            params: {
                limit: 8,
                make: make || 0,
                model: model || 0
            },
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': API_Host,
            }
        };

        const response = await axios.request(options);
        // console.log(response.data);
        return NextResponse.json({status: true,make, model, data: response.data});


    } catch (error) {
        return NextResponse.json({ status: false, error, msg: "Internal Server Error" });
    }
}