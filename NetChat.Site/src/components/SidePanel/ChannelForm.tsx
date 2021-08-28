import React from "react";
import { Button, Form, Icon, Input, Modal } from "semantic-ui-react";

interface IProps {
  modal: boolean;
  closeModal: () => void;
}
const ChannelForm: React.FC<IProps> = ({ modal, closeModal }) => {
  return (
    <Modal basic open={modal}>
      <Modal.Header>Add Channel</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <Input fluid label="Channel Name" name="ChannelName" />
          </Form.Field>
          <Form.Field>
            <Input fluid label="Description" name="ChannelDescription" />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="green" inverted>
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
