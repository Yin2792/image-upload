const express = require('express')
const imageUploadRouter = require('./routes.imageupload')
const router = express.Router()

router.use('/image',imageUploadRouter)
module.exports = router