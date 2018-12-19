import * as React from 'react';
import { List } from 'antd';
import { TodoListItem } from '.';
import { GetTodos } from '../types/GetTodos';

type Props = {
  todos: GetTodos['todos'];
  isDone: boolean;
};

export const TodoList: React.SFC<Props> = ({ todos, isDone }) => (
  <List
    size="large"
    bordered
    dataSource={
      isDone
        ? todos && todos.filter(todo => todo.completed)
        : todos && todos.filter(todo => !todo.completed)
    }
    renderItem={TodoListItem}
  />
);
