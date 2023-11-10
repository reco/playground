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
export const GET_BOOKMARKS = "GET_BOOKMARKS";
export const TOGGLE_BOOKMARK = "TOGGLE_BOOKMARK";
export const RESET = "RESET";

/**
 * Get user
 * @param {Function} dispatch
 * @returns {void}
 */
export async function getUser(dispatch: Dispatch<Action>) {
  dispatch({ type: LOADING });
  dispatch({ type: RESET });
  try {
    const user = await api("/user.json");
    dispatch({ type: GET_USER, payload: { user } });
  } catch (error) {
    dispatch({ type: ERROR });
  }
}

/**
 * Get bookmarks
 * @param {Function} dispatch
 * @returns {void}
 */
export async function getBookmarks(dispatch: Dispatch<Action>) {
  dispatch({ type: LOADING });
  dispatch({ type: RESET });
  try {
    const bookmarks = await api("/bookmarks.json");
    dispatch({ type: GET_BOOKMARKS, payload: { bookmarks } });
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
    const { user } = action.payload;
    return { ...state, user, loading: false };
  }
  // Get bookmarks
  if (action.type === GET_BOOKMARKS) {
    const { bookmarks } = action.payload;
    console.log("** reducer: GET_BOOKMARKS: bookmarks:", bookmarks);
    return { ...state, bookmarks, loading: false };
  }
  // Reset state
  if (action.type === RESET) {
    return { ...defaultContext };
  }
  // return default state
  return state;
}
