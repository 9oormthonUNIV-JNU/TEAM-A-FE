import { TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';

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

export default function EmailComform() {
  const { register, handleSubmit } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <EmailInput
        type="email"
        placeholder="이메일 입력"
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
        {...register('email', {
          required: '* 이메일을 입력하세요',
        })}
      />
      <EmailButton
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
          width: 136,
          height: 65,
        }}
      >
        인증하기
      </EmailButton>
    </>
  );
}
