import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Tile.scss';

class OptionalLink extends PureComponent {
  render() {
    const { children, to } = this.props;
    return to ? (
      <Link to={to}>
        {children}
      </Link>
    ) : children;
  }
}

class Tile extends PureComponent {
  render() {
    const {
      image,
      primary,
      secondary,
      to,
    } = this.props
    return (
      <div className='tile'>
        <OptionalLink to={to}>
          <div className='tile-grid'>
            {image && (
              <div className='image' style={{ backgroundImage: image }}>
                {this.inner()}
              </div>
            )}
            <div className='description'>
              {primary && (
                <div className='primary'>
                  {primary}
                </div>
              )}
              {secondary && (
                <div className='secondary'>
                  {secondary}
                </div>
              )}
            </div>
          </div>
        </OptionalLink>
      </div>
    );
  }
  inner() {
    const { children } = this.props;
    return children && (
      <span className='inner'>
        {children}
      </span>
    );
  }
}

Tile.propTypes = {
  image: PropTypes.string,
  primary: PropTypes.string,
  secondary: PropTypes.string,
};

export default Tile;