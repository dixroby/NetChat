import React from "react";
import { Header, Input } from "semantic-ui-react";

const SearchImput = () => {
  return (
    <Header floated="right">
      <Input
        size="mini"
        icon="search"
        name="searchTerm"
        placeholder="search messages"
      />
    </Header>
  );
};

export default SearchImput;
