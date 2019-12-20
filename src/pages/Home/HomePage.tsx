import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Routes from '@/types/routes';

const HomePageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const HomePage: React.FC = () => {
  return (
    <HomePageContent>
      <h1>Welcome to League Mains!</h1>
      <h2>Where you can manage your preferred champions on your own!</h2>
      <div>Sign in or sign up or go home here:</div>
      <Link to={Routes.SIGN_UP}>Sign Up</Link>
      <Link to={Routes.SIGN_IN}>Sign In</Link>
      <Link to={Routes.PASSWORD_FORGET}>Forgot Password?</Link>
    </HomePageContent>
  );
};

export default HomePage;
