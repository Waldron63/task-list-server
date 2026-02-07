const express = require('express');
const router = express.Router();
const users = require("./users");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const validateLoginBody = (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: 'Request body cannot be empty' });
    }
    const { name, password } = req.body;
    if (!name || !password) {
        return res.status(400).json({ error: 'Missing required attributes: name and password' });
    }
    if (typeof name !== 'string' || name.trim().length === 0) {
        return res.status(400).json({ error: 'Name must be a non-empty string' });
    }
    next();
}

router.post('/', validateLoginBody, (req, res) => {
    const { name, password } = req.body;
    const user = users.find(user => user.name === name && user.password === password);
    if (!user) {
        return res.status(401).json({ error: 'Invalid user name or password' });
    }
    const { rol, id } = user;
    const token = jwt.sign({ id, rol, name }, process.env.SECRET_KEY);
    res.json({ token });
});

module.exports = router;