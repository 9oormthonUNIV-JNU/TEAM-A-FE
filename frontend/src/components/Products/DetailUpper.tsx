import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import testImg from '../../assets/images/mainLogo.svg';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import {
  detailProduct,
  postFundingApply,
} from '../../utils/api/Products/product';
import CreateIcon from '@mui/icons-material/Create';
import avatarImage from '../../assets/images/avatar.svg';
import { Input } from '@mui/material';
import { getAuthToken } from '../../utils/tokenHandler';
import Divider from '@mui/material/Divider';
import dot from '../../assets/images/dot.svg';
import { postFundingComment } from '../../utils/api/Products/comment';

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
  height: 200rem;
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

const DetailUpper: FunctionComponent = () => {
  const auth = getAuthToken();
  const navigate = useNavigate();
  const { productId } = useParams();
  const [comment, setComment] = useState('');

  const [commentChange, setCommentChange] = useState(false);
  const handleCategory = (e: any) => {
    const categoryId: string = e.target.id;
    navigate(`/category/${categoryId}`);
  };

  const postComment = async (e: any) => {
    e.preventDefault();
    try {
      const result = await postFundingComment({
        fundingId: productId,
        comment,
      });
      setCommentChange((v) => !v);
      console.log(result);
      setComment('');
    } catch (error) {
      console.log(error);
    }
  };

  const fundingApply = async () => {
    const headers = {
      Authorization: auth,
    };
    try {
      const result = await postFundingApply(productId, headers);
      console.log(result);
      alert('알림신청완료');
    } catch (error) {
      console.log(error);
    }
  };

  const { data, isError } = useQuery({
    queryKey: ['Detail-funding', productId, commentChange],
    queryFn: () => detailProduct(productId),

    // enabled:{}
  });

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
                <Div>{data?.data.response.fundingStateDescription}</Div>
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
              <B3 onClick={fundingApply}>오픈 알림 신청 하기</B3>
            </OpenNotificationBtn>
            <ComboIcon>
              <FavoriteBorderIcon sx={{ color: '#8F8F8F' }} fontSize="large" />
            </ComboIcon>
            <ComboIcon>
              <ShareIcon sx={{ color: '#8F8F8F' }} fontSize="large" />
            </ComboIcon>
          </ParentFrame>
        </FrameJ>
        <Divider />
        <div>{data?.data.response.fundingDescription}</div>
        <Divider />
        <DivRoot>
          <Parent1>
            <H12>댓글</H12>
            <form onSubmit={postComment}>
              <ChatBar
                sx={{ fontSize: '50px' }}
                placeholder={auth ? '댓글 입력' : '로그인 해주세요.'}
                endAdornment={
                  <CreateIcon fontSize="large" style={{ cursor: 'pointer' }} />
                }
                disabled={auth ? false : true}
                value={comment}
                onChange={(e: any) => setComment(e.target.value)}
              />
            </form>
            {data?.data.response.comments
              .slice(0)
              .reverse()
              .map((comment: any) => {
                return (
                  <Inner key={comment.commentId}>
                    <EllipseParent>
                      <FrameChild src={avatarImage} />
                      <FrameWrapper>
                        <IconoirmoreVertParent>
                          <IconoirmoreVert loading="lazy" alt="" src={dot} />
                          <FrameParent>
                            <JkParent>
                              <Jk>{comment.nickname}</Jk>
                              <Div12>1분전</Div12>
                            </JkParent>
                            <Wrapper>
                              <Div2>{comment.content}</Div2>
                            </Wrapper>
                          </FrameParent>
                        </IconoirmoreVertParent>
                      </FrameWrapper>
                    </EllipseParent>
                  </Inner>
                );
              })}
          </Parent1>
        </DivRoot>
      </FRAME>
    </InfoRoot>
  );
};

export default DetailUpper;
//

const H12 = styled.h2`
  margin: 0;
  height: 57px;
  position: relative;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-19xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-10xl);
  }
`;

const ChatBar = styled(Input)`
  align-self: stretch;
  border-radius: var(--br-11xl);
  background-color: var(--color-white);
  /* border: 1px solid var(--color-black); */
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-17xl) var(--padding-7xl) var(--padding-16xl)
    var(--padding-28xl);
  max-width: 100%;
  gap: var(--gap-xl);
  font-size: var(--font-size-17xl);
  @media screen and (max-width: 1200px) {
    padding-left: var(--padding-4xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const Parent1 = styled.section`
  width: 1520px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 35px 0px;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-29xl);
  color: var(--color-black);
  font-family: var(--font-pretendard);
  @media screen and (max-width: 750px) {
    gap: 35px 0px;
  }
`;
const FrameChild = styled.img`
  height: 100px;
  width: 100px;
  position: relative;
  border-radius: 50%;
  background-color: var(--color-gainsboro-200);
`;
const IconoirmoreVert = styled.img`
  height: 48px;
  width: 48px;
  position: absolute;
  margin: 0 !important;
  top: -33px;
  right: -10px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Jk = styled.div`
  position: relative;
  font-weight: 500;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-10xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-3xl);
  }
`;
const Div12 = styled.div`
  position: relative;
  font-size: var(--font-size-9xl);
  font-weight: 500;
  color: var(--color-gray-100);
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-3xl);
  }
`;
const JkParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 6px 0px;
`;
const Div2 = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
  display: inline-block;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-3xl);
  }
`;
const Wrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-9xs);
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-9xl);
`;
const FrameParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 35px 0px;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: 35px 0px;
  }
`;
const IconoirmoreVertParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  max-width: 100%;
`;
const FrameWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) 0px 0px;
  box-sizing: border-box;
  min-width: 872px;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    min-width: 100%;
  }
`;
const EllipseParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px 24px;
  max-width: 100%;
`;
const Inner = styled.footer`
  width: 1506px;
  border-bottom: 1px solid var(--color-gray-100);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-32xl) var(--padding-xl);
  min-height: 303px;
  max-width: 100%;
  flex-shrink: 0;
  text-align: left;
  font-size: var(--font-size-17xl);
  color: var(--color-black);
  font-family: var(--font-pretendard);
`;
const DivRoot = styled.div`
  width: 95rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 55px var(--padding-xl);
  box-sizing: border-box;
  gap: 57px 0px;
  letter-spacing: normal;
  @media screen and (max-width: 750px) {
    gap: 57px 0px;
  }
`;
