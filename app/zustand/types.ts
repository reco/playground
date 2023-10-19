export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface Bookmark {
  id: number;
  title: string;
}

export interface State {
  loading: boolean;
  user: User | null;
  bookmarks: Bookmark[];
}
