import * as React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { mount } from 'enzyme';

import { CreateTodo_createTodo } from '../types/CreateTodo';
import { TodoList } from '.';

test('should render Doing Todo List', async () => {
  const todos: CreateTodo_createTodo[] = [
    {
      id: 'id1',
      title: 'todooo1',
      completed: false,
      createdAt: '1544594653658',
    },
    {
      id: 'id2',
      title: 'todooo2',
      completed: false,
      createdAt: '1544594653650',
    },
  ];
  const wrapper = mount(
    <MockedProvider mocks={[]}>
      <TodoList todos={todos} isDone={false} />
    </MockedProvider>,
  );
  expect(wrapper.find('.ant-spin-container').children()).toHaveLength(2);
});

test('should render Done Todo List', async () => {
  const todos: CreateTodo_createTodo[] = [
    {
      id: 'id1',
      title: 'todooo1',
      completed: false,
      createdAt: '1544594653658',
    },
  ];
  const wrapper = mount(
    <MockedProvider mocks={[]}>
      <TodoList todos={todos} isDone />
    </MockedProvider>,
  );
  expect(wrapper.find('.ant-spin-container').children()).toHaveLength(1);
});
