import { connect } from 'react-redux';
import ImprovementNotes from './ImprovementNotes';
import {
  addImprovementNote,
} from '../../actions/improvementNotesActions';

const mapStateToProps = state => ({
  improvementNotes: state.improvementNotesState.improvementNotes,
});

const mapDispatchToProps = dispatch => ({
  addImprovementNote: (title, content) => {
    dispatch(addImprovementNote(title, content));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImprovementNotes);
