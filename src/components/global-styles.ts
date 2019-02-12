import { createGlobalStyle } from 'styled-components';
import { theme } from '../theme';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,500,700&subset=latin-ext');

  * {
    box-sizing: border-box;
    font-family: ${theme.font.IBM_Plex_Sans};
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
