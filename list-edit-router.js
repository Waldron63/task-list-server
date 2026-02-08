const express = require('express');
const router = express.Router();
const data = require('./work-list.js');

const validatePostBody = (req, res, next) => {
    const { description, iscompleted } = req.body;

    if (description === undefined || iscompleted === undefined) {
        return res.status(400).json({
            error: 'Missing required attributes: description and iscompleted'
        });
    }

    next();
};

const validatePutBody = (req, res, next) => {
    const { description, iscompleted } = req.body;

    if (description === undefined && iscompleted === undefined) {
        return res.status(400).json({
            error: 'Missing required attributes: description or iscompleted'
        });
    }

    next();
};

const validateCommonBody = (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: 'Request body cannot be empty' });
    }

    const { description, iscompleted } = req.body;

    if (
        description !== undefined &&
        (typeof description !== 'string' || description.trim().length === 0)
    ) {
        return res.status(400).json({
            error: 'description must be a non-empty string'
        });
    }

    if (iscompleted !== undefined && typeof iscompleted !== 'boolean') {
        return res.status(400).json({
            error: 'iscompleted must be a boolean'
        });
    }

    next();
};


router.get('/', (req, res) => {
    res.status(200).json({ message: 'All task list sended!!', data: data });
});

router.post('/', validatePostBody, validateCommonBody, (req, res) => {
    const newItem = {
        id: Math.max(...data.map(d => d.id)) + 1,
        description: req.body.description || "",
        iscompleted: req.body.iscompleted || false
    };
    data.push(newItem);
    res.status(201).json( { message: 'New task added!!', data: newItem });
});

router.put('/:id', validatePutBody, validateCommonBody, (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const itemIndex = data.findIndex(d => d.id === itemId);

    if ( !isNaN(itemIndex) && itemIndex > 0) {
        data[itemIndex] = { ...data[itemIndex],
            description: req.body.description === undefined ? data[itemIndex].description : req.body.description,
            iscompleted: req.body.iscompleted === undefined ? data[itemIndex].iscompleted : req.body.iscompleted
        };
        res.status(200).json({ message: 'Task updated!!', data: data[itemIndex] });
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
});

router.delete('/:id', (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const itemIndex = data.findIndex(d => d.id === itemId);

    if ( !isNaN(itemIndex) && itemIndex > 0) {
        const deletedItem = data.splice(itemIndex, 1);
        res.status(200).json({ message: 'Task deleted!!', data: deletedItem });
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
});

module.exports = router;