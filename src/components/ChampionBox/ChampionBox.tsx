import React from 'react';
import styled from 'styled-components';
import useChampionData from '@/hooks/useChampionData';

interface IChampionBox {
  championId: string;
  isHighlighted?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

const StyledChampionBox = styled.div<{ isHighlighted?: boolean }>`
  display: inline-block;
  max-width: 5rem;
  max-height: 5rem;
  border-radius: 100%;
  border: ${({ isHighlighted }) => (isHighlighted ? '5px solid green' : '1px solid grey')};
  box-sizing: border-box;
  overflow: hidden;

  img {
    width: 5rem;
    height: auto;
  }
`;

const StyledInvalidContent = styled(StyledChampionBox)`
  background-color: grey;
`;

export const ChampionBox: React.FC<IChampionBox> = ({
  championId,
  isHighlighted,
  isDisabled,
  onClick,
}) => {
  const championData = useChampionData(championId);

  if (championData) {
    const {
      name,
      image: { full },
      version,
    } = championData;
    const imageUrl = `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${full}`;
    return (
      <StyledChampionBox isHighlighted={isHighlighted} onClick={onClick}>
        <img src={imageUrl} alt={name} />
      </StyledChampionBox>
    );
  }

  return <StyledInvalidContent />;
};

export default ChampionBox;
