const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const db = require('./bd');
const registerrouter = require('./Register/registerserver') ;
const loginrouter = require('./Login/loginserver') ;
const { dirname } = require('path');

app.use(cors());
app.use(bodyParser.json());

/*body*/

app.get('/', (req , res)=>{
    res.sendFile(__dirname + '/html/HOME PAGE.html')
});


/*register routes*/

app.get('/Registerform.html', (req , res)=>{
    res.sendFile(__dirname + '/html/registerform.html')
});

app.get('/image', (req , res)=>{
    res.sendFile(__dirname + '/html/image/nodejs.png')
});

app.get('/styleHomepage', (req , res)=>{
    res.sendFile(__dirname + '/html/style/home page.css')
});

app.get('/scripts/scriptregister.js', (req , res)=>{
    res.sendFile(__dirname + '/html/scripts/scriptregister.js')
});

app.post('/register', registerrouter);

/*login routes*/


app.get('/loginpage.html',(req , res)=>{
    res.sendFile(__dirname + '/html/loginpage.html')
});

app.get('/scriptlogin.js',(req , res)=>{
    res.sendFile(__dirname + '')
})

app.post('/login', loginrouter);

/*node --watch server.js para iniciar*/

/*SEGUINTE 

- FAZER COLUNA DE EMAIL

- E TALVEZ CRIPTOGRAFIA DA TEU CORRE

- DEPOIS DA COLUNA DE EMAIL TERMINA O LOGIN E VERIFICAÇÃO DO LOGIN SE TA CERTA A SENHA

*/


app.listen(3001,()=>{
    console.log("Running in port 3001");
});

