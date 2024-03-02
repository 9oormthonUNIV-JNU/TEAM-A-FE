import { api } from '../../customAxios';

export async function postLogin(data: any) {
  const result = await api.post('/login', data);
  return result;
}

export async function postSignup(data: any) {
  const result = await api.post('/signup', data);
  return result;
}

//사용자 이메일 인증요청
export async function postEmailConfirm(data: string) {
  const result = await api.post('/users/forgot-password/sendEmail', data);
  return result;
}

//인증번호 확인 요청
export async function postCodeConfirm(data: any) {
  const result = await api.post('/users/forgot-password/email-confirm', data);
  return result;
}

//비밀번호 변경
export async function patchPassword(data: any) {
  const result = await api.patch('/users/change-password', data);
  return result;
}
