import { connect } from 'react-redux';
import ImprovementNotes from './ImprovementNotes';
import {
  addImprovementNote,
  updateImprovementNote,
  addImprovementNoteTag,
  removeImprovementNoteTag,
  removeImprovementNote,
} from '../../actions/improvementNotesActions';

const mapStateToProps = state => ({
  improvementNotes: state.improvementNotesState.improvementNotes,
});

const mapDispatchToProps = dispatch => ({
  addImprovementNote: (title, content) => {
    dispatch(addImprovementNote(title, content));
  },
  updateImprovementNote: (noteId, title, content) => {
    dispatch(updateImprovementNote(noteId, title, content));
  },
  addImprovementNoteTag: (noteId, tag) => {
    dispatch(addImprovementNoteTag(noteId, tag));
  },
  removeImprovementNoteTag: (noteId, tag) => {
    dispatch(removeImprovementNoteTag(noteId, tag));
  },
  removeImprovementNote: (noteId) => {
    dispatch(removeImprovementNote(noteId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImprovementNotes);
