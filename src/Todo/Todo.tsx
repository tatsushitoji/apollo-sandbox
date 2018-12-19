import * as React from 'react';
import { Layout } from 'antd';
import { MutationFn } from 'react-apollo';
import uuid from 'uuid/v4';
import { FormComponentProps } from 'antd/lib/form';
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
        <TodoForm
          // tslint:disable-next-line jsx-no-lambda
          onSubmit={(
            { getFieldValue, resetFields }: FormComponentProps['form'],
            mutate: MutationFn,
          ) => (e: React.FormEvent) => {
            e.preventDefault();
            mutate({
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
          }}
        />
      </Layout>
      <Layout>
        <TodoContent />
      </Layout>
    </Layout>
  </Layout>
);
