import { api } from '../../customAxios';

export async function categoryProduct({ categoryId }: any) {
  const result = await api.get(`/products/categories/${categoryId}`);
  return result;
}
