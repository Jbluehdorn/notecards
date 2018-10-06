let customResponses = {
    success(body) {
        return this.status(200).json({
            success: true,
            body
        })
    },
    error(body) {
        return this.status(400).json({
            success: false,
            body
        })
    }
}

module.exports = (req, res, next) => {
    Object.assign(res, customResponses)
    next()
}