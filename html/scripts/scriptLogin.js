document.addEventListener('DOMContentLoaded', function () {
    const LoginForm = document.getElementById('LoginForm');
    LoginForm.addEventListener('submit', LoginUser);

    const Inputusername = document.getElementById('username');
    const Inputpassword = document.getElementById('password');

    function LoginForm(event){ 

        const username = Inputusername.value;
        const password = Inputpassword.value;

        if (!username || !password) {
            return res.status(400).send({ error: 'erro esta porra ta null front ' });
        }

        const userData = {
            username: username,
            password: password
        };

        fetch('http://localhost:3001/Login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    console.log('LOGADO bem-sucedido! ');
                } else {
                    console.error('Erro durante o Login: ', data.error);
                }
            })
            .catch((error) => console.error('Error:', error));
    }
});