import React, {Component} from "react";
import styled from "styled-components";

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
            activeListIdentifier: this.LIST_IDENTIFIERS[0]
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
        return (
            <StyledChampionListsWrapper>
                <ChampionListSwitch currentListIdentifier={activeListIdentifier} selectListByIdentifier={selectActiveListByIdentifier}/>
            </StyledChampionListsWrapper>
        );
    }
}

export default ChampionListsApp;
