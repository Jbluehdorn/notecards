import mongoose from 'mongoose'

let Card = mongoose.model('card')

let createCard = async data => {
    let card = new Card(data)

    let query = await card.save()

    return query
}

let findCards = () => Card.find()

let findCard = id => Card.findById(id)

module.exports = {
    createCard,
    findCards,
    findCard
}