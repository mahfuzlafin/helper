import {connect} from 'react-redux';

const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser,
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
