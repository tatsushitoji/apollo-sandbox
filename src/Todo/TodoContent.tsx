import * as React from 'react';
import { Tabs } from 'antd';
import { TodoList } from '.';
import { GetTodos } from '../types/GetTodos';

interface Props {
  todos: GetTodos['todos'];
}

export const TodoContent: React.SFC<Props> = ({ todos }) => (
  <Tabs defaultActiveKey="1">
    <Tabs.TabPane tab="DOING" key="1">
      <TodoList todos={todos} isDone={false} />
    </Tabs.TabPane>
    <Tabs.TabPane tab="DONE" key="2">
      <TodoList todos={todos} isDone />
    </Tabs.TabPane>
  </Tabs>
);
