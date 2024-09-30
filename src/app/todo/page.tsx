"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Todo = {
  _id: string;
  title: string;
  completed: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();
    setTodos(data);
  };

  const addTodo = async () => {
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
    await fetch(`/api/todos/${id}`, {
      method: "DELETE",
    });
    fetchTodos();
  };

  return (
    <main className="p-8">
      <Link href="/">
        <h1 className="text-2xl mb-4">Todo List</h1>
      </Link>
      <div className="mb-4">
        {/* <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New todo"
          className="border p-2 mr-2"
        /> */}
        <form onSubmit={addTodo}>
          <Input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="New todo"
          />
          <Button type="submit">Add Todo</Button>
        </form>
      </div>
      <ul>
        {todos.map((todo) => (

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
              <div className="">

                <Button
                  onClick={() => deleteTodo(todo._id)}
                  variant="destructive"
                // onKeyDown={}
                >
                  Delete
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
