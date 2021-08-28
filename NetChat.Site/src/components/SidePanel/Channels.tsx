import Axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Button, Form, Icon, Input, Menu, Modal } from "semantic-ui-react";
import { IChannel } from "../../models/channels";
import ChannelItem from "./ChannelItem";

const Channels = () => {
  const [myChannel, setMyChannel] = useState<IChannel[]>([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    Axios.get<IChannel[]>("https://localhost:44302/api/Channels")
      .then((resp) => {
        setMyChannel(resp.data);
      })
      .catch();
  }, []);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const displayChannels = (channels: IChannel[]) => {
    return (
      channels.length > 0 &&
      channels.map((channel, i) => <ChannelItem channel={channel} key={i} />)
    );
  };

  return (
    <React.Fragment>
      <Menu.Menu style={{ paddingBotton: "2em" }}>
        <Menu.Item>
          <span>
            <Icon name="exchange" /> CHANNELS{" "}
          </span>
          ({myChannel.length})
          <Icon name="add" onClick={openModal} />
        </Menu.Item>
        {displayChannels(myChannel)}
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
          <Button basic color="red" inverted onClick={closeModal}>
            <Icon name="remove" /> Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    </React.Fragment>
  );
};

export default Channels;
