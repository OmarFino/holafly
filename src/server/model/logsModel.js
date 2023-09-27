const app = require('../../app')

async function insertLog(ip,headers,originalUrl) {
    try {
      await app.db.logging.create({
        action: originalUrl,
        header: headers,
        ip: ip,
      });
    } catch (error) {
      console.error('Error al insertar el registro de log:', error);
    }
  }

  const getAllLogs = async () => {
    const data = await app.db.logging.findAll({attributes: ['action', 'header', 'ip'],});
    return data
};

  module.exports ={
    insertLog,
    getAllLogs
  }