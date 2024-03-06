import axios from 'axios';
import { api } from '../../customAxios';
import { getAuthToken } from '../../tokenHandler';

const token = getAuthToken();

const headers = {
  Authorization: token,
  'Content-Type': `multipart/form-data'`,
  type: 'formData',
};

export async function getProduct({
  categoryId = '',
  page = '',
  sorted = '',
  min_price = '',
  max_price = '',
  search = '',
}: any) {
  const result =
    await api.get(`/fundings?page=${page}&category=${categoryId}&sorted=${sorted}&min_price=
  ${min_price}&max_price=${max_price}&search=${search}`);
  return result;
}

export async function detailProduct(fundingId: any) {
  console.log(fundingId);
  const result = await api.get(`/fundings/${fundingId}`);
  return result;
}

export async function postProduct(data: any, headers: any) {
  const result = await api.post('/fundings', data, { headers });
  return result;
}

export async function postImage(data: any) {
  const result = await axios.post(
    'http://3.34.57.226:8080/api/fundings/images',
    data,
    { headers },
  );
  return result;
}
