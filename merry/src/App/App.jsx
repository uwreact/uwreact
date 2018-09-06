import { connect } from 'react-redux';

import AppView from './AppView';

const mapStateToProps = state => ({ path: state.router.location.pathname });

const App = connect(mapStateToProps)(AppView);

export default App;
