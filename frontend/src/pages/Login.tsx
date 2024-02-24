import { FunctionComponent } from 'react';
import LoginComponent from '../components/Auth/LoginComponent';
import styled from 'styled-components';

const LoginRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0px 93px;
  box-sizing: border-box;
  gap: 120px 0px;
  letter-spacing: normal;
  @media screen and (max-width: 975px) {
    gap: 120px 0px;
  }
  @media screen and (max-width: 700px) {
    gap: 120px 0px;
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
