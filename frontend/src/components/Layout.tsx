import { NavLink, Outlet } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { searchProduct } from '../utils/api/MainPage/product';

const FundingFrame = () => {
  //useSearchParams 공부해서 적용시켜보기
  const searchHandler = (e: any) => {
    e.preventDefault();
    const value = e.target[0].value;
    try {
      const result = searchProduct(value);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    console.log(value);
  };
  return (
    <FundingFrameRoot>
      <LogoText>
        <NavLink to={'/'} style={{ textDecoration: 'none' }}>
          <Logo>logo</Logo>
        </NavLink>
        <IconoirSearch onSubmit={searchHandler}>
          <IconoirSearchChild />
          <Input placeholder="원하는 펀딩 제품을 검색해주세요" type="text" />
          <SearchButton>
            <SearchIcon fontSize="large" sx={{ color: '#2E82F2' }} />
          </SearchButton>
        </IconoirSearch>
        <NavLink
          to={'/auth/login'}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <Div>로그인</Div>
        </NavLink>
      </LogoText>
      <NavBar>
        <B>전체</B>
        <B>테크가전</B>
        <B>패션</B>
        <B>뷰티</B>
        <B>푸드</B>
        <B>도서</B>
        <B>굿즈</B>
        <B>잡화</B>
      </NavBar>
    </FundingFrameRoot>
  );
};

export default function Layout() {
  return (
    <>
      <FundingFrame />
      <LoadingScreen />
      <Outlet />
    </>
  );
}

const SearchButton = styled.button`
  border: none;
  outline: none;
  background-color: inherit;
  cursor: pointer;
`;

const Logo = styled.b`
  position: relative;
  flex-shrink: 0;
`;
const IconoirSearchChild = styled.div`
  height: 4rem;
  width: 37.5rem;
  position: relative;
  border-radius: var(--br-21xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-dodgerblue-200);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
`;
const Input = styled.input`
  width: calc(100% - 78px);
  border: none;
  outline: none;
  font-weight: 500;
  font-family: var(--font-pretendard);
  font-size: var(--font-size-xl);
  background-color: transparent;
  height: 1.5rem;
  flex: 1;
  position: relative;
  color: var(--color-gray-100);
  text-align: left;
  display: inline-block;
  min-width: 15.625rem;
  max-width: 100%;
  white-space: nowrap;
  z-index: 1;
`;

const IconoirSearch = styled.form`
  width: 37.5rem;
  border-radius: var(--br-21xl);
  background-color: var(--color-white);
  border: 1px solid var(--color-dodgerblue-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-mini) var(--padding-xs)
    var(--padding-4xl);
  gap: 0rem 0.938rem;
  max-width: 100%;
`;
const Div = styled.div`
  position: relative;
  font-weight: 500;
  flex-shrink: 0;
`;
const LogoText = styled.div`
  margin-top: 1%;
  width: 97.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0rem var(--padding-xl);
  box-sizing: border-box;
  gap: var(--gap-xl);
  max-width: 100%;
`;
const B = styled.b`
  position: relative;
`;
const NavBar = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--color-silver);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-20xl) var(--padding-187xl) var(--padding-5xl);
  gap: 0rem 5.054rem;
  font-size: var(--font-size-5xl);
  @media screen and (max-width: 1450px) {
    padding-left: var(--padding-84xl);
    padding-right: var(--padding-84xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 825px) {
    gap: 0rem 5.054rem;
    padding-left: var(--padding-32xl);
    padding-right: var(--padding-32xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: 0rem 5.054rem;
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const FundingFrameRoot = styled.header`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.563rem 0rem;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-black);
  font-family: var(--font-pretendard);
`;
