import { useState } from 'react';
import styled from 'styled-components';

import { Layout, Input } from 'components/common';

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: #fff;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: #000;
  border-radius: 4px;
`;

const Login = () => {
  const [formFields, setFormFields] = useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    e.persist();
    setFormFields((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      <h1>Login</h1>
      <Form>
        <Input
          type='text'
          name='username'
          placeholder='Username '
          value={formFields.username}
          onChange={handleInputChange}
        />
        <Input
          type='password'
          name='password'
          placeholder='Password '
          value={formFields.password}
          onChange={handleInputChange}
        />
      </Form>
    </Layout>
  );
};

export default Login;
