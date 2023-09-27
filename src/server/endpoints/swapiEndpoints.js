const controllerPeople = require('../controller/peopleController');
const controllerPlanet = require('../controller/planetController');
const controllerLogs = require('../controller/logController')

const _isWookieeFormat = (req) => {
    if(req.query.format && req.query.format == 'wookiee'){
        return true;
    }
    return false;
}


const applySwapiEndpoints = (server, app) => {

    server.get('/hfswapi/test', async (req, res) => {
        const data = await app.swapiFunctions.genericRequest('https://swapi.dev/api/', 'GET', null, true);
        res.send(data);
    });

    server.get('/hfswapi/getPeople/:id', controllerPeople.getPeopleId);

    server.get('/hfswapi/getPlanet/:id', controllerPlanet.getPlanetId);

    server.get('/hfswapi/getWeightOnPlanetRandom', controllerPeople.getPeopleWeightId);

    server.get('/hfswapi/getLogs',controllerLogs.getAllLogs);

}

module.exports = applySwapiEndpoints;