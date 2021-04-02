/* eslint-disable import/prefer-default-export */
// TODO: add and export your own actions
import SELECT_CHANNEL from '../reducers/selected_channel_reducer';

export function selectChannel(channel) {
  return {
    type: 'SELECT_CHANNEL',
    payload: channel
  };
}
