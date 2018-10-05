import express from 'express'
const app = express()

app.use('/api', require('./app/routes/api'))
app.use('/', require('./app/routes/web'))

app.listen(8000, () => console.log('App listening on 8000'))