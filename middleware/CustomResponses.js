let customResponses = {
    success(payload) {
        return this.status(200).json({
            success: true,
            payload
        })
    }
}

module.exports = (req, res, next) => {
    Object.assign(res, customResponses)
    next()
}