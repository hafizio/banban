import React, { PropTypes } from 'react';
import HelloWorldWidget from '../components/HelloWorldWidget';
import _ from 'lodash';

export default class HelloWorld extends React.Component {
  constructor(props, context) {
    super(props, context);
    _.bindAll(this, '_updateName');
  }

  static propTypes = {
    name: PropTypes.string.isRequired, 
  }

  state = {name: this.props.name}

  _updateName(name) {
    this.setState({name: name});
  }

  render() {
    return (
      <div>
        <HelloWorldWidget name={this.state.name} _updateName={this._updateName} />
      </div>
    );
  }
}
