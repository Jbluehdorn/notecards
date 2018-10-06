import repo from './repository'

exports.create = async (req, res) => {
    try {
        let card = await repo.createCard(req.body)
        res.success(card)
    } catch (err) {
        res.error(err)
    }
}

exports.list = async (req, res) => {
    try {
        let cards = await repo.findCards()
        res.success(cards)
    } catch(err) {
        res.error(err)
    }
}

exports.find = async (req, res) => {
    try {
        let card = await repo.findCard(req.params.id)
        res.success(card)
    } catch (err) {
        res.error(err)
    }
}