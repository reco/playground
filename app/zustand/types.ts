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

export interface State {
  loading: boolean;
  user: User | null;
  bookmarks: Bookmark[];
}

export interface Props {
  [key: string]: any;
}
