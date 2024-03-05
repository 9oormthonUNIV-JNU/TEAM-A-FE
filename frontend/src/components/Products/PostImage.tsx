import Dialog from '@mui/material/Dialog';

import { useState } from 'react';
import { styled } from 'styled-components';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { postImage } from '../../utils/api/Products/product';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';

export default function PostImage() {
  const [open, setOpen] = useState(false);

  // const [images, setImages] = useState([]);

  const handleClickOpen = (e: any) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const hanldeImageSubmit = async () => {
    try {
      const formData = new FormData();
      for (let i = 0; i < detailImgs.length; i++) {
        formData.append('images', detailImgs[i]);
      }

      const result = await postImage(formData);

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  //
  const [detailImgs, setDetailImgs] = useState([]);

  const handlePostImage = (e: any) => {
    const fileArr = e.target.files;

    const formData = new FormData();
    for (let i = 0; i < fileArr.length; i++) {
      formData.append('images', fileArr[i]);
    }

    const fileURLs: any = [];
    let file;
    const filesLength = fileArr.length > 5 ? 5 : fileArr.length;
    for (let i = 0; i < filesLength; i++) {
      file = fileArr[i];
      const reader = new FileReader();
      reader.onload = () => {
        fileURLs[i] = reader.result;

        setDetailImgs([...fileURLs]);
      };
      reader.readAsDataURL(file);
    }
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
            {/* // */}
            <ImageInputRoot>
              <ContainerWithFrames>
                <DividerFrames src={detailImgs ? detailImgs[1] : ''} />
                <DividerFrames src={detailImgs ? detailImgs[2] : ''} />
                <DividerFrames src={detailImgs ? detailImgs[3] : ''} />
                {/* <DividerFramesIcon loading="lazy" alt="" /> */}
                <IconButton
                  component="label"
                  aria-label="upload new picture"
                  color="primary"
                  style={{ height: '10rem', width: '10rem' }}
                >
                  <AddIcon />
                  <VisuallyHiddenInput
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handlePostImage}
                  />
                </IconButton>
              </ContainerWithFrames>
              <ButtonsFrames src={detailImgs ? detailImgs[0] : ''} />
            </ImageInputRoot>
            {/*//*/}
          </InnerFrames>
          <ToggleFrames>
            <CancelRegisterFrames>
              <B1 onClick={handleClose}>취소</B1>
            </CancelRegisterFrames>
            <CancelRegisterFrames1>
              <B2 onClick={hanldeImageSubmit}>등록</B2>
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
//
const DividerFrames = styled.img`
  align-self: stretch;
  flex: 1;
  position: relative;
  background-color: var(--color-gray-100);
  overflow: hidden;
`;

const ContainerWithFrames = styled.div`
  align-self: stretch;
  width: 10rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.625rem 0rem;
  @media screen and (max-width: 675px) {
    display: none;
  }
`;
const ButtonsFrames = styled.img`
  align-self: stretch;
  flex: 1;
  position: relative;
  background-color: var(--color-gray-100);
  overflow: hidden;
  max-width: calc(100% - 201px);
  @media screen and (max-width: 675px) {
    max-width: 100%;
  }
`;
const ImageInputRoot = styled.section`
  align-self: stretch;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0rem 2.563rem;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    gap: 0rem 2.563rem;
  }
`;
const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 100%;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 100%;
`;
