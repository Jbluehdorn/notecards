import repo from './repository'

exports.create = async (req, res) => {
    try {
        let card = await repo.createCard({body: 'Test body'})
        res.success(card)
    } catch (err) {
        res.send(err)
    }
}

exports.list = async (req, res) => {
    try {
        let cards = await repo.findCards()
        res.success(cards)
    } catch(err) {
        res.send(err)
    }
}