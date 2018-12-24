import React, { Component } from 'react';

import './Genres.scss';

import Carousel from 'component/Carousel';
import Tile from 'component/Tile';
import fetchGenres from 'fetch/genres';

class Genres extends Component {
  constructor() {
    super();
    this.state = this.getInitialState();
  }
  getInitialState() {
    return {
      genres: [],
    };
  }
  componentDidMount() {
    fetchGenres()
    .then(genres => this.setState({ genres }));
  }
  render() {
    const { genres } = this.state;
    return (
      <Carousel>
        {genres.map(this.generateTile)}
      </Carousel>
    );
  }
  generateTile(genre, i) {
    return (
      <Tile
        to={`/genre/${genre.id}`}
        image={genre.backgroundImage}
        key={i}
      >
        <span className='genre-name' style={{ color: genre.color }}>
          {genre.name}
        </span>
      </Tile>
    );
  }
}

export default Genres;
