import React from 'react';
import styled from 'styled-components';

export interface IChampionSelect {
  selectedChampions?: string[];
  excludedChampions?: string[];
  disabledChampions?: string[];
  onSelect?: (selectedChampion: string) => void;
  onSubmit?: (selectedChampions: string[]) => void;
}

export const ChampionSelect: React.FC<IChampionSelect> = ({
  selectedChampions,
  excludedChampions,
  disabledChampions,
  onSelect,
  onSubmit,
}) => {
  return <div>Youll be able to select your champions here</div>;
};

export default ChampionSelect;
