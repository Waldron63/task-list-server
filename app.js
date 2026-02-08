// Import necessary modules
const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Import routers and data
const work_list = require('./work-list.js');
const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');
const loginRouter = require('./login-router');
const users = require("./users");

const HTTP_METHODS = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'];

// Middleware to validate
const validateMethod = (req, res, next) => {
    if (!HTTP_METHODS.includes(req.method)) {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
    next();
}

const velidateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'No token provided' });
    }
    if (!authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Invalid token format, must be BEARER' });
    }
    if (authHeader.split(' ').length !== 2) {
        return res.status(401).json({ error: 'Invalid token format, must be BEARER' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ error: 'Invalid token' });
    }
}

// Use the routers
app.use(validateMethod);
app.use(express.json());
app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);
app.use('/login', loginRouter);

app.get("/", (req, res) => {
    res.send(work_list);
})

app.get("/profile", velidateToken, (req, res) => {
    const user = users.find(user => user.id === req.user.id);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json({ id: user.id, name: user.name, rol: user.role });
})

app.get("/admin", velidateToken, (req, res) => {
    if (req.user.rol !== 'admin') {
        return res.status(403).json({ error: 'You are not an Admin' });
    }
    res.json({ message: 'Welcome, admin!' });
})

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = server;