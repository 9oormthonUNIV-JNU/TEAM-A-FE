import { api } from '../../customAxios';

export async function searchProduct(data: string) {
  const result = await api.get(`/fundings?page=&category=&sorted=&min_price=
  &max_price=&search=${data}`);
  return result;
}

export async function bannerProduct() {
  const result = await api.get('/banners/main');
  return result;
}

export async function urgentProduct() {
  const result = await api.get('/fundings/urgent');
  return result;
}

export async function popularProduct() {
  const result = await api.get('/fundings/popular');
  return result;
}
