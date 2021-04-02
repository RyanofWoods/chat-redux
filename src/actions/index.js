/* eslint-disable import/prefer-default-export */
// TODO: add and export your own actions

export function selectChannel(channel) {
  return {
    type: 'SELECT_CHANNEL',
    payload: channel
  };
}
