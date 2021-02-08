import { Chip } from '@/components/Chip';
import { TextInput } from '@/components/Form/TextInput';
import React from 'react';
import styled from 'styled-components';

const TagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  & > * {
    margin: 0.25rem;
  }
`;

const InputSpacing = styled.div`
  display: block;
  margin: 1rem;
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
      <InputSpacing>
        <TextInput
          id={id}
          label="Enter your tags"
          isDisabled={isDisabled}
          placeholder="Press enter to add a tag"
          value={inputValue}
          onKeyPress={handleActionKeys}
          onChange={handleChange}
        />
      </InputSpacing>
      {tags && (
        <TagContainer>
          {tags.map((tagValue, index) => (
            <Chip
              key={tagValue}
              value={tagValue}
              isDisabled={isDisabled}
              onDelete={() => handleTagRemove(index)}
            />
          ))}
        </TagContainer>
      )}
    </div>
  );
};

export default TagInput;
