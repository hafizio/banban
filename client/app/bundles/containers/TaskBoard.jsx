import React from 'react';
import Notes from '../components/task_board/Notes';
import uuid from 'node-uuid';

export default class TaskBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      notes: this.props.tasks
    };
  }

  render() {
    const notes = this.state.notes;

    return (
      <div className="task-board">
        <button className="add-note" onClick={this.addNote}>+</button>
        <Notes
          notes={notes}
          onEdit={this.editNote}
          onDelete={this.deleteNote} />
      </div>
    );
  }

  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New task'
      }])
    });
  }

  findNote = (id) => {
    const notes = this.state.notes;
    const noteIndex = notes.findIndex((note) => note.id === id);

    if (noteIndex < 0) {
      console.warn('Failed to find note', notes, id);
    }

    return noteIndex;
  }

  editNote = (id, task) => {
    const notes = this.state.notes;
    const noteIndex = this.findNote(id);

    if (noteIndex < 0) {
      return;
    }

    notes[noteIndex].task = task;
    this.setState({notes});
  }

  deleteNote = (id) => {
    const notes = this.state.notes;
    const noteIndex = this.findNote(id);

    if (noteIndex < 0) {
      return;
    }

    this.setState({
      notes: notes.slice(0, noteIndex).concat(notes.slice(noteIndex + 1))
    });
  }
}
