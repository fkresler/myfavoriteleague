const initialState = {
  improvementNotes: [],
};

const improvementNotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_IMPROVEMENT_NOTE': {
      const addedImprovementNote = state.improvementNotes.concat(
        action.payload,
      );
      return {
        ...state,
        improvementNotes: addedImprovementNote,
      };
    }
    case 'UPDATE_IMPROVEMENT_NOTE': {
      const previousImprovementNote = state.improvementNotes.find(note => note.id === action.payload.id);
      const filteredImprovementNotes = state.improvementNotes.filter(
        note => note.id !== action.payload.id,
      );
      const newImprovementNote = { ...previousImprovementNote };
      newImprovementNote.title = action.payload.title;
      newImprovementNote.content = action.payload.content;
      const newImprovementNotes = filteredImprovementNotes.concat(
        newImprovementNote,
      );
      return {
        ...state,
        improvementNotes: newImprovementNotes,
      };
    }
    case 'ADD_IMPROVEMENT_NOTE_TAG': {
      let previousImprovementNote = state.improvementNotes.filter(
        note => note.id === action.payload.id,
      );
      const copiedImprovementNote = { ...previousImprovementNote };
      copiedImprovementNote.taglist = copiedImprovementNote.taglist.concat(
        action.payload.tag,
      );
      previousImprovementNote = copiedImprovementNote;
      return {
        ...state,
      };
    }
    case 'REMOVE_IMPROVEMENT_NOTE_TAG': {
      const previousImprovementNote = state.improvementNotes.filter(
        note => note.id === action.payload.id,
      );
      const copiedImprovementNote = { ...previousImprovementNote };
      copiedImprovementNote.taglist = copiedImprovementNote.taglist.filter(
        tag => tag !== action.payload.tag,
      );
      return {
        ...state,
      };
    }
    case 'REMOVE_IMPROVEMENT_NOTE': {
      const afterRemoveImprovementNotes = state.improvementNotes.filter(
        note => note.id !== action.payload.id,
      );
      return {
        ...state,
        improvementNotes: afterRemoveImprovementNotes,
      };
    }
    default:
      return { ...state };
  }
};

export default improvementNotesReducer;
