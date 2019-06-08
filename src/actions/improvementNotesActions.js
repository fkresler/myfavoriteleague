export function addImprovementNote(title, content) {
  const computedNoteId = new Date().getTime();
  return {
    type: 'ADD_IMPROVEMENT_NOTE',
    payload: {
      id: computedNoteId,
      title,
      content,
      taglist: [],
    },
  };
}

export function updateImprovementNote(noteId, title, content) {
  return {
    type: 'UPDATE_IMPROVEMENT_NOTE',
    payload: {
      id: noteId,
      title,
      content,
    },
  };
}

export function addImprovementNoteTag(noteId, tag) {
  return {
    type: 'ADD_IMPROVEMENT_NOTE_TAG',
    payload: {
      id: noteId,
      tag,
    },
  };
}

export function removeImprovementNoteTag(noteId, tag) {
  return {
    type: 'REMOVE_IMPROVEMENT_NOTE_TAG',
    payload: {
      id: noteId,
      tag,
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
