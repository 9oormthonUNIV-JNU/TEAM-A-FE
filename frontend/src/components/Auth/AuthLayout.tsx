import { FunctionComponent, type CSSProperties } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export type FrameComponent1Type = {
  /** Style props */
  logoPadding?: CSSProperties['padding'];
};

const Iconoiruser = styled.div`
  height: 40px;
  width: 40px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const Logo = styled.b`
  position: relative;
`;
const LogoWrapper = styled.div<{ logoPadding?: CSSProperties['padding'] }>`
  width: 1520px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 0px 0px var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
  padding: ${(p) => p.logoPadding};
`;
const IconoiruserParentRoot = styled.header`
  align-self: stretch;
  border-bottom: 1px solid var(--color-gray);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-13xl);

  top: 0;
  z-index: 99;
  position: sticky;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-black);
  font-family: var(--font-pretendard);
`;

const AuthLayout: FunctionComponent<FrameComponent1Type> = ({
  logoPadding,
}) => {
  return (
    <>
      <IconoiruserParentRoot>
        <Iconoiruser />
        <LogoWrapper logoPadding={logoPadding}>
          <Logo>logo</Logo>
        </LogoWrapper>
      </IconoiruserParentRoot>
      <Outlet />
    </>
  );
};

export default AuthLayout;
