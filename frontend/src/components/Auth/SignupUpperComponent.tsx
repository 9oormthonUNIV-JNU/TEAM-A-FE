import { FunctionComponent } from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';
import kakaoLogo from '../../assets/images/kakao.png';
import naverLogo from '../../assets/images/naver.png';

const H = styled.h2`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 800;
  font-family: inherit;
  @media screen and (max-width: 950px) {
    font-size: var(--font-size-13xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-5xl);
  }
`;
const Sns = styled.div`
  position: relative;
  font-weight: 500;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const KakaoBtn = styled(Button)`
  align-self: stretch;
  flex: 1;
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const NaverBtn = styled(Button)`
  align-self: stretch;
  flex: 1;
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const LoginWrapper = styled.div`
  align-self: stretch;
  flex: 0.6;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem 0rem;
`;
const SnsButtons = styled.div`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2.125rem 0rem;
  font-size: var(--font-size-xl);
  @media screen and (max-width: 700px) {
    gap: 2.125rem 0rem;
  }
`;
const SignUpButton = styled.div`
  width: 35rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0rem var(--padding-xl);
  box-sizing: border-box;
  gap: 2.938rem 0rem;
  max-width: 100%;
  @media screen and (max-width: 700px) {
    gap: 2.938rem 0rem;
  }
`;
const FrameParentRoot = styled.section`
  align-self: stretch;
  height: 27.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 3.563rem 0rem;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-21xl);
  color: var(--color-black);
  font-family: var(--font-pretendard);
  @media screen and (max-width: 700px) {
    gap: 3.563rem 0rem;
  }
  margin-bottom: -5%;
`;

const SignupUpperComponent: FunctionComponent = () => {
  return (
    <FrameParentRoot>
      <SignUpButton>
        <H>회원가입</H>
        <SnsButtons>
          <Sns>SNS 계정으로 간편하게 회원가입</Sns>
          <LoginWrapper>
            <KakaoBtn
              startIcon={<img width="40px" height="40px" src={kakaoLogo} />}
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: 'none',
                color: '#000',
                fontSize: '24',
                background: '#fee500',
                borderRadius: '10px',
                '&:hover': { background: '#fee500' },
              }}
            >
              카카오로 시작하기
            </KakaoBtn>
            <NaverBtn
              startIcon={<img width="48px" height="48px" src={naverLogo} />}
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: 'none',
                color: '#fff',
                fontSize: '24',
                background: '#03c75a',
                borderRadius: '10px',
                '&:hover': { background: '#03c75a' },
              }}
            >
              네이버로 시작하기
            </NaverBtn>
          </LoginWrapper>
        </SnsButtons>
      </SignUpButton>
    </FrameParentRoot>
  );
};

export default SignupUpperComponent;
