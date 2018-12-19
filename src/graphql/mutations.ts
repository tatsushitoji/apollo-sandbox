import { gql } from 'apollo-boost';

export const CREATE_TODO = gql`
  mutation CreateTodo($createTodoInput: CreateTodoInput!) {
    createTodo(input: $createTodoInput) {
      id
      title
      completed
      createdAt
    }
  }
`;
