const req = require('../../app/swapiFunctions/index')

const getPeopleId = async (id) => {
    const data = await req.genericRequest(`https://swapi.dev/api/people/${id}`, 'GET', null, true);
    return data
};

const getPlanetName = async (url) => {
    const data = await req.genericRequest(url, 'GET', null, true);
    return data
};

module.exports = {
    getPeopleId,
    getPlanetName
}
