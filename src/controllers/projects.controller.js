const Project = require('../models/Project.js');
const Task = require('../models/Taks.js');

const getProjects = (req, res) => {
    try {
        Project.findAll().then(projects => {
            res.json(projects);
        }).catch(err => {
            console.error(err);
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
}

const getProject = async (req, res) => {
  try {
    const project = await Project.findOne({
        where: {
            id: req.params.id
        }
    }).then(project => {
        res.json(project);
    });
    res.json(project);
  } catch (error) {
     res.status(404).json({ message: 'The project does not exists', error });
  } 
}

const getProjectTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll({
            where: {
                projectId: req.params.id
            }
        }).then(tasks => {
            res.json(tasks.tasks);
        });
        res.json(tasks);
    } catch (error) {
        res.status(404).json({ message: 'The project does not exists', error });
    }
}

const createProject = async (req, res) => {
    try {
        const newProject = await Project.create({
            name: req.body.name,
            priority: req.body.priority,
            description: req.body.description
        }).then(project => {
            res.json(project);
        });
        return newProject;
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error; project could not be created' });
    }    
}

const updateProject = (req, res) => {
    try {
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
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error; project could not be updated' });   
    }
}

const deleteProject = (req, res) => {
    try {
        Project.destroy({
            where: {
                id: req.params.id
            }
        }).then(project => {
            res.json(project);
        }).catch(err => {
            console.error(err);
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error; project could not be deleted' });   
    }
}


module.exports = { 
    getProjects, 
    getProject,
    createProject,
    updateProject,
    deleteProject,
    getProjectTasks
} ;