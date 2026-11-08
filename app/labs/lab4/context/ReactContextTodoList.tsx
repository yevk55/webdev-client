"use client";

import { useState, type ReactNode } from "react";
import { TodosContext, useTodosContext } from "./todosContext";

function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState([
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Context" },
  ]);
  const addItem = (title: string) => {
    setTodos([...todos, { id: Math.floor(Math.random() * 100).toString(), title }]);
  };
  const deleteItem = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editItem = (id: string, title: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, title } : todo)));
  };
  return (
    <TodosContext.Provider value={{ todos, addItem, deleteItem, editItem }}>
      {children}
    </TodosContext.Provider>
  );
}

function TodoList() {
  const { todos, addItem, deleteItem, editItem } = useTodosContext();
  const [title, setTitle] = useState("");
  return (
    <div>
      <h3>Todo List</h3>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="wd-todo-title"
      />
      <button
        type="button"
        onClick={() => addItem(title)}
        id="wd-add-todo-click"
      >
        Add
      </button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}          >
            <input
              value={todo.title}
              onChange={(e) => editItem(todo.id, e.target.value)}
              id={`wd-edit-todo-${todo.id}`}
            />
            <button
              type="button"
              onClick={() => deleteItem(todo.id)}
              id={`wd-delete-todo-${todo.id}-click`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ReactContextTodoList() {
  return (
    <TodosProvider>
      <TodoList />
    </TodosProvider>
  );
}
