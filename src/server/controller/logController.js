const modelLogs = require('../model/logsModel')
const {extractLogsInfo} = require('../mapper/logsMapper');
const { HttpStatus } = require('../../util/constants');

const getAllLogs = async (req, res) => {
    try {
      const logModel = await modelLogs.getAllLogs();
      const data = await extractLogsInfo(logModel);
      if (data != '') {
        res.send(data).status(HttpStatus.OK)
      } else {
        res.status(HttpStatus.OK).send(Message.NO_DATA)
      }
    } catch (error) {
        console.log(error);
      res.status(500).send(JSON.stringify(error));
    }
  };

  module.exports = {
    getAllLogs
  }