import mongoose from 'mongoose'

let Schema = mongoose.Schema

let CardSchema = new Schema({
    body: String
}, {timestamps: true})

module.exports = mongoose.model('Card', CardSchema)