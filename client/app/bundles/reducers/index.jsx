import taskBoardReducer from './taskBoardReducer';
import { $$initialState as $$taskBoardState } from './taskBoardReducer';

export default {
  $$taskBoardStore: taskBoardReducer,
};

export const initalStates = {
  $$taskBoardState,
};

