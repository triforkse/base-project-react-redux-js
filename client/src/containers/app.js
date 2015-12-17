import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

class App extends React.Component {

  static propTypes = {
    actions: React.PropTypes.object,
    apiStatus: React.PropTypes.object,
    foo: React.PropTypes.object,
  };

  render() {
    return (
      <div>
        <div>
          <h1>Welcome to your new project!</h1>
          <button onClick={this.props.actions.checkApi}>Click to get API status</button>
          <p>API status is: {this.props.apiStatus.status}</p>
          <label htmlFor="fooInput">Enter some foo:</label><input ref="fooInput" name="fooInput" value={this.props.foo.value}/>
          <button onClick={this.props.actions.doFoo.bind(this, 'bar')}>Do foo</button>
          <button onClick={this.props.actions.doAsyncFoo.bind(this, 'bar')}>Do asyncFoo</button>
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
