import * as React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { mount } from 'enzyme';

import { GET_TODOS } from '../graphql';
import { Todo } from '.';

test('should render without error', () => {
  const wrapper = mount(
    <MockedProvider mocks={[]}>
      <Todo />
    </MockedProvider>,
  );
  expect(wrapper).toBeTruthy();
});
