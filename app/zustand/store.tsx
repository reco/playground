"use client";

import { create } from "zustand";
import { api } from "./api";

import type { User, Bookmark, State } from "./types";

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
    setLoading: (loading: boolean) => set({ loading }),
    getUser: async () => {
      set({ loading: true });

      const user = await api("https://jsonplaceholder.typicode.com/users/1");
      const bookmarks = await api("https://jsonplaceholder.typicode.com/posts");

      set({ user, bookmarks, loading: false });
    },
    reset: () => set(defaultState),
  },
}));