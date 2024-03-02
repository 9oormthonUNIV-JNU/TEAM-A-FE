import { FunctionComponent } from 'react';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export type FrameComponent5Type = {
  prop?: string;
  prop1?: string;
};

const B = styled.b`
  position: relative;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-3xl);
  }
`;
const Div = styled.div`
  position: relative;
  font-weight: 500;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;

const DatePicker = styled.div`
  flex: 1;
  border-bottom: 1px solid var(--color-gray-100);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-mini) var(--padding-8xs);
  min-width: 8.938rem;
  gap: var(--gap-xl);
  font-size: var(--font-size-5xl);
`;
const ParentRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0rem 2rem;
  text-align: left;
  font-size: var(--font-size-9xl);
  color: var(--color-black);
  font-family: var(--font-pretendard);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
    gap: 0rem 2rem;
  }
`;

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  prop,
  prop1,
}) => {
  return (
    <ParentRoot>
      <B>{prop}</B>
      <DatePicker>
        <Div>{prop1}</Div>
        <KeyboardArrowDownIcon />
      </DatePicker>
    </ParentRoot>
  );
};

export default FrameComponent5;
