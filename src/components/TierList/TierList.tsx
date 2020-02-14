import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-rainbow-components';
import ChampionList from '@/components/ChampionList';
import { ITierList } from '@/types/tierLists';

const TierList: React.FC<ITierList> = ({
  tierListId,
  authorId,
  name,
  order = 0,
  lists = [],
  methods: {
    updateTierListInfo,
    deleteTierList,
    createChampionList,
    updateChampionListInfo,
    deleteChampionList,
    addChampionEntry,
    updateChampionEntry,
    deleteChampionEntry,
  },
}) => {
  return (
    <>
      {lists &&
        lists.map((championList) => (
          <ChampionList
            championListId={championList.championListId}
            name={championList.name}
            description={championList.description}
            entries={championList.entries}
            updateChampionList={(clId, clName, clDescription, clOrder) =>
              updateChampionListInfo(tierListId, clId, clName, clDescription, clOrder)
            }
            deleteChampionList={(clId) => deleteChampionList(tierListId, clId)}
            addChampionEntry={(clId, championId, note) =>
              addChampionEntry(tierListId, clId, championId, note)
            }
            updateChampionEntry={(clId, ceId, note) =>
              updateChampionEntry(tierListId, clId, ceId, note)
            }
            deleteChampionEntry={(clId, ceId) => deleteChampionEntry(tierListId, clId, ceId)}
          />
        ))}
      <Button type="button" variant="destructive" onClick={() => deleteTierList(tierListId)}>
        Delete this list
      </Button>
    </>
  );
};

export default TierList;
