"use client";

import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

import type { StoreContextData, StateProviderProps } from "./types";

export const defaultContext: StoreContextData = {
  loading: false,
  user: null,
  bookmarks: [],
  dispatch: () => {},
};

export const StoreContext = createContext<StoreContextData>(defaultContext);

export const StateProvider = ({ children }: StateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, defaultContext);

  return (
    <StoreContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
