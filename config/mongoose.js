import config from './index'
import mongoose from 'mongoose'

module.exports = app => {
    mongoose.connect(config.mongoUrl, {useNewUrlParser: true})

    process.on('SIGINT', cleanup)
    process.on('SIGTERM', cleanup)
    process.on('SIGHUP', cleanup)

    if(app) {
        app.set('mongoose', mongoose)
    }
}

function cleanup() {
    mongoose.connection.close(() => {
        process.exit(0)
    })
}