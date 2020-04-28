import React, { Component } from "react";
import SearchPanel from "components/SearchPanel";
import MainTemplate from "templates/MainTemplate";
import Navigation from "components/Navigation";

class Root extends Component {
  state = {
    input: "",
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
        <Navigation />
        <SearchPanel
          handleInputSubmit={this.handleInput}
          searched={this.state.searched}
        />
      </MainTemplate>
    );
  }
}

export default Root;
