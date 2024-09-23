
//how to used middlewars in next of routing purpose's 


import { NextResponse, type NextRequest } from "next/server";

//first way to used the middleware
/// export function middleware(request:Request){
//     return NextResponse.redirect(new URL("/", request.url))
// }

// export const config={
//     matcher: '/profile',
// }


///second way to used the middlerware

// export function middleware(request:Request){
// if(request.nextUrl.pathname==="/profile"){
//     return NextResponse.rewrite(new URL("/", request.url))
// }
// }


// Cookies and Headers in Middlerwars

export function middleware(request: Request) {
    const response = NextResponse.next();
    const themePreference = request.cookies.get("theme");
    
    if (!themePreference) {
      response.cookies.set("theme", "light");
    }
  
response.headers.set("custom-header" , "Custom-value")
    return response;
  }



