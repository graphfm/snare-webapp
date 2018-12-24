import React, { Component } from 'react';

import Carousel from 'component/Carousel';
import Tile from 'component/Tile';
import fetchTopPodcasts from 'fetch/topPodcasts';

class TopPodcasts extends Component {
  constructor() {
    super();
    this.state = this.getInitialState();
  }
  getInitialState() {
    return {
      topPodcasts: [],
    };
  }
  componentDidMount() {
    fetchTopPodcasts()
    .then(topPodcasts => this.setState({ topPodcasts }));
  }
  render() {
    const { topPodcasts } = this.state;
    return (
      <Carousel>
        {topPodcasts.map(this.generateTile)}
      </Carousel>
    );
  }
  generateTile(podcast, i) {
    return (
      <Tile
        to={`/podcast/${podcast.id}`}
        image={podcast.artworkUrl100}
        primary={podcast.name}
        secondary={podcast.artistName}
        key={i}
      />
    );
  }
}

export default TopPodcasts;