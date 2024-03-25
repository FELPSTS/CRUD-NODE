const express = require('express');
const router = express.Router();
const db = require('../bd');
const cors = require('cors');
const bodyParser = require('body-parser');

router.post('/register', async (req, res) => {
    const { username, email , password } = req.body;
    
    if (!username || !password|| !email) {
        return res.status(400).send({ error: 'erro esta porra ta null ' });
    }
    const result = await

    db.query(
        "INSERT INTO tableUser (username, email ,password) VALUES (?, ?, ?)",
        [username,email, password],
        (err, result) => {
            if (result.affectedRows > 0) {
                console.log('Inserção bem-sucedida no banco de dados.');
                res.status(200).json({ success: true, message: 'Operação bem-sucedida' })
            }
            else(err)
                res.status(500).send({ error: err.message });
        }
    );
});

module.exports = router;
