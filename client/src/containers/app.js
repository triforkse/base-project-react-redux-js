import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

class App extends React.Component {

  static propTypes = {
    actions: React.PropTypes.object,
    apiStatus: React.PropTypes.object,
  };

  render() {
    return (
      <div>
        <div>
          <h1>Welcome to your new project!</h1>
          <button onClick={this.props.actions.checkApi}>Click to get API status</button>
          <p>API status is: {this.props.apiStatus.status}</p>
        </div>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(
  state => state,
  mapDispatchToProps
)(App);
