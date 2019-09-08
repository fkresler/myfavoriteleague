import { connect } from 'react-redux';
import {
  updateImprovementNote,
  toggleImprovementNoteAsCurrentObjective,
  toggleImprovementNoteTag,
  toggleImprovementNotePlayingAsTag,
  toggleImprovementNotePlayingAgainstTag,
  removeImprovementNote,
} from 'Actions/improvementNotesActions';
import ImprovementNote from './ImprovementNote';

const mapDispatchToProps = dispatch => ({
  updateImprovementNote: (noteId, content) => {
    dispatch(updateImprovementNote(noteId, content));
  },
  toggleImprovementNoteAsCurrentObjective: (noteId) => {
    dispatch(toggleImprovementNoteAsCurrentObjective(noteId));
  },
  toggleImprovementNoteTag: (noteId, tag) => {
    dispatch(toggleImprovementNoteTag(noteId, tag));
  },
  toggleImprovementNotePlayingAsTag: (noteId, playingAsTag) => {
    dispatch(toggleImprovementNotePlayingAsTag(noteId, playingAsTag));
  },
  toggleImprovementNotePlayingAgainstTag: (noteId, playingAgainstTag) => {
    dispatch(toggleImprovementNotePlayingAgainstTag(noteId, playingAgainstTag));
  },
  removeImprovementNote: (noteId) => {
    dispatch(removeImprovementNote(noteId));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(ImprovementNote);