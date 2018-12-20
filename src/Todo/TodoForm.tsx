import * as React from 'react';
import { graphql, compose, ChildMutateProps, MutationFn } from 'react-apollo';
import uuid from 'uuid/v4';
import { Layout, Input, Form, Button } from 'antd';
import { CREATE_TODO } from '../graphql';
import { CreateTodo, CreateTodoVariables } from '../types/CreateTodo';
import { FormComponentProps } from 'antd/lib/form';

type InjectProps = FormComponentProps & {
  onSubmit: (
    form: FormComponentProps['form'],
    mutate: MutationFn<Response, CreateTodoVariables>,
  ) => (e: React.FormEvent) => void;
};

type Response = {
  todo: CreateTodo['createTodo'];
};

type ChildProps = ChildMutateProps<InjectProps, Response, CreateTodoVariables>;

const withCreateTodoMutation = graphql<
  InjectProps,
  Response,
  CreateTodoVariables,
  ChildProps
>(CREATE_TODO);

export const TodoFormComponent: React.SFC<ChildProps> = ({
  form,
  mutate,
  onSubmit,
}) => {
  return (
    <Form
      layout="inline"
      style={{ width: '100%' }}
      onSubmit={onSubmit(form, mutate)}
    >
      <Layout style={{ flexDirection: 'row' }}>
        {form.getFieldDecorator('title', {
          rules: [{ required: true, message: 'Please input Todo!' }],
        })(<Input placeholder="Input ToDo" name="title" />)}
        <Button
          type="primary"
          htmlType="submit"
          style={{ marginLeft: '.5rem' }}
          disabled={!form.getFieldValue('title')}
        >
          SUBMIT
        </Button>
      </Layout>
    </Form>
  );
};

export const TodoForm = compose(
  Form.create(),
  withCreateTodoMutation,
)(TodoFormComponent);
