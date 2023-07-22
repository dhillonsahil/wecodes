// import * as fs from 'fs';
import { NextResponse } from 'next/server';
import fsPromises from 'fs/promises';

export async function GET(request) {
    try {
        const objectData = await fsPromises.readdir("src/app/blogData");
        const allBlogs = [];

        for (const item of objectData) {
            const jsonData = await fsPromises.readFile(`src/app/blogData/${item}`, 'utf-8');
            const data = JSON.parse(jsonData);
            allBlogs.push(data);
            console.log(data); // it works and shows name 
        }

        console.log(allBlogs); // array of objects with data

        return NextResponse.json(allBlogs);
    } catch (error) {
        console.error("Error reading files:", error);
        return NextResponse.error(error);
    }
}
