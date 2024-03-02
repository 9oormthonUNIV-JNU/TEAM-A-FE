import { api } from '../../customAxios';

export async function categoryProduct({ categoryId }: any) {
  const result = await api.get(`/fundings/categories/${categoryId}`);
  return result;
}

export async function detailProduct({ productId }: any) {
  const result = await api.get(`/fundings/${productId}`);
  return result;
}
