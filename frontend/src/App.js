import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink as Link
} from "react-router-dom";
import styled from "styled-components";

import ProductIntroduction from "./components/startpage/ProductIntroduction";
import NotFoundContent from "./components/errorpage/NotFoundContent";
import ChampionPreferenceListsApp from "./components/championlist/ChampionPreferenceListsAppWrapper";

const StyledNavigationBar = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1rem 2rem;
    display: flex;
    justify-content: flex-start;
    box-sizing: border-box;
    background-color: green;
    color: #fff;
    font-weight: bold;

    a:first-child {
        margin-right: auto;
    }

    a {
        padding: 0 0.5rem;
    }
`;

const StyledContentWrapper = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    margin-top: 3rem;
    padding: 1rem;
    box-sizing: border-box;
`;

const App = () => (
    <Router>
        <div>
            <StyledNavigationBar>
                <Link to="/">Home</Link>
                <Link to="/mylists">My Lists</Link>
                <Link to="/error">Error</Link>
            </StyledNavigationBar>
            <StyledContentWrapper>
                <Switch>
                    <Route exact path="/" component={ProductIntroduction} />
                    <Route
                        exact
                        path="/mylists"
                        component={ChampionPreferenceListsApp}
                    />
                    <Route component={NotFoundContent} />
                </Switch>
            </StyledContentWrapper>
        </div>
    </Router>
);

export default App;
