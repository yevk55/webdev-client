import { createContext, useContext} from "react";

type TodosContextValue = {
  todos: { id: string; title: string }[];
  addItem: (title: string) => void;
  deleteItem: (id: string) => void;
  editItem: (id: string, title: string) => void;

};

export const TodosContext = createContext<TodosContextValue | null>(null);

export function useTodosContext() {
  const value = useContext(TodosContext);
  if (!value) {
    throw new Error("useTodosContext must be used inside TodosProvider");
  }
  return value;
}