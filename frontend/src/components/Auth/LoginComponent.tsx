import { TextField, Button } from '@mui/material';
import styled from 'styled-components';
import kakaoLogo from '../../assets/images/kakao.png';
import naverLogo from '../../assets/images/naver.png';
import { NavLink } from 'react-router-dom';

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
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-sm);
  text-align: center;
  font-size: var(--font-size-21xl);
`;
const EmailInputFrame = styled(TextField)`
  border: none;
  background-color: transparent;
  align-self: stretch;
  height: 64px;
  font-family: var(--font-pretendard);
  font-weight: 500;
  font-size: var(--font-size-5xl);
  color: var(--color-gray);
`;
const Div = styled.div`
  position: relative;
  font-weight: 500;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const EmailInputFrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 17px 0px;
  color: var(--color-gray);
`;
const KakaoTalkLoginButton = styled(Button)`
  width: 520px;
  flex: 0.7031;
`;
const KakaoTalkLoginButton1 = styled(Button)`
  width: 520px;
  flex: 0.875;
`;
const KakaoTalkLoginButton2 = styled(Button)`
  width: 520px;
  flex: 1;
`;
const LoginButtonFrame = styled.div`
  width: 520px;
  flex: 1;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-8xs);
  box-sizing: border-box;
  gap: 16px 0px;
  max-width: 100%;
`;
const B = styled.b`
  text-decoration: none;
  position: relative;
  color: var(--color-dodgerblue);
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const NoAccountMessageFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px 0px;
`;
const FrameParentRoot = styled.footer`
  width: 560px;
  height: 779px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  gap: 79px 0px;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-black);
  font-family: var(--font-pretendard);
  @media screen and (max-width: 700px) {
    gap: 79px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 79px 0px;
  }
`;

const LoginComponent = () => {
  return (
    <FrameParentRoot>
      <Wrapper>
        <H>로그인</H>
      </Wrapper>
      <EmailInputFrameParent>
        <EmailInputFrame
          placeholder="이메일 입력"
          variant="outlined"
          sx={{
            '& fieldset': { borderColor: '#8f8f8f' },
            '& .MuiInputBase-root': {
              height: '64px',
              backgroundColor: '#fff',
              borderRadius: '10px',
              fontSize: '24px',
            },
            '& .MuiInputBase-input': { color: '#8f8f8f' },
          }}
        />
        <EmailInputFrame
          placeholder="비밀번호 입력"
          variant="outlined"
          sx={{
            '& fieldset': { borderColor: '#8f8f8f' },
            '& .MuiInputBase-root': {
              height: '64px',
              backgroundColor: '#fff',
              borderRadius: '10px',
              fontSize: '24px',
            },
            '& .MuiInputBase-input': { color: '#8f8f8f' },
          }}
        />
        <Div>아이디/비밀번호 찾기</Div>
      </EmailInputFrameParent>
      <LoginButtonFrame>
        <KakaoTalkLoginButton
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: 'none',
            color: '#fff',
            fontSize: '24',
            background: '#2e83f2',
            borderRadius: '10px',
            '&:hover': { background: '#2e83f2' },
            width: 520,
          }}
        >
          로그인하기
        </KakaoTalkLoginButton>
        <KakaoTalkLoginButton1
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
            width: 520,
          }}
        >
          카카오로 로그인
        </KakaoTalkLoginButton1>
        <KakaoTalkLoginButton2
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
            width: 520,
          }}
        >
          네이버로 로그인
        </KakaoTalkLoginButton2>
      </LoginButtonFrame>
      <NoAccountMessageFrame>
        <Div>아직 회원이 아니신가요?</Div>
        <NavLink to={'/auth/signup'}>
          <B>회원가입</B>
        </NavLink>
      </NoAccountMessageFrame>
    </FrameParentRoot>
  );
};

export default LoginComponent;
