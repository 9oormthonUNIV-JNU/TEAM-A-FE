import { redirect } from 'react-router-dom';

//토큰의 만료기간을 계산하는 함수.숫자값이며 getAuthToken에 값을 넘겨준다.
export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem('expiration');
  if (!storedExpirationDate) return;
  const expirationDate = new Date(storedExpirationDate);
  const nowDate = new Date();
  const duration = expirationDate.getTime() - nowDate.getTime();
  return duration;
}

//토큰이 있는지 계산하는 함수. 토큰 계산 값을 확인해 리턴해준다.
export function getAuthToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;
  const tokenDuration = getTokenDuration();
  if (!tokenDuration) return null;
  if (tokenDuration < 0) {
    return 'EXPIRED';
  }
  return token;
}

export function checkAuthLoader() {
  const token = getAuthToken();
  if (!token) {
    return redirect('/auth/login');
  }
  return null;
}
