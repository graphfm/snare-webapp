import React, { Component } from 'react';
import { FaSpinner } from 'react-icons/fa';

class AnimatedFaSpinner extends Component {
  constructor() {
    super();
    this.state = this.getInitialState();
  }
  getInitialState() {
    return {
      rotation: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(
      () => this.setState(({ rotation }) => ({ rotation: (rotation + 45) % 360 })),
      125,
    );
  }
  render() {
    const { rotation } = this.state;
    return (
      <FaSpinner style={{ transform: `rotate(${rotation}deg)` }} />
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default AnimatedFaSpinner;
