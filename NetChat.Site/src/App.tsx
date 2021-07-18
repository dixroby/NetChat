import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Header, List, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  state = {
    channels: [],
  };

  componentDidMount() {
    axios.get("https://localhost:44302/api/channels").then((response) => {
      this.setState({
        channels: response.data,
      });
    });
  }
  render() {
    return (
      <div>
        <Header as="h2" icon>
          <Icon name="users" />
          NetChat
          <Header.Subheader>Chat en netcore</Header.Subheader>
        </Header>
        <List>
          {this.state.channels.map((value: any) => (
            <List.Item key={value.id}>{value.name}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;