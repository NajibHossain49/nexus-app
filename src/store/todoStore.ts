import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

interface TodoState {
  todos: Todo[];
  isLoading: boolean;
  addTodo: (text: string) => void;
  editTodo: (id: string, text: string) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  setLoading: (loading: boolean) => void;
}

/**
 * Zustand store for todo management.
 * Uses `persist` middleware to save todos to localStorage under "todo-storage".
 * `onRehydrateStorage` sets isLoading to false once hydration completes.
 */
export const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      todos: [],
      isLoading: true,

      addTodo: (text) =>
        set((state) => ({
          todos: [
            {
              id: crypto.randomUUID(),
              text: text.trim(),
              completed: false,
              createdAt: Date.now(),
            },
            ...state.todos,
          ],
        })),

      editTodo: (id, text) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, text: text.trim() } : todo
          ),
        })),

      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),

      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        })),

      setLoading: (loading) => set({ isLoading: loading }),
    }),
    {
      name: "todo-storage",
      onRehydrateStorage: () => (state) => {
        state?.setLoading(false);
      },
    }
  )
);
