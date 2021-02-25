import React from "react"
import { Content } from "antd/lib/layout/layout"
import { Button, Col, Row, Form, Input, Typography } from "antd"
import { gql, useMutation } from "@apollo/client"

const { Item } = Form

const LOGIN_USER = gql`
  mutation login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
    }
  }
`

const Login = () => {
  const [loginUser, { loading, error }] = useMutation(LOGIN_USER)
  const handleFormSubmit = async (value) => {
    const { data } = await loginUser({
      variables: {
        input: {
          identifier: value.email,
          password: value.password,
        },
      },
    })
    console.log(data)
    localStorage.setItem("accessSmartToken", data.login.jwt)
  }

  const [loginForm] = Form.useForm()
  return (
    <Content>
      <Row justify="center">
        <Col span={8}>
          <div>
            <Typography.Title>Login in system</Typography.Title>
          </div>
          <Form form={loginForm} onFinish={handleFormSubmit}>
            <Item name="email">
              <Input name="email" required placeholder="Email" type="email" />
            </Item>

            <Item name="password">
              <Input name="password" placeholder="password" type="password" />
            </Item>
            <Button
              htmlType="submit"
              required
              type="primary"
              block={true}
              loading={loading}
            >
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Content>
  )
}

export default Login
