import React, { useEffect, useState } from "react";
import { Icon, Menu } from "semantic-ui-react";
import { IChannel } from "../../models/channels";
import ChannelItem from "./ChannelItem";
import ChannelForm from "./ChannelForm";
import agent from "./../api/agent";

const Channels = () => {
  const [myChannel, setMyChannel] = useState<IChannel[]>([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    agent.Channels.list().then((response) => {
      setMyChannel(response);
    });
  }, []);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  const handleCreateChannel = (channel: IChannel) => {
    setMyChannel([...myChannel, channel]);
  };
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
      <ChannelForm
        modal={modal}
        closeModal={closeModal}
        createChanel={handleCreateChannel}
      />
    </React.Fragment>
  );
};

export default Channels;
