import React from 'react';
import styled from 'styled-components/macro';

import { COLORS } from '../../constants';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const SuperHeader = () => {

  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInputBar />
      <HelpLink href="/help">Help</HelpLink>
      <ShoppingBagButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </ShoppingBagButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  height: 40px;
  padding-left: 32px;
  padding-right: 32px;
  
  @media ${p => p.theme.queries.tabletAndSmaller} {
    display: none;
  }
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  margin-right: auto;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  };
`;

const ShoppingBagButton = styled(UnstyledButton)`
`;

const SearchInputBar = styled(SearchInput)`
`;

export default SuperHeader;
