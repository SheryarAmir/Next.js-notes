
import {comments} from "./data"

export async function GET() {
  return new Response(JSON.stringify(comments), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}


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