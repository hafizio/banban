import React from 'react';
import TaskBoard from '../containers/TaskBoard';

const TaskBoardView = props => {
  const reactComponent = (
    <TaskBoard {...props} />
  );
  return reactComponent;
};

export default TaskBoardView;
