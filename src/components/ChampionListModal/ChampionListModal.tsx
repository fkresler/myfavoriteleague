import React from 'react';
import { Modal, Button, Input, Textarea } from 'react-rainbow-components';
import { IChampionListData } from '@/types/tierLists';

export type IChampionListModal = {
  isModalOpen: boolean;
  initialChampionListData?: IChampionListData;
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
    setClName(name);
    setClNameError(undefined);
    setClDescription(description);
  }, [isModalOpen]);

  return (
    <Modal
      id="championlist-modal"
      isOpen={isModalOpen}
      onRequestClose={() => {
        closeModalBox();
      }}
    >
      <form id="championlist-form">
        <Input
          label="Name"
          placeholder="e.g. 'S-Tier'"
          required
          type="text"
          error={clNameError}
          value={clName}
          onChange={(e) => {
            setClName(e.target.value);
          }}
        />
        <Textarea
          label="Description"
          placeholder="e.g. 'My absolute best stuff!'"
          value={clDescription}
          onChange={(e) => {
            setClDescription(e.target.value);
          }}
        />
        <Button
          type="submit"
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
