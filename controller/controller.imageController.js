const { imageUploadService } = require('../services')
const Clouduploads = require('../config/cloudinaryConfig')

const imageUpload =(req, res, next) => {
    const cloudImage = req.file.path
    const a =Clouduploads(cloudImage)
    a.then(result => {
        var imageDetails = {
            imageName: req.body.imageName,
            cloudImage: result.url,
            imageId: result.id
        }
        const b =imageUploadService.imageService(imageDetails)
        b.then(data => {
           res.json({
               msg:"succeded",
               data:imageDetails
           })
        }).catch(err => res.send(err))

    }).catch(err => res.send(err));



}

module.exports = { imageUpload }