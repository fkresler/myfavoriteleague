import React from 'react';
import { Modal, Button, Input } from 'react-rainbow-components';
import { ITierListData } from '@/types/tierLists';

export type ITierListModal = {
  isModalOpen: boolean;
  initialTierListData?: ITierListData;
  handleTierListData: (name: string) => void;
  closeModalBox: () => void;
};

const TierListModal: React.FC<ITierListModal> = ({
  isModalOpen,
  initialTierListData = { name: '' },
  handleTierListData,
  closeModalBox,
}) => {
  const { name } = initialTierListData;
  const [tlName, setTlName] = React.useState<string>(name);
  const [tlNameError, setTlNameError] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    if (tlName.length === 0 || !tlName.trim()) {
      setTlNameError('This field is required');
    } else {
      setTlNameError(undefined);
    }
  }, [tlName]);

  React.useEffect(() => {
    setTlName(name);
    setTlNameError(undefined);
  }, [isModalOpen]);

  return (
    <Modal
      id="tierlist-modal"
      isOpen={isModalOpen}
      onRequestClose={() => {
        closeModalBox();
      }}
    >
      <form id="tierlist-form">
        <Input
          label="Tierlist Name"
          placeholder="e.g. 'Top Lane'"
          required
          type="text"
          error={tlNameError}
          value={tlName}
          onChange={(e) => {
            setTlName(e.target.value);
          }}
        />
        <Button
          type="submit"
          variant="success"
          onClick={() => {
            handleTierListData(tlName);
            closeModalBox();
          }}
        >
          Save Tierlist!
        </Button>
      </form>
    </Modal>
  );
};

export default TierListModal;
