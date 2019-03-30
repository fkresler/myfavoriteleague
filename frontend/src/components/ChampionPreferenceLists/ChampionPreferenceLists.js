import React, {Component} from "react";
import styled from "styled-components";

import ChampionListSwitch from "../ChampionListSwitch";
import ChampionList from "../ChampionList";
import ChampionMoodBoard from "../ChampionMoodBoard";

const StyledChampionListsWrapper = styled.div`
    display: block;
    width: 100%;
`;

class ChampionPreferenceLists extends Component {
    constructor(props) {
        super(props);
        this.DEFAULTLISTIDENTIFIER = Object.keys(
            this.props.userChampionPreferenceLists
        )[0];
        this.state = {
            activeListIdentifier: this.DEFAULTLISTIDENTIFIER
        };
    }

    componentDidMount = () => {
        this.props.fetchStaticChampionDataIfNeeded();
    };

    isMoodboard = listName => {
        if (listName) return listName.toLowerCase().indexOf("mood") > 0;
        return false;
    };

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
        let completeChampionData = this.props.staticChampionData
            ? this.props.staticChampionData
            : {};
        let activeListIdentifier = this.state.activeListIdentifier;
        let selectedListData = this.props.userChampionPreferenceLists[
            activeListIdentifier
        ];
        selectedListData = selectedListData ? selectedListData : {};
        let toBeRenderedListComponent;
        if (this.isMoodboard(activeListIdentifier)) {
            toBeRenderedListComponent = (
                <ChampionMoodBoard
                    championListId={activeListIdentifier}
                    completeChampionSet={completeChampionData}
                    selectedChampionSet={selectedListData}
                    addChampionToList={this.props.addChampionToList}
                    setChampionPriority={this.props.setChampionPriority}
                    setChampionNote={this.props.setChampionPriority}
                />
            );
        }
        return (
            <StyledChampionListsWrapper>
                <ChampionListSwitch
                    availableLists={this.props.userChampionPreferenceLists}
                    currentListIdentifier={activeListIdentifier}
                    selectListByIdentifier={this.selectActiveListByIdentifier}
                />
                {toBeRenderedListComponent}
            </StyledChampionListsWrapper>
        );
    }
}

export default ChampionPreferenceLists;
