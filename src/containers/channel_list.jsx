/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Channel from './channel';

class ChannelList extends Component {
  render() {
    return (
      <ul className="channel-list">
        {
          this.props.channels.map((channel) => {
            return (<Channel key={channel} channel={channel} />);
          })
        }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels
  };
}

export default connect(mapStateToProps, null)(ChannelList);
