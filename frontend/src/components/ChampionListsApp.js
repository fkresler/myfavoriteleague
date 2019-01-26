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
            championData: {},
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

    selectActiveListByIdentifier = (identifier) => {
        if(this.LIST_IDENTIFIERS.indexOf(identifier) > -1) {
            this.setState({
                activeListIdentifier: identifier
            });
        }
    }

    render() {
        let imageUrl = "http://ddragon.leagueoflegends.com/cdn/9.2.1/img/champion/";
        let activeListIdentifier = this.state.activeListIdentifier;
        let selectActiveListByIdentifier = this.selectActiveListByIdentifier;
        return (
            <StyledChampionListsWrapper>
                <ChampionListSwitch currentListIdentifier={activeListIdentifier} selectListByIdentifier={selectActiveListByIdentifier}/>
                {Object.keys(this.state.championData).map((key) => {
                    return (
                        <img src={imageUrl + this.state.championData[key].image.full} alt={key} title={key}/>
                    );
                })}
            </StyledChampionListsWrapper>
        );
    }
}

export default ChampionListsApp;
