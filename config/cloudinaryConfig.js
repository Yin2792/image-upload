const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name:'dqfkmxinb',
    api_key:'768662185855442',
    api_secret:'XdZsdBI5w-sswABoq7n2D7rI2v4'
});

const Clouduploads = (file) =>{
    
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, (result) =>{
        resolve({url: result.url, id: result.public_id})
        }, {resource_type: "auto"})
        })
}
module.exports = Clouduploads