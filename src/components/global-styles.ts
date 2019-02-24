import { createGlobalStyle } from 'styled-components';
import { theme } from '../theme';

export const GlobalStyles = createGlobalStyle`
  @import url(${theme.font.url});

  * {
    box-sizing: border-box;
    font-family: ${theme.font.family};
    font-size: 16px;
  }
  
  body {
    display: flex;
    position: relative;
    width: 100%;
    min-height: 100vh;
    justify-content: center;
    align-items: start;
    margin: 0;
    padding: 0;
    background-color: ${theme.color.light};
  }
`;
