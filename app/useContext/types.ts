import { Dispatch } from "react";

export interface Action {
  type: string;
  payload?: any;
}

export interface User {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface Bookmark {
  id: number;
  title: string;
  url: string;
}

export interface StoreContextData {
  loading: boolean;
  user: User | null;
  bookmarks: Bookmark[];
  dispatch: Dispatch<Action>;
}

export interface StateProviderProps {
  children: React.ReactNode;
}
