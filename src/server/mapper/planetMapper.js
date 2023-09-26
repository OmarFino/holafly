
function extractPlanetInfo(planetData) {
    const { name, gravity } = planetData;
    return { name, gravity };
  }
  
  module.exports = extractPlanetInfo;