import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Podcast.scss';

import AnimatedFaSpinner from 'component/AnimatedFaSpinner';
import Page from 'component/Page';
import fetchPodcast from 'fetch/podcast';

class Podcast extends PureComponent {
  constructor() {
    super();
    this.state = this.getInitialState();
  }
  getInitialState() {
    return {
      artistName: '',
      artworkUrl100: '',
      collectionName: '',
      feedUrl: '',
      releaseDate: '',
      loading: false,
    }
  }
  componentDidMount() {
    this.load();
  }
  load() {
    const { match: { params: { id } } } = this.props;
    this.setState(state => ({ ...state, loading: true }));
    fetchPodcast(id)
    .then(podcast => this.setState({ ...podcast, loading: false }))
    .catch(error => this.setState({ ...this.state, loading: false, error }));
  }
  render() {
    const { artistName, artworkUrl100, collectionName, releaseDate } = this.state;
    return (
      <Page className='podcast'>
        {this.errorOrChildren(
          this.loadingOrChildren(
            <header>
              <img src={artworkUrl100} alt='' />
              <div className='meta'>
                <h1>{collectionName}</h1>
                <h2>{artistName}</h2>
                <h3>released {new Date(releaseDate).toLocaleDateString()}</h3>
              </div>
              <div className='description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper, nunc eget placerat blandit, urna lorem euismod tellus, sit amet sollicitudin ante mauris non lorem. Vivamus sollicitudin hendrerit cursus. Aenean risus neque, tempus eget pulvinar quis, lacinia sit amet nulla. Curabitur rhoncus justo ac tincidunt tincidunt. Vestibulum non magna scelerisque, efficitur orci in, rhoncus lacus. Donec a lacus a magna ornare efficitur. Integer quis tortor non dolor scelerisque dignissim. Nulla pharetra est ullamcorper sem semper sagittis sed vitae velit.
              </div>
            </header>
          )
        )}
      </Page>
    );
  }
  errorOrChildren(children) {
    const { error } = this.state;
    return error ? (
      <h2>Sorry, there was an error loading this podcast.</h2>
    ) : children;
  }
  loadingOrChildren(children) {
    const { loading } = this.state;
    return loading ? (
      <h2><AnimatedFaSpinner /></h2>
    ) : children;
  }
}

Podcast.propTypes = {
  match: PropTypes.object,
};

export default Podcast;