import { connect } from 'react-redux';
import ImprovementNotes from './ImprovementNotes';
import { IMPROVEMENT_NOTES_DATA_NAME } from '../../Reducers';
import {
  addImprovementNote,
} from '../../Actions/improvementNotesActions';

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
