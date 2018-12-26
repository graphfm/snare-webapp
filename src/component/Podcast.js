import React, { PureComponent } from 'react';
import { FaPlay, FaDownload, FaRegPlusSquare, FaRegMinusSquare, FaTrash } from 'react-icons/fa';
import PropTypes from 'prop-types';
import sanitizeHtml from 'sanitize-html';

import './Podcast.scss';

import AnimatedFaSpinner from 'component/AnimatedFaSpinner';
import Page from 'component/Page';
import fetchPodcast from 'fetch/podcast';
import fetchPodcastFeed from 'fetch/podcastFeed';

const sanitizeDescription = dirty => sanitizeHtml(dirty, {
  allowedTags: ['b', 'i', 'em', 'strong', 'a', 'p'],
  allowedAttributes: {
    'a': ['href'],
  },
});

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
      items: [],
      maxItemsRendered: 10,
    }
  }
  componentDidMount() {
    this.load();
  }
  load() {
    const { match: { params: { id } } } = this.props;
    this.setState(state => ({ ...state, loading: true }));
    fetchPodcast(id)
    .then(podcast => {
      this.setState(state => ({ ...state, ...podcast }));
      return fetchPodcastFeed(podcast.feedUrl);
    })
    .then(({ description, items }) => this.setState(state => ({ ...state, description, items, loading: false })))
    .catch(error => this.setState({ ...this.state, loading: false, error }));
  }
  render() {
    const {
      artistName,
      artworkUrl100,
      collectionName,
      description,
      items,
      maxItemsRendered,
      releaseDate,
    } = this.state;
    return (
      <Page className='podcast'>
        {this.errorOrChildren(
          this.loadingOrChildren(
            <>
              <header>
                <img src={artworkUrl100} alt='' />
                <div className='meta'>
                  <h1>{collectionName}</h1>
                  <h2>{artistName}</h2>
                  <h3>released {new Date(releaseDate).toLocaleDateString()}</h3>
                </div>
                <div
                  className='description'
                  dangerouslySetInnerHTML={{ __html: sanitizeDescription(description) }}
                />
              </header>
              <div
                className='episodes'
                ref={e => this.episodes = e}
              >
                {
                  items
                  .filter((_, i) => i < maxItemsRendered)
                  .map(this.renderItem)
                }
              </div>
            </>
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
  renderItem(item, i) {
    return (
      <div className='episode' key={i}>
        <h2 className='title'>
          {item.title}
        </h2>
        <div
          className='description'
          dangerouslySetInnerHTML={{ __html: sanitizeDescription(item.description) }}
        />
        <div className='published-date'>
          published {new Date(item.publishedDate).toLocaleTimeString()}
        </div>
        <div className='duration'>
          {item.duration}
        </div>
        <div className='controls'>
          <button
            disabled={false}
            onClick={() => console.log('doPlay')}
          >
            <FaPlay />
          </button>
          {true ? (
            <button onClick={() => console.log('doStoreOffline')}>
              <FaDownload />
            </button>
          ) : (
            <button onClick={() => console.log('doRemoveOffline')}>
              <FaTrash />
            </button>
          )}
          {true ? (
            <button onClick={() => console.log('doEnqueue')}>
              <FaRegPlusSquare />
            </button>
          ) : (
            <button onClick={() => console.log('doDequeue')}>
              <FaRegMinusSquare />
            </button>
          )}
        </div>
      </div>
    )
  }
}

Podcast.propTypes = {
  match: PropTypes.object,
};

export default Podcast;