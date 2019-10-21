const express = require("express");

const server = express();
server.use(express.json());

const projects = [];

server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  const newProject = {
    id,
    title,
    tasks: []
  };

  projects.push(newProject);

  return res.json(projects);
});

server.get('/projects', (req, res) => {
  return res.json(projects);
});

server.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  //arrow function, receive p, if p.id == id(from req) return true
  const project = projects.find(p => p.id == id);

  project.title = title;

  return res.json(projects);
});

server.delete('/projects/:id', (req, res) => {
  const { id } = req.params;

  const project = projects.find(p => p.id == id);

  const indexOfProject = projects.indexOf(project);

  projects.splice(indexOfProject, 1);

  return res.json({ 'ok': 'ok' });
});

server.post('/projects/:id/tasks', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);
  const indexOfProject = projects.indexOf(project);

  projects[indexOfProject].tasks.push(title);

  return res.json(project);
});

server.listen(3000);
