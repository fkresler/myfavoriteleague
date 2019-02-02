import React, {Component} from "react";
import styled from "styled-components";
import Cookies from "js-cookie";

import ChampionList from "./ChampionList";
import ChampionListSwitch from "./ChampionListSwitch";

const StyledChampionListsWrapper = styled.div`
    display: block;
    width: 100%;
`;

class ChampionListsApp extends Component {
    constructor(props) {
        super(props);
        this.COOKIENAME = "myfavoriteleague-mylists";
        this.DEFAULTLISTIDENTIFIER = "Favorites";
        this.state = {
            championData: {},
            championLists: {
                "Favorites": [],
                "Top": [],
                "Jungle": [],
                "Mid": [],
                "Bot": [],
                "Support": []
            },
            activeListIdentifier: this.DEFAULTLISTIDENTIFIER
        }
    }

    componentDidMount() {
        const apiUrl = "/champions";
        // Get static champion data
        fetch(apiUrl)
            .then((response) => {
                if (response.status !== 200) {
                    console.log("Error: status code was " + response.status);
                }
                response
                    .json()
                    .then((data) => {
                        console.log("Data received: " + data);
                        if(data.data) {
                            this.setState({
                                championData: data.data
                            });
                        }
                    })
                    .catch((err) => {
                        console.log("Error: data could not be decrypted");
                    });
            })
            .catch((err) => {
                console.log("Error: request was not successful");
            });
        // Get previously saved cookie data
        let previousCookieData = Cookies.get(this.COOKIENAME);
        if(previousCookieData) {
            this.setState({
                championLists: JSON.parse(previousCookieData)
            });
        }
    }

    addChampionToListById = (listId, championKey) => {
        let championLists = {...this.state.championLists};
        let specifiedList = championLists[listId];
        if(specifiedList.indexOf(championKey) < 0) {
            specifiedList.push(championKey);
            this.setState({
                championLists: championLists
            });
            Cookies.set(this.COOKIENAME, JSON.stringify(this.state.championLists));
        }
    }

    removeChampionFromListById = (listId, championKey) => {
        let championLists = {...this.state.championLists};
        let specifiedList = championLists[listId];
        let championIndex = specifiedList.indexOf(championKey);
        if(championIndex > -1) {
            specifiedList.splice(championIndex, 1);
            this.setState({
                championLists: championLists
            });
            Cookies.set(this.COOKIENAME, JSON.stringify(this.state.championLists));
        }
    }

    selectActiveListByIdentifier = (identifier) => {
        if(Object.keys(this.state.championLists).indexOf(identifier) > -1) {
            this.setState({
                activeListIdentifier: identifier
            });
        }
    }

    render() {
        let activeListIdentifier = this.state.activeListIdentifier;
        let selectActiveListByIdentifier = this.selectActiveListByIdentifier;
        return (
            <StyledChampionListsWrapper>
                <ChampionListSwitch availableLists={this.state.championLists}
                    currentListIdentifier={activeListIdentifier}
                    selectListByIdentifier={selectActiveListByIdentifier}
                />
                <ChampionList championListId={activeListIdentifier}
                    completeChampionData={this.state.championData}
                    selectedChampionData={this.state.championLists[activeListIdentifier]}
                    addChampionToListById={this.addChampionToListById}
                    removeChampionFromListById={this.removeChampionFromListById}
                />
            </StyledChampionListsWrapper>
        );
    }
}

export default ChampionListsApp;
