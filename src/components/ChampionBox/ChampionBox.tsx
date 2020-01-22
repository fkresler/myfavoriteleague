import React from 'react';
import styled from 'styled-components';
import useChampionData from '@/hooks/useChampionData';

interface IChampionBox {
  championId: string;
}

const StyledChampionBox = styled.div`
  display: inline-block;
  max-height: 5rem;
  border-radius: 100%;
  border: 1px solid grey;
  overflow: hidden;

  img {
    height: 5rem;
    width: auto;
  }
`;

const StyledInvalidContent = styled(StyledChampionBox)`
  background-color: grey;
`;

const ChampionBox = ({ championId }: IChampionBox) => {
  const championData = useChampionData(championId);

  if (championData) {
    const {
      name,
      image: { full },
      version,
    } = championData;
    const imageUrl = `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${full}`;
    return (
      <StyledChampionBox>
        <img src={imageUrl} alt={name} />
      </StyledChampionBox>
    );
  }

  return <StyledInvalidContent />;
};

export default ChampionBox;
