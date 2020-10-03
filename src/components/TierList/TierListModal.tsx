import React from 'react';
import { Modal, Button, Input, Select } from 'react-rainbow-components';
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
        {isCreateMode && (
          <Select
            label="Template"
            bottomHelpText="This prefills your lists so you don't have to"
            value={tlTemplate}
            options={[
              {
                label: TierListTemplate.GENERAL,
                value: TierListTemplate.GENERAL,
                disabled: false,
              },
              {
                label: TierListTemplate.TRUETIERLIST,
                value: TierListTemplate.TRUETIERLIST,
                disabled: false,
              },
              {
                label: TierListTemplate.EMPTY,
                value: TierListTemplate.EMPTY,
                disabled: false,
              },
            ]}
            onChange={(event) => {
              const eventTarget = event.target as HTMLInputElement;
              const newValue = eventTarget.value as TierListTemplate;
              setTlTemplate(newValue);
            }}
          />
        )}
        <Button
          type="submit"
          variant="success"
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
