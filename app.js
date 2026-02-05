const express = require('express');
const app = express();
const PORT = 3000;

const work_list = [
  { id:123456, isCompleted:false, description:"Walk the dog" },
  { id:78910, isCompleted:true, description:"Do the dishes" }
];

const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

// Use the routers
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