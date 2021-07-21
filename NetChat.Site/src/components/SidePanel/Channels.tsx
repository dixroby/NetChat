import React, { Component } from "react";
import { Button, Form, Icon, Input, Menu, Modal } from "semantic-ui-react";

class Channels extends Component {
  state = {
    channels: [],
    modal: false,
  };
  openModal = () => this.setState({ modal: true });
  closeModal = () => this.setState({ modal: false });
  render() {
    const { channels, modal } = this.state;
    return (
      <React.Fragment>
        <Menu.Menu style={{ paddingBotton: "2em" }}>
          <Menu.Item>
            <span>
              <Icon name="exchange" /> CHANNELS{" "}
            </span>
            ({channels.length})
            <Icon name="add" onClick={this.openModal} />
          </Menu.Item>
        </Menu.Menu>
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
            <Button basic color="red" inverted onClick={this.closeModal}>
              <Icon name="remove" /> Cancel
            </Button>
          </Modal.Actions>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Channels;
