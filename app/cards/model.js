import mongoose from 'mongoose'

let Schema = mongoose.Schema

let CardSchema = new Schema({
    body: String,
    group_id: Schema.Types.ObjectId
}, {timestamps: true})

module.exports = mongoose.model('card', CardSchema)