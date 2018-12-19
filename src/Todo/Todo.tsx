import * as React from 'react';
import { Layout } from 'antd';
import { Mutation } from 'react-apollo';
import uuid from 'uuid/v4';
import { FormComponentProps } from 'antd/lib/form';
import { GET_TODOS, CREATE_TODO } from '../graphql';
import { CreateTodo, CreateTodoVariables } from '../types/CreateTodo';
import { TodoForm, TodoContent } from '.';

export const Todo = () => (
  <Layout style={{ alignItems: 'center', display: 'flex', minHeight: '100vh' }}>
    <h1>TODO</h1>
    <Layout
      style={{
        maxWidth: '480px',
        minWidth: '480px',
        flexGrow: 0,
      }}
    >
      <Layout style={{ flexDirection: 'row', marginBottom: '1rem' }}>
        <Mutation<CreateTodo, CreateTodoVariables>
          mutation={CREATE_TODO}
          refetchQueries={[{ query: GET_TODOS }]}
        >
          {(createTodo, { data }) => {
            // console.log(data);
            const onSubmit = ({
              getFieldValue,
              resetFields,
            }: FormComponentProps['form']) => (e: React.FormEvent) => {
              e.preventDefault();
              createTodo({
                variables: {
                  createTodoInput: {
                    id: uuid(),
                    title: getFieldValue('title').trim(),
                    completed: false,
                    createdAt: `${Date.now()}`,
                  },
                },
              }).catch(err => {
                console.log(err);
              });
              resetFields(['title']);
            };
            return <TodoForm onSubmit={onSubmit} />;
          }}
        </Mutation>
      </Layout>
      <Layout>
        <TodoContent />
      </Layout>
    </Layout>
  </Layout>
);
