const { Mapper } = require('../../util/constants')

function extractPlanetInfo(planetData) {
  const { name, gravity } = planetData;
  return { name, gravity };
}

function parseGravity(gravity) {
  const numericValues = gravity.match(/[\d.]+/g);

  if (numericValues) {
    return numericValues.map(parseFloat);
  } else {
    return Mapper.UNKNOWN;
  }
}

module.exports = {
  extractPlanetInfo,
  parseGravity
};