function computeNoteId() {
  return new Date().getTime();
}

export const addImprovementNote = () => ({
  type: 'ADD_IMPROVEMENT_NOTE',
  payload: {
    id: computeNoteId(),
    content: '',
  },
});

export const updateImprovementNote = (noteId, content) => ({
  type: 'UPDATE_IMPROVEMENT_NOTE',
  payload: {
    id: noteId,
    content,
  },
});

export const toggleImprovementNoteAsCurrentObjective = noteId => ({
  type: 'TOGGLE_IMPROVEMENT_NOTE_AS_OBJECTIVE',
  payload: {
    id: noteId,
  },
});

export const toggleImprovementNoteTag = (noteId, tag) => ({
  type: 'TOGGLE_IMPROVEMENT_NOTE_TAG',
  payload: {
    id: noteId,
    tag: tag.toLowerCase(),
  },
});

export const toggleImprovementNotePlayingAsTag = (noteId, playingAsTag) => ({
  type: 'TOGGLE_IMPROVEMENT_NOTE_PLAYING_AS_TAG',
  payload: {
    id: noteId,
    playingAsTag,
  },
});

export const toggleImprovementNotePlayingAgainstTag = (noteId, playingAgainstTag) => ({
  type: 'TOGGLE_IMPROVEMENT_NOTE_PLAYING_AGAINST_TAG',
  payload: {
    id: noteId,
    playingAgainstTag,
  },
});

export const removeImprovementNote = noteId => ({
  type: 'REMOVE_IMPROVEMENT_NOTE',
  payload: {
    id: noteId,
  },
});
