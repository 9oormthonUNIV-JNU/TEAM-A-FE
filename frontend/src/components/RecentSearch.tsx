import { useRecoilValue, useResetRecoilState } from 'recoil';
import styled from 'styled-components';
import { searchState } from '../atoms';
import { RecentItems, NoRecentData } from './Auth/RecentItems';

const Wrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 37.5rem;
  height: 450px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 1px 2px 4px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  z-index: 1;
  overflow: hidden;
`;

const WrapperNavBar = styled.div`
  /* border: 1px solid black; */
  padding-left: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fefefe;
  width: 90%;
  height: 10%;
`;
const SearchContent = styled.div`
  width: 100%;
  height: 90%;
`;

export default function RecentSearch({ open }: any) {
  const array = useRecoilValue(searchState);
  const reverseArray = [...array].reverse();
  const resetList = useResetRecoilState(searchState);

  return open === true ? (
    <Wrapper>
      <WrapperNavBar>
        <span style={{ fontSize: '16px' }}>최근 검색어</span>
        <span
          style={{ fontSize: '16px', cursor: 'pointer' }}
          onClick={() => resetList()}
        >
          전체 삭제
        </span>
      </WrapperNavBar>
      <SearchContent>
        {array.length === 0 && <NoRecentData />}
        {reverseArray.map((data, i) => {
          return <RecentItems {...data} key={i} />;
        })}
      </SearchContent>
    </Wrapper>
  ) : null;
}
