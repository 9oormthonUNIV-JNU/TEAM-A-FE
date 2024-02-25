import { RouterProvider } from 'react-router-dom';
import router from './Router';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from './global';

// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

//react-query 상태 관리 쿼리 클라이언트 생성
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
