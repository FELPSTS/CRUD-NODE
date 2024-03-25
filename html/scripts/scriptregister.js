document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', registerUser);

    const Inputusername = document.getElementById('username');
    const Inputemail = document.getElementById('email');
    const Inputpassword = document.getElementById('password');
    const Inputcpassword = document.getElementById('cpassword');
    const successmensage = document.getElementById('successmensage');
    

    function registerUser(event) {
        event.preventDefault();

        const email = Inputemail.value;
        const username = Inputusername.value;
        const password = Inputpassword.value;
        const cpassword = Inputcpassword.value;

        if (!username ||!email || !password || !cpassword) {
            return res.status(400).send({ error: 'erro esta porra ta null front ' });
        }

        if (Inputpassword.value !== Inputcpassword.value) {
            console.log('as senhas não são iguais.');
            alert('as senhas estão erradas faça com que sejam iguais.');
            return;
        }
        console.log('pronto agora você ja pode se loga');
        window.location.href = '/loginpage.html';

        const userData = {
            username: username,
            email:email,
            password: password
        };

        fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    console.log('Registro bem-sucedido! O usuário pode fazer login agora.');
                } else {
                    console.error('Erro durante o registro:', data.error);
                }
            })
            .catch((error) => console.error('Error:', error));
    }
});
