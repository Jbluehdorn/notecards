import mongoose from 'mongoose'

let Group = mongoose.model('group')

let createGroup = async data => {
    let group = new Group(data)
    let query = await group.save()

    return query
}

let findGroups = () => Group.find().populate('group_cards')

let findGroup = id => Group.findById(id).populate('group_cards')

module.exports = {
    createGroup,
    findGroup,
    findGroups
}