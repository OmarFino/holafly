const { parseGravity } = require('../mapper/planetMapper')
const { getWeightOnPlanet } = require('../../app/swapiFunctions/index')
const { Mapper } = require('../../util/constants')

function extractPeopleInfo(peopleData) {
  const { name, mass, height, homeworld } = peopleData;
  return { name, mass, height, homeworld };
}

function extractPlanetInfo(planetData) {
  const homeworldName = planetData.name;
  return { homeworldName };
}

const extractPeopleWeightId = async(dataPeople, dataHomeworldPeopleId, dataPlanet) => {
 let data
  if (dataHomeworldPeopleId.name != dataPlanet.name) {
    const gravity = await parseGravity(dataPlanet.gravity)
    let peopleWeightId = []
    let coun = 0
    if (dataPeople.mass != Mapper.UNKNOWN && gravity != Mapper.UNKNOWN) {
      gravity.forEach(element => {
        coun++
        weight = getWeightOnPlanet(dataPeople.mass, element)
        peopleWeightId.push({ [`${Mapper.WEIGHT} ${coun}`]: weight })
      });
    } else {
      peopleWeightId = ''
    }
    data = {
      namePeopleId: dataPeople.name,
      homeworld: dataHomeworldPeopleId.name,
      mass: dataPeople.mass,
      namePlanet: dataPlanet.name,
      gravity: gravity,
      weightPeopleId: peopleWeightId
    }
  } else {
    data = ''
  }

  return data
}

module.exports = {
  extractPlanetInfo,
  extractPeopleInfo,
  extractPeopleWeightId
};