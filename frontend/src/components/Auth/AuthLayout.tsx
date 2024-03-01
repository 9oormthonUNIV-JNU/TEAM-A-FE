import { FunctionComponent, type CSSProperties } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import mainLogo from '../../assets/images/mainLogo.svg';

export type FrameComponent1Type = {
  /** Style props */
  logoPadding?: CSSProperties['padding'];
};

const Iconoiruser = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const Logo = styled.img`
  position: relative;
`;
const LogoWrapper = styled.div<{ logoPadding?: CSSProperties['padding'] }>`
  width: 95rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0rem 0rem 0rem var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
  padding: ${(p) => p.logoPadding};
`;
const IconoiruserParentRoot = styled.header`
  align-self: stretch;
  border-bottom: 1px solid var(--color-gray-100);
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
  background-color: white;
  margin-bottom: 5%;
`;

const AuthLayout: FunctionComponent<FrameComponent1Type> = ({
  logoPadding,
}) => {
  return (
    <>
      <IconoiruserParentRoot>
        <Iconoiruser />
        <NavLink to={'/'} style={{ textDecoration: 'none' }}>
          <LogoWrapper logoPadding={logoPadding}>
            <Logo src={mainLogo} />
          </LogoWrapper>
        </NavLink>
      </IconoiruserParentRoot>
      <Outlet />
    </>
  );
};

export default AuthLayout;
