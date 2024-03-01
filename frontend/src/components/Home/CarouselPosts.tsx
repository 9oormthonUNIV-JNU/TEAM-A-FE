import { styled } from 'styled-components';
import MultiCarousel from './MultiCarousel';
import { useEffect } from 'react';
import { bannerProduct } from '../../utils/api/MainPage/product';

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

export default function CarouselPosts() {
  const callBanners = async () => {
    try {
      const result = await bannerProduct();

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    callBanners();
  }, []);
  return (
    <MultiCarousel>
      {images.map((item) => {
        return <CarouselImg src={item.imgPath} />;
      })}
    </MultiCarousel>
  );
}

const CarouselImg = styled.img`
  width: 100%;
  height: 500px;
`;
