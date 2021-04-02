/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from '../components/message';

class MessageList extends Component {
  render() {
    return (
      <ul className="message-list">
        {
          this.props.messages.map((message) => {
            return (<Message key={message} message={message} />);
          })
        }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps, null)(MessageList);
