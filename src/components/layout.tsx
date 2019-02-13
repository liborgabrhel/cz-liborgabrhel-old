import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './global-styles';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => (
  <React.Fragment>
    <GlobalStyles />
    <Main>{children}</Main>
  </React.Fragment>
);

const Main = styled('main')`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
