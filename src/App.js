import React, { Component } from 'react';
import { FaExpand, FaHeart, FaHome, FaPause, FaPlay, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './App.scss';

import Genres from 'component/Genres';
import TopPodcasts from 'component/TopPodcasts';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='browse'>
          <h2>
            Top Podcasts
          </h2>
          <TopPodcasts />
          <h2>
            Browse by genre
          </h2>
          <Genres />
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
            <Link to='/player'>
              <FaExpand />
            </Link>
          </button>
        </div>
        <div className='navigation'>
          <button>
            <Link to='/'>
              <FaHome />
            </Link>
          </button>
          <button>
            <Link to='/search'>
              <FaSearch />
            </Link>
          </button>
          <button>
            <Link to='/subscriptions'>
              <FaHeart />
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
