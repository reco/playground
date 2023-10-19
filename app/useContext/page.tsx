"use client";

import styles from "./styles.module.css";
import { useContext, useEffect } from "react";
import { StateProvider, StoreContext } from "./context";

import { LOADING, LOADING_DONE, getUser, reset } from "./reducer";

function Bookmakrs() {
  const { bookmarks } = useContext(StoreContext);
  return (
    <div>
      <h2>Bookmarks</h2>
      <ul>
        {bookmarks.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
}

function User() {
  const { user } = useContext(StoreContext);
  return (
    <div>
      <h2>User</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

function LoadingIndicator() {
  const { loading } = useContext(StoreContext);
  return <div>{loading ? <p>Loading...</p> : null}</div>;
}

function Buttons() {
  const { dispatch } = useContext(StoreContext);
  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: LOADING });
        }}
      >
        Loading
      </button>
      <button
        onClick={() => {
          dispatch({ type: LOADING_DONE });
        }}
      >
        Loading Done
      </button>

      <button
        onClick={() => {
          getUser(dispatch);
        }}
      >
        Get User
      </button>
      <button
        onClick={() => {
          reset(dispatch);
        }}
      >
        Reset
      </button>
    </>
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
