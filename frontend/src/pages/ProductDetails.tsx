import { useLoaderData } from 'react-router-dom';
import DetailUpper from '../components/Products/DetailUpper';

export default function ProductDetails() {
  const data = useLoaderData();
  console.log(data);

  return <DetailUpper />;
}
