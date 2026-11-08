import { useState } from "react";
import { useTodosContext, type ContextTodo } from "./todosContext";

const emptyDraft: ContextTodo = { id: "-1", title: "" };

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [draft, setDraft] = useState<ContextTodo>(emptyDraft);
  const add = () => {
    if (draft.title.trim() === "") return;
    addTodo(draft.title);
    setDraft(emptyDraft);
  };
  const update = () => {
    if (draft.id === "-1") return;
    updateTodo(draft);
    setDraft(emptyDraft);
  };
  const remove = (id: string) => {
    deleteTodo(id);
    if (draft.id === id) setDraft(emptyDraft);
  };
  return (
    <div id="wd-context-todo-list">
      <h3>Todo List (React Context)</h3>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <input
          className="rounded border border-neutral-300 px-3 py-1.5"
          placeholder="New todo"
          value={draft.title}
          onChange={(e) => setDraft({ ...draft, title: e.target.value })}
          id="wd-context-todo-title"
        />
        <button
          type="button"
          onClick={add}
          id="wd-context-add-todo-click"
          className="rounded bg-green-600 px-3 py-1.5 text-sm text-white"
        >
          Add
        </button>
        <button
          type="button"
          onClick={update}
          id="wd-context-update-todo-click"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm"
        >
          Update
        </button>
      </div>
      <ul className="m-0 max-w-md list-none p-0">
        {todos.map((todo) => (
          <li
            key={todo.id}
            id={`wd-context-todo-${todo.id}`}
            className="mb-1 flex items-center justify-between rounded border border-neutral-300 px-3 py-1"
          >
            <span>{todo.title}</span>
            <span className="flex gap-2">
              <button
                type="button"
                onClick={() => setDraft(todo)}
                className="rounded bg-yellow-400 px-2 py-0.5 text-sm"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => remove(todo.id)}
                className="rounded bg-red-600 px-2 py-0.5 text-sm text-white"
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
