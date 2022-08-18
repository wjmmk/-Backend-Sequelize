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
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthDate: req.body.birthDate
    }).then(User => {
        res.json(User);
    });

    return newUser;
}

const updateUser = (req, res) => {
    User.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthDate: req.body.birthDate
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