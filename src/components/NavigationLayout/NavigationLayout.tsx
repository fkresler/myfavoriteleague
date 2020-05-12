import React, { useState, useContext } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FaTimes, FaPowerOff } from 'react-icons/fa';
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
  display: block;
  width: 100vw;
  overflow: hidden;
`;

const SideNavigationBar = styled.div<{ isNavbarOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 20rem;
  height: 100vh;
  transform: ${({ isNavbarOpen }) => (isNavbarOpen ? 'scaleX(1)' : 'scaleX(0)')};
  transform-origin: 0% 100%;
  background-color: ${(props) => props.theme.colors.mainColorDark};
  transition: all 0.5s ease-out;
  z-index: 3;
`;

const ContentLayout = styled.div<{ isNavbarOpen: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  z-index: 1;
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
  position: fixed;
  top: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  line-height: 5rem;
  background-color: ${(props) => props.theme.colors.mainColorNormal};
  color: ${(props) => props.theme.colors.fontColorLight};
  z-index: 2;
`;

const HeaderElement = styled.div`
  display: inline-block;
  cursor: pointer;
  color: ${(props) => props.theme.colors.fontColorLight};
  padding-left: 1rem;
  padding-right: 1rem;
`;

const ContentWrapper = styled.div`
  margin-top: 5rem;
  background-color: #fff;
  flex: 1 0 auto;
  padding: 2rem 1rem;
  min-height: 100vh;
`;

const FooterBar = styled.div`
  background-color: ${(props) => props.theme.colors.mainColorDarker};
  padding: 2rem 1rem;
  color: ${(props) => props.theme.colors.fontColorLight};
  line-height: 200%;
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
  const { Firebase, authUser: currentUser } = useContext(FirebaseContext);
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
          <>
            <NavigationLink onClick={() => setNavbarOpen(false)}>
              <Link key="champion-lists" to={Routes.CHAMPION_LISTS}>
                My Lists
              </Link>
            </NavigationLink>
            <NavigationLink onClick={() => setNavbarOpen(false)}>
              <Link key="notes" to={Routes.NOTES}>
                My Notes
              </Link>
            </NavigationLink>
          </>
        )}
        {navLinks.map((navLink) => (
          <NavigationLink onClick={() => setNavbarOpen(false)}>{navLink}</NavigationLink>
        ))}
      </SideNavigationBar>
      <ContentLayout isNavbarOpen={isNavbarOpen}>
        <HeaderBar>
          <HeaderElement onClick={() => setNavbarOpen(!isNavbarOpen)}>League Mains</HeaderElement>
          {currentUser && !currentUser.isAnonymous && (
            <HeaderElement
              onClick={() => {
                Firebase.doSignOut();
                history.push(Routes.HOME);
              }}
            >
              <FaPowerOff />
            </HeaderElement>
          )}
        </HeaderBar>
        <ContentWrapper>{children}</ContentWrapper>
        <FooterBar>
          MyFavoriteLeague isn&apos;t endorsed by Riot Games and doesn&apos;t reflect the views or
          opinions of Riot Games or anyone officially involved in producing or managing Riot Games
          properties. Riot Games, and all associated properties are trademarks or registered
          trademarks of Riot Games, Inc.
        </FooterBar>
      </ContentLayout>
    </GeneralLayout>
  );
};

export default NavigationLayout;
