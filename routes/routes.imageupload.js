const express = require("express")
const {imageController} = require('../controller')
const upload = require('../config/multerConfig')
const router = express.Router()
router.post('/upload',upload,imageController.imageUpload)
module.exports = router