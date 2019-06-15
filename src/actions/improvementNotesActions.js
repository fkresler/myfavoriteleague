export function addImprovementNote(content) {
  const computedNoteId = new Date().getTime();
  return {
    type: 'ADD_IMPROVEMENT_NOTE',
    payload: {
      id: computedNoteId,
      content,
    },
  };
}

export function updateImprovementNote(noteId, content) {
  const updatedNoteId = new Date().getTime();
  return {
    type: 'UPDATE_IMPROVEMENT_NOTE',
    payload: {
      id: noteId,
      updatedId: updatedNoteId,
      content,
    },
  };
}

export function toggleImprovementNoteAsCurrentObjective(noteId) {
  return {
    type: 'TOGGLE_IMPROVEMENT_NOTE_AS_OBJECTIVE',
    payload: {
      id: noteId,
    },
  };
}

export function addImprovementNoteTag(noteId, tag) {
  return {
    type: 'ADD_IMPROVEMENT_NOTE_TAG',
    payload: {
      id: noteId,
      tag: tag.toLowerCase(),
    },
  };
}

export function removeImprovementNoteTag(noteId, tag) {
  return {
    type: 'REMOVE_IMPROVEMENT_NOTE_TAG',
    payload: {
      id: noteId,
      tag: tag.toLowerCase(),
    },
  };
}

export function toggleImprovementNotePlayingAsTag(noteId, playingAsTag) {
  return {
    type: 'TOGGLE_IMPROVEMENT_NOTE_PLAYING_AS_TAG',
    payload: {
      id: noteId,
      playingAsTag,
    },
  };
}

export function toggleImprovementNotePlayingAgainstTag(noteId, playingAgainstTag) {
  return {
    type: 'TOGGLE_IMPROVEMENT_NOTE_PLAYING_AGAINST_TAG',
    payload: {
      id: noteId,
      playingAgainstTag,
    },
  };
}

export function removeImprovementNote(noteId) {
  return {
    type: 'REMOVE_IMPROVEMENT_NOTE',
    payload: {
      id: noteId,
    },
  };
}
