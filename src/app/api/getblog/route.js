import { NextResponse } from "next/server"
import fsPromises from 'fs/promises';

export async function GET(request,content){
    // slug
    let url= request.url;
    const searchParams = new URLSearchParams(url.split("?")[1]);
    const slug = searchParams.get("slug");

    // read data and send response 
    const jsonData = await fsPromises.readFile(`src/app/blogData/${slug}.json`);
    // Parse data as json
    const objectData = JSON.parse(jsonData);

    return NextResponse.json(objectData)
} 