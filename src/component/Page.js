import React, { PureComponent } from 'react';
import { FaHeart, FaHome, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Page.scss';

import AudioPlayer from 'component/AudioPlayer';

class Page extends PureComponent {
  render() {
    const { children, className } = this.props;
    return (
      <div className={classNames('page', className)}>
        <div className='page-content'>
          {children}
        </div>
        <AudioPlayer />
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