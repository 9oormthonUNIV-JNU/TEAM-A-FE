import { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { urgentProduct } from '../../utils/api/MainPage/product';
import { changeResult, changeSeconds } from '../../utils/timeHandler';
import { useQuery } from '@tanstack/react-query';

const H = styled.h1`
  margin: 0;
  height: 4.75rem;
  position: relative;
  font-size: inherit;
  font-weight: 800;
  font-family: inherit;
  display: inline-block;
  @media screen and (max-width: 825px) {
    font-size: var(--font-size-32xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-19xl);
  }
`;
const P = styled.p`
  margin: 0;
`;
const Div = styled.div`
  height: 4.75rem;
  position: relative;
  font-size: var(--font-size-13xl);
  line-height: 2.406rem;
  font-weight: 500;
  display: inline-block;
  max-width: 100%;
  @media screen and (max-width: 825px) {
    font-size: var(--font-size-7xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const Parent1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.188rem 0rem;
  max-width: 100%;
`;
const Div1 = styled.div`
  position: relative;
  font-size: var(--font-size-xl);
  font-weight: 500;
  color: var(--color-gray-100);
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const RecentSearchesFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75rem 0rem;
  max-width: 100%;
`;
const RecentSearchesFrame1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) 0rem 0rem;
  box-sizing: border-box;
  min-width: 27.313rem;
  max-width: 100%;
  @media screen and (max-width: 1450px) {
    flex: 1;
  }
  @media screen and (max-width: 825px) {
    min-width: 100%;
  }
`;
const FrameWithEllipseChildren = styled.img`
  align-self: stretch;
  height: 17.313rem;
  position: relative;
  border-radius: 50%;
  width: 100%;
  background-color: var(--color-gainsboro);
  background-repeat: no-repeat;
`;
const EmptyFrame = styled.div`
  position: relative;
  font-weight: 800;
  white-space: nowrap;
  @media screen and (max-width: 825px) {
    font-size: var(--font-size-13xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-5xl);
  }
`;
const FrameWithEllipseChildren1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 0rem var(--padding-6xs);
`;
const FrameWithEllipseChildren2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25rem 0rem;
  min-width: 13rem;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-lgi) 0rem 0rem;
`;
const SearchIconAndXmark = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.125rem 0rem;
  min-width: 13rem;
`;
const SeparatingEllipses = styled.div`
  width: 58.938rem;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0rem 3.5rem;
  min-width: 58.938rem;
  max-width: 100%;
  font-size: var(--font-size-21xl);
  color: var(--color-dodgerblue-200);
  @media screen and (max-width: 1450px) {
    flex: 1;
  }
  @media screen and (max-width: 1200px) {
    min-width: 100%;
  }
  @media screen and (max-width: 825px) {
    flex-wrap: wrap;
    gap: 0rem 3.5rem;
  }
`;
const EllipseSeparator = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 100%;
  gap: var(--gap-xl);
  @media screen and (max-width: 1450px) {
    flex-wrap: wrap;
  }
`;
const PopularProductsFrameRoot = styled.section`
  width: 97.5rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-4xl) var(--padding-3xl) var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-45xl);
  color: var(--color-black);
  font-family: var(--font-pretendard);
`;
const WholeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4%;
`;

const UrgentProducts: FunctionComponent = () => {
  const a = '50:00:05';
  const b = '22:33:11';
  const c = '44:55:22';

  const { data, isLoading, isError } = useQuery({
    queryKey: ['urgentProducts'],
    queryFn: urgentProduct,
    enabled: true,
  });
  const [time, setTime] = useState(changeSeconds(a));
  const [time2, setTime2] = useState(changeSeconds(b));
  const [time3, setTime3] = useState(changeSeconds(c));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
      setTime2((prev) => prev - 1);
      setTime3((prev) => prev - 1);
    }, 1000);

    if (time < 0) {
      alert('Time OVER!');
    }
    return () => clearInterval(timer);
  }, [time, time2, data]);
  if (data === undefined) return;
  const product1 = data.data.response[0];
  const product2 = data.data.response[1];
  const product3 = data.data.response[2];
  console.log(product1.fundingImage);

  if (isLoading) return <div>loading..</div>;
  if (isError) return <div>errorrrrrr</div>;

  return (
    <WholeWrapper>
      <PopularProductsFrameRoot>
        <EllipseSeparator>
          <RecentSearchesFrame1>
            <RecentSearchesFrame>
              <Parent1>
                <H>곧 마감임박 펀딩!</H>
                <Div>
                  <P>지금 인기있는 펀딩 제품</P>
                  <P>{`마감 되기전에 펀딩하고 혜택 받자 `}</P>
                </Div>
              </Parent1>
              <Div1>{`자세히 보기 >`}</Div1>
            </RecentSearchesFrame>
          </RecentSearchesFrame1>
          <SeparatingEllipses>
            <FrameWithEllipseChildren2>
              <FrameWithEllipseChildren src={product1.fundingImage} />
              <FrameWithEllipseChildren1>
                <EmptyFrame>{changeResult(time)}</EmptyFrame>
              </FrameWithEllipseChildren1>
            </FrameWithEllipseChildren2>
            <FrameWithEllipseChildren2>
              <FrameWithEllipseChildren src={product2.fundingImage} />
              <Wrapper>
                <EmptyFrame>{changeResult(time2)}</EmptyFrame>
              </Wrapper>
            </FrameWithEllipseChildren2>
            <SearchIconAndXmark>
              <FrameWithEllipseChildren src={product3.fundingImage} />
              <EmptyFrame>{changeResult(time3)}</EmptyFrame>
            </SearchIconAndXmark>
          </SeparatingEllipses>
        </EllipseSeparator>
      </PopularProductsFrameRoot>
    </WholeWrapper>
  );
};

export default UrgentProducts;
