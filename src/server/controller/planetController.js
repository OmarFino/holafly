const modelPlanet = require('../model/planetModel');
const {HttpStatus, Message} = require('../../util/constants')
const extractPlanetInfo = require('../mapper/planetMapper');

const getPlanetId = async (req, res) => {
    try {
      const { id } = req.params;
      const model = await modelPlanet.getPlanetId(id);
      const data = extractPlanetInfo(model);
      if (data != '') {
        res.status(HttpStatus.OK).send(data)
      } else {
        res.status(HttpStatus.OK).send(Message.NO_DATA)
      }
    } catch (error) {
      res.status(500).send(JSON.stringify(error));
    }
  };

  module.exports = {
    getPlanetId
}