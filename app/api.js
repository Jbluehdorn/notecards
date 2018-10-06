import cardsRouter from './cards/router'
import groupsRouter from './groups/router'

let prefix = '/api'

module.exports = (app) => {
    app.use(`${prefix}/cards`, cardsRouter)
    app.use(`${prefix}/groups`, groupsRouter)
}