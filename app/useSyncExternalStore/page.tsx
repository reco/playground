"use client";

import { useSyncExternalStore } from "react";
import { todosStore } from "./todo";

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

      <button className="search" onClick={() => todosStore.addTodo()}>
        ADD
      </button>

      <ul className="m0 p0">
        {todos.map((todo) => (
          <li className="lstn p1 b my05 b-fff" key={todo.id}>
            {todo.text}
          </li>
        ))}
      </ul>
    </>
  );
}
