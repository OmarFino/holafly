function extractPeopleInfo(peopleData) {
    const { name, mass, height, homeworld } = peopleData;
    return { name, mass, height, homeworld };
  }

function extractPlanetInfo(planetData) {
    const  homeworldName  = planetData.name;
    return { homeworldName };
  }
  
  module.exports = {
    extractPlanetInfo,
    extractPeopleInfo
};