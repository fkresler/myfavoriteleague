import React, { useState } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const GeneralLayout = styled.div<{ isNavbarOpen: boolean }>`
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: ${({ isNavbarOpen }) => isNavbarOpen ? '20% auto' : '0 auto'};
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "sidebar header"
    "sidebar content"
    "sidebar footer";
  overflow: hidden;
  transition: 2s ease-out;
`;

const HeaderBar = styled.div`
  background-color: red;
  grid-area: header;
  padding: 1rem;
`;

const Logo = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const SideNavigationBar = styled.div`
  background-color: green;
  grid-area: sidebar;
  overflow: hidden;
`;

const NavigationLink = styled.div`
  display: block;
  border: 3px solid green;
`;

const ContentWrapper = styled.div`
  background-color: orange;
  grid-area: content;
`;

const FooterBar = styled.div`
  background-color: blue;
  grid-area: footer;
  padding: 1rem;
`;

interface INavigationLayout {
  navLinks?: JSX.Element[];
}

const NavigationLayout: React.FC<INavigationLayout> = ({
  navLinks,
  children
}) => {
  const [isNavbarOpen, setNavbarOpen] = useState(true);
  return (
    <GeneralLayout isNavbarOpen={isNavbarOpen}>
      <GlobalStyle />
      <HeaderBar>
        <Logo onClick={() => setNavbarOpen(!isNavbarOpen)}>League Mains</Logo>
      </HeaderBar>
      {navLinks && (
        <SideNavigationBar>
          {navLinks.map(navLink => (
            <NavigationLink>
              {navLink}
            </NavigationLink>
          ))}
        </SideNavigationBar>
      )}
      <ContentWrapper>
        {children}
      </ContentWrapper>
      <FooterBar>
        Footer
      </FooterBar>
    </GeneralLayout>
  );
};

export default NavigationLayout;