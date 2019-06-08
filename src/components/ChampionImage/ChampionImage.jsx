import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import fetch from 'cross-fetch';

const StyledChampionImage = styled.div`
    width: 100%;
    border: 1px solid black;
    background-color: grey;
    text-align: center;

    img {
        height: auto;
        width: 100%;
    }
`;

class ChampionImage extends Component {
  constructor(props) {
    super(props);
    this.imageUrl = `http://ddragon.leagueoflegends.com/cdn/${
      props.championData.version
    }/img/champion/${
      props.championData.image.full}`;
    this.state = {
      championImage: null,
    };
  }

  async componentDidMount() {
    try {
      const championImage = await fetch(this.imageUrl);
      this.setState({
        championImage,
      });
    } catch (err) {
      console.error(
        `ChampionImage for ${this.imageUrl} could not be loaded`,
      );
    }
  }

  render() {
    let displayedImage;
    if (this.state.championImage) {
      displayedImage = this.state.championImage;
    } else {
      displayedImage = this.props.championData.name;
    }
    return <StyledChampionImage>{displayedImage}</StyledChampionImage>;
  }
}

ChampionImage.propTypes = {
  championData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default ChampionImage;
