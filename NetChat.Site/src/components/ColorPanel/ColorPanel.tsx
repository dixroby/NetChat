import React from "react";
import { Button, Divider, Sidebar, Menu } from "semantic-ui-react";

const ColorPanel = () => {
  return (
    <Sidebar
      as={Menu}
      icon="labeled"
      inverted
      vertical
      visible
      width="very thin"
    >
      <Divider />
      <Button icon="add" side="small" color="blue" />
    </Sidebar>
  );
};
export default ColorPanel;
