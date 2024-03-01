import { FunctionComponent } from 'react';
import styled from 'styled-components';

const PriceRangeFrameChild = styled.div`
  height: 4.563rem;
  width: 95rem;
  position: relative;
  border-radius: var(--br-xl);
  border: 1px solid var(--color-gray-100);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
`;
const Div = styled.div`
  cursor: pointer;
  position: relative;
  font-weight: 500;
  white-space: pre-wrap;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const B = styled.b`
  position: relative;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const FramePRICEFILTER = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) 0rem 0rem;
`;

const PriceInput = styled.input`
  flex: 1;
  border-radius: var(--br-3xs);
  border: 1px solid var(--color-gray-100);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-4xs);
  gap: 0rem 1rem;
  min-width: 7.75rem;
  z-index: 1;
`;
const SearchFrame = styled.div`
  position: relative;
  font-weight: 500;
  z-index: 1;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const Div1 = styled.div`
  position: relative;
  font-size: var(--font-size-xl);
  font-weight: 500;
  font-family: var(--font-pretendard);
  color: var(--color-white);
  text-align: left;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const NavbarContainer = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-3xs);
  background-color: var(--color-dodgerblue-200);
  width: 4.563rem;
  border-radius: var(--br-3xs);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  z-index: 1;
  &:hover {
    background-color: var(--color-cornflowerblue);
  }
`;
const FrameTWOFRAMES = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0rem 0.438rem;
  min-width: 19.813rem;
  max-width: 100%;
  font-size: var(--font-size-xl);
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
const FrameORIGINAL = styled.div`
  width: 37.438rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0rem 1.313rem;
  max-width: 100%;
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
const PriceRangeFrame = styled.div`
  flex: 1;
  border-radius: var(--br-xl);
  border: 1px solid var(--color-gray-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-sm) var(--padding-mid) var(--padding-mini)
    var(--padding-4xl);
  max-width: 100%;
  gap: var(--gap-xl);
  @media screen and (max-width: 1350px) {
    flex-wrap: wrap;
  }
`;
const FRAMERoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-7xs);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-black);
  font-family: var(--font-pretendard);
`;

const CategoryFrame: FunctionComponent = () => {
  return (
    <FRAMERoot>
      <PriceRangeFrame>
        <PriceRangeFrameChild />
        <Div>{`인기순   |   최신순   |   마감 임박순  `}</Div>
        <FrameORIGINAL>
          <FramePRICEFILTER>
            <B>가격 필터</B>
          </FramePRICEFILTER>
          <FrameTWOFRAMES>
            <PriceInput placeholder="0" />
            <SearchFrame>~</SearchFrame>
            <PriceInput placeholder="2,000,000" />
            <NavbarContainer>
              <Div1>적용</Div1>
            </NavbarContainer>
          </FrameTWOFRAMES>
        </FrameORIGINAL>
      </PriceRangeFrame>
    </FRAMERoot>
  );
};

export default CategoryFrame;
