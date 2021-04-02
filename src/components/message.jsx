import React from 'react';

const Message = (props) => {
  const { author, content, created_at } = props.message;
  return (<li>{author}: {content}</li>);
};

export default Message;
