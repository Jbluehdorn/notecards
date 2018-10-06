import './model'
import controller from './controller'

import express from 'express'

let router = express.Router()

router.get('/', controller.list)

router.get('/:id', controller.find)

router.post('/', controller.create)

module.exports = router