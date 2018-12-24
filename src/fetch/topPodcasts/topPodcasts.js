import topPodcastsJson from './topPodcasts.json';

async function topPodcasts() {
  return topPodcastsJson.feed.results
}

export default topPodcasts;
