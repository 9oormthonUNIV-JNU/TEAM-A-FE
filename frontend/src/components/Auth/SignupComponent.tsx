import { FunctionComponent } from 'react';
import { TextField, Button } from '@mui/material';

import styled from 'styled-components';
import SignupUpperComponent from './SignupUpperComponent';
import { NavLink } from 'react-router-dom';

const VectorChild = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  flex-shrink: 0;
`;
const B = styled.b`
  position: relative;
  @media screen and (max-width: 950px) {
    font-size: 26px;
  }
  @media screen and (max-width: 700px) {
    font-size: var(--font-size-lgi);
  }
`;
const Emailinputframe = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 3px;
`;
const B1 = styled.b`
  width: 83px;
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  padding-right: var(--padding-xl);
  @media screen and (max-width: 700px) {
    font-size: var(--font-size-lgi);
  }
`;
const Passwordinput2 = styled(TextField)`
  border: none;
  background-color: transparent;
  height: 65px;
  flex: 1;
  font-family: var(--font-pretendard);
  font-weight: 500;
  font-size: var(--font-size-5xl);
  color: var(--color-gray);
  min-width: 243px;
  max-width: 100%;
`;
const Passwordinput3 = styled(Button)`
  height: 65px;
  width: 136px;
`;
const Passwordinputlabel = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 0px 12px;
  max-width: 100%;
`;
const Passwordconfirminputlabel1 = styled(TextField)`
  border: none;
  background-color: transparent;
  align-self: stretch;
  height: 65px;
  font-family: var(--font-pretendard);
  font-weight: 500;
  font-size: var(--font-size-5xl);
  color: var(--color-gray);
`;
const Passwordinputframe1 = styled.form`
  margin: 0;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px 0px;
  max-width: 100%;
`;
const Emailfield = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px 0px;
  max-width: 100%;
  font-size: var(--font-size-5xl);
`;
const PasswordInput2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-8xs);
  box-sizing: border-box;
  gap: 28px 0px;
  max-width: 100%;
`;
const B2 = styled.b`
  width: 104px;
  position: relative;
  font-size: var(--font-size-5xl);
  display: inline-block;
  font-family: var(--font-pretendard);
  color: var(--color-black);
  text-align: center;
  box-sizing: border-box;
  padding-right: var(--padding-xl);
  @media screen and (max-width: 700px) {
    font-size: var(--font-size-lgi);
  }
`;
const Div = styled.div`
  width: 377px;
  position: relative;
  font-size: var(--font-size-base);
  font-weight: 500;
  font-family: var(--font-pretendard);
  color: var(--color-gray);
  text-align: left;
  display: inline-block;
  max-width: 100%;
  box-sizing: border-box;
  padding-right: var(--padding-xl);
`;
const Kakaologinbutton = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-8xs);
  box-sizing: border-box;
  gap: 16px 0px;
  max-width: 100%;
`;
const B3 = styled.b`
  width: 83px;
  position: relative;
  font-size: var(--font-size-5xl);
  display: inline-block;
  font-family: var(--font-pretendard);
  color: var(--color-black);
  text-align: center;
  box-sizing: border-box;
  padding-right: var(--padding-xl);
  @media screen and (max-width: 700px) {
    font-size: var(--font-size-lgi);
  }
`;
const Loginorregisterframe = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 19px 0px;
`;
const Existingmemberwarning = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 19px var(--padding-8xs);
  gap: 48px 0px;
  @media screen and (max-width: 450px) {
    gap: 48px 0px;
  }
`;
const SignUpButton1 = styled(Button)`
  align-self: stretch;
  flex: 1;
  max-width: 100%;
`;
const PasswordInputFrame1 = styled.div`
  align-self: stretch;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-8xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const Signupbutton1 = styled.form`
  margin: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 47px 0px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    gap: 47px 0px;
  }
`;
const Nicknameinputlabel = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs) var(--padding-2xl) 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const Div1 = styled.div`
  position: relative;
  font-weight: 500;
  @media screen and (max-width: 700px) {
    font-size: var(--font-size-base);
  }
`;
const B4 = styled.b`
  text-decoration: none;
  position: relative;
  text-decoration: underline;
  @media screen and (max-width: 700px) {
    font-size: var(--font-size-base);
  }
`;
const InputValidationMessage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px 27px;
`;
const LogoFrame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 44px 0px var(--padding-xl);
  text-align: left;
  font-size: var(--font-size-xl);
  @media screen and (max-width: 700px) {
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const EmailValidation = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 66px 0px;
  max-width: 100%;
  @media screen and (max-width: 700px) {
    gap: 66px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 66px 0px;
  }
`;
const EmailFrame = styled.div`
  width: 538px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 11px 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  @media screen and (max-width: 450px) {
    max-width: calc(100% - 11px);
  }
`;
const Vector1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 50px 0px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    gap: 50px 0px;
  }
`;
const PasswordInputFrame2 = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-11xs);
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-13xl);
  color: var(--color-black);
  font-family: var(--font-pretendard);
`;
const SignupRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px 106px;
  box-sizing: border-box;
  gap: 101px 0px;
  letter-spacing: normal;
  @media screen and (max-width: 975px) {
    gap: 101px 0px;
  }
  @media screen and (max-width: 450px) {
    gap: 101px 0px;
  }
`;

const Signup: FunctionComponent = () => {
  return (
    <SignupRoot>
      <SignupUpperComponent />
      <PasswordInputFrame2>
        <Vector1>
          <VectorChild loading="eager" alt="" src="/vector-1.svg" />
          <EmailFrame>
            <EmailValidation>
              <PasswordInput2>
                <Emailinputframe>
                  <B>이메일로 가입하기</B>
                </Emailinputframe>
                <Emailfield>
                  <B1>이메일</B1>
                  <Passwordinputframe1>
                    <Passwordinputlabel>
                      <Passwordinput2
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
                      />
                      <Passwordinput3
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
                      </Passwordinput3>
                    </Passwordinputlabel>
                    <Passwordconfirminputlabel1
                      placeholder="인증번호 입력"
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
                  </Passwordinputframe1>
                </Emailfield>
              </PasswordInput2>
              <Nicknameinputlabel>
                <Signupbutton1>
                  <Kakaologinbutton>
                    <B2>비밀번호</B2>
                    <Div>
                      영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요
                    </Div>
                    <Passwordconfirminputlabel1
                      placeholder="비밀번호 입력"
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
                  </Kakaologinbutton>
                  <Existingmemberwarning>
                    <Passwordconfirminputlabel1
                      placeholder="비밀번호 확인"
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
                    <Loginorregisterframe>
                      <B3>닉네임</B3>
                      <Passwordconfirminputlabel1
                        placeholder="닉네임 입력"
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
                    </Loginorregisterframe>
                  </Existingmemberwarning>
                  <PasswordInputFrame1>
                    <SignUpButton1
                      disableElevation={true}
                      variant="contained"
                      sx={{
                        textTransform: 'none',
                        color: '#fff',
                        fontSize: '24',
                        background: '#2e83f2',
                        borderRadius: '10px',
                        '&:hover': { background: '#2e83f2' },
                      }}
                    >
                      회원가입하기
                    </SignUpButton1>
                  </PasswordInputFrame1>
                </Signupbutton1>
              </Nicknameinputlabel>
              <LogoFrame>
                <InputValidationMessage>
                  <Div1>이미 회원이신가요?</Div1>
                  <NavLink to={'/auth/login'}>
                    <B4>로그인</B4>
                  </NavLink>
                </InputValidationMessage>
              </LogoFrame>
            </EmailValidation>
          </EmailFrame>
        </Vector1>
      </PasswordInputFrame2>
    </SignupRoot>
  );
};
export default Signup;
