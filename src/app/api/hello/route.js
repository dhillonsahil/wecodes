// **************************
// Sending String as Data
// **************************
// export async function GET(request){
    //     return new Response("Hello sir !")
    // }
    
    
    
// **************************
// Sending Json as Data
// **************************
import { NextResponse } from "next/server"
export async function GET(request){
    return NextResponse.json({name:"sahil"},{status:200})
}