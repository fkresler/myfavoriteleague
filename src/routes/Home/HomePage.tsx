import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Routes from '@/types/routes';
import { Button } from '@/components/Button';
import { FirebaseContext } from '@/providers/FirebaseProvider';

const HomePageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > * {
    min-width: 5rem;
  }
`;

const HomePage: React.FC = () => {
  const { authUser: currentUser } = React.useContext(FirebaseContext);

  return (
    <HomePageContent>
      <h1>Welcome to League Mains!</h1>
      <h2>Where you can manage your preferred champions on your own!</h2>
      {(!currentUser || currentUser.isAnonymous) && (
        <ButtonGroup>
          <Button variant="brand">
            <Link to={Routes.SIGN_UP}>Sign Up</Link>
          </Button>
          <Button variant="brand">
            <Link to={Routes.SIGN_IN}>Sign In</Link>
          </Button>
          <Button variant="outline-brand">
            <Link to={Routes.PASSWORD_FORGET}>Forgot Password?</Link>
          </Button>
        </ButtonGroup>
      )}
      {currentUser && currentUser.isAnonymous && (
        <div>Your data is saved but you should register for amazing advantages!</div>
      )}
    </HomePageContent>
  );
};

export default HomePage;
