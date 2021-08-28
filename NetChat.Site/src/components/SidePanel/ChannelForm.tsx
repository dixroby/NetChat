import React, { ChangeEvent, useState } from "react";
import { Button, Form, Icon, Input, Modal } from "semantic-ui-react";
import { IChannel } from "./../../models/channels";

interface IProps {
  modal: boolean;
  closeModal: () => void;
  createChanel: (channel: IChannel) => void;
}
const ChannelForm: React.FC<IProps> = ({ modal, closeModal, createChanel }) => {
  const initialChannel = {
    channelId: "",
    name: "",
    description: "",
  };
  const [channel, setChannel] = useState<IChannel>(initialChannel);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChannel({ ...channel, [event.target.name]: event.target.value });
    console.log(event.target.name, `:`, event.target.value);
  };
  const handleSubmit = () => {
    console.log(channel);
    createChanel(channel);
  };
  return (
    <Modal basic open={modal}>
      <Modal.Header>Add Channel</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <Input
              fluid
              label="Channel Name"
              onChange={handleInputChange}
              name="name"
            />
          </Form.Field>
          <Form.Field>
            <Input
              fluid
              label="Description"
              onChange={handleInputChange}
              name="description"
            />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="green" onClick={handleSubmit} inverted>
          <Icon name="checkmark" /> Add
        </Button>
        <Button basic color="red" inverted onClick={closeModal}>
          <Icon name="remove" /> Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ChannelForm;
