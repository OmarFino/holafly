const { Mapper } = require('../../util/constants')

const extractLogsInfo = async(logsData) => {
  const logsJSON = await logsData.map((log) => log.toJSON());
  return logsJSON;
}

module.exports = {
  extractLogsInfo
};