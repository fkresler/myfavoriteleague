import React, {Component} from "react";
import styled from "styled-components";

import ChampionList from "./ChampionList";
import ChampionCard from "./ChampionCard";
import ChampionListSwitch from "./ChampionListSwitch";

const StyledChampionListsWrapper = styled.div`
    display: block;
    width: 100%;
`;

class ChampionListsApp extends Component {
    constructor(props) {
        super(props);
        this.LIST_IDENTIFIERS = ["complete","favorites"];
        this.state = {
            championData: {},
            championLists: {
                "favorites": []
            },
            favoriteListChampions: [],
            activeListIdentifier: this.LIST_IDENTIFIERS[0]
        }
    }

    componentDidMount() {
        const apiUrl = "/champions";
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
    }

    addChampionToFavoriteList = (championKey) => {
        let previousFavoriteList = this.state.favoriteListChampions.slice();
        if(previousFavoriteList.indexOf(championKey) < 0) {
            previousFavoriteList.push(championKey);
            this.setState({
                favoriteListChampions: previousFavoriteList
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
        }
    }

    removeChampionFromFavoriteList = (championKey) => {
        let previousFavoriteList = this.state.favoriteListChampions.slice();
        let championIndex = previousFavoriteList.indexOf(championKey);
        if(championIndex > -1) {
            previousFavoriteList.splice(championIndex, 1);
            this.setState({
                favoriteListChampions: previousFavoriteList
            });
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
        }
    }

    selectActiveListByIdentifier = (identifier) => {
        if(this.LIST_IDENTIFIERS.indexOf(identifier) > -1) {
            this.setState({
                activeListIdentifier: identifier
            });
        }
    }

    render() {
        let activeListIdentifier = this.state.activeListIdentifier;
        let selectActiveListByIdentifier = this.selectActiveListByIdentifier;
        let currentlyActiveChampionListArray = this.state.activeListIdentifier === "favorites" ? this.state.favoriteListChampions : Object.keys(this.state.championData);
        return (
            <StyledChampionListsWrapper>
                <ChampionListSwitch currentListIdentifier={activeListIdentifier} selectListByIdentifier={selectActiveListByIdentifier}/>
                <ChampionList championListId={"favorites"}
                    completeChampionData={this.state.championData}
                    selectedChampionData={this.state.championLists["favorites"]}
                    addChampionToListById={this.addChampionToListById}
                    removeChampionFromListById={this.removeChampionFromListById}
                />
                {currentlyActiveChampionListArray.map((key) => {
                    let isCurrentChampionInFavorites = this.state.favoriteListChampions.indexOf(key) > -1;
                    return (
                        <ChampionCard championData={this.state.championData[key]}
                            isChampionInFavorites={isCurrentChampionInFavorites}
                            addChampionToFavoriteList={this.addChampionToFavoriteList}
                            removeChampionFromFavoriteList={this.removeChampionFromFavoriteList}
                        />
                    );
                })}
            </StyledChampionListsWrapper>
        );
    }
}

export default ChampionListsApp;
