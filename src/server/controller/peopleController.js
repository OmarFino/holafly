const modelPeople = require('../model/peopleModel');
const modelPlanet = require('../model/planetModel')
const { HttpStatus, Message } = require('../../util/constants');
const { extractPlanetInfo, extractPeopleInfo, extractPeopleWeightId } = require('../mapper/peopleMapper');


const getPeopleId = async (req, res) => {
  try {
    const { id } = req.params;
    const dataPeople = await modelPeople.getPeopleId(id);
    const people = extractPeopleInfo(dataPeople);
    const dataPlanet = await modelPeople.getPlanetName(people.homeworld);
    const planet = extractPlanetInfo(dataPlanet)
    const data = { ...people, ...planet }
    if (data != '') {
      res.status(HttpStatus.OK).send(data)
    } else {
      res.status(HttpStatus.OK).send(Message.NO_DATA)
    }
  } catch (error) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(JSON.stringify(error));
  }
};

const getPeopleWeightId = async (req, res) => {
  try {
    let idPeople = Math.floor(Math.random() * 82) + 1
    let idPlanet = Math.floor(Math.random() * 60) + 1
    const dataPeople = await modelPeople.getPeopleId(idPeople);
    const dataHomeworldPeopleId = await modelPeople.getPlanetName(dataPeople.homeworld)
    const dataPlanet = await modelPlanet.getPlanetId(idPlanet);

    const data = await extractPeopleWeightId(dataPeople,dataHomeworldPeopleId,dataPlanet)

    if (data != '') {
      res.status(HttpStatus.OK).send(data)
    } else {
      res.status(HttpStatus.BAD_REQUEST).send(Message.INCORRECT_WEIGHT_REQUEST)
    }
  } catch (error) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(JSON.stringify(error));
  }
}

module.exports = {
  getPeopleId,
  getPeopleWeightId
}