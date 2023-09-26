const modelPeople = require('../model/peopleModel');
const {HttpStatus, Message} = require('../../util/constants')

const getPeopleId = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await modelPeople.getPeopleId(id);
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