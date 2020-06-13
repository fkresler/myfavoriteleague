import React from 'react';
import { Button, Modal, Textarea } from 'react-rainbow-components';
import { useAllChampionData } from '@/hooks/useChampionData';
import ChampionBox from '@/components/ChampionBox';

export type IChampionEntryModal = {
  isModalOpen: boolean;
  handleChampionEntryData: (selectedChampions: string[], selectedNote: string) => void;
  closeModalBox: () => void;
};

const ChampionEntryModal: React.FC<IChampionEntryModal> = ({
  isModalOpen,
  handleChampionEntryData,
  closeModalBox,
}) => {
  const possibleChampions = useAllChampionData();
  const [selectedChampions, setSelectedChampions] = React.useState<string[]>([]);
  const [selectedNote, setSelectedNote] = React.useState<string>('');

  const toggleChampionInSelectedList = (championId: string) => {
    if (selectedChampions.includes(championId)) {
      setSelectedChampions(selectedChampions.filter((chId) => chId !== championId));
    } else {
      setSelectedChampions(selectedChampions.concat(championId));
    }
  };

  React.useEffect(() => {
    setSelectedNote('');
    setSelectedChampions([]);
  }, [isModalOpen]);

  return (
    <Modal
      id="championentry-modal"
      isOpen={isModalOpen}
      onRequestClose={() => {
        closeModalBox();
      }}
    >
      <form id="championentry-form">
        <Textarea
          label="Note"
          placeholder="e.g. 'Just snowball'"
          value={selectedNote}
          onChange={(e) => {
            setSelectedNote(e.target.value);
          }}
        />
        {possibleChampions &&
          Object.keys(possibleChampions).map((championKey) => {
            const championData = possibleChampions[championKey];
            const isSelected = selectedChampions.indexOf(championKey) > -1;
            return (
              <ChampionBox
                key={championData.id}
                championId={championData.id}
                isHighlighted={isSelected}
                onClick={() => toggleChampionInSelectedList(championData.id)}
              />
            );
          })}
        <Button
          type="submit"
          variant="success"
          onClick={() => {
            handleChampionEntryData(selectedChampions, selectedNote);
            closeModalBox();
          }}
        >
          Add entries!
        </Button>
      </form>
    </Modal>
  );
};

export default ChampionEntryModal;
