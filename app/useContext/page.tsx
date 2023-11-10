"use client";

import styles from "./styles.module.css";
import { useContext } from "react";
import { StateProvider, StoreContext } from "./context";
import { Button } from "@/components/Button";
import { cn } from "@/utils";
import Link from "next/link";

import { LOADING, LOADING_DONE, getUser, getBookmarks, reset } from "./reducer";

function Bookmakrs() {
  const { bookmarks } = useContext(StoreContext);
  if (!bookmarks.length) return null;
  return (
    <div>
      <h2>Bookmarks</h2>
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
  const { user } = useContext(StoreContext);
  if (!user?.id) return null;

  const { name, description, image } = user;
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="rounded-full w-[150px] h-[150px] bg-gradient-to-br from-cyan-600 to-amber-600"></div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

function LoadingIndicator() {
  const { loading } = useContext(StoreContext);
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
  const { dispatch } = useContext(StoreContext);
  return (
    <div className="flex justify-center gap-1 py-3">
      <Button
        onClick={() => {
          dispatch({ type: LOADING });
        }}
      >
        Loading
      </Button>
      <Button
        onClick={() => {
          dispatch({ type: LOADING_DONE });
        }}
      >
        Loading Done
      </Button>

      <Button
        onClick={() => {
          getUser(dispatch);
        }}
      >
        Get User
      </Button>
      <Button
        onClick={() => {
          getBookmarks(dispatch);
        }}
      >
        Get Bookmarks
      </Button>
      <Button
        onClick={() => {
          reset(dispatch);
        }}
      >
        Reset
      </Button>
    </div>
  );
}

export default function Page() {
  return (
    <StateProvider>
      <h1>useContext</h1>
      <section className={styles.section}>
        <Buttons />
        <LoadingIndicator />
        <Bookmakrs />
        <User />
      </section>
    </StateProvider>
  );
}
