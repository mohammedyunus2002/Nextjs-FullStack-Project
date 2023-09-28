import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'; 
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function POST(req: NextRequest) {
  try {
    const { username, email, password } = await req.json();

    // Check if the username or email already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { username: username },
          { email: email }
        ]
      }
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this username or email already exists' },
        { status: 409 }
      );
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = await prisma.user.createMany({
      data: {
        username,
        email,
        password: hashedPassword  
      }
    });

    console.log('New user created:', newUser);

    return NextResponse.json(
      { message: 'New user created', user: newUser },
      { status: 201 }
    );

  } catch (error: any) {
    // Handle errors
    console.error('Error creating user:', error);

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }

}

export { POST }
