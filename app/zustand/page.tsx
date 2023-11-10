"use client";

import type { State } from "./types";

import { withStore } from "@/utils";
import { Component } from "react";
import { useStore } from "./store";
import { Button } from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/utils";

function Bookmakrs() {
  const bookmarks = useStore((state) => state.bookmarks);
  if (!bookmarks.length) return null;
  return (
    <div>
      <h3>Bookmarks</h3>
      <ul>
        {bookmarks.map(({ id, title, url }) => (
          <li key={id}>
            <Link href={url}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function User() {
  const user = useStore((state) => state.user);

  if (!user?.id) return null;

  const { name, description, image } = user;
  return (
    <div className="flex flex-col items-center justify-center">
      {/* <Image
        width={150}
        height={150}
        src={image}
        alt={name}
        className="rounded-full"
      /> */}
      <div className="rounded-full w-[150px] h-[150px] bg-gradient-to-br from-cyan-600 to-amber-600"></div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

function LoadingIndicator() {
  const loading = useStore((state) => state.loading);
  return (
    <div className="w-48 h-1 mx-auto my-8 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        className={cn(
          "h-1 transition-all duration-1000 bg-gradient-to-r from-white via-slate-800 to-white rounded-full w-full relative"
        )}
        style={{ left: loading ? "200%" : "-100%" }}
      ></div>
    </div>
  );
}

function Buttons() {
  const { setLoading, getUser, getBookmarks, reset } = useStore(
    (state) => state.actions
  );
  return (
    <div className="flex justify-center gap-1 py-3">
      <Button
        onClick={() => {
          setLoading(true);
        }}
      >
        Loading
      </Button>
      <Button
        onClick={() => {
          setLoading(false);
        }}
      >
        Loading Done
      </Button>
      <Button onClick={getUser}>Get User</Button>
      <Button onClick={getBookmarks}>Get Bookmarks</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
}

class UserClassComponent extends Component {
  render() {
    return (
      <div>
        <h2>User ClassComponent</h2>
        <pre>{JSON.stringify(useStore.getState().user, null, 2)}</pre>
      </div>
    );
  }
}

const selectorFn = (state: State) => state.user;

const UserClassComponentWithStore = withStore(
  UserClassComponent,
  useStore,
  selectorFn
);

export default function Page() {
  return (
    <div>
      <h1>zustand</h1>
      <section>
        <Buttons />
        <LoadingIndicator />
        <Bookmakrs />
        {/* <UserClassComponentWithStore /> */}
        <User />
      </section>
    </div>
  );
}
