import React, { Component } from 'react';
import { FaExpand, FaHeart, FaHome, FaPause, FaPlay, FaSearch } from 'react-icons/fa';

import './App.scss';

import Carousel from 'component/Carousel';
import Tile from 'component/Tile';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='browse'>
          <h2>
            Top Podcasts
          </h2>
          <Carousel>
            <Tile />
            <Tile />
            <Tile />
          </Carousel>
          <h2>
            Browse by genre
          </h2>
          <Carousel>
            <Tile />
            <Tile />
            <Tile />
          </Carousel>
        </div>
        <div className='audio-player'>
          <div className='progress-bar'>
            <div className='progress-bar-progress' />
          </div>
          <button className='play-pause'>
            {true ? <FaPlay /> : <FaPause />}
          </button>
          <div className='active-audio-details'>
            <div className='primary'>
              My Episode
            </div>
            <div className='secondary'>
              My Podcast
            </div>
          </div>
          <button className='expand-audio-player'>
            <FaExpand />
          </button>
        </div>
        <div className='navigation'>
          <button>
            <FaHome />
          </button>
          <button>
            <FaSearch />
          </button>
          <button>
            <FaHeart />
          </button>
        </div>
      </div>
    );
  }
}

export default App;
