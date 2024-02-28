import { styled } from 'styled-components';
import PopularBox from './PopularBox';

const FeaturedFundingAreaParent = styled.section`
  max-width: 1920px;
  align-self: stretch;
  border-top: 1px solid var(--color-silver);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 3.938rem 13.375rem 11.75rem var(--padding-181xl);
  gap: 1.75rem 0rem;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-29xl);
  color: var(--color-black);
  font-family: var(--font-pretendard);
  @media screen and (max-width: 1450px) {
    padding-top: 2.563rem;
    padding-bottom: 7.625rem;
    box-sizing: border-box;
  }
  @media screen and (max-width: 1200px) {
    padding-left: 6.25rem;
    padding-right: 6.688rem;
    box-sizing: border-box;
  }
  @media screen and (max-width: 825px) {
    padding: var(--padding-8xl) 3.313rem 4.938rem 3.125rem;
    box-sizing: border-box;
  }
`;
const FeaturedFundingArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0.25rem;
  box-sizing: border-box;
  max-width: 1920px;
`;
const FundingBoxParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 0rem 0.813rem;
  min-height: 66.875rem;
  max-width: 100%;
`;
const H = styled.h1`
  margin: 0;
  height: 3.563rem;
  position: relative;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  @media screen and (max-width: 825px) {
    font-size: var(--font-size-19xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-10xl);
  }
`;

export default function PopularProduct() {
  return (
    <FeaturedFundingAreaParent>
      <FeaturedFundingArea>
        <H>지금 인기있는 펀딩</H>
      </FeaturedFundingArea>
      <FundingBoxParent>
        <PopularBox />
        <PopularBox />
        <PopularBox />
        <PopularBox />
        <PopularBox />
        <PopularBox />
      </FundingBoxParent>
    </FeaturedFundingAreaParent>
  );
}
