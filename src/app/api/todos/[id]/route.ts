import { NextResponse } from 'next/server';
// import dbConnect from '@/app/lib/dbConnect';
// import Todo from '@/app/models/Todo';
import dbConnect from '@/lib/dbConnect';
import Todo from '@/models/Todo';

export async function PUT(request: Request, { params }: any) {
  const { id } = params;
  const { completed } = await request.json();
  await dbConnect();
  const updatedTodo = await Todo.findByIdAndUpdate(id, { completed }, { new: true });
  return NextResponse.json(updatedTodo);
}

export async function DELETE(request: Request, { params }: any) {
  const { id } = params;
  await dbConnect();
  await Todo.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Todo deleted' });
}
