import { FunctionComponent, type CSSProperties } from 'react';
import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';

export type CategoryBoxType = {
  /** Style props */
  propPadding?: CSSProperties['padding'];
  propGap?: CSSProperties['gap'];
};

const CategoryBoxChild = styled.img`
  align-self: stretch;
  flex: 1;
  position: relative;
  border-radius: var(--br-5xl);
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Div = styled.div`
  position: relative;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const B = styled.b`
  position: relative;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const Wrapper = styled.div`
  display: flex;

  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem var(--padding-8xs);
  color: var(--color-dodgerblue-200);
`;
const Div1 = styled.div`
  position: relative;
  font-weight: 500;
`;

const ButtonFrame = styled.div`
  position: relative;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const VectorParent = styled.div<{ propGap?: CSSProperties['gap'] }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0rem 0.563rem;
  font-size: var(--font-size-xl);
  color: var(--color-black);
  gap: ${(p) => p.propGap};
`;
const Group = styled.div<{ propPadding?: CSSProperties['padding'] }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-12xs) 0rem 0rem;
  gap: 0.438rem 0rem;
  font-size: var(--font-size-base);
  color: var(--color-gray-100);
  padding: ${(p) => p.propPadding};
`;
const Parent1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem 0rem;
`;
const CategoryBoxInner = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const CategoryBoxRoot = styled.div`
  height: 25.25rem;
  width: 22.625rem;
  background-color: var(--color-white);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-3xs) var(--padding-2xl);
  box-sizing: border-box;
  gap: 0.625rem 0rem;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-black);
  font-family: var(--font-pretendard);
`;

const CategoryBox: FunctionComponent<CategoryBoxType> = ({
  propPadding,
  propGap,
  item,
}) => {
  return (
    <CategoryBoxRoot>
      <CategoryBoxChild loading="lazy" alt="" src={item?.fundingImage} />
      <CategoryBoxInner>
        <Parent1>
          <Div>{item?.fundingTitle}</Div>
          <Wrapper>
            <B>{`${item?.individualPrice}원`}</B>
          </Wrapper>
          <B>{`${item?.fundingPercent}%`}</B>
          <Group propPadding={propPadding}>
            <Div1>{item?.nickname}</Div1>
            <VectorParent propGap={propGap}>
              <FavoriteBorderIcon sx={{ cursor: 'pointer' }} />
              <ButtonFrame>{item?.likes}</ButtonFrame>
            </VectorParent>
          </Group>
        </Parent1>
      </CategoryBoxInner>
    </CategoryBoxRoot>
  );
};

export default CategoryBox;
