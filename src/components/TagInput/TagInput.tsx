import React from 'react';
import styled from 'styled-components';

const TagInput: React.FC<{
  values?: string[];
  isDisabled?: boolean;
  onTagAdd?: (newTag: string[]) => void;
  onTagRemove?: (removedIndex?: number) => void;
}> = ({ values = [], isDisabled = false, onTagAdd, onTagRemove }) => {
  const [tags, setTags] = React.useState<string[]>(values);
  const [inputValue, setInputValue] = React.useState<string>('');

  const handleActionKeys = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue) {
      setTags([...tags, inputValue]);
      setInputValue('');
      if (onTagAdd) {
        onTagAdd(tags);
      }
    }
    if (event.key === 'Backspace' && !inputValue && tags.length > 0) {
      const removedTagIndex = tags.length - 1;
      setTags(tags.slice(0, -1));
      if (onTagRemove) {
        onTagRemove(removedTagIndex);
      }
    }
  };

  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const currentInputValue = event.target.value;
    if (currentInputValue) {
      setInputValue(currentInputValue);
    }
  }, []);

  return (
    <div>
      <div>
        {tags.map((tagElement) => (
          <div>{tagElement}</div>
        ))}
      </div>
      {isDisabled || (
        <input
          type="text"
          placeholder="Your next tag ..."
          value={inputValue}
          onKeyDown={handleActionKeys}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default TagInput;
