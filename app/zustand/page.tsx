"use client";

import styles from "./styles.module.css";
import { useStore } from "./store";
import { Button } from "@/components/button";

function Bookmakrs() {
  const bookmarks = useStore((state) => state.bookmarks);
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
  const user = useStore((state) => state.user);
  return (
    <div>
      <h2>User</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

function LoadingIndicator() {
  const loading = useStore((state) => state.loading);
  return <div>{loading ? <p>Loading...</p> : null}</div>;
}

function Buttons() {
  const { setLoading, getUser, reset } = useStore((state) => state.actions);
  return (
    <div className="flex gap-1 justify-center py-3">
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
      <Button onClick={reset}>Reset</Button>
    </div>
  );
}

export default function Page() {
  return (
    <div>
      <h1>zustand</h1>
      <section className={styles.section}>
        <Buttons />
        <LoadingIndicator />
        <Bookmakrs />
        <User />
      </section>
    </div>
  );
}
