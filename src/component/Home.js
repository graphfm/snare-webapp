import React, { PureComponent } from 'react';

import Genres from 'component/Genres';
import Page from 'component/Page';
import TopPodcasts from 'component/TopPodcasts';

class Home extends PureComponent {
  render() {
    return (
      <Page className='home'>
        <div className='browse'>
          <h2>
            Top Podcasts
          </h2>
          <TopPodcasts />
          <h2>
            Browse by genre
          </h2>
          <Genres />
        </div>
      </Page>
    );
  }
}

export default Home;
