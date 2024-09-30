import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import {hash} from "bcrypt"
import * as z from 'zod'

//define a schema for input validation
const userSchema= z.object({
    username: z.string().min(1, "Username is required").max(30),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  })
 



export async function POST(req:Request){
 try{

const body= await req.json()
const{email ,username, password}= userSchema.parse(body);


// checking if the email is allready existis
const existingUserByEmail=await db.user.findUnique({
    where: {email:email}
})
if(existingUserByEmail){
    return NextResponse.json({user:null, message: 'users with this email already exists'}, {status:409})
}


// checking if the  username is allready existis
const existingUserByUsername=await db.user.findUnique({
    where: {username:username}
})
if(existingUserByUsername){
    return NextResponse.json({user:null, message: 'users with this username already exists'}, {status:409})
}

const hasedPassword=await hash(password, 10)
const newUser=await db.user.create({
    data:{

        username,
        email,
        password:hasedPassword
    }
})

const {password: newUserPassword, ...rest}=newUser
 return NextResponse.json({user:rest, message:"user created success fully"},{status:201})
 }
 
 catch(error){
    return NextResponse.json(
        { message: "Something went wrong, please try again!" }, 
        { status: 500 }
      );
    }
 }

