const express = require('express');
const router = express.Router();
const data = require('./work-list.js');

router.get('/', (req, res) => {
    res.json(data);
})

router.get('/:id', (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const item = data.find(d => d.id === itemId);
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
})

router.get('/iscomplete/:iscomplete', (req, res) => {
    const isComplete = req.params.iscomplete === 'true';
    const filteredItems = data.filter(d => d.iscompleted === isComplete);
    res.json(filteredItems);
})

module.exports = router;