"use client";

import type { State } from "./types";

import { Component } from "react";
import { useStore, withStore } from "./store";
import { Button } from "@/components/Button";

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

const UserClassComponentWithStore = withStore(
  useStore,
  (state: State) => state.user
)(UserClassComponent);

export default function Page() {
  return (
    <div>
      <h1>zustand</h1>
      <section>
        <Buttons />
        <LoadingIndicator />
        <UserClassComponentWithStore />
        <Bookmakrs />
        <User />
      </section>
    </div>
  );
}
