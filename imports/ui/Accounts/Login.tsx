import * as React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Col, Row } from 'react-flexbox-grid'
import './accounts.css';

import { FormComponentProps } from 'antd/lib/form';

interface UserFormProps extends FormComponentProps {
  userName: String;
  password: string;
}

const FormItem = Form.Item;

class NormalLoginForm extends React.Component<UserFormProps, any> {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
      }
    });
  }

 public render(): React.ReactNode {
    const { getFieldDecorator } = this.props.form;
    return (
        <Row>
            <Col xs={12}>
                <Row center="xs">
                <Col xs={6}>
                <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
                </FormItem>
                <FormItem>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
                </FormItem>
                <FormItem>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(
                    <Checkbox>Remember me</Checkbox>
                )}
                <a className="login-form-forgot" href="">Forgot password</a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or <a href="">register now!</a>
                </FormItem>
            </Form>
 
                </Col>
                </Row>
            </Col>
        </Row>
        )
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm

// ReactDOM.render(<WrappedNormalLoginForm />, mountNode);