const req = require('../../app/swapiFunctions/index')

const getPlanetId = async (id) => {
    const data = await req.genericRequest(`https://swapi.dev/api/planets/${id}`, 'GET', null, true);
    return data
};

module.exports = {
    getPlanetId
}