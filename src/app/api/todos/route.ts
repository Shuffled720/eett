import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Todo from '@/models/Todo';

export async function GET() {
  await dbConnect();
  const todos = await Todo.find({});
  return NextResponse.json(todos);
}

export async function POST(request: Request) {
  const { title } = await request.json();
  await dbConnect();
  const newTodo = new Todo({
    title,
    completed: false,
  });
  await newTodo.save();
  return NextResponse.json(newTodo);
}
