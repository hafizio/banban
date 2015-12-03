import React from 'react';
import Note from './Note';

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

  renderNote = (note) => {
    return (
      <li className="note" key={note.id}>
        <Note
          task={note.task}
          onEdit={this.props.onEdit.bind(null, note.id)}
          onDelete={this.props.onDelete.bind(null, note.id)} />
      </li>
    );
  }
}

