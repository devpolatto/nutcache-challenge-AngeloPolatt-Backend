const express = require('express');
const crypto = require('crypto')
const connection = require('./database/connections');

const routes = express.Router()

routes.post("/newuser", async (req, res) => {
    const { name, email, birthDate, gender, startDate, CPF, team } = req.body;

    await connection('user').insert({
        name,
        email,
        birthDate,
        gender,
        CPF,
        startDate,
        team
    });

    const result = await connection('user').select('*')
    return res.json(result)
});

routes.get('/user', async (req, res) => {
    const users = await connection('user').select('*');

    return res.json(users)
})

routes.get('/user/:id', async (req, res) => {
    const { id } = req.params;
    const user = await connection('user').where('id', id)

    return res.json(user)
})

routes.delete('/user/:id', async (req, res) => {
    const { id } = req.params;

    await connection('user').where('id', id).delete()
    return res.status(204).send('usuario deletado')
})

routes.put('/user/edituser/:id', async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    await connection('user').where('id', id).update(data);
    return res.status(200).send('usuario atualizado');
})

module.exports = routes;