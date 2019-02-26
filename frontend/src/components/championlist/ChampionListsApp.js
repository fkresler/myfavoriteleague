import React, {Component} from "react";
import styled from "styled-components";
import Cookies from "js-cookie";

import ChampionList from "./ChampionList";
import ChampionListSwitch from "../championlist/ChampionListSwitch";

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
                Favorites: [],
                Top: [],
                Jungle: [],
                Mid: [],
                Bot: [],
                Support: []
            },
            activeListIdentifier: this.DEFAULTLISTIDENTIFIER
        };
    }

    async componentDidMount() {
        try {
            const localApiUrl = "/champion";
            let localApiResponse = await fetch(localApiUrl);
            if (localApiResponse.ok) {
                let localApiResponseJson = await localApiResponse.json();
                console.log("Data received: " + localApiResponseJson);
                if (localApiResponseJson.data) {
                    this.setState({
                        championData: localApiResponseJson.data
                    });
                }
            }
        } catch (err) {
            console.log("Error during mounting: " + err);
        }
        // Get previously saved cookie data
        let previousCookieData = Cookies.get(this.COOKIENAME);
        if (previousCookieData) {
            this.setState({
                championLists: JSON.parse(previousCookieData)
            });
        }
    }

    componentDidUpdate() {
        Cookies.set(this.COOKIENAME, JSON.stringify(this.state.championLists));
    }

    addChampionToListById = (listId, championKey, priority = 1, note = "") => {
        // Deep copy for state management
        let championLists = JSON.parse(
            JSON.stringify(this.state.championLists)
        );
        if (championLists[listId]) {
            let specifiedChampionObject = championLists[listId][championKey]
                ? championLists[listId][championKey]
                : {};
            // Set new data
            specifiedChampionObject["priority"] = priority;
            specifiedChampionObject["note"] = note;
            this.setState({
                championLists: championLists
            });
        }
    };

    removeChampionFromListById = (listId, championKey) => {
        // Deep copy for state management
        let championLists = JSON.parse(
            JSON.stringify(this.state.championlists)
        );
        let specifiedChampionObject = championLists[listId][championKey];
        if (specifiedChampionObject) {
            specifiedChampionObject = undefined;
            this.setState({
                championLists: championLists
            });
        }
    };

    selectActiveListByIdentifier = identifier => {
        if (Object.keys(this.state.championLists).indexOf(identifier) > -1) {
            this.setState({
                activeListIdentifier: identifier
            });
        }
    };

    render() {
        let activeListIdentifier = this.state.activeListIdentifier;
        let selectActiveListByIdentifier = this.selectActiveListByIdentifier;
        return (
            <StyledChampionListsWrapper>
                <ChampionListSwitch
                    availableLists={this.state.championLists}
                    currentListIdentifier={activeListIdentifier}
                    selectListByIdentifier={selectActiveListByIdentifier}
                />
                <ChampionList
                    championListId={activeListIdentifier}
                    completeChampionData={this.state.championData}
                    selectedChampionData={
                        this.state.championLists[activeListIdentifier]
                    }
                    addChampionToListById={this.addChampionToListById}
                    removeChampionFromListById={this.removeChampionFromListById}
                />
            </StyledChampionListsWrapper>
        );
    }
}

export default ChampionListsApp;
