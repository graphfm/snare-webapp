import React, { createContext, Component } from 'react';

const audioPlayerContext = createContext({
  episodePlaying: {},
  paused: true,
  position: 0,
  play: () => {},
  pause: () => {},
  resume: () => {},
});

function seconds(s) {
  const parts = s.split(':');
  if (parts.length > 3) {
    throw Error(`Too many parts in duration (expected hh:mm:ss, got ${s})`);
  }
  let result = 0;
  for (let i = 0; i < parts.length; i++) {
    result += Math.pow(60, i) * parseInt(parts[parts.length - i - 1], 10);
  }
  return result;
}

class Provider extends Component {
  constructor() {
    super();
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.resume = this.resume.bind(this);
    this.state = this.getInitialState();
  }
  getInitialState() {
    return {
      episodePlaying: { },
      paused: true,
      position: 0,
    };
  }
  componentDidMount() {
    this.originalTitle = document.title;
  }
  render() {
    const { children } = this.props;
    return (
      <audioPlayerContext.Provider value={this.getValue()}>
        {children}
      </audioPlayerContext.Provider>
    );
  }
  getValue() {
    return {
      ...this.state,
      play: this.play,
      pause: this.pause,
      resume: this.resume,
    };
  }
  play(episode) {
    if (this.audio) {
      this.audio.src = null;
      this.audio.load();
    }
    if (this.positionInterval) {
      clearInterval(this.positionInterval);
    }
    this.setState(state => ({
      ...state,
      duration: seconds(episode.duration),
      episodePlaying: episode,
      position: 0,
    }));
    document.title = episode.title;
    this.audio = new Audio(episode.audioUrl);
    this.audio.addEventListener('playing', () => this.setState(state => ({ ...state, paused: false })));
    this.audio.addEventListener('pause', () => this.setState(state => ({ ...state, paused: true })));
    this.audio.addEventListener('ended', () => {
      this.setState(state => ({ ...state, episodePlaying: {} }));
      document.title = this.originalTitle;
    });
    this.positionInterval = setInterval(
      () => this.setState(state => ({ ...state, position: this.audio.currentTime })),
      1000,
    );
    this.audio.play();
    this.setState(state => ({ ...state, paused: false }));
  }
  pause() {
    this.audio.pause();
  }
  resume() {
    this.audio.play();
  }
}

function withAudioPlayer(WrappedComponent) {
  return class withAudioPlayer extends Component {
    render() {
      return (
        <audioPlayerContext.Consumer>
          {
            context => <WrappedComponent {...context} {...this.props} />
          }
        </audioPlayerContext.Consumer>
      )
    }
  }
}

export { Provider, withAudioPlayer };
