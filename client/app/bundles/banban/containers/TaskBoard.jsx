import React, { PropTypes } from 'react';
import Note from '../components/Note';
import uuid from 'node-uuid';
import _ from 'lodash';

export default class TaskBoard extends React.Component {
  constructor(props) {
    super(props);
    _.bindAll(this, 'addNote');
    this.state = { notes: this.props.tasks };
  }

  render() {
    const notes = this.state.notes;

    return (
      <div>
        <button className="add-note" onClick={this.addNote}>+</button>
        <ul className="notes">{notes.map(this.renderNote)}</ul>
      </div>
    );
  }

  addNote() {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New task'
      }])
    });
  }

  renderNote(note) {
    return (
      <li key={`note${note.id}`}>
        <Note task={note.task} />
      </li>
    );
  }
}
