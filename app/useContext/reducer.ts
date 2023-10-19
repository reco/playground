import type { Action, StoreContextData } from "./types";
import { Dispatch } from "react";
import { api } from "./api";
import { defaultContext } from "./context";

/**
 * Action Names
 */
export const LOADING = "LOADING";
export const LOADING_DONE = "LOADING_DONE";
export const ERROR = "ERROR";
export const GET_USER = "GET_USER";
export const TOGGLE_BOOKMARK = "TOGGLE_BOOKMARK";
export const RESET = "RESET";

/**
 * Get user and bookmarks
 * @param {Function} dispatch
 * @returns {void}
 */
export async function getUser(dispatch: Dispatch<Action>) {
  dispatch({ type: LOADING });
  try {
    const user = await api("https://jsonplaceholder.typicode.com/users/1");
    const bookmarks = await api("https://jsonplaceholder.typicode.com/posts");
    dispatch({ type: GET_USER, payload: { user, bookmarks } });
  } catch (error) {
    dispatch({ type: ERROR });
  }
}

/**
 * Reset state
 * @param {function} dispatch
 * @returns {void}
 */
export function reset(dispatch: Dispatch<Action>) {
  dispatch({ type: RESET });
}

/**
 * Reducer function
 * @param {StoreContextData} state - current state
 * @param {Action} action - action object
 * @returns {StoreContextData} - new state
 */

export function reducer(state: StoreContextData, action: Action) {
  // Set Loading to true
  if (action.type === LOADING) {
    return { ...state, loading: true };
  }
  // Set Loading to false
  if (action.type === LOADING_DONE) {
    return { ...state, loading: false };
  }
  // Get user
  if (action.type === GET_USER) {
    const { user, bookmarks } = action.payload;
    return { ...state, user, bookmarks, loading: false };
  }
  // Reset state
  if (action.type === RESET) {
    return { ...defaultContext };
  }
  // return default state
  return state;
}
