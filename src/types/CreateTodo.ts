/* tslint:disable */
// This file was automatically generated and should not be edited.

import { CreateTodoInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateTodo
// ====================================================

export interface CreateTodo_createTodo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

export interface CreateTodo {
  createTodo: CreateTodo_createTodo | null;
}

export interface CreateTodoVariables {
  createTodoInput: CreateTodoInput;
}
