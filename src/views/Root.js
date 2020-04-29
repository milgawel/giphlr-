import React, { Component } from "react";
import SearchPanel from "components/SearchPanel";
import MainTemplate from "templates/MainTemplate";
import Navigation from "components/Navigation";
import CardsView from "components/CardsView";

class Root extends Component {
  state = {
    searched: false,
    cards: [],
  };

  handleInput = (e, input) => {
    e.preventDefault();
    this.setState({
      searched: true,
    });
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=OFZBS28HtstfZcpRMxV1XunRnqoGMT0V&q=${input}&limit=100&offset=0&rating=G&lang=en`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          cards: data.data,
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidUpdate() {
    console.log(`[component did update] ${this.state.input}`);
  }

  render() {
    return (
      <MainTemplate>
        <Navigation />
        <SearchPanel
          handleInputSubmit={this.handleInput}
          searched={this.state.searched}
        />
        {this.state.searched ? <CardsView>{this.state.cards}</CardsView> : null}
      </MainTemplate>
    );
  }
}

export default Root;
