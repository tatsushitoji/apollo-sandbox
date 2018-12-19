import * as React from 'react';
import { Mutation } from 'react-apollo';
import { MockedProvider } from 'react-apollo/test-utils';
import { mount } from 'enzyme';

import { CREATE_TODO } from '../graphql';
import { TodoForm } from '.';

test('should render without error', () => {
  const mockSubmit = jest.fn();
  const wrapper = mount(
    <MockedProvider mocks={[]}>
      <TodoForm onSubmit={mockSubmit} />
    </MockedProvider>,
  );
  expect(wrapper).toBeTruthy();
});

test('should render button is disable', () => {
  const mockSubmit = jest.fn();
  const wrapper = mount(
    <MockedProvider mocks={[]}>
      <TodoForm onSubmit={mockSubmit} />
    </MockedProvider>,
  );
  expect(wrapper.find('.ant-btn').prop('disabled')).toBeTruthy();
});

test('should render button is enable', () => {
  const mockSubmit = jest.fn();
  const wrapper = mount(
    <MockedProvider mocks={[]}>
      <TodoForm onSubmit={mockSubmit} />
    </MockedProvider>,
  );
  wrapper.find('.ant-input').simulate('change', { target: { value: 'todo1' } });
  expect(wrapper.find('.ant-btn').prop('disabled')).toBeFalsy();
});

test('should called onSubmit and mutate method', async () => {
  const mockSubmit = jest.fn();
  const mocks = {
    request: {
      query: CREATE_TODO,
      variables: {
        input: {
          id: 'id1',
          title: 'todo1',
          createdAt: '1544594653658',
          completed: false,
        },
      },
    },
    result: {
      data: {
        createTodo: {
          id: 'id1',
          title: 'todo1',
          createdAt: '1544594653658',
          completed: false,
        },
      },
    },
  };
  const wrapper = mount(
    <MockedProvider mocks={[mocks]} addTypename={false}>
      <TodoForm onSubmit={mockSubmit} />
    </MockedProvider>,
  );
  await new Promise(resolve => setTimeout(resolve, 10)); // wait for response
  wrapper.update(); // apply re-render
  expect(mockSubmit).toHaveBeenCalledTimes(1);
});
