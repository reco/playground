"use client";

import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

import type { StoreContextData, StateProviderProps } from "./types";

/**
 * Default context values
 * @type {StoreContextData}
 */
export const defaultContext: StoreContextData = {
  loading: false,
  user: null,
  bookmarks: [],
  dispatch: () => {},
};

/**
 * Create a context with default values
 * @param {StoreContextData} defaultContext
 * @returns {StoreContextData}
 */
export const StoreContext = createContext<StoreContextData>(defaultContext);

/**
 * State provider
 * @param {StateProviderProps} props
 * @returns {JSX.Element}
 */
export const StateProvider = ({ children }: StateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, defaultContext);

  return (
    <StoreContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
