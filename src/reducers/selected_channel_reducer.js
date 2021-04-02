export const SELECT_CHANNEL = 'SELECT_CHANNEL';

const selectedChannelReducer = (state, action) => {
  if (state === undefined) {
    return null;
  }

  switch (action.type) {
    case SELECT_CHANNEL:
      return action.payload;
    default:
      return state;
  }
};

export default selectedChannelReducer;
