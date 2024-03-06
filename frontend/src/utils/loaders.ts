import { getProduct, detailProduct } from './api/Products/product';

export async function categoryLoader({ params }: any) {
  const contact = await getProduct({ params });
  if (!contact) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }
  return { contact };
}

export async function detailsLoader({ params }: any) {
  console.log(params);
  const contact = await detailProduct(params);
  if (!contact) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }
  return { contact };
}
