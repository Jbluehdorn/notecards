import Express from 'express'
import CustomResponses from './middleware/CustomResponses'
import bodyParser from 'body-parser'

const app = Express()

app.use(CustomResponses)
app.use(bodyParser.urlencoded({
    extended: true
}))

app.set('view engine', 'pug')
app.set('views', `${process.cwd()}/resources/views`)
require('./config/mongoose')(app)

app.use(Express.static('dist'))
require('./app/api')(app)
app.use('/', require('./resources/router'))

//Connect to Database and start app
app.listen(process.env.SERVER_PORT, () => console.log(`App listening on ${process.env.SERVER_PORT}`))
