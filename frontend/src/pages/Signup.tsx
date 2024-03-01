import { styled } from 'styled-components';
import SignupComponent from '../components/Auth/SignupComponent';

const SignupRoot = styled.div`
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

export default function Signup() {
  return (
    <SignupRoot>
      <SignupComponent />
    </SignupRoot>
  );
}
