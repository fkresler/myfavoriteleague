import React, { useState, useContext } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import useAuthentication from '@/hooks/useAuthentication';
import useClickOutside from '@/hooks/useClickOutside';
import { FirebaseContext } from '@/providers/FirebaseProvider';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const GeneralLayout = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
`;

const SideNavigationBar = styled.div<{ isNavbarOpen: boolean }>`
  background-color: #5b5f97;
  width: ${({ isNavbarOpen }) => (isNavbarOpen ? '300px' : '0')};
  max-width: 80%;
  overflow: hidden;
  transition: all 0.5s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ContentLayout = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

const HeaderBar = styled.div`
  background-color: #f8ffe7;
  flex: 0 0 auto;
  padding: 1rem;
`;

const ContentWrapper = styled.div`
  background-color: #fff;
  flex: 1 0 auto;
`;

const FooterBar = styled.div`
  background-color: #48435c;
  flex: 0 0 auto;
  padding: 1rem;
  color: #fff;

  & * {
    color: #fff;
  }
`;

const Logo = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: #fff;
  font-weight: bold;
  font-size: 200%;
  cursor: pointer;
`;

const NavigationLink = styled.div`
  display: block;
  margin-top: 4rem;
  white-space: nowrap;
  color: #fff;
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color: #fff;
  cursor: pointer;

  & * {
    white-space: nowrap;
    color: #fff;
    font-weight: bold;
    text-decoration: underline;
    text-decoration-color: #fff;
    cursor: pointer;
  }
`;

interface INavigationLayout {
  navLinks?: JSX.Element[];
}

const NavigationLayout: React.FC<INavigationLayout> = ({ navLinks, children }) => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const Firebase = useContext(FirebaseContext);
  const currentUser = useAuthentication();
  const clickOutsideRef = useClickOutside(() => setNavbarOpen(false));
  return (
    <GeneralLayout>
      <GlobalStyle />
      {navLinks && (
        <SideNavigationBar isNavbarOpen={isNavbarOpen} ref={clickOutsideRef}>
          <CloseButton onClick={() => setNavbarOpen(false)}>
            <FaTimes />
          </CloseButton>
          {navLinks.map((navLink) => (
            <NavigationLink>{navLink}</NavigationLink>
          ))}
          {currentUser && (
            <NavigationLink onClick={() => Firebase.doSignOut()}>Logout</NavigationLink>
          )}
        </SideNavigationBar>
      )}
      <ContentLayout>
        <HeaderBar>
          <Logo onClick={() => setNavbarOpen(!isNavbarOpen)}>League Mains</Logo>
        </HeaderBar>
        <ContentWrapper>{children}</ContentWrapper>
        <FooterBar>Footer</FooterBar>
      </ContentLayout>
    </GeneralLayout>
  );
};

export default NavigationLayout;
