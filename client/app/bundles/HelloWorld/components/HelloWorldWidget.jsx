import React, { PropTypes } from 'react';
import _ from 'lodash';

export default class HelloWorldWidget extends React.Component {
  constructor(props, context) {
    super(props, context);
    _.bindAll(this, '_handleChange');
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    _updateName: PropTypes.func.isRequired,
  };

  _handleChange(e) {
    const name = e.target.value;
    this.props._updateName(name);
  }

  render() {
    return (
      <div>
        <h3>
          Hello, {this.props.name}!
        </h3>
        <p>
          Say hello to:
          <input type="text" value={this.props.name} onChange={this._handleChange} />
        </p>
      </div>
    );
  }
}
