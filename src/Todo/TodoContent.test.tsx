import * as React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { mount } from 'enzyme';

import { GET_TODOS } from '../graphql';
import { TodoContent } from '.';

test('should render Doing Todo List', async () => {
  const todoMock = {
    request: {
      query: GET_TODOS,
    },
    result: {
      data: {
        todos: [
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
        ],
      },
    },
  };
  const wrapper = mount(
    <MockedProvider mocks={[todoMock]} addTypename={false}>
      <TodoContent />
    </MockedProvider>,
  );
  await new Promise(resolve => setTimeout(resolve, 0)); // wait for response
  wrapper.update(); // apply re-render
  expect(
    wrapper
      .find('.ant-spin-container')
      .at(0)
      .children(),
  ).toHaveLength(2);
  expect(
    wrapper
      .find('.ant-spin-container')
      .at(1)
      .children(),
  ).toHaveLength(0);
});

test('should render No data', async () => {
  const todoMock = {
    request: {
      query: GET_TODOS,
    },
    result: {
      data: {
        todos: [
          {
            id: 'id1',
            title: 'todooo1',
            completed: true,
            createdAt: '1544594653658',
          },
          {
            id: 'id2',
            title: 'todooo2',
            completed: true,
            createdAt: '1544594653650',
          },
        ],
      },
    },
  };
  const wrapper = mount(
    <MockedProvider mocks={[todoMock]} addTypename={false}>
      <TodoContent />
    </MockedProvider>,
  );
  await new Promise(resolve => setTimeout(resolve, 0)); // wait for response
  wrapper.update(); // apply re-render
  expect(
    wrapper
      .find('.ant-spin-container')
      .at(0)
      .children()
      .text(),
  ).toEqual('No data');
  expect(
    wrapper
      .find('.ant-spin-container')
      .at(1)
      .exists(),
  ).toBeFalsy();
});
