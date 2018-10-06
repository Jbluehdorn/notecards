import repo from './repository'

exports.create = async (req, res) => {
    try {
        let group = await repo.createGroup(req.body)
        res.success(group)
    } catch(err) {
        res.error(err)
    }
}

exports.list = async (req, res) => {
    try {
        let groups = await repo.findGroups()
        res.success(groups)
    } catch(err) {
        res.error(err)
    }
}

exports.find = async (req, res) => {
    try {
        let group = await repo.findGroup(req.params.id)
        res.success(group)
    } catch(err) {
        res.error(err)
    }
}

exports.test = async (req, res) => {
    try {
        let group = await repo.createGroup({
            name: 'test'
        })
        res.success(group)
    } catch(err) {
        res.error(err)
    }
}