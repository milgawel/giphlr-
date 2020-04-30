import React, { Component } from "react";
import MainTemplate from "templates/MainTemplate";
import Navigation from "components/Navigation";
import CardsView from "views/CardsView";
import InfiniteScroll from "react-infinite-scroller";

class Root extends Component {
  state = {
    input: "",
    searched: false,
    offset: 0,
    cards: [],
    hasMore: true,
    photosType: "gifs",
  };

  handlePhotosType = (e) => {
    if (this.state.photosType === "gifs") {
      this.setState(
        {
          photosType: "stickers",
        },
        () => this.handleInput(e, this.state.input)
      );
    } else {
      this.setState(
        {
          photosType: "gifs",
        },
        () => this.handleInput(e, this.state.input)
      );
    }
  };

  handleInput = (e, input = this.state.input) => {
    e.preventDefault();
    if (input.length === 0) input = "trending";
    this.setState({
      searched: true,
      input,
      offset: 0,
      hasMore: true,
    });
    fetch(
      `https://api.giphy.com/v1/${this.state.photosType}/search?api_key=OFZBS28HtstfZcpRMxV1XunRnqoGMT0V&q=${input}&limit=50&offset=0&rating=G&lang=en`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.meta.status === 200) {
          this.setState({
            cards: data.data,
          });
          document.title = `Giphlr - ${input}`;
        } else {
          console.log(`wrong response status [${data.meta.status}]`);
        }
      })
      .catch((err) => console.log(err));
  };

  renderMoreContent = (input) => {
    fetch(
      `https://api.giphy.com/v1/${
        this.state.photosType
      }/search?api_key=OFZBS28HtstfZcpRMxV1XunRnqoGMT0V&q=${input}&limit=50&offset=${
        this.state.offset + 50
      }&rating=G&lang=en`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.data.length === 0) {
          this.setState({
            hasMore: false,
          });
        }

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
        <Navigation
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
              <CardsView photosTypeHandlingFunction={this.handlePhotosType}>
                {this.state.cards}
              </CardsView>
            ) : null}
          </InfiniteScroll>
        ) : null}
      </MainTemplate>
    );
  }
}

export default Root;
