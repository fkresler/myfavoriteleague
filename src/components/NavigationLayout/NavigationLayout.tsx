import React, { useState, useContext } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import useAuthentication from '@/hooks/useAuthentication';
import useClickOutside from '@/hooks/useClickOutside';
import { FirebaseContext } from '@/providers/FirebaseProvider';
import { Link, useHistory } from 'react-router-dom';
import Routes from '@/types/routes';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const GeneralLayout = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
`;

const SideNavigationBar = styled.div<{ isNavbarOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 20rem;
  height: 100vh;
  left: ${({ isNavbarOpen }) => (isNavbarOpen ? '0' : '-20rem')};
  background-color: ${(props) => props.theme.colors.mainColorDark};
  transition: all 0.5s ease-out;
  z-index: 3;
`;

const ContentLayout = styled.div<{ isNavbarOpen: boolean }>`
  width: 100vw;
  overflow: hidden;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: relative;
  left: ${({ isNavbarOpen }) => (isNavbarOpen ? '20rem' : '0')};
  transition: all 0.5s ease-out;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    height: 100%;
    width: 100%;
    z-index: 2;
    background-color: ${({ isNavbarOpen }) => (isNavbarOpen ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)')};
    pointer-events: ${({ isNavbarOpen }) => (isNavbarOpen ? 'auto' : 'none')};
    transition: all 0.5s ease-out;
  }
`;

const HeaderBar = styled.div`
  background-color: ${(props) => props.theme.colors.mainColorNormal};
  color: ${(props) => props.theme.colors.fontColorLight};
  position: fixed;
  top: 0;
  width: 100%;
  height: 5rem;
  line-height: 5rem;
  padding: 0 1.5rem;
  z-index: 2;

  & * {
    color: ${(props) => props.theme.colors.fontColorLight};
  }
`;

const ContentWrapper = styled.div`
  margin-top: 5rem;
  background-color: #fff;
  flex: 1 0 auto;
  padding: 2rem 1rem;
`;

const FooterBar = styled.div`
  background-color: ${(props) => props.theme.colors.mainColorDarker};
  flex: 0 0 auto;
  padding: 1rem;
  color: ${(props) => props.theme.colors.fontColorLight};

  & * {
    color: ${(props) => props.theme.colors.fontColorLight};
  }
`;

const Logo = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  color: ${(props) => props.theme.colors.fontColorLight};
  font-weight: bold;
  font-size: 200%;
  cursor: pointer;
`;

const NavigationLink = styled.div`
  display: block;
  margin-top: 4rem;
  white-space: nowrap;
  color: ${(props) => props.theme.colors.fontColorLight};
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color: ${(props) => props.theme.colors.fontColorLight};
  cursor: pointer;

  & * {
    white-space: nowrap;
    color: ${(props) => props.theme.colors.fontColorLight};
    font-weight: bold;
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.colors.fontColorLight};
    cursor: pointer;
  }
`;

interface INavigationLayout {
  navLinks?: JSX.Element[];
}

const NavigationLayout: React.FC<INavigationLayout> = ({ navLinks = [], children }) => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const Firebase = useContext(FirebaseContext);
  const currentUser = useAuthentication();
  const clickOutsideRef = useClickOutside(() => setNavbarOpen(false));
  const history = useHistory();
  return (
    <GeneralLayout>
      <GlobalStyle />
      <SideNavigationBar isNavbarOpen={isNavbarOpen} ref={clickOutsideRef}>
        <CloseButton onClick={() => setNavbarOpen(false)}>
          <FaTimes />
        </CloseButton>
        <NavigationLink onClick={() => setNavbarOpen(false)}>
          <Link key="home" to={Routes.HOME}>
            Home
          </Link>
        </NavigationLink>
        {currentUser && (
          <NavigationLink onClick={() => setNavbarOpen(false)}>
            <Link key="champion-lists" to={Routes.CHAMPION_LISTS}>
              My Lists
            </Link>
          </NavigationLink>
        )}
        {navLinks.map((navLink) => (
          <NavigationLink onClick={() => setNavbarOpen(false)}>{navLink}</NavigationLink>
        ))}
        {currentUser && (
          <NavigationLink
            onClick={() => {
              setNavbarOpen(false);
              Firebase.doSignOut();
              history.push(Routes.HOME);
            }}
          >
            Logout
          </NavigationLink>
        )}
      </SideNavigationBar>
      <ContentLayout isNavbarOpen={isNavbarOpen}>
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
