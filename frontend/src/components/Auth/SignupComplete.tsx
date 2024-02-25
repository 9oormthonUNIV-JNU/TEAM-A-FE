import { FunctionComponent } from 'react';
import styled from 'styled-components';
import shipgoLogo from '../../assets/images/shipgoIcon.svg';
import { useNavigate } from 'react-router-dom';

const H = styled.h1`
  margin: 0;
  height: 3.563rem;
  position: relative;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  @media screen and (max-width: 950px) {
    font-size: var(--font-size-19xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-10xl);
  }
`;
const IconParkship = styled.img`
  width: 12.5rem;
  height: 12.5rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const B = styled.b`
  font-family: var(--font-pretendard);
  color: var(--color-dodgerblue-200);
`;
const Span = styled.span`
  font-weight: 500;
`;
const P = styled.p`
  margin: 0;
`;
const P1 = styled.p`
  margin: 0;
  font-weight: 500;
`;
const Div = styled.div`
  position: relative;
  line-height: 1.781rem;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const IconParkshipParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0rem 0rem var(--padding-2xl);
  box-sizing: border-box;
  gap: 2.375rem 0rem;
  max-width: 100%;
  font-size: var(--font-size-5xl);
  @media screen and (max-width: 700px) {
    gap: 2.375rem 0rem;
  }
`;
const B1 = styled.b`
  position: relative;
  font-size: var(--font-size-5xl);
  font-family: var(--font-pretendard);
  color: var(--color-white);
  text-align: center;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const LinkText = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-mid) var(--padding-base) var(--padding-lg);
  background-color: var(--color-gray-100);
  flex: 1;
  border-radius: var(--br-3xs);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 10.875rem;
  &:hover {
    background-color: var(--color-gray-200);
  }
`;
const LinkText1 = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-mid) var(--padding-mid) var(--padding-lg);
  background-color: var(--color-dodgerblue-100);
  flex: 1;
  border-radius: var(--br-3xs);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 10.875rem;
  &:hover {
    background-color: var(--color-cornflowerblue);
  }
`;
const LoginButton = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 0rem 0.813rem;
  max-width: 100%;
`;
const ParentFrame = styled.div`
  width: 35.063rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-xs) 0rem 0rem;
  box-sizing: border-box;
  max-width: 100%;
`;
const MemberInfoFrameRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0rem var(--padding-xl);
  box-sizing: border-box;
  gap: 3.813rem 0rem;
  max-width: 100%;
  flex-shrink: 0;
  text-align: center;
  font-size: var(--font-size-29xl);
  color: var(--color-black);
  font-family: var(--font-pretendard);
  @media screen and (max-width: 950px) {
    gap: 3.813rem 0rem;
  }
  @media screen and (max-width: 450px) {
    gap: 3.813rem 0rem;
  }
`;

const SignupComplete: FunctionComponent = () => {
  const navigate = useNavigate();

  const navigateHandler = (e: any) => {
    const text = e.target.innerText;
    if (text === '메인으로') {
      navigate('/');
    } else if (text === '로그인하기') {
      navigate('/auth/login');
    }
  };
  return (
    <MemberInfoFrameRoot>
      <H>쉽고펀딩 회원이 되신걸 환영합니다!</H>
      <IconParkshipParent>
        <IconParkship loading="eager" alt="logo" src={shipgoLogo} />
        <Div>
          <P>
            <B>쉽고펀딩</B>
            <Span> 회원가입이 완료되었습니다!</Span>
          </P>
          <P1>다양한 펀딩 아이템이 회원님을 기다리고 있습니다.</P1>
          <P1>{`로그인 후 더 다양한 서비스를 이용할 수 있습니다. `}</P1>
        </Div>
      </IconParkshipParent>
      <ParentFrame>
        <LoginButton>
          <LinkText onClick={(e) => navigateHandler(e)}>
            <B1>메인으로</B1>
          </LinkText>

          <LinkText1 onClick={(e) => navigateHandler(e)}>
            <B1>로그인하기</B1>
          </LinkText1>
        </LoginButton>
      </ParentFrame>
    </MemberInfoFrameRoot>
  );
};

export default SignupComplete;
