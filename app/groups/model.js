import mongoose from 'mongoose'

let Schema = mongoose.Schema

let GroupSchema = new Schema({
    name: String
}, {
    timestamps: true, 
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
})

GroupSchema.virtual('group_cards', {
    ref: 'card',
    localField: '_id',
    foreignField: 'group_id'
})

module.exports = mongoose.model('group', GroupSchema)