// const { default: axios } = require("axios");

const axios = require(axios)

const containerID = 'cdc6a5c49599344bedbc7a16d11e7ee419450a5c3a9848ee077db5a21064fb56'

let StatsController = {}

StatsController.getContainerStats = async (req, res, next) => {
  try {
    const response = await axios.get(`http://localhost:2375/containers/${containerId}/stats?stream=false`)
    console.log(response);
    res.locals.stats = response.data
    // return response.data;
    next();
  }
  catch(err) {
    console.log(err)

  }
}

module.exports = StatsController;