//  Work with route handlers and Headers
// get header ans set headers using thunder sstrom

import { type NextRequest } from "next/server"
import { headers ,cookies } from "next/headers";
export async function GET(request:Request){

      const requestHeaders=new Headers(request.headers);
      const headerList=headers()


      cookies().set("resultsPerPage", "20") // HOW TO SET COOKIES IN HEADERS THERE ARE TWO WAYS BY FUNCTION AND BY Responce method.
            const Theme=request.cookies.get("theme")  //

      console.log(requestHeaders.get("Authorization"))
      console.log(headerList.get("Authorization"))

     console.log(Theme) 
     return new Response("<h1>Profile API data<h1/>",{
        headers:{
            "content-Type":"text/html",
        "Set-Cookie":"theme=dark"
        }
    })
}


