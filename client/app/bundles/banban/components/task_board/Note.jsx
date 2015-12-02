import React, { PropTypes } from 'react';
import _ from 'lodash';

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    _.bindAll(this, ['renderEdit', 'renderTask', 'edit', 'checkEnter', 'finishEdit']);

    this.state = {
      editing: false
    };
  }

  render() {
    const editing = this.state.editing;

    return (
      <div>
        {editing ? this.renderEdit() : this.renderTask()}
      </div>
    );
  }

  renderEdit() {
    return (
      <input type="text" value={this.props.task} onBlur={this.finishEdit} onKeyPress={this.checkEnter} />
    );
  }

  renderTask() {
    return (
      <div onClick={this.edit}>{this.props.task}</div>
    );
  }

  edit() {
    this.setState({
      editing: true
    });
  }

  checkEnter(e) {
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  }

  finishEdit(e) {
    this.props.onEdit(e.target.value);

    this.setState({
      editing: false,
    });
  }
}
