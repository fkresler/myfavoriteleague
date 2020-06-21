import React from 'react';
import styled from 'styled-components';
import useChampionData from '@/hooks/useChampionData';

interface IChampionBox {
  championId: string;
  isRounded?: boolean;
  isHighlighted?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

const StyledChampionBox = styled.div<{
  isHighlighted?: boolean;
  isDisabled?: boolean;
  isRounded?: boolean;
}>`
  display: inline-block;
  max-width: 5rem;
  max-height: 5rem;
  border-radius: ${({ isRounded }) => (isRounded ? '100%' : '0')};
  border: ${({ theme, isHighlighted }) =>
    isHighlighted
      ? `5px solid ${theme.colors.action.active}`
      : `1px solid ${theme.colors.action.main}`};
  ${({ theme, isDisabled }) =>
    isDisabled &&
    `
    border: 1px solid ${theme.colors.action.disabled};
  `}
  box-sizing: border-box;
  overflow: hidden;

  img {
    width: 5rem;
    height: auto;
    ${({ isDisabled }) =>
      isDisabled &&
      `
    filter: grayscale(100%);
  `}
  }
`;

const StyledInvalidContent = styled(StyledChampionBox)`
  background-color: grey;
`;

export const ChampionBox: React.FC<IChampionBox> = ({
  championId,
  isRounded,
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
      <StyledChampionBox
        isRounded={isRounded}
        isHighlighted={isHighlighted}
        isDisabled={isDisabled}
        onClick={onClick}
      >
        <img src={imageUrl} alt={name} />
      </StyledChampionBox>
    );
  }

  return <StyledInvalidContent />;
};

export default ChampionBox;
