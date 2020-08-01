const express = require('express');

const db = require('./data/config.js');

const server = express();

server.use(express.json());

// GET projects
server.get('/api/projects', (req, res) => {
    db('projects')
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

// POST projects, Adding a project
server.post('/api/projects', (req, res) => {
    const projectData = req.body;
    db('projects').insert(projectData)
    .then(ids => {
        db('projects').where({ id: ids[0] })
        .then(newProjectEntry => {
            res.status(201).json(newProjectEntry);
        })
    })
    .catch(error => {
        console.log('POST error', error);
        res.status(500).json({ message: 'Failed to store project' });
    })
})


// GET Resources
server.get('/api/resources', (req, res) => {
    db('resources')
    .then(resources => {
        res.status(200).json(resources);
    })
    .catch(error => {
        res.status(500).json(error);
    });
});


// POST Resources, Adding a resource
server.post('/api/resources', (req, res) => {
    const resourceData = req.body;
    db('resources').insert(resourceData)
    .then(ids => {
        db('resources').where({ id: ids[0] })
        .then(newResourceEntry => {
            res.status(201).json(newResourceEntry);
        })
    })
    .catch(error => {
        res.status(500).json({ message: 'Failed to store resource', error });
    });
});

// GET Tasks
server.get('/api/tasks', (req, res) => {
    db('tasks')
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

// POST Tasks, Adding a task
server.post('/api/tasks', (req, res) => {
    const taskData = req.body;
    db('tasks').insert(taskData)
    .then(ids => {
        db('tasks').where({ id: ids[0] })
        .then(newTaskEntry => {
            res.status(201).json(newTaskEntry);
        })
    })
    .catch(error => {
        res.status(500).json({ message: 'Failed to store task', error });
    })
})

module.exports = server;