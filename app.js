const express = require('express');
const app = express();
const PORT = 3000;

const work_list = require('./work-list.js');
const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

const HTTP_METHODS = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'];

const validateMethod = (req, res, next) => {
    if (!HTTP_METHODS.includes(req.method)) {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
    next();
}

// Use the routers
app.use(validateMethod);
app.use(express.json());
app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);

app.get("/", (req, res) => {
    res.send(work_list);
})

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = server;