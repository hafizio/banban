import * as actionTypes from '../constants/taskBoardConstants';

export function addNote(text) {
  return {
    type: actionTypes.ADD_NOTE,
    text,
  };
}

export function deleteNote(id) {
  return {
    type: actionTypes.DELETE_NOTE,
    id,
  };
}
