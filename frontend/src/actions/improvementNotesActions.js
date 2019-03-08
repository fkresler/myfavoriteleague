export function addImprovementNote(title, content) {
    let computedNoteId = new Date().getTime();
    return {
        type: "ADD_IMPROVEMENT_NOTE",
        payload: {
            id: computedNoteId,
            title: title,
            content: content,
            taglist: []
        }
    };
}

export function updateImprovementNote(noteId, title, content) {
    return {
        type: "UPDATE_IMPROVEMENT_NOTE",
        payload: {
            id: noteId,
            title: title,
            content: content
        }
    };
}

export function addImprovementNoteTag(noteId, tag) {
    return {
        type: "ADD_IMPROVEMENT_NOTE_TAG",
        payload: {
            id: noteId,
            tag: tag
        }
    };
}

export function removeImprovementNoteTag(noteId, tag) {
    return {
        type: "REMOVE_IMPROVEMENT_NOTE_TAG",
        payload: {
            id: noteId,
            tag: tag
        }
    };
}

export function removeImprovementNote(noteId) {
    return {
        type: "REMOVE_IMPROVEMENT_NOTE",
        payload: {
            id: noteId
        }
    };
}
