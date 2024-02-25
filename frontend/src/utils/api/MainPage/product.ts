import { api } from '../../customAxios';

export async function searchProduct(data: string) {
  const result = await api.get(`/products?search${data}`);
  return result;
}
