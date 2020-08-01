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
    .catch(err => {
        console.log('POST error', err);
        res.status(500).json({ message: 'Failed to store project' });
    })
})

module.exports = server;