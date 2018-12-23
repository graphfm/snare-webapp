import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Carousel.scss';

class Carousel extends PureComponent {
  render() {
    const { children } = this.props
    return (
      <div className='carousel'>
        {children}
      </div>
    );
  }
}

Carousel.propTypes = {

};

export default Carousel;
