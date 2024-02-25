import { FunctionComponent } from 'react';

import styled from 'styled-components';
import LoginComponent from '../components/Auth/LoginComponent';

const LoginRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0rem 0rem 5.813rem;
  box-sizing: border-box;
  gap: 7.5rem 0rem;
  letter-spacing: normal;
  @media screen and (max-width: 975px) {
    gap: 7.5rem 0rem;
  }
  @media screen and (max-width: 700px) {
    gap: 7.5rem 0rem;
  }
`;

const Login: FunctionComponent = () => {
  return (
    <LoginRoot>
      <LoginComponent />
    </LoginRoot>
  );
};

export default Login;
