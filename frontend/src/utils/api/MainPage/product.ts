import { api } from '../../customAxios';

export async function searchProduct(data: string) {
  const result = await api.get(`/products?search${data}`);
  return result;
}

export async function bannerProduct() {
  const result = await api.get('/banners/main');
  return result;
}
