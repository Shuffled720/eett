"use client";

import { useState, useEffect, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, Clipboard, Trash } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

type Todo = {
  _id: string;
  title: string;
  completed: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState<string | null>(null);
  const [isTodoLoading, setIsTodoLoading] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = useCallback(async () => {
    setIsTodoLoading(true);
    try {
      const res = await fetch("/api/todos");
      if (!res.ok) throw new Error("Failed to fetch todos");
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.error("Failed to fetch todos", error);
    } finally {
      setIsTodoLoading(false);
    }
  }, []);

  const addTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;

    setIsSubmitLoading(true);
    try {
      const res = await fetch("/api/todos", {
        method: "POST",
        body: JSON.stringify({ title: newTodo }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to add todo");
      }

      const newTodoFromBackend = await res.json();
      setTodos((prevTodos) => [...prevTodos, newTodoFromBackend]);
      setNewTodo("");
    } catch (error) {
      console.error("Failed to add todo", error);
      alert("Failed to add todo. Please try again.");
    } finally {
      setIsSubmitLoading(false);
    }
  };

  const toggleTodo = async (id: string, completed: boolean) => {
    try {
      const res = await fetch(`/api/todos/${id}`, {
        method: "PUT",
        body: JSON.stringify({ completed: !completed }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw new Error("Failed to toggle todo");
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo._id === id ? { ...todo, completed: !completed } : todo))
      );
    } catch (error) {
      console.error("Failed to toggle todo", error);
    }
  };

  const deleteTodo = async (id: string) => {
    setIsDeleteLoading(id);
    try {
      const res = await fetch(`/api/todos/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete todo");
      }

      setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error("Failed to delete todo:", error);
      alert("Failed to delete todo. Please try again.");
    } finally {
      setIsDeleteLoading(null);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert("Copied to clipboard!");
      },
      (error) => {
        console.error("Failed to copy to clipboard", error);
      }
    );
  };

  return (
    <motion.div
      className="m-5 md:mx-60 p-8 shadow-2xl rounded-lg bg-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Link href="/">
        <motion.h1
          className="text-3xl font-bold mb-6 cursor-pointer hover:text-blue-500"
          whileHover={{ scale: 1.1 }}
        >
          Todo List
        </motion.h1>
      </Link>
      <motion.div
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <form onSubmit={addTodo} className="flex gap-4 items-center">
          <Input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task"
            className="flex-grow"
          />
          <Button type="submit" disabled={isSubmitLoading} className="flex items-center">
            {isSubmitLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Adding...
              </>
            ) : (
              "Add Todo"
            )}
          </Button>
        </form>
      </motion.div>
      <ul className="space-y-1">
        {isTodoLoading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2"
          >
            <Loader2 className="animate-spin" />
            <p>Loading Todos...</p>
          </motion.div>
        ) : (
          todos.map((todo) => (
            <motion.li
              key={todo._id}
              className="p-2 hover:bg-slate-100 rounded-lg shadow-sm flex justify-between items-center overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span
                style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                onClick={() => toggleTodo(todo._id, todo.completed)}
                className="cursor-pointer text-base truncate flex-grow"
              >
                {todo.title}
              </span>
              <div className="flex gap-1 ml-2">
                <button
                  onClick={() => copyToClipboard(todo.title)}
                  className="p-0.5 hover:bg-gray-200 rounded focus:outline-none"
                  aria-label="Copy Todo"
                >
                  <Clipboard className="h-4 w-4" />
                </button>
                <button
                  onClick={() => deleteTodo(todo._id)}
                  disabled={isDeleteLoading === todo._id}
                  className="p-0.5 hover:bg-red-200 rounded focus:outline-none"
                  aria-label="Delete Todo"
                >
                  {isDeleteLoading === todo._id ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Trash className="h-4 w-4" />
                  )}
                </button>
              </div>
            </motion.li>
          ))
        )}
      </ul>
    </motion.div>
  );
}
