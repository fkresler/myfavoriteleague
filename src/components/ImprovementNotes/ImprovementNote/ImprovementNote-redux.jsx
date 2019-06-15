import { connect } from 'react-redux';
import ImprovementNote from './ImprovementNote';
import {
  updateImprovementNote,
  removeImprovementNote,
} from '../../../actions/improvementNotesActions';

const mapDispatchToProps = dispatch => ({
  updateImprovementNote: (noteId, content) => {
    dispatch(updateImprovementNote(noteId, content));
  },
  removeImprovementNote: (noteId) => {
    dispatch(removeImprovementNote(noteId));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(ImprovementNote);
