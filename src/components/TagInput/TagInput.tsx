import { Chip } from '@/src/components/Chip';
import { TextInput } from '@/src/components/Form/TextInput';
import React from 'react';
import styled from 'styled-components';

const TagContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  & > * {
    margin: 0.5rem auto;
  }
`;

export interface ITagInput {
  id: string;
  tags?: string[];
  isDisabled?: boolean;
  onTagAdd?: (newTag: string) => void;
  onTagRemove?: (removedIndex?: number) => void;
}

export const TagInput: React.FC<ITagInput> = ({ id, tags, isDisabled, onTagAdd, onTagRemove }) => {
  const [inputValue, setInputValue] = React.useState<string>('');

  const handleActionKeys = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue && onTagAdd) {
      onTagAdd(inputValue);
      setInputValue('');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentInputValue = event.target.value;
    setInputValue(currentInputValue);
  };

  const handleTagRemove = (index: number) => {
    if (onTagRemove) {
      onTagRemove(index);
    }
  };

  return (
    <div>
      {tags && (
        <TagContainer>
          {tags.map((tagValue, index) => (
            <Chip value={tagValue} onDelete={() => handleTagRemove(index)} />
          ))}
        </TagContainer>
      )}
      <TextInput
        id={id}
        isDisabled={isDisabled}
        placeholder="Press enter to add a tag"
        value={inputValue}
        onKeyPress={handleActionKeys}
        onChange={handleChange}
      />
    </div>
  );
};

export default TagInput;
