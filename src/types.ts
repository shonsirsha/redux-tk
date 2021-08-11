export type UserDetail = {
  name: string;
  email: string;
};
export type Theme = {
  darkTheme: boolean;
};
export type UserDetailObj = {
  userDetail: UserDetail;
};
export type Todo = {
  id: number;
  content: string;
};
export type Todos = {
  todos: Todo[];
};
