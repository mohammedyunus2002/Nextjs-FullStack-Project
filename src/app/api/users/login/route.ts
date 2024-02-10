import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'; 
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// import Cors from 'cors'

// const cors = Cors({
//   methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
//   origin: "*",
//   optionsSuccessStatus: 200,
// });

// async function runMiddleware(req: NextRequest, res: NextResponse, fn: Function) {
//   return new Promise<void>((resolve, reject) => {
//     fn(req, res, (result: any) => {
//       if (result instanceof Error) {
//         return reject(result);
//       }
//       return resolve();
//     });
//   });
// }


export async function  POST(req: NextRequest, res: NextResponse) {
  // await runMiddleware(req, res, cors)

    const prisma = new PrismaClient();
    try {

        const { username, password } = await req.json();

        const existingUser = await prisma.user.findFirst({
            where: {
            username: username // Match based on the username
            }
        });
        
        if(!existingUser) {
            return NextResponse.json({error: "User does not exists"}, {status: 404});
        }

        const hashedPassword = existingUser.password;

        const passwordMatch = bcrypt.compare(password, hashedPassword);

        if(!passwordMatch) {
            return NextResponse.json({error: "Invalid Password"}, {status: 401});
        }

        const tokenData = {
            id: existingUser.id,
            username: existingUser.username,
            email: existingUser.email
        }
        //create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1h"})
        
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        })
        

        response.cookies.set("token", token, {
            httpOnly: true, 
          })

          response.cookies.set('username', username);

        return response;
    } catch (error: any) {
      return NextResponse.json({error: error.message}, {status: 500})
    } 
}
