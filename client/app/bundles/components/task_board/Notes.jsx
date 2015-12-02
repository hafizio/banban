import React, { PropTypes } from 'react';
import Note from './Note';
import _ from 'lodash';

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const notes = this.props.notes;

    return (
      <ul className="notes">{notes.map(this.renderNote)}</ul>
    );
  }

  renderNote(note) {
    return (
      <li key={`note${note.id}`}>
        <Note task={note.task} />
      </li>
    );
  }
}

