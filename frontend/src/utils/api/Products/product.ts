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

export async function detailProduct({ productId }: any) {
  const result = await api.get(`/fundings/${productId}`);
  return result;
}
