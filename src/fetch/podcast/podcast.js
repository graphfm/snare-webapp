import podcast_1421573955 from './json/1421573955.json';
import podcast_1324249769 from './json/1324249769.json';
import podcast_360084272 from './json/360084272.json';
import podcast_1272970334 from './json/1272970334.json';
import podcast_917918570 from './json/917918570.json';
import podcast_1434603257 from './json/1434603257.json';
import podcast_1200361736 from './json/1200361736.json';
import podcast_1345682353 from './json/1345682353.json';
import podcast_1441595858 from './json/1441595858.json';
import podcast_1074507850 from './json/1074507850.json';

const responses = {
  '1421573955': podcast_1421573955,
  '1324249769': podcast_1324249769,
  '360084272': podcast_360084272,
  '1272970334': podcast_1272970334,
  '917918570': podcast_917918570,
  '1434603257': podcast_1434603257,
  '1200361736': podcast_1200361736,
  '1345682353': podcast_1345682353,
  '1441595858': podcast_1441595858,
  '1074507850': podcast_1074507850,
};

function podcast(id) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        const response = responses[id] || { 'resultCount': 0, results: [] };
        if (response.resultCount < 1) {
          reject(Error('Podcast not found'));
        }
        resolve(response.results[0]);
      },
      1000,
    )
  });
}

export default podcast;
