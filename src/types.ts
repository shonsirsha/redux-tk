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
  completed: boolean;
};
export type Todos = {
  todos: Todo[];
};
