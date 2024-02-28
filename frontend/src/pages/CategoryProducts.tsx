import { FunctionComponent } from 'react';
import styled from 'styled-components';
import CategoryFrame from '../components/Products/CategoryFrame';
import CategoryBox from '../components/Products/CategoryBox';
import { useParams } from 'react-router-dom';

const B = styled.b`
  position: relative;
  @media screen and (max-width: 800px) {
    font-size: var(--font-size-7xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const SearchFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-9xs);
`;
const CategoryboxFrame = styled.main`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 0rem 1.417rem;
  min-height: 72.75rem;
  max-width: 100%;
`;
const SearchRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5.438rem 12.563rem 8rem 11.688rem;
  box-sizing: border-box;
  gap: 1.875rem 0rem;
  letter-spacing: normal;
  text-align: left;
  font-size: var(--font-size-13xl);
  color: var(--color-black);
  font-family: var(--font-pretendard);
  @media screen and (max-width: 1125px) {
    padding-left: var(--padding-74xl);
    padding-right: var(--padding-81xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 800px) {
    gap: 1.875rem 0rem;
    padding-left: 2.875rem;
    padding-right: var(--padding-31xl);
    box-sizing: border-box;
  }
`;

const CategoryProducts: FunctionComponent = () => {
  const { categoryId } = useParams();

  //location 으로 데이터 받기
  //   const location = useLocation();
  //   const info = { ...location.state };
  return (
    <SearchRoot>
      <SearchFrame>
        <B>{categoryId}</B>
      </SearchFrame>
      <CategoryFrame />
      <CategoryboxFrame>
        <CategoryBox />
        <CategoryBox
          propPadding="0rem var(--padding-12xs) 0rem 0rem"
          propGap="0rem 0.563rem"
        />
        <CategoryBox
          propPadding="0rem var(--padding-12xs) 0rem 0rem"
          propGap="0rem 0.563rem"
        />
        <CategoryBox
          propPadding="0rem var(--padding-12xs) 0rem 0rem"
          propGap="0rem 0.563rem"
        />
        <CategoryBox propPadding="unset" propGap="0rem 0.5rem" />
        <CategoryBox propPadding="unset" propGap="0rem 0.5rem" />
        <CategoryBox propPadding="unset" propGap="0rem 0.5rem" />
        <CategoryBox propPadding="unset" propGap="0rem 0.5rem" />
        <CategoryBox
          propPadding="0rem var(--padding-12xs) 0rem 0rem"
          propGap="0rem 0.563rem"
        />
        <CategoryBox
          propPadding="0rem var(--padding-12xs) 0rem 0rem"
          propGap="0rem 0.563rem"
        />
        <CategoryBox propPadding="unset" propGap="0rem 0.5rem" />
        <CategoryBox propPadding="unset" propGap="0rem 0.5rem" />
      </CategoryboxFrame>
    </SearchRoot>
  );
};

export default CategoryProducts;
