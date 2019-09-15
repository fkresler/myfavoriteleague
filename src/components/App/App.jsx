import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink as Link,
} from 'react-router-dom';
import styled from 'styled-components';

import StartingPageContent from 'Components/StartingPageContent';
import PageNotFoundContent from 'Components/PageNotFoundContent';
import ChampionListApp from 'Components/ChampionListApp';

const FixedNavigationBar = styled.div`
    position: fixed;
    display: flex;
    box-sizing: border-box;
    background-color: green;
    z-index: 9999;

    @media(min-width: 769px) {
      flex-direction: column;
      top: 0;
      height: 100%;
      width: 7rem;
      padding: 2rem 0;
      box-shadow: 5px 0 10px 0 rgba(0,0,0,.5);
    }

    @media(max-width: 768px) {
      bottom: 0;
      width: 100%;
      padding: 1rem;
      box-shadow: 5px 0 10px 0 rgba(0,0,0,.5);
    }

    & > * {
      display: block;
      margin: 1rem auto;
      color: #fff;
      font-weight: bold;
      text-decoration: none;
    }
`;

const StyledContentWrapper = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    padding: 1rem;
    box-sizing: border-box;

    @media(min-width: 769px) {
      margin-left: 7rem;
    }
`;

const App = () => (
  <Router>
    <div>
      <FixedNavigationBar>
        <Link to="/">Home</Link>
        <Link to="/tierlists">Lists</Link>
      </FixedNavigationBar>
      <StyledContentWrapper>
        <Switch>
          <Route exact path="/" component={StartingPageContent} />
          <Route exact path="/tierlists" component={ChampionListApp} />
          <Route component={PageNotFoundContent} />
        </Switch>
      </StyledContentWrapper>
    </div>
  </Router>
);

export default App;
