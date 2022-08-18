const Task = require('../models/Taks');

const getTasks = (req, res) => {
    try {
        Task.findAll().then(tasks => {
            res.json(tasks);
        }).catch(err => {
            console.error(err);
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
}

const getTask = async (req, res) => {
  try {
    const task = await Task.findOne({
        where: {
            id: req.params.id
        },
       // attributes: ['name', 'done'] // This propietries some fields only return the name and done attributes
    }).then(task => {
        res.json(task);
    });
    res.json(task);
  } catch (error) {
     res.status(404).json({ message: 'The task does not exists', error });
  } 
}

const createTask = async (req, res) => {
    try {
        const newTask = await Task.create({
            name: req.body.name,
            done: req.body.done,
            projectId: req.body.projectId
        }).then(task => {
            res.json(task);
        });
        return newTask;
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error; task could not be created' });
    }    
}

const updateTask = async (req, res) => {
    /* try {
        Task.update({
            name: req.body.name,
            done: req.body.done,
            projectId: req.body.projectId
        }, {
            where: {
                id: req.params.id
            }
        }).then(task => {
            res.json(task);
        }).catch(err => {
            console.error(err);
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error; task could not be updated' });   
    } */
    const { id } = req.params;
    const task = await Task.findOne({
        where: { id },
        //attributes: ['name', 'done', 'projectId']
    });
    task.set(req.body);
    await task.save();
    return res.json(task);
}

const deleteTask = (req, res) => {
    try {
        Task.destroy({
            where: {
                id: req.params.id
            }
        }).then(task => {
            res.json(task);
        }).catch(err => {
            console.error(err);
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error; task could not be deleted' });   
    }
}


module.exports = { 
    getTasks, 
    getTask,
    createTask,
    updateTask,
    deleteTask
} 