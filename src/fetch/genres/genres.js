import genresJson from './genres.json';

function mapCharCodeToHue(n) {
  return (n - 97) / 26 * 360;
}

function style(genre) {
  const name = genre.name.toLowerCase();
  let hue = 0;
  for (let i = 0; i < name.length; i++) {
    hue = (hue + mapCharCodeToHue(name.charCodeAt(i))) % 360;
  }
  return {
    backgroundImage: `linear-gradient(to bottom right, hsl(${hue}, 75%, 37.5%), hsl(${(hue + 45) % 360}, 50%, 37.5%))`,
    color: `hsl(${(hue + 180) % 360}, 25%, 75%)`,
  }
}

async function genres() {
  return Object.entries(genresJson['26'].subgenres)
  .map(([_, genre]) => ({ ...genre, ...style(genre) }));
}

export default genres;
