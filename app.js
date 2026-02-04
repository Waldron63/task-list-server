const express = require('express');
const app = express();
const PORT = 3000;

const work_list = [
    {
        "id":123456,
        "isCompleted":false,
        "description":"Walk the dog",
    },
    {
        "id":78910,
        "isCompleted":true,
        "description":"Do the dishes",
    }
];

app.get("/", (req, res) => {
    res.send(work_list);
})

//Se recomienda no editar ni eliminar la instancia del servidor.
// Instancia del servidor
const server = app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`);
});

// Exportacion del servidor
module.exports = server;