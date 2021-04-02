/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class MessageForm extends Component {
  render() {
    return (
      <div className="input-group input-group-lg">
        <input type="text" className="form-control" placeholder="Write a message" />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button">Send</button>
        </div>
      </div>
    );
  }
}

export default MessageForm;
