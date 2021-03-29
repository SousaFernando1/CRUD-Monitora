import '../public/css/styleLogin.css';
import React,{ useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";



function LoginForm() {

    const history = useHistory()

    const [campos, setCampos] = useState({
        iEmail: '',
        iPassword: ''
    });


    console.log(campos, 'Campos registerForm')

    function handleInputChange(event){
        campos[event.target.name] = event.target.value;
        setCampos(campos);
        console.log(campos)
    }


    function handleInputFocus(event){
        const input = event.target;
        const label = input.closest(".input-group").querySelector("label");
        label.classList.add("login-focus");

    }

    function handleInputBlur(event)
    {
        const input = event.target;
        if(input.value.length > 0)
        {
            return;
        }
        const label = input.closest(".input-group").querySelector("label");
        label.classList.remove("login-focus");
    }




    function handleFormSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3031/login', campos).then(response => {
        console.log('Mensagem do servidor:',response.data.message)

            if(response.data.message === 'Falha!')
            {
                alert('Este usuário não existe')

            } else {
                console.log(response.data.body.users)    
                let usernameNew = response.data.body.users;
                sessionStorage.setItem('myData', JSON.stringify(usernameNew))
                 history.push('/perfil')
            }
        })
}


function handleSpanClick(event)
{
    const showPassword = event.target;
    const input = showPassword.closest(".input-group").querySelector("input");

    if(showPassword.classList.contains("login-eye"))
    {
        input.type = "password";
        showPassword.classList.remove("login-eye");
        showPassword.classList.add("login-eye-closed");
    } else {
        input.type = "text";
        showPassword.classList.add("login-eye");
        showPassword.classList.remove("login-eye-closed");
    }
}

    return (
        <div className="container">
            <div className="content">
                <div className=" column first-column">
                    <div className="esquerda">
                        <h2 className="first-title">Monitora.com</h2>
                        <p className="description">Tornando seu monitoramento mais descomplicado.</p>
                    </div>
                </div>
                <div className="column second-column">
                    <h2 className="second-title">Fazer Login</h2>
                    <form className="login" onSubmit={handleFormSubmit}>
                        <div className="input-group">
                            <label htmlFor="iemail">E-mail</label>
                            <input type="email" name="iEmail" id="iemail" onChange={handleInputChange} onFocus={handleInputFocus} onBlur={handleInputBlur} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="ipassword">Senha</label>
                            <input type="password" name="iPassword" id="ipassword" onChange={handleInputChange} onFocus={handleInputFocus} onBlur={handleInputBlur} />
                            <span className="show-password eye-closed" onClick={handleSpanClick}></span>
                        </div>
                        <div className="options">
                            <div className="input-checkbox">
                                <input type="checkbox" name="remember" id="checkbox" />
                                <label htmlFor="checkbox" className="checkbox">Lembrar-me</label>
                            </div>
                            <a href="recuperarsenha" className="forgot">Esqueci minha senha</a>
                        </div>
                        <button enabled type="submit" className="btn">Entrar</button>
                    </form>
                    <div className="bottom">
                        <h1>Opa! Ainda não possui cadastro?</h1>
                        <a href="cadastro" className="cadastro">cadastre-se agora</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LoginForm;