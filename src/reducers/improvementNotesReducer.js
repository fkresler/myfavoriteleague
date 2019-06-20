const initialState = {
  improvementNotes: [],
};

function addOrRemoveTagImmutable(tagArr, tag) {
  if (tagArr.includes(tag)) {
    return tagArr.filter(i => i !== tag);
  }
  return [...tagArr, tag];
}

const improvementNotesReducer = (state = initialState, action) => {
  const toBeUpdatedImprovementNote = state.improvementNotes.find(
    note => note.id === action.payload.id,
  );
  const filteredImprovementNotes = state.improvementNotes.filter(
    note => note.id !== action.payload.id,
  );
  switch (action.type) {
    case 'ADD_IMPROVEMENT_NOTE': {
      const newImprovementNote = {
        ...action.payload,
        tags: [],
        playingAs: [],
        playingAgainst: [],
        isCurrentObjective: false,
      };
      return {
        ...state,
        improvementNotes: filteredImprovementNotes.concat(newImprovementNote),
      };
    }
    case 'UPDATE_IMPROVEMENT_NOTE': {
      const newImprovementNote = {
        ...toBeUpdatedImprovementNote,
        ...action.payload,
      };
      return {
        ...state,
        improvementNotes: filteredImprovementNotes.concat(newImprovementNote),
      };
    }
    case 'TOGGLE_IMPROVEMENT_NOTE_AS_OBJECTIVE': {
      const newImprovementNote = {
        ...toBeUpdatedImprovementNote,
        isCurrentObjective: !toBeUpdatedImprovementNote.isCurrentObjective,
      };
      return {
        ...state,
        improvementNotes: filteredImprovementNotes.concat(newImprovementNote),
      };
    }
    case 'TOGGLE_IMPROVEMENT_NOTE_TAG': {
      const toBeToggledTag = action.payload.tag;
      const updatedTagList = addOrRemoveTagImmutable(
        toBeUpdatedImprovementNote.tags, toBeToggledTag,
      );
      const newImprovementNote = {
        ...toBeUpdatedImprovementNote,
        tags: updatedTagList,
      };
      return {
        ...state,
        improvementNotes: filteredImprovementNotes.concat(newImprovementNote),
      };
    }
    case 'TOGGLE_IMPROVEMENT_NOTE_PLAYING_AS_TAG': {
      const toBeToggledTag = action.payload.playingAsTag;
      const updatedTagList = addOrRemoveTagImmutable(
        toBeUpdatedImprovementNote.playingAs, toBeToggledTag,
      );
      const newImprovementNote = {
        ...toBeUpdatedImprovementNote,
        playingAs: updatedTagList,
      };
      return {
        ...state,
        improvementNotes: filteredImprovementNotes.concat(newImprovementNote),
      };
    }
    case 'TOGGLE_IMPROVEMENT_NOTE_PLAYING_AGAINST_TAG': {
      const toBeToggledTag = action.payload.playingAgainst;
      const updatedTagList = addOrRemoveTagImmutable(
        toBeUpdatedImprovementNote.playingAgainst, toBeToggledTag,
      );
      const newImprovementNote = {
        ...toBeUpdatedImprovementNote,
        playingAgainst: updatedTagList,
      };
      return {
        ...state,
        improvementNotes: filteredImprovementNotes.concat(newImprovementNote),
      };
    }
    case 'REMOVE_IMPROVEMENT_NOTE': {
      return {
        ...state,
        improvementNotes: filteredImprovementNotes,
      };
    }
    default:
      return { ...state };
  }
};

export default improvementNotesReducer;
