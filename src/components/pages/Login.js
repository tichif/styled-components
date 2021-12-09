import { useState, useEffect } from 'react';
import styled from 'styled-components';

import {
  Layout,
  Input,
  PasswordInput,
  Button,
  Spinner,
} from 'components/common';

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: #fff;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: #000;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }
`;

let timeout;

const Login = () => {
  const [formFields, setFormFields] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    e.persist();
    setFormFields((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <Layout>
      <h1>Login</h1>
      <Form onSubmit={submitHandler}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Input
              type='text'
              name='username'
              placeholder='Username '
              value={formFields.username}
              onChange={handleInputChange}
            />
            <PasswordInput
              name='password'
              value={formFields.password}
              onChange={handleInputChange}
            />
          </>
        )}
        <Button large type='submit' disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </Button>
        {!loading && (
          <>
            <div className='alt-text'>or</div>
            <Button secondary type='button'>
              Register
            </Button>
          </>
        )}
      </Form>
    </Layout>
  );
};

export default Login;
