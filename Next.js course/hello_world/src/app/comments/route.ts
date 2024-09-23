
import { type NextRequest } from "next/server";
import {comments} from "./data"
import { Comment } from "postcss";


/// this is the   GET request 
export async function GET(request:NextRequest) {
  const searchParams=request.nextUrl.searchParams
  const query=searchParams.get("query")
  const filteredComments=query?comments.filter(Comment=>Comment.text.includes(query)):comments
  return  Response.json(filteredComments)  
}

/// this is the POST request 
export async function POST(request:Request){
const comment=await request.json ();
const newcomment={
    id:comments.length +1,
    text:comment.text
}
comments.push(newcomment)
    return new Response(JSON.stringify(newcomment),{
        headers:{
            "content-Type":"application/json"
        },
        status:201,
    })
}