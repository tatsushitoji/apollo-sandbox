import * as React from 'react';
import { Layout, Input, Form, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';

type Props = FormComponentProps & {
  onSubmit: (form: FormComponentProps['form']) => (_: React.FormEvent) => void;
};

const TodoFormComponent: React.SFC<Props> = ({ form, onSubmit }) => (
  <Form layout="inline" style={{ width: '100%' }} onSubmit={onSubmit(form)}>
    <Layout style={{ flexDirection: 'row' }}>
      {form.getFieldDecorator('title', {
        rules: [{ required: true, message: 'Please input your username!' }],
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

export const TodoForm = Form.create()(TodoFormComponent);
