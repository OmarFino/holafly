const req = require('../../app/swapiFunctions/index')
const {Url, Method} = require('../../util/constants')

const getPlanetId = async (id) => {
    const data = await req.genericRequest(`${Url.URL_PLANET_ID}${id}`, Method.MET, null, true);
    return data
};

module.exports = {
    getPlanetId
}