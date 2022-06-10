import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

function BreadCrumb() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale/shoes">
        Shoes
      </Breadcrumbs.Crumb>
    </Breadcrumbs>
  )
}

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <div>
            <TabletBreadcrumbsWrapper>
              <BreadCrumb/>
            </TabletBreadcrumbsWrapper>
            <Title>Running</Title>
          </div>
          <HideOnMobileWrap>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
              >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </HideOnMobileWrap>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <BreadCrumb />
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${p => p.theme.queries.tabletAndSmaller} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};

`;

const TabletBreadcrumbsWrapper = styled.div`
  display: none;

  @media ${p => p.theme.queries.tabletAndSmaller} {
    display: revert;
  }
`;

const HideOnMobileWrap = styled.div`
  @media ${p => p.theme.queries.phoneAndSmaller} {
    display: none;
  }
`;

export default ShoeIndex;
