"use client";

import { useSyncExternalStore } from "react";
import { todosStore } from "./todo";

import { Button } from "@/components/Button";
import Link from "next/link";

export default function Index() {
  const todos = useSyncExternalStore(
    todosStore.subscribe,
    todosStore.getSnapshot, // get snapshot for client. gets called when
    todosStore.getSnapshot // get snapshot for SSR
  );
  return (
    <>
      <h1>useSyncExternalStore</h1>
      <h2>hook</h2>

      <p>
        Use reative state outside of react.{" "}
        <Link href={"https://beta.reactjs.org/apis/react/useSyncExternalStore"}>
          Docs
        </Link>
      </p>

      <Button onClick={() => todosStore.addTodo()} className="m-6">
        Add
      </Button>

      <ul className="p-0 m-0">
        {todos.map((todo) => (
          <li
            className="p-3 my-3 font-bold list-none bg-white shadow-md"
            key={todo.id}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </>
  );
}
