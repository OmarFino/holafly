const {insertLog} = require('../model/logsModel')

const loggingMiddleware = (db) =>
     (req, res, next) => {
        const ip = (req.headers['x-forwarded-for'] || req.connection.remoteAddress || '').split(',')[0].trim();
        const headers = JSON.stringify(req.headers);
        const originalUrl = req.originalUrl;
        // Persist this info on DB
        next();

        insertLog(ip,headers,originalUrl);

    }

module.exports = loggingMiddleware;