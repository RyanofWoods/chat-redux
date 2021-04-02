/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel } from '../actions/index';

class Channel extends Component {
  handleClick = () => {
    this.props.selectChannel(this.props.channel);
  }

  render() {
    const { channel } = this.props;
    return (
      <li onClick={this.handleClick} >
        #{channel}
      </li>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.channel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Channel);
