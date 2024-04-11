import { NextRequest, NextResponse } from "next/server";

const axios = require('axios');
export async function GET(request: NextRequest) {

    const options = {
      method: 'GET',
      url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
      params: {
        year: new Date().getFullYear(),
        limit: 8
      },
      headers: {
        'X-RapidAPI-Key': 'dd45c37c7bmsh10dec2d4f4d99d0p1854dbjsnfa7d7da63b6d',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
      }
    };
    
    try {
        const response = await axios.request(options);
        console.log(response.data);
        return NextResponse.json({status: true, data:response.data})
    } catch (error) {
        console.error(error);
        return NextResponse.json({status: false, error});
    }
}