import React from 'react';
import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';
import { TextInput } from '@/components/Input/TextInput';
import { ChampionListData } from '@/types';

export type IChampionListModal = {
  isModalOpen: boolean;
  initialChampionListData?: ChampionListData;
  handleChampionListData: (name: string, description: string) => void;
  closeModalBox: () => void;
};

const ChampionListModal: React.FC<IChampionListModal> = ({
  isModalOpen,
  initialChampionListData = { name: '', description: '' },
  handleChampionListData,
  closeModalBox,
}) => {
  const { name, description } = initialChampionListData;
  const [clName, setClName] = React.useState<string>(name);
  const [clNameError, setClNameError] = React.useState<string | undefined>(undefined);
  const [clDescription, setClDescription] = React.useState<string>(description);

  React.useEffect(() => {
    if (clName.length === 0 || !clName.trim()) {
      setClNameError('This field is required');
    } else {
      setClNameError(undefined);
    }
  }, [clName]);

  React.useEffect(() => {
    setClNameError(undefined);
  }, [name, description, isModalOpen]);

  return (
    <Modal
      size="huge"
      isOpen={isModalOpen}
      onRequestClose={() => {
        closeModalBox();
      }}
    >
      <form id="championlist-form">
        <TextInput
          label="Name"
          placeholder="e.g. 'S-Tier'"
          value={clName}
          onChange={(e) => {
            setClName(e.target.value);
          }}
        />
        <TextInput
          label="Description"
          placeholder="e.g. 'My absolute best stuff!'"
          value={clDescription}
          onChange={(e) => {
            setClDescription(e.target.value);
          }}
        />
        <Button
          variant="success"
          onClick={() => {
            handleChampionListData(clName, clDescription);
            closeModalBox();
          }}
        >
          Save Championlist!
        </Button>
      </form>
    </Modal>
  );
};

export default ChampionListModal;
