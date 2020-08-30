import React from 'react';
import { Modal } from 'react-rainbow-components';
import ChampionSelect from '@/components/ChampionSelect';

export type IChampionListEntryModal = {
  isModalOpen: boolean;
  handleChampionEntryData: (selectedChampions: string[], selectedNote: string) => void;
  closeModalBox: () => void;
};

const ChampionListEntryModal: React.FC<IChampionListEntryModal> = ({
  isModalOpen,
  handleChampionEntryData,
  closeModalBox,
}) => {
  const [selectedChampions, setSelectedChampions] = React.useState<string[]>([]);
  const [selectedNote, setSelectedNote] = React.useState<string>('');

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
      <ChampionSelect
        showFilter
        onSelectionChange={(selection) => setSelectedChampions(selection)}
        onSubmit={() => {
          handleChampionEntryData(selectedChampions, selectedNote);
          closeModalBox();
        }}
      />
    </Modal>
  );
};

export default ChampionListEntryModal;
