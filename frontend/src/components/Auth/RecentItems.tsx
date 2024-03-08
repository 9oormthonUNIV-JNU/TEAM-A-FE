import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

const Div = styled.div`
  position: relative;
  font-weight: 500;
`;
const IconFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px 16px;
`;
// const Iconoirxmark = styled.img`
//   height: 24px;
//   width: 24px;
//   position: relative;
//   overflow: hidden;
//   flex-shrink: 0;
// `;
const ContainerFrameRoot = styled.div`
  width: 672px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-5xs) var(--padding-xl);
  box-sizing: border-box;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-black);
  font-family: var(--font-pretendard);
`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RecentItems = ({ data }: any) => {
  return (
    <ContainerFrameRoot>
      <IconFrame>
        <IconWrapper>
          <SearchIcon
            sx={{ marginRight: 1, color: '#8F8F8F' }}
            fontSize="medium"
          />
          <Div>{data}</Div>
        </IconWrapper>
      </IconFrame>
    </ContainerFrameRoot>
  );
};

const NoDataWrapper = styled.div`
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NoDataContent = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const NoRecentData = () => {
  return (
    <NoDataWrapper>
      <NoDataContent>최근 검색어가 없습니다</NoDataContent>
    </NoDataWrapper>
  );
};
