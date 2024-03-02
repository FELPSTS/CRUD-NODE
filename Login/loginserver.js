const express = require('express');
const router = express.Router();
const db = require('../bd');
const cors = require('cors');
const bodyParser = require('body-parser');

router.post('/login', async (req, res) => {
const username = req.body
const password = req.body
    db.query(
            "SELECT * FROM table_User where username = VALUE(?,?)"
            [username,password],
            (err, result) => {} 

    )
    }
);




module.exports = router;