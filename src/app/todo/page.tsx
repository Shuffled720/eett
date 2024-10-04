"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react"

import Link from "next/link";

type Todo = {
  _id: string;
  title: string;
  completed: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const [isTodoLoading, setIsTodoLoading] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    setIsTodoLoading(true);
    const res = await fetch("/api/todos");
    const data = await res.json();
    setTodos(data);
    setIsTodoLoading(false);
  };

  interface AddTodoEvent extends React.FormEvent<HTMLFormElement> { }

  const addTodo = async (e: AddTodoEvent) => {
    setIsSubmitLoading(true);
    e.preventDefault();
    if (newTodo.trim() === "") return;
    await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ title: newTodo }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setNewTodo("");
    fetchTodos();
    setIsSubmitLoading(false);
  };

  const toggleTodo = async (id: string, completed: boolean) => {
    await fetch(`/api/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({ completed: !completed }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetchTodos();
  };

  const deleteTodo = async (id: string) => {
    setIsDeleteLoading(true);
    await fetch(`/api/todos/${id}`, {
      method: "DELETE",
    });
    fetchTodos();
    setIsDeleteLoading(false);
  };

  return (
    <main className="p-8">
      <Link href="/">
        <h1 className="text-2xl mb-4">Todo List</h1>
      </Link>
      <div className="mb-4">
        <form onSubmit={addTodo}>
          <Input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="New todo"
          />
          {isSubmitLoading ? <> <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button></> : <><Button type="submit">Add Todo</Button></>}

        </form>
      </div>
      <ul>
        {(isTodoLoading == true) && <><p>Please wait Lodading Todos </p><Loader2 className="animate-spin" /> </>}
        {todos.map((todo, id) => (

          <li key={todo._id} className="mb-2">
            <div className="flex ">
              <div className="flex flex-auto ">

                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                  onClick={() => toggleTodo(todo._id, todo.completed)}
                  className="cursor-pointer "
                >
                  {todo.title}
                </span>
              </div>
              <div>
                {(isDeleteLoading) ? <> <Button disabled>
                  {/* <Loader2 className="mr-2 h-4 w-4 animate-spin" /> */}
                  Delete
                </Button>
                </> : <>  <Button
                  onClick={() => deleteTodo(todo._id)}
                  variant="destructive"
                // onKeyDown={}
                >
                  Delete
                </Button></>}

              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
