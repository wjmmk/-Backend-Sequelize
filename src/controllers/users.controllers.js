const User = require('../models/User');

const getUsers = (req, res) => {
    User.findAll().then(Users => {
        res.json(Users);
    }).catch(err => {
        console.error(err);
    });
}

const getUser = (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    }).then(User => {
        res.json(User);
    });
}

const createUser = async (req, res) => {
    const newUser = await User.create({
        name: req.body.name,
        priority: req.body.priority,
        description: req.body.description
    }).then(User => {
        res.json(User);
    });

    return newUser;
}

const updateUser = (req, res) => {
    User.update({
        name: req.body.name,
        description: req.body.description
    }, {
        where: {
            id: req.params.id
        }
    }).then(User => {
        res.json(User);
    }).catch(err => {
        console.error(err);
    });
}

const deleteUser = (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then(User => {
        res.json(User);
    }).catch(err => {
        console.error(err);
    });
}


module.exports = { 
    getUsers, 
    getUser,
    createUser,
    updateUser,
    deleteUser
} ;