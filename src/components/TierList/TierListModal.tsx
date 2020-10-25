import React from 'react';
import { Modal } from '@/components/Modal';
import { Button } from '@/components/Button';
import { TextInput, Select } from '@/components/Form';
import { TierListData, TierListTemplate } from '@/types';

export type ITierListModal = {
  isModalOpen: boolean;
  initialTierListData?: TierListData;
  isCreateMode?: boolean;
  handleTierListData: (name: string, template?: TierListTemplate) => void;
  closeModalBox: () => void;
};

const TierListModal: React.FC<ITierListModal> = ({
  isModalOpen,
  initialTierListData = { name: '' },
  isCreateMode,
  handleTierListData,
  closeModalBox,
}) => {
  const { name } = initialTierListData;
  const [tlName, setTlName] = React.useState<string>(name);
  const [tlNameError, setTlNameError] = React.useState<string | undefined>(undefined);
  const [tlTemplate, setTlTemplate] = React.useState<TierListTemplate>(TierListTemplate.GENERAL);

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
  }, [isModalOpen, name]);

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => {
        closeModalBox();
      }}
    >
      <form id="tierlist-form">
        <TextInput
          id="tierlist-name"
          label="Tierlist Name"
          placeholder="e.g. 'Top Lane'"
          isRequired
          value={tlName}
          onChange={(e) => {
            setTlName(e.target.value);
          }}
        />
        {isCreateMode && (
          <Select
            selectedId={tlTemplate}
            options={[
              {
                id: TierListTemplate.GENERAL,
                description: TierListTemplate.GENERAL,
              },
              {
                id: TierListTemplate.TRUETIERLIST,
                description: TierListTemplate.TRUETIERLIST,
              },
              {
                id: TierListTemplate.EMPTY,
                description: TierListTemplate.EMPTY,
              },
            ]}
            onChange={(id) => {
              setTlTemplate(id as TierListTemplate);
            }}
          />
        )}
        <Button
          variant="constructive"
          onClick={() => {
            handleTierListData(tlName, tlTemplate);
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
