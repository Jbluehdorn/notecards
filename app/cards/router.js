import './model'
import controller from './controller'

import express from 'express'

let router = express.Router()

router.get('/', controller.list)

router.get('/test', controller.create)

module.exports = router