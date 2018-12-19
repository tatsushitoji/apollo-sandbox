/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTodos
// ====================================================

export interface GetTodos_todos {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

export interface GetTodos {
  todos: GetTodos_todos[] | null;
}
