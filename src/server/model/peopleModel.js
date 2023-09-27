const req = require('../../app/swapiFunctions/index')
const {Url, Method} = require('../../util/constants')

const getPeopleId = async (id) => {
    const data = await req.genericRequest(`${Url.URL_PEOPLE_ID}${id}`, Method.MET, null, true);
    return data
};

const getPlanetName = async (url) => {
    const data = await req.genericRequest(url, Method.MET, null, true);
    return data
};

module.exports = {
    getPeopleId,
    getPlanetName
}
