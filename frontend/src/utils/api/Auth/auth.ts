import { api } from '../../customAxios';

export async function postLogin(data: any) {
  const result = await api.post('/users/login', data);
  return result;
}

export async function postSignup(data: any) {
  const result = await api.post('/users/signup', data);
  return result;
}

export async function postEmailConfirm(data: string) {
  const result = await api.post('/users/signup/email-confirm', data);
  return result;
}
