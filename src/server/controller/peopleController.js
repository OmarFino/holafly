const modelPeople = require('../model/peopleModel');
const {HttpStatus, Message} = require('../../util/constants');
const {extractPlanetInfo, extractPeopleInfo} = require('../mapper/peopleMapper');

const getPeopleId = async (req, res) => {
    try {
      const { id } = req.params;
      const dataPeople = await modelPeople.getPeopleId(id); 
      const people = extractPeopleInfo(dataPeople);
      const dataPlanet = await modelPeople.getPlanetName(people.homeworld);
      const planet = extractPlanetInfo(dataPlanet)
      const data = {...people,...planet} 
      if (data != '') {
        res.status(HttpStatus.OK).send(data)
      } else {
        res.status(HttpStatus.OK).send(Message.NO_DATA)
      }
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(JSON.stringify(error));
    }
  };

  module.exports = {
    getPeopleId
}