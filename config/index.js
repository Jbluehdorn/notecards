const env = process.env.NODE_ENV || 'development'

const config = require(`./environments/${env.toLocaleLowerCase()}`)

module.exports = config