import { useState, useRef, useEffect } from "react";
import { useTodoStore } from "../store/todoStore";
import Button from "./ui/Button";

/**
 * Full-featured todo list component.
 * Supports add, edit (inline), delete, and toggle complete.
 * Uses Zustand store with localStorage persistence.
 */
export default function TodoList() {
  const { todos, isLoading, addTodo, editTodo, deleteTodo, toggleTodo } =
    useTodoStore();

  const [newText, setNewText] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const editInputRef = useRef<HTMLInputElement>(null);

  // Auto-focus the edit input when editing mode activates
  useEffect(() => {
    if (editingId && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [editingId]);

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!newText.trim()) return;
    addTodo(newText);
    setNewText("");
  }

  function handleEdit(id: string) {
    if (!editText.trim()) return;
    editTodo(id, editText);
    setEditingId(null);
    setEditText("");
  }

  function startEdit(id: string, text: string) {
    setEditingId(id);
    setEditText(text);
  }

  function cancelEdit() {
    setEditingId(null);
    setEditText("");
  }

  // Skeleton loading state
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800"
          >
            <div className="h-5 w-5 shrink-0 animate-pulse rounded-full bg-slate-200 dark:bg-slate-700" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
            </div>
            <div className="h-6 w-6 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
            <div className="h-6 w-6 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Add Todo Form */}
      <form onSubmit={handleAdd} className="flex gap-3">
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
        />
        <Button type="submit" disabled={!newText.trim()}>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Add
        </Button>
      </form>

      {/* Remaining / Completed counts */}
      <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
        <span>{todos.filter((t) => !t.completed).length} remaining</span>
        <span>{todos.filter((t) => t.completed).length} completed</span>
      </div>

      {/* Empty state */}
      {todos.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 py-16 dark:border-slate-700">
          <svg className="mb-4 h-12 w-12 text-slate-300 dark:text-slate-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
          </svg>
          <p className="text-sm font-medium text-slate-400 dark:text-slate-500">
            No tasks yet. Add one above!
          </p>
        </div>
      ) : (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`group flex items-center gap-3 rounded-xl border p-4 transition-all duration-200 ${
                todo.completed
                  ? "border-emerald-200 bg-emerald-50/50 dark:border-emerald-800/50 dark:bg-emerald-950/20"
                  : "border-slate-200 bg-white hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
              }`}
            >
              {/* Toggle checkbox */}
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 ${
                  todo.completed
                    ? "border-emerald-500 bg-emerald-500"
                    : "border-slate-300 hover:border-violet-400 dark:border-slate-600"
                }`}
              >
                {todo.completed && (
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                )}
              </button>

              {/* Text or inline edit input */}
              {editingId === todo.id ? (
                <input
                  ref={editInputRef}
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleEdit(todo.id);
                    if (e.key === "Escape") cancelEdit();
                  }}
                  className="flex-1 rounded-lg border border-violet-300 bg-white px-3 py-1 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-violet-600 dark:bg-slate-900 dark:text-white"
                />
              ) : (
                <span
                  className={`flex-1 text-sm transition-colors ${
                    todo.completed
                      ? "text-slate-400 line-through dark:text-slate-500"
                      : "text-slate-700 dark:text-slate-200"
                  }`}
                >
                  {todo.text}
                </span>
              )}

              {/* Action buttons */}
              {editingId === todo.id ? (
                <div className="flex gap-1">
                  <button
                    onClick={() => handleEdit(todo.id)}
                    className="rounded-lg p-1.5 text-emerald-500 transition-colors hover:bg-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 dark:hover:bg-emerald-900/30 cursor-pointer"
                    aria-label="Save"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 dark:hover:bg-slate-700 cursor-pointer"
                    aria-label="Cancel"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ) : (
                <div className="flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                  <button
                    onClick={() => startEdit(todo.id, todo.text)}
                    className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 dark:hover:bg-slate-700 dark:hover:text-violet-400 cursor-pointer"
                    aria-label="Edit"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-red-100 hover:text-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 dark:hover:bg-red-900/30 dark:hover:text-red-400 cursor-pointer"
                    aria-label="Delete"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
