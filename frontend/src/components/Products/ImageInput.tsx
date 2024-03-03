import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';

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

const ImageInput: FunctionComponent = () => {
  const [detailImgs, setDetailImgs] = useState();

  const handlePostImage = (e: any) => {
    const fileArr = e.target.files;
    const fileURLs = [];
    let file;
    const filesLength = fileArr.length > 5 ? 5 : fileArr.length;
    for (let i = 0; i < filesLength; i++) {
      file = fileArr[i];

      const reader = new FileReader();
      reader.onload = () => {
        console.log(reader.result);
        fileURLs[i] = reader.result;
        setDetailImgs([...fileURLs]);
      };
      reader.readAsDataURL(file);
    }
    console.log(detailImgs);
  };
  return (
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
  );
};

export default ImageInput;
