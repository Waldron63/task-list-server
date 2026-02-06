const express = require('express');
const router = express.Router();
const data = require('./work-list.js');

const validateIdParam = (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid ID parameter' });
    }
    if (id < 1) {
        return res.status(404).json({ error: 'Item not found' });
    }
    next();
}

const validateIsCompleteParam = (req, res, next) => {
    const isComplete = req.params.iscomplete;
    if (isComplete !== 'true' && isComplete !== 'false') {
        return res.status(400).json({ error: 'Invalid iscomplete parameter, must be true or false' });
    }
    next();
}

router.get('/', (req, res) => {
    res.json(data);
})

router.get('/:id', validateIdParam, (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const item = data.find(d => d.id === itemId);
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
})

router.get('/iscomplete/:iscomplete', validateIsCompleteParam, (req, res) => {
    const isComplete = req.params.iscomplete === 'true';
    const filteredItems = data.filter(d => d.iscompleted === isComplete);
    res.json(filteredItems);
})

module.exports = router;