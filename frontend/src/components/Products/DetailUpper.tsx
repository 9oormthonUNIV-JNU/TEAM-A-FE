import { FunctionComponent } from 'react';
import styled from 'styled-components';
import testImg from '../../assets/images/mainLogo.svg';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { detailProduct } from '../../utils/api/Products/product';

const FrameBIcon = styled.img`
  position: absolute;
  top: 69px;
  left: 1059px;
  width: 660px;
  height: 460px;
  overflow: hidden;
  object-fit: cover;
`;
const FrameAIcon = styled.img`
  position: absolute;
  top: 554px;
  left: 1059px;
  width: 80px;
  height: 80px;
  overflow: hidden;
  object-fit: cover;
`;
const FrameAIcon1 = styled.img`
  position: absolute;
  top: 554px;
  left: 1155px;
  width: 80px;
  height: 80px;
  overflow: hidden;
  object-fit: cover;
`;
const FrameAIcon2 = styled.img`
  position: absolute;
  top: 554px;
  left: 1251px;
  width: 80px;
  height: 80px;
  overflow: hidden;
  object-fit: cover;
`;
const B = styled.b`
  position: relative;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;

const Iconoirnavarrowright = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 1px 0px 0px;
  gap: 0px 1px;
  cursor: pointer;
`;
const Div = styled.div`
  position: relative;
  font-size: var(--font-size-5xl);
  font-weight: 500;
  font-family: var(--font-pretendard);
  color: var(--color-dodgerblue-100);
  text-align: left;
`;
const FrameH = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-dodgerblue-100);
  padding: var(--padding-3xs) 14px var(--padding-3xs) 19px;
  background-color: var(--color-white);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  &:hover {
    background-color: #e6e6e6;
    border: 1px solid var(--color-cornflowerblue);
    box-sizing: border-box;
  }
`;
const H = styled.h2`
  margin: 0;
  width: 100%;
  height: 48px;
  position: relative;
  font-size: inherit;
  font-weight: 800;
  font-family: inherit;
  display: inline-block;
  @media screen and (max-width: 750px) {
    font-size: 32px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-5xl);
  }
`;
const FrameG = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 14px 0px;
  font-size: var(--font-size-21xl);
`;
const FrameD = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xl) 0px 0px;
  box-sizing: border-box;
  gap: 24px 0px;
  max-width: 100%;
`;
const MaurisArcuSed = styled.div`
  width: 688px;
  height: 127px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const FrameC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 13px 0px;
  max-width: 100%;
`;
const Span = styled.span``;
const Span1 = styled.span`
  color: var(--color-black);
  font-size: 36px;
`;
const B1 = styled.b``;
const Span2 = styled.span`
  font-weight: 500;
`;
const Div1 = styled.div`
  width: 200px;
  position: relative;
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
  padding-right: var(--padding-xl);
  font-size: var(--font-size-21xl);
  color: var(--color-dodgerblue-100);
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-10xl);
  }
  @media screen and (max-width: 450px) {
    font-size: 22px;
  }
`;
const B2 = styled.b`
  width: 227px;
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  padding-right: var(--padding-xl);
  @media screen and (max-width: 750px) {
    font-size: 38px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-10xl);
  }
`;
const B3 = styled.b`
  width: 50%;
  position: relative;
  font-size: var(--font-size-5xl);
  display: inline-block;
  font-family: var(--font-pretendard);
  color: var(--color-white);
  text-align: center;
  box-sizing: border-box;
  padding-left: var(--padding-xl);
  padding-right: var(--padding-xl);
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const OpenNotificationBtn = styled.button`
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 17px 16px var(--padding-lg);
  background-color: #2e83f2;
  flex: 1;
  border-radius: var(--br-3xs);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 219px;
  max-width: 100%;
  &:hover {
    background-color: var(--color-cornflowerblue);
    border: 1px solid rgba(51, 51, 51, 0.1);
    box-sizing: border-box;
  }
`;

const ComboIcon = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-gray-100);
  padding: var(--padding-lg) var(--padding-xs);
  background-color: var(--color-white);
  height: 64px;
  width: 67px;
  border-radius: var(--br-3xs);
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const ParentFrame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px 17px;
  max-width: 100%;
`;
const FrameJ = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 33px 0px;
  max-width: 100%;
  font-size: 48px;
`;
const FRAME = styled.div`
  position: absolute;
  top: 69px;
  left: 220px;
  width: 688px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 21px 0px;
  max-width: 100%;
`;
const InfoRoot = styled.div`
  position: relative;
  width: 100%;
  height: 768px;
  overflow: hidden;
  letter-spacing: normal;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-black);
  font-family: var(--font-pretendard);
  @media screen and (max-width: 675px) {
    height: auto;
    min-height: 768;
  }
`;

// interface IDetails {
//   category: string;
//   comments: [];
//   fundingDescription: string;
//   fundingId: number;
//   fundingImages: [string];
//   fundingPercent: number;
//   fundingSummary: string;
//   fundingTitle: string;
//   individualPrice: number;
//   state: string;
// }

const DetailUpper: FunctionComponent = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const handleCategory = (e: any) => {
    const categoryId: string = e.target.id;
    navigate(`/category/${categoryId}`);
  };

  const { data, isError } = useQuery({
    queryKey: ['Detail-funding', productId],
    queryFn: () => detailProduct(productId),
  });
  console.log(data?.data.response);
  if (isError) return <div>No data!</div>;

  return (
    <InfoRoot>
      <FrameBIcon
        loading="lazy"
        alt=""
        src={
          data?.data.response.fundingImages[0]
            ? data?.data.response.fundingImages[0].fundingImage
            : testImg
        }
      />
      <FrameAIcon
        loading="lazy"
        alt=""
        src={
          data?.data.response.fundingImages[1]
            ? data?.data.response.fundingImages[1].fundingImage
            : testImg
        }
      />
      <FrameAIcon1
        loading="lazy"
        alt=""
        src={
          data?.data.response.fundingImages[2]
            ? data?.data.response.fundingImages[2].fundingImage
            : testImg
        }
      />
      <FrameAIcon2
        loading="lazy"
        alt=""
        src={
          data?.data.response.fundingImages[3]
            ? data?.data.response.fundingImages[3].fundingImage
            : testImg
        }
      />
      <FRAME>
        <FrameC>
          <FrameD>
            <Iconoirnavarrowright onClick={handleCategory}>
              <B id={data?.data.response.category}>
                {data?.data.response.category}
              </B>
              <ArrowForwardIosIcon id="tech" />
            </Iconoirnavarrowright>
            <FrameG>
              <FrameH>
                <Div>{data?.data.response.state}</Div>
              </FrameH>
              <H>{data?.data.response.fundingTitle}</H>
            </FrameG>
          </FrameD>
          <MaurisArcuSed>{data?.data.response.fundingSummary}</MaurisArcuSed>
        </FrameC>
        <Div1>
          <B1>
            <Span>{`${data?.data.response.fundingPercent}%`}</Span>
            <Span1>{` `}</Span1>
          </B1>
          <Span1>
            <Span2>달성</Span2>
          </Span1>
        </Div1>
        <FrameJ>
          <B2>{`${data?.data.response.individualPrice}원`}</B2>
          <ParentFrame>
            <OpenNotificationBtn>
              <B3>오픈 알림 신청 하기</B3>
            </OpenNotificationBtn>
            <ComboIcon>
              <FavoriteBorderIcon sx={{ color: '#8F8F8F' }} fontSize="large" />
            </ComboIcon>
            <ComboIcon>
              <ShareIcon sx={{ color: '#8F8F8F' }} fontSize="large" />
            </ComboIcon>
          </ParentFrame>
        </FrameJ>
        <div>{data?.data.response.fundingDescription}</div>
      </FRAME>
    </InfoRoot>
  );
};

export default DetailUpper;
