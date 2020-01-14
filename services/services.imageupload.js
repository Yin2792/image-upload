const {cloudImageDb} = require('../db')

const imageService = imageName =>{
    return cloudImageDb.imageDb(imageName)
}
module.exports = {imageService}