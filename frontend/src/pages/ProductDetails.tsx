import { useParams } from 'react-router-dom';
import DetailUpper from '../components/Products/DetailUpper';

export default function ProductDetails() {
  const { productId } = useParams();
  console.log(productId);

  return <DetailUpper />;
}
