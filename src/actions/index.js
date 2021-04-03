/* eslint-disable import/prefer-default-export */
// TODO: add and export your own actions
export const SELECT_CHANNEL = 'SELECT_CHANNEL';
export const SET_MESSAGES = 'SET_MESSAGES';

export function selectChannel(channel) {
  return {
    type: SELECT_CHANNEL,
    payload: channel
  };
}

export function setMessages(channel) {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const promise = fetch(url)
    .then(response => response.json());
  return {
    type: SET_MESSAGES,
    payload: promise
  };
}
