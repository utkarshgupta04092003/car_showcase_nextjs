import { NextRequest, NextResponse } from "next/server";
const axios = require('axios');
export async function GET(request: NextRequest) {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const API_Host = process.env.NEXT_PUBLIC_API_Host;
  const options = {
    method: 'GET',
    url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    params: {
      year: new Date().getFullYear(),
      limit: 8
    },
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_Host,
    }
  };
  try {
    const response = await axios.request(options);
    return NextResponse.json({ status: true, data: response.data })
  } catch (error) {
    return NextResponse.json({ status: false, error });
  }
}