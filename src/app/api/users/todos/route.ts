import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { title, content } = await req.json();

    const username = req.cookies.get('username')?.value

    const user = await prisma.user.findFirst({
      where: {
      username: username // Match based on the username
      }
    });

    // Define the type for the data
    const todoData = {
      title,
      content,
      user: {
        connect: {
            id: user?.id
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
      id: newTodo.id 
    });

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

export async function PUT(req: NextRequest) {
  try {
    const { newTitle, newContent, todoId } = await req.json();

    const todo = await prisma.task.findFirst({
      where: {
        id: todoId,
      }
    })

    if (!todo) {
      throw new Error('Todo not found or does not belong to this user');
    }

    // Update the todo
    const updateData = await prisma.task.update({
      where: {
        id: todoId
      }, 
      data: {
        title: {
          set: newTitle 
        },
        content: {
          set: newContent
        }
      }
    });

    return NextResponse.json({
      message: 'Todo updated successfully',
      success: true,
      data: updateData
    });  
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { todoId } = await req.json();

    const deleteTodo = await prisma.task.delete({
      where: {
        id: todoId,
      },
    });

    return NextResponse.json({
      message: 'Todo deleted successfully',
      success: true,
      data: deleteTodo
    });  
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 }); 
  }
}