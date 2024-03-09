import { Button, TextField } from '@mui/material';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { postCodeConfirm, postEmailConfirm } from '../../utils/api/Auth/auth';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const H1 = styled.h1`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 3%;
`;

const Span = styled.span`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Passwordinputframe = styled.form`
  width: 30%;
  margin: 0 auto;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem 0rem;
  max-width: 100%;
  margin-bottom: 1%;
`;
const EmailInputLabel = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 0rem 0.75rem;
  max-width: 100%;
`;
const EmailInput = styled(TextField)`
  border: none;
  background-color: transparent;
  height: 4.063rem;
  flex: 1;
  font-family: var(--font-pretendard);
  font-weight: 500;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
  min-width: 15.188rem;
  max-width: 100%;
`;
const EmailButton = styled(Button)`
  height: 4.063rem;
  width: 8.5rem;
`;

const ErrorText = styled.span`
  color: #f00;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 3%;
`;
const ButtonWrapper = styled.div`
  display: flex;
  width: 30%;
  margin: 0 auto;

  align-items: center;
`;
const Buttona = styled(Button)`
  width: 90%;
`;

export default function SearchPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const emailConfirmHandler = async () => {
    try {
      const result: any = await postEmailConfirm(email);
      console.log(result);
      alert('이메일 전송 완료');
    } catch (error: any) {
      console.log(error);
      setError(error.response.data.error);
    }
  };
  console.log(error);
  const codeConfirmHandler = async () => {
    try {
      const result: any = await postCodeConfirm({ email, usercode: code });
      console.log(result.data.response);
      const email1 = result.data.response;
      if (result.status === 200) {
        //state를 백에서 받은 이메일로 변경
        navigate('/auth/change-password', { state: email1 });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <H1>비밀번호 찾기</H1>
      <Span>회원가입 당시 가입한 이메일을 입력해주세요.</Span>
      <Span style={{ marginBottom: '3%' }}>
        해당 이메일로 인증번호가 발송됩니다.
      </Span>

      <Passwordinputframe>
        <EmailInputLabel>
          <EmailInput
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="  이메일 입력"
            variant="outlined"
            sx={{
              '& fieldset': { borderColor: '#8f8f8f' },
              '& .MuiInputBase-root': {
                height: '65px',
                backgroundColor: '#fff',
                borderRadius: '10px',
                fontSize: '24px',
              },
              '& .MuiInputBase-input': { color: '#8f8f8f' },
            }}
          />
        </EmailInputLabel>
        <EmailInputLabel>
          <EmailInput
            onChange={(e) => setCode(e.target.value)}
            value={code}
            placeholder="  인증번호 입력"
            variant="outlined"
            sx={{
              '& fieldset': { borderColor: '#8f8f8f' },
              '& .MuiInputBase-root': {
                height: '65px',
                backgroundColor: '#fff',
                borderRadius: '10px',
                fontSize: '24px',
              },
              '& .MuiInputBase-input': { color: '#8f8f8f' },
            }}
          />
          <EmailButton
            onClick={emailConfirmHandler}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: 'none',
              color: '#fff',
              fontSize: '24',
              background: '#2e83f2',
              borderRadius: '10px',
              '&:hover': { background: '#2e83f2' },
              width: 136,
              height: 65,
            }}
          >
            인증번호 받기
          </EmailButton>
        </EmailInputLabel>
      </Passwordinputframe>
      <ErrorText>{error}</ErrorText>
      <ButtonWrapper>
        <Buttona
          onClick={codeConfirmHandler}
          sx={{
            background: '#2e83f2',
            borderRadius: '10px',
            '&:hover': { background: '#2e83f2' },
            color: '#FFFFFF',
            height: 65,
            marginRight: 2,
          }}
        >
          다음
        </Buttona>

        <Buttona
          sx={{
            background: '#8F8F8F',
            borderRadius: '10px',
            '&:hover': { background: '#8F8F8F' },
            color: '#FFFFFF',
            height: 65,
          }}
          onClick={() => navigate('/auth/login')}
        >
          취소
        </Buttona>
      </ButtonWrapper>
    </Wrapper>
  );
}
