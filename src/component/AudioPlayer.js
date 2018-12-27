import React, { Component } from 'react';
import { FaExpand, FaPause, FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './AudioPlayer.scss';

import { withAudioPlayer } from 'context/AudioPlayer';

class AudioPlayer extends Component {
  render() {
    const {
      duration,
      episodePlaying,
      pause,
      paused,
      position,
      resume,
    } = this.props;
    return episodePlaying.id ? (
      <div className='audio-player'>
        <div className='progress-bar'>
          <div
            className='progress-bar-progress'
            style={{ width: `${position / duration * 100}%` }}
          />
        </div>
        {paused ? (
          <button className='play' onClick={resume}>
            <FaPlay />
          </button>
        ) : (
          <button className='pause' onClick={pause}>
            <FaPause />
          </button>
        )}
        <div className='active-audio-details'>
          {episodePlaying.title}
        </div>
        <button className='expand-audio-player'>
          <Link to='/player'>
            <FaExpand />
          </Link>
        </button>
      </div>
    ) : null;
  }
}

export default withAudioPlayer(AudioPlayer);
