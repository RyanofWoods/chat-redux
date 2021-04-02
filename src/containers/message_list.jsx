/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from '../components/message';

class MessageList extends Component {
  render() {
    return (
      <div>
        <div className="message-list-header">Channel: #general</div>
        <ul className="message-list">
          {
            this.props.messages.map((message) => {
              return (<Message key={message} message={message} />);
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps, null)(MessageList);
