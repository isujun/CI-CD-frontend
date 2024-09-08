import React, { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [] as string[]
})

interface TodoProviderProps {
  children: React.ReactNode
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const todos = ["todo 1", "todo 2", "todo 3"]

  return < TodoContext.Provider value={{ todos }}>{children}</TodoContext.Provider >
}

export const useTodo = () => useContext(TodoContext)
