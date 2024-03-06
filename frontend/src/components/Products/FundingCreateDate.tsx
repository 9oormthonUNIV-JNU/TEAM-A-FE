import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
// import dayjs from 'dayjs';
export type FrameComponent5Type = {
  prop?: string;
  prop1?: string;
  handleStartDate?: any;
  handleEndDate?: any;
};

const B = styled.b`
  position: relative;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-3xl);
  }
`;

const DatePicker1 = styled.div`
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

const FrameComponent5: FunctionComponent<FrameComponent5Type> = (props) => {
  const date = new Date();
  const [value, setValue] = useState<Dayjs | null>(dayjs(date));
  if (value) {
    const formattedDate = value.format(`YYYY-MM-DD${props.prop}`);
    if (formattedDate.endsWith('료')) {
      props.handleEndDate(value.toISOString());
    }
    if (formattedDate.endsWith('작')) {
      props.handleStartDate(value.toISOString());
    }
  }

  return (
    <ParentRoot>
      <B>{props.prop}</B>
      <DatePicker1>
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          dateFormats={{ monthShort: 'M' }}
        >
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              onChange={(newValue) => setValue(newValue)}
              value={value}
              label={props.prop1}
              format={'YYYY-MM-DD'}
              sx={{
                fontSize: 'var(--font-size-5xl)',
              }}
              className={props.prop}
            />
          </DemoContainer>
        </LocalizationProvider>
      </DatePicker1>
    </ParentRoot>
  );
};

export default FrameComponent5;
