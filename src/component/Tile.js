import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Tile.scss';

class Tile extends PureComponent {
  render() {
    const { backgroundImage, children } = this.props
    return (
      <div className='tile' style={{ backgroundImage }}>
        {children}
      </div>
    );
  }
}

Tile.propTypes = {

};

export default Tile;