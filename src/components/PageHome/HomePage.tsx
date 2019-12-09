import React from 'react';
import styled from 'styled-components';

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
    </HomePageContent>
  );
};

export default HomePage;
