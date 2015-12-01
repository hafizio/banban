import React, { PropTypes } from 'react';

export default class Note extends React.Component {
  render() {
    return (
      <div>{this.props.task}</div>
    )
  }
}
