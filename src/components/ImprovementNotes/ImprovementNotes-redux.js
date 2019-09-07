import { connect } from 'react-redux';
import {
  addImprovementNote,
} from 'Actions/improvementNotesActions';
import { IMPROVEMENT_NOTES_DATA_NAME } from 'Reducers';
import ImprovementNotes from './ImprovementNotes';

const mapStateToProps = state => ({
  improvementNotes: state.improvementNotesData[IMPROVEMENT_NOTES_DATA_NAME],
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
