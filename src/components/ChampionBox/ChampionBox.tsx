import React from 'react';
import styled from 'styled-components';
import useChampionData from '@/hooks/useChampionData';

interface IChampionBox {
  championId: string;
}

const StyledChampionBox = styled.div`
  display: inline-block;
  width: 5rem;
  height: 5rem;
`;

const StyledInvalidContent = styled(StyledChampionBox)`
  background-color: grey;
`;

const ChampionBox = ({ championId }: IChampionBox) => {
  const championData = useChampionData(championId);

  if (championData) {
    const { name } = championData;
    return <StyledChampionBox>{name}</StyledChampionBox>;
  }

  return <StyledInvalidContent />;
};

export default ChampionBox;
