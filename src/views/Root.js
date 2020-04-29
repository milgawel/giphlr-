import React, { Component } from "react";
import SearchPanel from "components/SearchPanel";
import MainTemplate from "templates/MainTemplate";
import Navigation from "components/Navigation";
import CardsView from "components/CardsView";
import InfiniteScroll from "react-infinite-scroller";
import styled from "styled-components";

const Loader = styled.div`
  position: fixed;
  width: 600px;
  height: 200px;
  bottom: 20px;
  left: 45%;
  background-color: purple;
`;

class Root extends Component {
  state = {
    input: "",
    searched: false,
    offset: 0,
    cards: [],
    hasMore: true,
  };

  handleInput = (e, input) => {
    e.preventDefault();
    this.setState({
      searched: true,
      input,
    });
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=OFZBS28HtstfZcpRMxV1XunRnqoGMT0V&q=${input}&limit=50&offset=0&rating=G&lang=en`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.data);
        this.setState({
          cards: data.data,
        });
      })
      .catch((err) => console.log(err));
  };

  renderMoreContent = (input) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=OFZBS28HtstfZcpRMxV1XunRnqoGMT0V&q=${input}&limit=50&offset=${
        this.state.offset + 50
      }&rating=G&lang=en`
    )
      .then((response) => response.json())
      .then((data) => {
        const newArray = this.state.cards.concat(data.data);
        const newOffset = this.state.offset + 50;
        this.setState({
          cards: newArray,
          offset: newOffset,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <MainTemplate>
        <Navigation />
        <SearchPanel
          handleInputSubmit={this.handleInput}
          searched={this.state.searched}
        />
        {this.state.searched ? (
          <InfiniteScroll
            pageStart={0}
            loadMore={() => {
              if (window.pageYOffset > 2000) {
                this.renderMoreContent(this.state.input);
              }
            }}
            hasMore={this.state.hasMore}
            loader={null}
          >
            {this.state.searched ? (
              <CardsView>{this.state.cards}</CardsView>
            ) : null}
          </InfiniteScroll>
        ) : null}
      </MainTemplate>
    );
  }
}

export default Root;
