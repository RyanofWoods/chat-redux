import { SET_MESSAGES } from '../actions/index';

const messagesReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case SET_MESSAGES:
      return action.payload.messages;
    default:
      return state;
  }
};

export default messagesReducer;
