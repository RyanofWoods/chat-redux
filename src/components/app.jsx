import React from 'react';
import ChannelList from '../containers/channel_list';
import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div className="app">
      <div className="nav-bar" />
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
