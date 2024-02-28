import { FunctionComponent } from 'react';
import { TextField, Button } from '@mui/material';
import styled from 'styled-components';
import kakaoLogo from '../../assets/images/kakao.png';
import naverLogo from '../../assets/images/naver.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { postLogin } from '../../utils/api/Auth/auth';

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
  padding: 0rem 0rem var(--padding-sm);
  text-align: center;
  font-size: var(--font-size-21xl);
`;
const EmailInputFrame = styled(TextField)`
  border: none;
  background-color: transparent;
  align-self: stretch;
  height: 4rem;
  font-family: var(--font-pretendard);
  font-weight: 500;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
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
  gap: 1.063rem 0rem;
  color: var(--color-gray-100);
`;
const LoginButton = styled(Button)`
  width: 32.5rem;

  flex: 0.7031;
`;
const KakaoTalkLoginButton = styled(Button)`
  width: 32.5rem;
  flex: 0.7031;
`;
const NaverLoginButton = styled(Button)`
  width: 32.5rem;
  flex: 0.7031;
`;
const LoginButtonFrame = styled.div`
  width: 32.5rem;
  flex: 1;
  /* overflow-x: auto; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem var(--padding-8xs);
  box-sizing: border-box;
  height: 100%;
  gap: 0.8rem 0rem;
  max-width: 100%;
`;
const B = styled.b`
  position: relative;
  color: var(--color-dodgerblue-200);
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const NoAccountMessageFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem 0rem;
`;
const FrameParentRoot = styled.footer`
  width: 35rem;
  height: 48.688rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0rem var(--padding-xl);
  box-sizing: border-box;
  gap: 4.938rem 0rem;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-black);
  font-family: var(--font-pretendard);
  @media screen and (max-width: 700px) {
    gap: 4.938rem 0rem;
  }
  @media screen and (max-width: 450px) {
    gap: 4.938rem 0rem;
  }
`;
const ErrorSpan = styled.span`
  color: #f00;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
`;

interface IForm {
  message?: string;
  email: string;
  password: string;
}

const LoginComponent: FunctionComponent = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const onValid = async (data: IForm) => {
    try {
      const result = await postLogin(data);
      console.log(result);
      // console.log(result.headers.get('Authorization'));
      if (result?.status === 200) {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          {...register('email', {
            required: '이메일을 입력하세요.',
          })}
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
          {...register('password', { required: '비밀번호를 입력해 주세요' })}
        />
        <NavLink
          to={'/auth/search-password'}
          style={{ textDecoration: 'none', color: '#8F8F8F' }}
        >
          <Div>비밀번호 찾기</Div>
        </NavLink>
      </EmailInputFrameParent>

      <LoginButtonFrame>
        {errors && (
          <ErrorSpan>
            {errors.email ? errors.email.message : errors.password?.message}
          </ErrorSpan>
        )}
        <LoginButton
          onClick={handleSubmit(onValid)}
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
        </LoginButton>

        <KakaoTalkLoginButton
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
        </KakaoTalkLoginButton>
        <NaverLoginButton
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
        </NaverLoginButton>
      </LoginButtonFrame>
      <NoAccountMessageFrame>
        <Div>아직 회원이 아니신가요?</Div>
        <NavLink to={'/auth/signup'} style={{ textDecoration: 'none' }}>
          <B>회원가입</B>
        </NavLink>
      </NoAccountMessageFrame>
    </FrameParentRoot>
  );
};

export default LoginComponent;
