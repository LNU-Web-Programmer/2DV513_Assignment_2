const express = require('express')
const router = express.Router()

const apiController = require('../controllers/apiController')

router.get('/', apiController.initiate)

module.exports = router
