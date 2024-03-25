const express = require('express');
const router = express.Router();
const db = require('../bd');
const cors = require('cors');
const bodyParser = require('body-parser');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ error: 'Email ou senha ausentes.' });
    } 

    try {
        const result = await db.query(
            "SELECT * FROM tableUser WHERE email = ? AND password = ?",
            [email, password]
        );

        if (result.length === 0) {
            return res.status(401).send({ error: 'Email ou senha inválidos.' });
        }

        res.send({ message: 'Login bem-sucedido.', user: result[0] });
    } catch (err) {
        console.error('Erro ao executar a consulta:', err);
        return res.status(500).send({ error: 'Erro interno do servidor.' });
    }
});

module.exports = router;