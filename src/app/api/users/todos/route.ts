import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { cookies } from 'next/headers'


const prisma = new PrismaClient();


   

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { title, content } = await req.json();

    const cookiesList = cookies()
    const hasCookie = cookiesList.get('ID')

    console.log(hasCookie)

    // Define the type for the data
    const todoData = {
      title,
      content,
      user: {
        connect: {
            id: "cln1mk2o50004052ebwyc7bkb"
        }
      }
    };

    // Create a new todo
    const newTodo = await prisma.task.create({
      data: todoData,
    });

    const response = NextResponse.json({
      message: "Todo added successfully",
      success: true,
      data: newTodo, // Optionally return the created todo
    });

    console.log(todoData);

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const todos = await prisma.task.findMany();

    return NextResponse.json({
      message: 'Todos retrieved successfully',
      success: true,
      data: todos,
    });
  }  catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req: CustomNextRequest) {
  
}