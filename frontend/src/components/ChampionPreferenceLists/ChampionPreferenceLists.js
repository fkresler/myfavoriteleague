import React, {Component} from "react";
import styled from "styled-components";

import ChampionList from "../ChampionList";
import ChampionListSwitch from "../ChampionListSwitch";

const StyledChampionListsWrapper = styled.div`
    display: block;
    width: 100%;
`;

class ChampionPreferenceLists extends Component {
    constructor(props) {
        super(props);
        this.DEFAULTLISTIDENTIFIER = "Top";
        this.state = {
            championData: {},
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
    }

    selectActiveListByIdentifier = identifier => {
        if (
            Object.keys(this.props.userChampionPreferenceLists).indexOf(
                identifier
            ) > -1
        ) {
            this.setState({
                activeListIdentifier: identifier
            });
        }
    };

    render() {
        let activeListIdentifier = this.state.activeListIdentifier;
        let selectActiveListByIdentifier = this.selectActiveListByIdentifier;
        let selectedChampionData = this.props.userChampionPreferenceLists[
            activeListIdentifier
        ];
        return (
            <StyledChampionListsWrapper>
                <ChampionListSwitch
                    availableLists={this.props.userChampionPreferenceLists}
                    currentListIdentifier={activeListIdentifier}
                    selectListByIdentifier={selectActiveListByIdentifier}
                />
                <ChampionList
                    championListId={activeListIdentifier}
                    completeChampionData={this.state.championData}
                    selectedChampionData={selectedChampionData}
                    addChampionToListById={this.props.addChampionToList}
                    removeChampionFromListById={
                        this.props.removeChampionFromList
                    }
                />
            </StyledChampionListsWrapper>
        );
    }
}

export default ChampionPreferenceLists;
