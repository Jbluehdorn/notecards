import express from 'express'
import controller from './controller'

let router = express.Router()

router.get('/', controller.home)

module.exports = router