import { api } from '../../customAxios';

export async function getProduct({
  categoryId = '',
  page = '',
  sorted = '',
  min_price = '',
  max_price = '',
  search = '',
}: any) {
  console.log(categoryId);
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
