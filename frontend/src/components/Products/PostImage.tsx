import Dialog from '@mui/material/Dialog';

import { useState } from 'react';
import { styled } from 'styled-components';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ImageInput from './ImageInput';

export default function PostImage() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = (e: any) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ImageUploadFrame
        onClick={handleClickOpen}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CameraAltIcon fontSize="large" />
        <Div1>이미지 첨부하기</Div1>
      </ImageUploadFrame>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <MainFrameRoot>
          <InnerFrames>
            <B>사진 첨부하기</B>
            <ImageInput />
          </InnerFrames>
          <ToggleFrames>
            <CancelRegisterFrames>
              <B1 onClick={handleClose}>취소</B1>
            </CancelRegisterFrames>
            <CancelRegisterFrames1>
              <B2>등록</B2>
            </CancelRegisterFrames1>
          </ToggleFrames>
        </MainFrameRoot>
      </Dialog>
    </>
  );
}
const Div1 = styled.div`
  position: relative;
  font-size: var(--font-size-5xl);
  font-weight: 500;
  font-family: var(--font-pretendard);
  color: var(--color-black);
  text-align: left;
`;
const ImageUploadFrame = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-black);
  padding: var(--padding-lg) 2.313rem;
  background-color: transparent;
  border-radius: var(--br-xl);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0rem 0.75rem;
  white-space: nowrap;
  &:hover {
    background-color: rgba(51, 51, 51, 0.09);
    border: 1px solid #333;
    box-sizing: border-box;
  }
`;
const B = styled.b`
  height: 3rem;
  position: relative;
  display: inline-block;
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-13xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-5xl);
  }
`;
const InnerFrames = styled.main`
  width: 60.063rem;
  height: 50.125rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-xl);
  box-sizing: border-box;
  gap: 2.125rem 0rem;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-21xl);
  color: var(--color-black);
  font-family: var(--font-pretendard);
  @media screen and (max-width: 675px) {
    gap: 2.125rem 0rem;
  }
`;
const B1 = styled.b`
  position: relative;
  font-size: var(--font-size-21xl);
  font-family: var(--font-pretendard);
  color: var(--color-black);
  text-align: left;
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-13xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-5xl);
  }
`;
const CancelRegisterFrames = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-9xl);
  background-color: var(--color-gainsboro-200);
  flex: 1;
  border-radius: var(--br-3xs);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 9.563rem;
  &:hover {
    background-color: var(--color-silver-200);
  }
`;
const B2 = styled.b`
  position: relative;
  font-size: var(--font-size-21xl);
  font-family: var(--font-pretendard);
  color: var(--color-white);
  text-align: left;
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-13xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-5xl);
  }
`;
const CancelRegisterFrames1 = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-9xl);
  background-color: var(--color-dodgerblue-200);
  flex: 1;
  border-radius: var(--br-3xs);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 9.563rem;
  &:hover {
    background-color: var(--color-cornflowerblue);
  }
`;
const ToggleFrames = styled.div`
  width: 31rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0rem 1.5rem;
  max-width: 100%;
`;
const MainFrameRoot = styled.div`
  width: 63.563rem;
  position: relative;
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-100);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-29xl) var(--padding-xl);
  gap: 6.063rem 0rem;
  letter-spacing: normal;
  max-width: 100%;
  max-height: 100%;
  @media screen and (max-width: 675px) {
    gap: 6.063rem 0rem;
  }
  @media screen and (max-width: 450px) {
    gap: 6.063rem 0rem;
  }
`;
