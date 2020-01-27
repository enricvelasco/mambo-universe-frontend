import React from 'react';
import Overlay from '../overlay';
import { ModalClose, ModalContainer } from './styles';

const Layout = ({
  children,
  overlayClassName = '',
  closeAction,
}) => (
  <Overlay className={overlayClassName}>
    <ModalContainer>
      <ModalClose onClick={() => closeAction()} />
      {children}
    </ModalContainer>
  </Overlay>
);

export default Layout;
