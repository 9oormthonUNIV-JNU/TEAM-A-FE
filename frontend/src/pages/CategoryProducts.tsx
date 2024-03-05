import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CategoryFrame from '../components/Products/CategoryFrame';
import CategoryBox from '../components/Products/CategoryBox';
import { useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getProduct } from '../utils/api/Products/product';
import { Pagination } from '@mui/material';

const B = styled.b`
  position: relative;
  @media screen and (max-width: 800px) {
    font-size: var(--font-size-7xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const SearchFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-9xs);
`;
const CategoryboxFrame = styled.main`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 0rem 1.417rem;
  min-height: 72.75rem;
  max-width: 100%;
`;
const SearchRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5.438rem 12.563rem 8rem 11.688rem;
  box-sizing: border-box;
  gap: 1.875rem 0rem;
  letter-spacing: normal;
  text-align: left;
  font-size: var(--font-size-13xl);
  color: var(--color-black);
  font-family: var(--font-pretendard);
  @media screen and (max-width: 1125px) {
    padding-left: var(--padding-74xl);
    padding-right: var(--padding-81xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 800px) {
    gap: 1.875rem 0rem;
    padding-left: 2.875rem;
    padding-right: var(--padding-31xl);
    box-sizing: border-box;
  }
`;

const CategoryProducts = () => {
  const { categoryId } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const queryClient = useQueryClient();
  //데이터 분류별 인기순/최신순/마감임박순
  const [sorted, setSorted] = useState('');

  const changeSort = (data: any) => {
    setSorted(data);
  };
  console.log(sorted);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      return await getProduct({ categoryId });
    },
  });

  useEffect(() => {
    if (currentPage < 10) {
      const page = currentPage + 1;
      queryClient.prefetchQuery({
        queryKey: ['products', page],
        queryFn: () => getProduct({ page }),
      });
    }
  }, [currentPage, queryClient]);

  if (isLoading) {
    return <h1>loading..</h1>;
  }
  if (isError) {
    console.log(error);
    return <h1>error</h1>;
  }
  const handlePage = (e: any) => {
    setCurrentPage(parseInt(e.target.outerText));
  };
  return (
    <SearchRoot>
      <SearchFrame>
        <B>{categoryId}</B>
      </SearchFrame>
      <CategoryFrame changeSort={changeSort} />
      <CategoryboxFrame>
        {data?.data.response.map((item: any) => {
          return <CategoryBox {...item} />;
        })}
        {/* <CategoryBox
          propPadding="0rem var(--padding-12xs) 0rem 0rem"
          propGap="0rem 0.563rem"
        />
        <CategoryBox
          propPadding="0rem var(--padding-12xs) 0rem 0rem"
          propGap="0rem 0.563rem"
        />
        <CategoryBox
          propPadding="0rem var(--padding-12xs) 0rem 0rem"
          propGap="0rem 0.563rem"
        />
        <CategoryBox propPadding="unset" propGap="0rem 0.5rem" />
        <CategoryBox propPadding="unset" propGap="0rem 0.5rem" />
        <CategoryBox propPadding="unset" propGap="0rem 0.5rem" />
        <CategoryBox propPadding="unset" propGap="0rem 0.5rem" />
        <CategoryBox
          propPadding="0rem var(--padding-12xs) 0rem 0rem"
          propGap="0rem 0.563rem"
        />
        <CategoryBox
          propPadding="0rem var(--padding-12xs) 0rem 0rem"
          propGap="0rem 0.563rem"
        />
        <CategoryBox propPadding="unset" propGap="0rem 0.5rem" />
        <CategoryBox propPadding="unset" propGap="0rem 0.5rem" /> */}
      </CategoryboxFrame>
      <Pagination
        count={10}
        siblingCount={10}
        shape="rounded"
        style={{ margin: '0 auto' }}
        page={currentPage}
        onChange={handlePage}
        size="large"
        defaultPage={1}
      />
    </SearchRoot>
  );
};

export default CategoryProducts;
