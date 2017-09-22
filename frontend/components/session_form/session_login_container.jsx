import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearErrors } from '../../actions/session_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
  action: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
  formType: "login"
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
