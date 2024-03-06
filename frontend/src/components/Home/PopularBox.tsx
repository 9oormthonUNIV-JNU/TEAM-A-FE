import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FundingBoxChild = styled.img`
  border: none;
  background-color: var(--color-gainsboro);
  height: 17.25rem;
  width: auto;
  outline: none;
  align-self: stretch;
  position: relative;
  border-radius: var(--br-5xl);
`;
const Div = styled.div`
  position: relative;
  font-weight: 500;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;

const CompanyLogoFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0rem 0.188rem;
`;
const B = styled.b`
  position: relative;
  white-space: nowrap;
  @media screen and (max-width: 825px) {
    font-size: var(--font-size-7xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const B1 = styled.b`
  position: relative;
  font-size: var(--font-size-17xl);
  color: var(--color-dodgerblue-200);
  @media screen and (max-width: 825px) {
    font-size: var(--font-size-10xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-3xl);
  }
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
const FundingItemName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75rem 0rem;
  font-size: var(--font-size-13xl);
  color: var(--color-black);
`;
const ProductNameEllipse = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.188rem 0rem;
`;
const FundingBoxRoot = styled.div`
  width: 30.625rem;
  background-color: var(--color-white);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl) var(--padding-sm) var(--padding-14xl)
    var(--padding-3xs);
  box-sizing: border-box;
  gap: 1.563rem 0rem;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
  font-family: var(--font-pretendard);
  @media screen and (max-width: 825px) {
    padding-top: var(--padding-xl);
    padding-bottom: var(--padding-2xl);
    box-sizing: border-box;
  }
`;

const PopularBox: FunctionComponent = (detail: any) => {
  const navigate = useNavigate();
  const handleNavigate = (e: any) => {
    const id = e.target.id;
    navigate(`/products/${id}`);
  };
  return (
    <FundingBoxRoot>
      <FundingBoxChild
        id={detail.fundingId}
        src={detail.fundingImage}
        onClick={(e) => handleNavigate(e)}
      />
      <ProductNameEllipse>
        <CompanyLogoFrame>
          <Div>{`${detail.category} >`}</Div>
        </CompanyLogoFrame>
        <FundingItemName>
          <B>{detail.fundingTitle}</B>
          <B1>{`${detail.individualPrice}원`}</B1>
          <Div1>{detail.nickname}</Div1>
        </FundingItemName>
      </ProductNameEllipse>
    </FundingBoxRoot>
  );
};

export default PopularBox;
