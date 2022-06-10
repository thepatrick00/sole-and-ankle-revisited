/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {

  return (
    <ModalOverlay
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <ModalContent>
        <Wrapper>
          <Exit onClick={onDismiss}>
            <Icon id='close'/>
          </Exit>
          <Filler></Filler>
          <Navigation>
            <a href="/sale">Sale</a>
            <a href="/new">New&nbsp;Releases</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/collections">Collections</a>
          </Navigation>
          <Footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </Footer>
        </Wrapper>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled(DialogOverlay)`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: 0 auto;
  background-color: hsla(0, 100%, 0%, 0.7);
`;

const ModalContent = styled(DialogContent)`
  position: relative;
  width: 300px;
  height: 100%;
  background-color: white;
  margin-left: auto;
  padding: 32px;
  padding-right: 22px;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  text-transform: uppercase;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
  font-weight: 600;
  font-size: calc(18 / 16 * 1rem);
  
  & a {
    color: ${COLORS.gray[900]};
    text-decoration: none;
  }

  & a:first-of-type {
    color: ${COLORS.secondary}
  }
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 14px;
  font-size: calc(14 / 16 * 1rem);

  & a {
    color: ${COLORS.gray[700]};
    text-decoration: none;
  }
`;

const Filler = styled.div`
  flex: 1;
`

const Exit = styled(UnstyledButton)`
  position: absolute;
  padding: 32px 22px;
  top: 0;
  right: 0;
`
export default MobileMenu;
