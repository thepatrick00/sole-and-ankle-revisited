import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>
  
  return (
    <header> 
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileMenuWrapper>
          <UnstyledButton>
            <Icon id={'shopping-bag'} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id={'search'} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id={'menu'} />
          </UnstyledButton>
        </MobileMenuWrapper>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MobileMenuWrapper = styled.div`
  display: none;

  @media ${p => p.theme.queries.phoneAndSmaller} {
    
  }
  @media ${p => p.theme.queries.tabletAndSmaller} {
    display: flex;
    gap: 23px;
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${p => p.theme.queries.tabletAndSmaller} {
    border-top: 4px solid ${COLORS.gray[900]};
    justify-content: space-between;
    align-items: center;
  }
  @media ${p => p.theme.queries.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 19px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem,
    9.2vw - 4.5rem,
    3.5rem);
  margin: 0px 48px;

  @media ${p => p.theme.queries.phoneAndSmaller} {
  
  }
  @media ${p => p.theme.queries.tabletAndSmaller} {
    display: none;
}
`;

const Side = styled.div`
  flex: 1;

  @media ${p => p.theme.queries.tabletAndSmaller} {
    flex: 0 1 auto;

    &:last-of-type {
      display: none;
    }
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--secondary-color);
  }
`;

export default Header;
