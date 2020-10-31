import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Arial", sans-serif;
    background-color: ${({ theme }) => theme.colors.base.default};
    color: ${({ theme }) => theme.colors.base.text};
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
