import styled from 'styled-components';
import FrameComponent5 from '../components/Products/FundingCreateDate';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import PostImage from '../components/Products/PostImage';
import { getAuthToken } from '../utils/tokenHandler';
import { postProduct } from '../utils/api/Products/product';

const H = styled.h3`
  margin: 0;
  height: 2.688rem;
  position: relative;
  font-size: var(--font-size-17xl);
  font-weight: 700;
  font-family: var(--font-pretendard);
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-10xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-3xl);
  }
`;

const Frameset = styled.div`
  width: 20.375rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.75rem 0rem;
  min-width: 20.375rem;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    flex: 1;
  }
`;
const FundingFrame = styled.div`
  flex: 1;
  border-radius: var(--br-xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-23xl) var(--padding-27xl) var(--padding-27xl)
    var(--padding-24xl);
  min-width: 30.25rem;
  max-width: 100%;
  gap: var(--gap-xl);
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
    padding-left: var(--padding-2xl);
    padding-right: var(--padding-4xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 675px) {
    min-width: 100%;
  }
`;
const Input = styled.input`
  width: 9.813rem;
  border: none;
  outline: none;
  font-weight: 500;
  font-family: var(--font-pretendard);
  font-size: var(--font-size-5xl);
  background-color: transparent;
  height: 3rem;
  position: relative;
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const Wrapper = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--color-gray-100);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-mini) var(--padding-xl);
`;
const Input1 = styled.input`
  width: 11.5rem;
  border: none;
  outline: none;
  font-weight: 500;
  font-family: var(--font-pretendard);
  font-size: var(--font-size-5xl);
  background-color: transparent;
  height: 3caprem;
  position: relative;
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const FrameParent = styled.div`
  width: 16.938rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2.75rem 0rem;
  min-width: 16.938rem;
  @media screen and (max-width: 750px) {
    flex: 1;
  }
`;
const B = styled.b`
  position: relative;
  font-size: var(--font-size-13xl);
  font-family: var(--font-pretendard);
  color: var(--color-black);
  text-align: left;
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-7xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const B1 = styled.b`
  position: relative;
  font-size: var(--font-size-29xl);
  font-family: var(--font-pretendard);
  color: var(--color-black);
  text-align: left;
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-19xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-10xl);
  }
`;
const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4.063rem 0rem;
`;
const FundingFrameInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem var(--padding-9xs);
  box-sizing: border-box;
  min-width: 13.125rem;
  @media screen and (max-width: 750px) {
    flex: 1;
  }
`;
const FundingFrame1 = styled.div`
  flex: 1;

  border-radius: var(--br-xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-23xl) var(--padding-24xl) var(--padding-33xl);
  gap: 0rem 8.188rem;
  min-width: 30.25rem;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
    gap: 0rem 8.188rem;
    padding-left: var(--padding-2xl);
    padding-right: var(--padding-2xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 675px) {
    min-width: 100%;
  }
  @media screen and (max-width: 450px) {
    gap: 0rem 8.188rem;
  }
`;
const FundingFrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0rem 1.875rem;
  max-width: 100%;
`;
const CreateFrame = styled.section`
  width: 95rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem var(--padding-6xs);
  box-sizing: border-box;
  gap: 2.5rem 0rem;
  max-width: 100%;
  @media screen and (max-width: 675px) {
    gap: 2.5rem 0rem;
  }
`;
const Input2 = styled.input`
  width: 16.063rem;
  border: none;
  outline: none;
  font-weight: 500;
  font-family: var(--font-pretendard);
  font-size: var(--font-size-13xl);
  background-color: transparent;
  height: 2.375rem;
  position: relative;
  color: var(--color-gray-100);
  text-align: left;
  display: inline-block;
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-7xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const InputTitleFrame = styled.div`
  align-self: stretch;
  border-radius: var(--br-xl);
  background-color: var(--color-whitesmoke);
  border: 1px solid var(--color-gray-100);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 1.938rem var(--padding-13xl);
`;

const SubtitleFrame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 1.875rem 0rem;
`;
const ContentFrameB = styled.textarea`
  border: 1px solid var(--color-gray-100);
  background-color: var(--color-white);
  height: 15.5rem;
  width: auto;
  outline: none;
  align-self: stretch;
  border-radius: var(--br-xl);
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-13xl) 1.875rem;
  font-family: var(--font-pretendard);
  font-weight: 500;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
`;
const EndFrame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5rem 0rem;
`;
const TitleFrame = styled.section`
  width: 95rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2.438rem 0rem;
  max-width: 100%;
  @media screen and (max-width: 675px) {
    gap: 2.438rem 0rem;
  }
`;

const ProductDetailsFrame = styled.section`
  width: 95rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 3.875rem;
  box-sizing: border-box;
  gap: 1.5rem 0rem;
  max-width: 100%;
  @media screen and (max-width: 675px) {
    padding-bottom: 2.5rem;
    box-sizing: border-box;
  }
`;
const FrameWithCancelComplete = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-smi);
  background-color: var(--color-gainsboro-200);
  flex: 1;
  border-radius: var(--br-3xs);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 9.75rem;
  &:hover {
    background-color: #bfbfbf;
  }
`;
const B2 = styled.b`
  position: relative;
  font-size: var(--font-size-13xl);
  font-family: var(--font-pretendard);
  color: var(--color-white);
  text-align: left;
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-7xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const FrameWithCancelComplete1 = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-smi) var(--padding-46xl) var(--padding-smi) 4rem;
  background-color: var(--color-dodgerblue-200);
  border-radius: var(--br-3xs);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: var(--color-cornflowerblue);
  }
`;
const CancelCompleteFrame = styled.div`
  width: 31.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0rem 1.5rem;
  max-width: 100%;
`;
const CreateFundingRoot = styled.form`
  margin: 0;
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 3.563rem var(--padding-xl) 5.375rem;
  box-sizing: border-box;
  gap: 2.5rem 0rem;
  letter-spacing: normal;
  @media screen and (max-width: 675px) {
    gap: 2.5rem 0rem;
  }
`;

interface IFunding {
  category: string;
  goals: number;
  participation: number;
  title: string;
  funding_summary: string;
  funding_description: string;
}

const CreateFunding = () => {
  const token = getAuthToken();
  const headers = {
    Authorization: token,
  };
  const { register, handleSubmit, watch } = useForm<IFunding>();

  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const handleStartDate = (data: string) => {
    setStart(data);
  };
  const handleEndDate = (data: string) => {
    setEnd(data);
  };

  const handleFormSubmit = async (data: IFunding) => {
    console.log(1);

    const formData = {
      fundingDescription: data.funding_description,
      fundingSummary: data.funding_summary,
      fundingTitle: data.title,
      category: data.category,
      startDate: start,
      endDate: end,
    };
    try {
      const result = await postProduct(formData, headers);
      console.log(result);
    } catch (error) {
      console.log(error);
    }

    console.log(formData);
  };

  const indivisual = Math.round(
    Number(watch('goals')) / Number(watch('participation')),
  );

  //에러확인 handler
  const onInvalid = (errors: any) => console.error(errors);
  return (
    <CreateFundingRoot>
      <CreateFrame>
        <H>펀딩 생성하기</H>
        <FundingFrameParent>
          <FundingFrame>
            <FormControl
              variant="standard"
              sx={{
                m: 1,
                minWidth: 120,
                width: '15.5rem',
                gap: '0rem 4.688rem',
              }}
            >
              <InputLabel
                id="demo-simple-select-standard-label"
                sx={{
                  fontSize: 'var(--font-size-5xl)',
                  color: 'black',
                  position: 'relative',
                }}
              >
                카테고리 선택
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="category"
                sx={{ fontSize: 'var(--font-size-5xl)' }}
                {...register('category')}
              >
                <MenuItem value={'tech' || ''}>테크가전</MenuItem>
                <MenuItem value={'fashion' || ''}>패션</MenuItem>
                <MenuItem value={'beauty' || ''}>뷰티</MenuItem>
                <MenuItem value={'food' || ''}>푸드</MenuItem>
                <MenuItem value={'book' || ''}>도서</MenuItem>
                <MenuItem value={'goods' || ''}>굿즈</MenuItem>
                <MenuItem value={'stuff' || ''}>잡화</MenuItem>
              </Select>
            </FormControl>
            <Frameset>
              <FrameComponent5
                prop="시작"
                prop1="펀딩 시작일"
                handleStartDate={handleStartDate}
              />
              <FrameComponent5
                prop="종료"
                prop1="펀딩 종료일"
                handleEndDate={handleEndDate}
              />
            </Frameset>
          </FundingFrame>
          <FundingFrame1>
            <FrameParent>
              <Wrapper>
                <Input
                  placeholder="총 목표금액 입력"
                  type="number"
                  {...register('goals', { required: true })}
                />
              </Wrapper>
              <Wrapper>
                <Input1
                  placeholder="펀딩 참여 인원 입력"
                  type="number"
                  {...register('participation', { required: true })}
                />
              </Wrapper>
            </FrameParent>
            <FundingFrameInner>
              <Group>
                <B>인당 책정된 가격</B>
                <B1>{indivisual || '계산불가'}원</B1>
              </Group>
            </FundingFrameInner>
          </FundingFrame1>
        </FundingFrameParent>
      </CreateFrame>
      <TitleFrame>
        <SubtitleFrame>
          <InputTitleFrame>
            <Input2
              placeholder="제목을 입력해주세요 20자 미만"
              type="text"
              {...register('title', { required: true })}
            />
          </InputTitleFrame>
          {/* <ImageUploadFrame
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CameraAltIcon fontSize="large" />
            <Div1>이미지 첨부하기</Div1>
          </ImageUploadFrame> */}
          <PostImage />
        </SubtitleFrame>
        <EndFrame>
          <B>간단한 상품 설명</B>
          <ContentFrameB
            placeholder="제품 페이지 상단에 보여질 제품 설명을 작성해 주세요."
            rows={12}
            cols={76}
            {...register('funding_summary', { required: true })}
          />
        </EndFrame>
      </TitleFrame>
      <ProductDetailsFrame>
        <B>상품 상세 설명</B>

        <ContentFrameB
          style={{ height: '22rem' }}
          placeholder="제품 상세 설명을 작성해 주세요."
          rows={12}
          cols={76}
          {...register('funding_description', { required: true })}
        />
      </ProductDetailsFrame>
      <CancelCompleteFrame>
        <FrameWithCancelComplete>
          <NavLink
            to={'/'}
            style={{
              textDecoration: 'none',
              color: 'black',
              height: '100%',
              width: '100%',
            }}
          >
            <B>취소</B>
          </NavLink>
        </FrameWithCancelComplete>

        <FrameWithCancelComplete1
          onClick={handleSubmit(handleFormSubmit, onInvalid)}
        >
          <B2>작성완료</B2>
        </FrameWithCancelComplete1>
      </CancelCompleteFrame>
    </CreateFundingRoot>
  );
};

export default CreateFunding;
