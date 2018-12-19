import { gql } from 'apollo-boost';

export const GET_TODO = gql`
  query GetTodo($id: ID!) {
    todo(id: $id) {
      id
      title
      completed
      createdAt
    }
  }
`;

export const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      title
      completed
      createdAt
    }
  }
`;
