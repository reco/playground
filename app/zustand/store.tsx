"use client";
import type { State, Props } from "./types";
import type { ComponentType } from "react";

import { create } from "zustand";
import { api } from "./api";
import { forwardRef } from "react";

export const defaultState: State = {
  loading: false,
  user: null,
  bookmarks: [],
};

interface Actions {
  setLoading: (loading: boolean) => void;
  getUser: () => Promise<void>;
  reset: () => void;
}

export const useStore = create<State & { actions: Actions }>((set) => ({
  ...defaultState,
  actions: {
    // Setting loading state
    setLoading: (loading: boolean) => set({ loading }),

    // Get user and bookmarks from the server
    getUser: async () => {
      set({ loading: true });

      const user = await api("https://jsonplaceholder.typicode.com/users/1");
      const bookmarks = await api("https://jsonplaceholder.typicode.com/posts");

      set({ user, bookmarks, loading: false });
    },

    // Reset state
    reset: () => set(defaultState),
  },
}));


export function withStore(
  useStore: (selector: any, equalityFn?: any) => any,
  selector: any
) {
  return (Component: ComponentType<Props>) =>
    // eslint-disable-next-line react/display-name
    forwardRef((props: Props, ref) => (
      <Component ref={ref} {...props} {...useStore(selector)} />
    ));
}
