const express = require("express");

const server = express();
server.use(express.json());

const projects = [];

function thisIdExists(req, res, next) {
  const { id } = req.params;

  const project = projects.find(p => p.id == id);

  if (!project) {
    return res.status(404).json({ "error": "This ID doesnt match." });
  }

  return next();
}

//This global function print log
server.use((req, res, next) => {
  console.count("Número de requisições");

  next();
});

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

server.put('/projects/:id', thisIdExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  //arrow function, receive p, if p.id == id(from req) return true
  const project = projects.find(p => p.id == id);

  project.title = title;

  return res.json(projects);
});

server.delete('/projects/:id', thisIdExists, (req, res) => {
  const { id } = req.params;

  const project = projects.find(p => p.id == id);

  const indexOfProject = projects.indexOf(project);

  projects.splice(indexOfProject, 1);

  return res.json({ 'ok': 'ok' });
});

server.post('/projects/:id/tasks', thisIdExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);
  const indexOfProject = projects.indexOf(project);

  projects[indexOfProject].tasks.push(title);

  return res.json(project);
});

server.listen(3000);
