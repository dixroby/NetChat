import React from "react";
import { Comment, Segment } from "semantic-ui-react";
import MessagesHeader from "./MessagesHeader";
import MessageForm from './MessageForm';

const Messages = () => {
  return (
    <React.Fragment>
      {/* header */}
      <MessagesHeader />
      <Segment>
        <Comment.Group></Comment.Group>
      </Segment>
      <MessageForm/>
    </React.Fragment>
  );
};

export default Messages;
