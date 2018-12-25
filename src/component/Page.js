import React, { PureComponent } from 'react';
import { FaExpand, FaHeart, FaHome, FaPause, FaPlay, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Page.scss';

class Page extends PureComponent {
  render() {
    const { children, className } = this.props;
    return (
      <div className={classNames('page', className)}>
        <div className='page-content'>
          {children}
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

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

export default Page;