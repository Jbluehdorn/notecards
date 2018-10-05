import mongoose from 'mongoose'

const Schema = mongoose.Schema

const TestSchema = new Schema({
    name: {type: String, require: true}
}, {
    timestamps: true
})

module.exports = mongoose.model('Test', TestSchema)