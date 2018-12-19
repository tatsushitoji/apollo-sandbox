import * as React from 'react';
import { List, Icon } from 'antd';
import { CreateTodo_createTodo } from '../types/CreateTodo';

export const TodoListItem: React.SFC<CreateTodo_createTodo> = ({
  title,
  completed,
}) => (
  <List.Item>
    <div
      style={{
        textAlign: 'left',
        width: '100%',
      }}
    >
      {completed && (
        <Icon
          type="check"
          style={{
            marginRight: '1em',
          }}
        />
      )}
      {title}
    </div>
  </List.Item>
);
