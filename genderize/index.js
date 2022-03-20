const axios = require('axios')

async function getGender(name){
    // let data = await axios.get(`https://api.genderize.io/?name=${name}`)

    return  name
}


module.exports = getGender