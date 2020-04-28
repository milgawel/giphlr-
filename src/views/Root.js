import React, { Component } from "react";
import SearchPanel from "components/SearchPanel";
import MainTemplate from "templates/MainTemplate";

class Root extends Component {
  state = {
    searched: false,
  };

  handleInput = (item, e) => {
    e.preventDefault();
    console.log(item);
    this.setState({
      searched: true,
    });
  };

  render() {
    return (
      <MainTemplate>
        <SearchPanel
          handleInputSubmit={this.handleInput}
          searched={this.state.searched}
        />
      </MainTemplate>
    );
  }
}

export default Root;
