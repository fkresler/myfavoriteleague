import React, { useState, useContext } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FaTimes, FaPowerOff, FaRegLightbulb } from 'react-icons/fa';
import useClickOutside from '@/hooks/useClickOutside';
import { FirebaseContext } from '@/providers/FirebaseProvider';
import { Link, useHistory } from 'react-router-dom';
import Routes from '@/types/routes';
import { UserDataContext, userSettingsActions } from '@/providers/UserDataProvider';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Arial", sans-serif;
  }
`;

const GeneralLayout = styled.div`
  display: block;
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.base.default};
  color: ${({ theme }) => theme.colors.base.text};
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
  background-color: ${({ theme }) => theme.colors.brand.default};
  color: ${({ theme }) => theme.colors.brand.text};
  transition: all 0.5s ease-out;
  z-index: 3;
`;

const ContentLayout = styled.div<{ isNavbarOpen: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  background-color: ${({ theme }) => theme.colors.brand.default};
  color: ${({ theme }) => theme.colors.brand.text};
  z-index: 2;
`;

const HeaderElement = styled.div`
  display: inline-block;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const ContentWrapper = styled.div`
  margin-top: 5rem;
  flex: 1 0 auto;
  padding: 2rem 1rem;
  min-height: 100vh;
`;

const FooterBar = styled.div`
  background-color: ${({ theme }) => theme.colors.brand.default};
  padding: 2rem 1rem;
  color: ${({ theme }) => theme.colors.brand.text};
  line-height: 200%;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  font-weight: bold;
  font-size: 200%;
  cursor: pointer;
`;

const NavigationLink = styled.div`
  display: block;
  margin-top: 4rem;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.brand.text};
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.brand.text};
  cursor: pointer;

  & * {
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.brand.text};
    font-weight: bold;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.brand.text};
    cursor: pointer;
  }
`;

interface IAppLayout {
  navLinks?: React.ReactNode[];
}

const AppLayout: React.FC<IAppLayout> = ({ navLinks = [], children }) => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const { Firebase, authUser: currentUser } = useContext(FirebaseContext);
  const clickOutsideRef = useClickOutside(() => setNavbarOpen(false));
  const history = useHistory();
  const {
    usersettings: { dispatch },
  } = React.useContext(UserDataContext);
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
          <HeaderElement onClick={() => setNavbarOpen(!isNavbarOpen)}>
            MyFavoriteLeague
          </HeaderElement>
          <HeaderElement onClick={() => dispatch(userSettingsActions.toggleDarkTheme())}>
            <FaRegLightbulb />
          </HeaderElement>
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

export default AppLayout;
