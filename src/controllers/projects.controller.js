const Project = require('../models/Project.js');

const getProjects = (req, res) => {
    Project.findAll().then(projects => {
        res.json(projects);
    }).catch(err => {
        console.error(err);
    });
}

const getProject = (req, res) => {
    Project.findOne({
        where: {
            id: req.params.id
        }
    }).then(project => {
        res.json(project);
    });
}

const createProject = async (req, res) => {
    console.log(req.body);
    const newProject = await Project.create({
        name: req.body.name,
        priority: req.body.priority,
        description: req.body.description
    }).then(project => {
        res.json(project);
    });

    return newProject;
}

const updateProject = (req, res) => {
    Project.update({
        name: req.body.name,
        description: req.body.description
    }, {
        where: {
            id: req.params.id
        }
    }).then(project => {
        res.json(project);
    }).catch(err => {
        console.error(err);
    });
}

const deleteProject = (req, res) => {
    Project.destroy({
        where: {
            id: req.params.id
        }
    }).then(project => {
        res.json(project);
    }).catch(err => {
        console.error(err);
    });
}


module.exports = { 
    getProjects, 
    getProject,
    createProject,
    updateProject,
    deleteProject
} ;