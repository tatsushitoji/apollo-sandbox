/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTodo
// ====================================================

export interface GetTodo_todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

export interface GetTodo {
  todo: GetTodo_todo;
}

export interface GetTodoVariables {
  id: string;
}
