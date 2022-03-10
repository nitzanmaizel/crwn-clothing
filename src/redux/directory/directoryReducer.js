import DIRECTORY_STATE from './directoryState';

const INITIAL_STATE = {
  sections: DIRECTORY_STATE,
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
