const express = require('express');
const router = express.Router();

//data for list view
const data = [
    { id: 1, description: 'Description for Item 1', iscompleted: false },
    { id: 2, description: 'Description for Item 2', iscompleted: false },
    { id: 3, description: 'Description for Item 3', iscompleted: true },
];

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