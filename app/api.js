import cardsRouter from './cards/router'

let prefix = '/api'

module.exports = (app) => {
    app.use(`${prefix}/cards`, cardsRouter)
}