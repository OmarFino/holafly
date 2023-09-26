const req = require('../../app/swapiFunctions/index')

const getPeopleId = async (id) => {
    const data = await req.genericRequest(`https://swapi.dev/api/people/${id}`, 'GET', null, true);
    return data
};

module.exports = {
    getPeopleId
}
