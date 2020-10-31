import React from 'react';
import styled from 'styled-components';
import { useChampionData } from '@/providers/StaticLeagueProvider/useChampionData';
import { FaInfoCircle } from 'react-icons/fa';
import { getChampionImageUrl } from '@/utils/championInfoUtils';

export interface IChampionBox {
  className?: string;
  testId?: string;
  championId: string;
  imageUrl?: string;
  info?: string;
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
  display: block;
  position: relative;
  width: 5rem;
  max-width: 5rem;
  height: 5rem;
  max-height: 5rem;
  background-color: grey;
  border-radius: ${({ isRounded }) => (isRounded ? '100%' : '0')};
  border: ${({ theme, isHighlighted }) =>
    isHighlighted ? `3px solid ${theme.borders.active}` : `1px solid ${theme.borders.default}`};
  ${({ theme, isDisabled }) =>
    isDisabled &&
    `
    border: 1px solid ${theme.borders.default};
  `}
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    ${({ isDisabled }) =>
      isDisabled &&
      `
    filter: grayscale(100%);
  `}
  }
`;

const StyledInfoIconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
`;

export const ChampionBox: React.FC<IChampionBox> = ({
  className,
  testId,
  championId,
  imageUrl: explicitImageUrl,
  info,
  isRounded,
  isHighlighted,
  isDisabled,
  onClick,
}) => {
  const { data: championData } = useChampionData(championId);
  const { name, image, version } = championData || {};
  const { full: imageName } = image || {};
  const implicitImageUrl = getChampionImageUrl(version, imageName);
  const hasInfo = !!info && info !== '';
  const renderedImageUrl = explicitImageUrl || implicitImageUrl || undefined;

  return (
    <StyledChampionBox
      className={className}
      data-testid={testId || 'champion-box'}
      isRounded={isRounded}
      isHighlighted={isHighlighted}
      isDisabled={isDisabled}
      onClick={onClick}
    >
      {hasInfo && (
        <StyledInfoIconWrapper data-testid="info-icon">
          <FaInfoCircle />
        </StyledInfoIconWrapper>
      )}
      {renderedImageUrl && (
        <img data-testid="champion-image" loading="lazy" src={renderedImageUrl} alt={name} />
      )}
    </StyledChampionBox>
  );
};

export default ChampionBox;
