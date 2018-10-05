module.exports = {
    host: '127.0.0.1',
    port: process.env.SERVER_PORT,
    mongoUrl: `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds123783.mlab.com:${process.env.DB_PORT}/notecards`
}