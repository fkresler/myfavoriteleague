const initialState = {
    improvementNotes: []
};

const improvementNotesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_IMPROVEMENT_NOTE": {
            let addedImprovementNote = state.improvementNotes.concat(
                action.payload
            );
            return {
                ...state,
                improvementNotes: addedImprovementNote
            };
        }
        case "UPDATE_IMPROVEMENT_NOTE": {
            let previousImprovementNote = state.improvementNotes.filter(
                note => {
                    return note.id === action.payload.id;
                }
            );
            let copiedImprovementNote = {...previousImprovementNote};
            copiedImprovementNote.title = action.payload.title;
            copiedImprovementNote.content = action.payload.content;
            previousImprovementNote = copiedImprovementNote;
            return {
                ...state
            };
        }
        case "ADD_IMPROVEMENT_NOTE_TAG": {
            let previousImprovementNote = state.improvementNotes.filter(
                note => {
                    return note.id === action.payload.id;
                }
            );
            let copiedImprovementNote = {...previousImprovementNote};
            copiedImprovementNote.taglist = copiedImprovementNote.taglist.concat(
                action.payload.tag
            );
            previousImprovementNote = copiedImprovementNote;
            return {
                ...state
            };
        }
        case "REMOVE_IMPROVEMENT_NOTE_TAG": {
            let previousImprovementNote = state.improvementNotes.filter(
                note => {
                    return note.id === action.payload.id;
                }
            );
            let copiedImprovementNote = {...previousImprovementNote};
            copiedImprovementNote.taglist = copiedImprovementNote.taglist.filter(
                tag => {
                    return tag !== action.payload.tag;
                }
            );
            return {
                ...state
            };
        }
        case "REMOVE_IMPROVEMENT_NOTE": {
            let copiedImprovementNotes = {...state.improvementNotes};
            copiedImprovementNotes.filter(note => {
                return note.id !== action.payload.id;
            });
            return {
                ...state,
                improvementNotes: copiedImprovementNotes
            };
        }
        default:
            return {...state};
    }
};

export default improvementNotesReducer;
