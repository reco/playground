"use client";
import type { State, Props } from "./types";
import type { ComponentType } from "react";

import { create } from "zustand";
import { api } from "./api";

export const defaultState: State = {
  loading: false,
  user: null,
  bookmarks: [],
};

interface Actions {
  setLoading: (loading: boolean) => void;
  getUser: () => Promise<void>;
  getBookmarks: () => Promise<void>;
  reset: () => void;
  delayedLoadingDone: () => void;
}

export const useStore = create<State & { actions: Actions }>((set, get) => ({
  ...defaultState,
  actions: {
    // Setting loading state
    setLoading: (loading: boolean) => set({ loading }),

    delayedLoadingDone: () => {
      setTimeout(() => {
        set({ loading: false });
      }, 400);
    },

    // Get user and bookmarks from the server
    getUser: async () => {
      get().actions.reset();
      set({ loading: true });

      const user = await api("/user.json");
      set({ user });
      get().actions.delayedLoadingDone();
    },

    getBookmarks: async () => {
      get().actions.reset();
      set({ loading: true });

      const bookmarks = await api("/bookmarks.json");
      set({ bookmarks });
      get().actions.delayedLoadingDone();
    },

    // Reset state
    reset: () => set(defaultState),
  },
}));
