document.addEventListener('DOMContentLoaded', function () {
    const LoginForm = document.getElementById('LoginForm');
    const result = document.getElementById('result');
    LoginForm.addEventListener('submit', LoginUser);

    const Inputemail = document.getElementById('email');
    const Inputpassword = document.getElementById('password');

    function LoginUser(event) {
        event.preventDefault();

        const email = Inputemail.value;
        const password = Inputpassword.value;

        if (!email || !password) {
            console.error('Erro: Campos de e-mail ou senha estão vazios.');
            return;
        }

        const userData = {
            email: email,
            password: password
        };

        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro durante o login.');
                }
                return response.json();
            })
            .then(data => {
                if (data.error) {
                    console.error('Erro durante o Login:', data.error);
                    result.innerHTML = "ERRADO";
                } else if (Object.keys(data.user).length > 0) {
                    console.log('Login bem-sucedido! Informações do Usuário:', data.user);
                    result.innerHTML = "SUCESSO";
                } else {
                    console.error('Erro durante o Login: Credenciais inválidas.');
                    result.innerHTML = "ERRADO";
                }
            })
            .catch((error) => console.error('Erro:', error));
    }
});
