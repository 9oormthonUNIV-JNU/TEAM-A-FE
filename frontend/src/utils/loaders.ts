import { categoryProduct, detailProduct } from './api/Products/category';

export async function categoryLoader({ params }: any) {
  const contact = await categoryProduct(params);
  if (!contact) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }
  return { contact };
}

export async function detailsLoader({ params }: any) {
  const contact = await detailProduct(params);
  if (!contact) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }
  return { contact };
}
