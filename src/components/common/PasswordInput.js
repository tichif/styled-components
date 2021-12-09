import { useState } from 'react';
import styled from 'styled-components';
import { Input } from './Input';

const PasswordInputStyle = styled(Input).attrs(() => ({
  type: 'password',
  placeholder: 'Password',
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const PasswordInputWrapper = styled.div`
  display: flex;

  ~ div {
    margin-bottom: 8px;
  }
`;

const ToggleButton = styled.div`
  border: 1px solid #ccc;
  height: 40px;
  box-sizing: border-box;
  font-size: 0.9em;
  display: flex;
  padding: 8px;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: #fff;
  cursor: pointer;
  font-weight: bold;
  user-select: none;
  color: #000;
`;

export const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <PasswordInputWrapper>
        <PasswordInputStyle {...props} />
        <ToggleButton onClick={() => setShowPassword((state) => !state)}>
          {showPassword ? 'Hide ' : 'Show '}
        </ToggleButton>
      </PasswordInputWrapper>
      <div>{showPassword ? props.value : ''}</div>
    </>
  );
};
