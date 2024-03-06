import { styled } from 'styled-components';
import MultiCarousel from './MultiCarousel';
import { useEffect, useState } from 'react';
import { bannerProduct } from '../../utils/api/MainPage/product';
import { useNavigate } from 'react-router-dom';

export default function CarouselPosts() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const callBanners = async () => {
    try {
      const result = await bannerProduct();
      setData(result.data.response);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  useEffect(() => {
    callBanners();
  }, []);
  return (
    <MultiCarousel>
      {data.map((item: any) => {
        return (
          <CarouselImg
            src={item.bannerImage}
            onClick={() => navigate(`products/${item.fundingId}`)}
          />
        );
      })}
    </MultiCarousel>
  );
}

const CarouselImg = styled.img`
  width: 100%;
  height: 500px;
`;
