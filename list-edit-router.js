const express = require('express');
const router = express.Router();
const data = require('./work-list.js');

router.get('/', (req, res) => {
    res.json(data);
});

router.post('/', (req, res) => {
    const newItem = {
        id: Math.max(...data.map(d => d.id)) + 1,
        description: req.body.description || "",
        iscompleted: false
    };
    data.push(newItem);
    res.status(201).json(newItem);
});

router.put('/:id', (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const itemIndex = data.findIndex(d => d.id === itemId);

    if (itemIndex !== -1) {
        data[itemIndex] = { ...data[itemIndex],
            description: req.body.description === undefined ? data[itemIndex].description : req.body.description,
            iscompleted: req.body.iscompleted === undefined ? data[itemIndex].iscompleted : req.body.iscompleted
        };
        res.json(data[itemIndex]);
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
});

router.delete('/:id', (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const itemIndex = data.findIndex(d => d.id === itemId);

    if (itemIndex !== -1) {
        const deletedItem = data.splice(itemIndex, 1);
        res.json(deletedItem[0]);
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
});

module.exports = router;