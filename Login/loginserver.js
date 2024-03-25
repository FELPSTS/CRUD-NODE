const express = require('express');
const router = express.Router();
const db = require('../bd');
const cors = require('cors');
const bodyParser = require('body-parser');

router.post('/login', async (req, res) => {
const email = req.body
const password = req.body
    
    if (!username || !email) {
        return res.status(400).send({ error: 'erro esta porra ta null ' });
    } 

    const result = await

    db.query(
            "SELECT * FROM table_User where email = VALUE(?,?)"
            [email,password],
            (err, result) => {
                if (err) {
                    console.error('Error executing query:', err);
                    return res.status(500).send({ error: 'Internal server error.' });
                }
                
                if (result.length === 0) {
                    return res.status(401).send({ error: 'Invalid email or password.' });
                }
                res.send({ message: 'Login successful.', user: result[0] });
            } 
    )
    }
);




module.exports = router;