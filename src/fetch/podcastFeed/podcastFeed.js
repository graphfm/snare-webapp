const responses = {
  'http://feeds.serialpodcast.org/serialpodcast': require('./json/aHR0cDovL2ZlZWRzLnNlcmlhbHBvZGNhc3Qub3JnL3NlcmlhbHBvZGNhc3QK'),
  'http://joeroganexp.joerogan.libsynpro.com/rss': require('./json/aHR0cDovL2pvZXJvZ2FuZXhwLmpvZXJvZ2FuLmxpYnN5bnByby5jb20vcnNzCg=='),
  'http://rss.art19.com/the-daily': require('./json/aHR0cDovL3Jzcy5hcnQxOS5jb20vdGhlLWRhaWx5Cg=='),
  'https://feeds.megaphone.fm/monster': require('./json/aHR0cHM6Ly9mZWVkcy5tZWdhcGhvbmUuZm0vbW9uc3Rlcgo='),
  'https://feeds.megaphone.fm/HSW2732644812': require('./json/aHR0cHM6Ly9mZWVkcy5tZWdhcGhvbmUuZm0vSFNXMjczMjY0NDgxMgo='),
  'https://rss.simplecast.com/podcasts/4123/rss': require('./json/aHR0cHM6Ly9yc3Muc2ltcGxlY2FzdC5jb20vcG9kY2FzdHMvNDEyMy9yc3MK'),
  'https://rss.art19.com/cold': require('./json/aHR0cHM6Ly9yc3MuYXJ0MTkuY29tL2NvbGQK'),
  'https://rss.art19.com/my-favorite-murder-with-karen-kilgariff-and-georgia-hardstark-fb': require('./json/aHR0cHM6Ly9yc3MuYXJ0MTkuY29tL215LWZhdm9yaXRlLW11cmRlci13aXRoLWthcmVuLWtpbGdhcmlmZi1hbmQtZ2VvcmdpYS1oYXJkc3RhcmstZmIK'),
  'https://rss.art19.com/dirty-john': require('./json/aHR0cHM6Ly9yc3MuYXJ0MTkuY29tL2RpcnR5LWpvaG4K'),
  'https://rss.art19.com/dr-death': require('./json/aHR0cHM6Ly9yc3MuYXJ0MTkuY29tL2RyLWRlYXRoCg=='),
};

function podcastFeed(feedUrl) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        if (!(feedUrl in responses)) {
          reject(Error('Feed not found'));
        }
        resolve(responses[feedUrl]);
      },
      1000,
    )
  });
}

export default podcastFeed;
