import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink as Link
} from "react-router-dom";
import styled from "styled-components";

import StartingPageContent from "../StartingPageContent";
import PageNotFoundContent from "../PageNotFoundContent";
import ImprovementNotes from "../ImprovementNotes";
import ChampionMoodBoard from "../ChampionMoodBoard";
import ChampionPreferenceLists from "../ChampionPreferenceLists";

const StyledNavigationBar = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1rem 2rem;
    display: flex;
    box-sizing: border-box;
    background-color: green;
    color: #fff;
    font-weight: bold;
    z-index: 9999;

    a {
        margin: 0 0.5rem;
        text-decoration: none;
    }

    a:first-child {
        margin-right: auto;
    }
`;

const StyledContentWrapper = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    margin-top: 3rem;
    box-sizing: border-box;
`;

const App = () => (
    <Router>
        <div>
            <StyledNavigationBar>
                <Link to="/">Home</Link>
                <Link to="/notes">My Notes</Link>
                <Link to="/moodboard">My Championmoodboard</Link>
                <Link to="/mylists">My Lists</Link>
            </StyledNavigationBar>
            <StyledContentWrapper>
                <Switch>
                    <Route exact path="/" component={StartingPageContent} />
                    <Route exact path="/notes" component={ImprovementNotes} />
                    <Route
                        exact
                        path="/moodboard"
                        component={ChampionMoodBoard}
                    />
                    <Route
                        exact
                        path="/mylists"
                        component={ChampionPreferenceLists}
                    />
                    <Route component={PageNotFoundContent} />
                </Switch>
            </StyledContentWrapper>
        </div>
    </Router>
);

export default App;
