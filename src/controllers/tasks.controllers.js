const Task = require('../models/Taks');
Project
const getTakss = (req, res) => {
    Taks.findAll().then(Takss => {
        res.json(Takss);
    }).catch(err => {
        console.error(err);
    });
}

const getTaks = (req, res) => {
    Taks.findOne({
        where: {
            id: req.params.id
        }
    }).then(Taks => {
        res.json(Taks);
    });
}

const createTaks = async (req, res) => {
    const newTaks = await Taks.create({
        name: req.body.name,
        priority: req.body.priority,
        description: req.body.description
    }).then(Taks => {
        res.json(Taks);
    });

    return newTaks;
}

const updateTaks = (req, res) => {
    Taks.update({
        name: req.body.name,
        description: req.body.description
    }, {
        where: {
            id: req.params.id
        }
    }).then(Taks => {
        res.json(Taks);
    }).catch(err => {
        console.error(err);
    });
}

const deleteTaks = (req, res) => {
    Taks.destroy({
        where: {
            id: req.params.id
        }
    }).then(Taks => {
        res.json(Taks);
    }).catch(err => {
        console.error(err);
    });
}


module.exports = { 
    getTakss, 
    getTaks,
    createTaks,
    updateTaks,
    deleteTaks
} ;