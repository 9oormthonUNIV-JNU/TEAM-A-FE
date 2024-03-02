import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { patchPassword } from '../../utils/api/Auth/auth';

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

export default function ChangePassword() {
  const { state } = useLocation();

  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const onValid = () => {
    try {
      const result = patchPassword({ password, checkPassword });
      console.log(result);
      navigate('/auth/login');
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!state) navigate('/');
  }, [state, navigate]);

  return (
    <Wrapper>
      <H1>비밀번호 변경하기</H1>

      <Span style={{ marginBottom: '3%' }}>
        변경하실 비밀번호를 입력해 주세요.
      </Span>

      <Passwordinputframe>
        <EmailInputLabel>
          <EmailInput
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="  비밀번호 입력"
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
            type="password"
            onChange={(e) => setCheckPassword(e.target.value)}
            value={checkPassword}
            placeholder="  비밀번호 확인"
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
      </Passwordinputframe>
      {error ? (
        <ErrorText>1</ErrorText>
      ) : (
        <ErrorText style={{ color: 'white' }}>1</ErrorText>
      )}

      <ButtonWrapper>
        <Buttona
          onClick={onValid}
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
          onClick={() => navigate('/')}
          sx={{
            background: '#8F8F8F',
            borderRadius: '10px',
            '&:hover': { background: '#8F8F8F' },
            color: '#FFFFFF',
            height: 65,
          }}
        >
          취소
        </Buttona>
      </ButtonWrapper>
    </Wrapper>
  );
}
