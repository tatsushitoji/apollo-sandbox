import * as React from 'react';
import { graphql, ChildDataProps } from 'react-apollo';
import { Tabs } from 'antd';
import { TodoList } from '.';
import { GET_TODOS } from '../graphql';
import { GetTodos } from '../types/GetTodos';

interface InjectProps {}

type Response = {
  todos: GetTodos['todos'];
};

type ChildProps = ChildDataProps<InjectProps, Response, {}>;

const withTodosQuery = graphql<InjectProps, Response, {}, ChildProps>(
  GET_TODOS,
  {
    options: { fetchPolicy: 'cache-and-network' },
  },
);

export const TodoContent = withTodosQuery(
  ({ data: { todos, error, loading } }) => {
    if (error || loading) {
      return <p>{error ? `Error! ${error}` : 'loading...'}</p>;
    }
    return (
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="DOING" key="1">
          <TodoList todos={todos!} isDone={false} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="DONE" key="2">
          <TodoList todos={todos!} isDone />
        </Tabs.TabPane>
      </Tabs>
    );
  },
);
