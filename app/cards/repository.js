import mongoose from 'mongoose'

let Card = mongoose.model('Card')

let createCard = async data => {
    let card = new Card(data)
    let query = await card.save()
    
    return query
}

let findCards = () => Card.find()

module.exports = {
    createCard,
    findCards
}