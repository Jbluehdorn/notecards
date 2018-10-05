import Express from 'express'
import CustomResponses from './middleware/CustomResponses'

const app = Express()

app.use(CustomResponses)

require('./config/mongoose')(app)
require('./app/api')(app)
// require('./app/web')(app)

//Connect to Database and start app
app.listen(process.env.SERVER_PORT, () => console.log(`App listening on ${process.env.SERVER_PORT}`))
