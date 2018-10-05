import cardsRouter from './cards/router'

module.exports = (app) => {
    app.use('/cards', cardsRouter)
}