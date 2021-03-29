import '../public/css/styleRegister.css'
import React,{ useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function RegisterForm() {


   /*  console.trace(usernameValue) */

    sessionStorage.removeItem('newCellphone')
    sessionStorage.removeItem('newName')
    sessionStorage.removeItem('newLastname')
    sessionStorage.removeItem('newBiography')

    

    const history = useHistory()

    const [campos, setCampos] = useState({
        iFirstName: '',
        iLastName: '',
        iEmail: '',
        iPassword: '',
        iWhatsapp: 'Sem número',
        iBiography: 'Sem biografia'
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
        label.classList.add("register-focus");

    }

    function handleInputBlur(event)
    {
        const input = event.target;
        if(input.value.length > 0)
        {
            return;
        }
        const label = input.closest(".input-group").querySelector("label");
        label.classList.remove("register-focus");
    }

    function handleSpanClick(event)
    {
        const showPassword = event.target;
        const input = showPassword.closest(".input-group").querySelector("input");
    
        if(showPassword.classList.contains("register-eye"))
        {
            input.type = "password";
            showPassword.classList.remove("register-eye");
            showPassword.classList.add("register-eye-closed");
        } else {
            input.type = "text";
            showPassword.classList.add("register-eye");
            showPassword.classList.remove("register-eye-closed");
        }
    }




    function handleFormSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3031/cadastro', campos).then(response => {

            if(response.data.message === 'Falha!')
            {
                alert('Usuário já cadastrado')

            } else {
                console.log(response.data.body.users)    


                let usernameNew = response.data.body.users;
                sessionStorage.setItem('myData', JSON.stringify(usernameNew))
                history.push('/perfil')
            }



        })
}





    return (
    <div id="aplicativo">
    <div className="register-box">
        <div className="content">
            <div className="title">
                <h1>Cadastro</h1>
                <p>Preencha os dados abaixo
                    para começar.</p>
    
            </div>
            <form className="form" onSubmit={handleFormSubmit}>
                <div className="input-group">
                    <label htmlFor="iFirstName">Nome</label>
                    <input type="text" name="iFirstName" id="iFirstName" onChange={handleInputChange} onFocus={handleInputFocus} onBlur={handleInputBlur}/>
                </div>
                <div className="input-group">
                    <label htmlFor="iLastName">Sobrenome</label>
                    <input type="text" name="iLastName" id="iLastName" onChange={handleInputChange} onFocus={handleInputFocus} onBlur={handleInputBlur}/>
                </div>
                <div className="input-group">
                    <label htmlFor="iEmail">E-mail</label>
                    <input type="email" name="iEmail" id="iEmail" onChange={handleInputChange} onFocus={handleInputFocus} onBlur={handleInputBlur}/>
                </div>
                <div className="input-group">
                    <label htmlFor="iPassword">Senha</label>
                    <input type="text" name="iPassword" id="iPassword" onChange={handleInputChange} onFocus={handleInputFocus} onBlur={handleInputBlur}/>
                    <span onClick={handleSpanClick} className="showPassword register-eye-closed"></span>
                </div>
                <input className="checkbox" id="check" type="checkbox"/>
                <label htmlFor="check" className="checkbox-label">Lembrar-me</label>
                <button type="submit">Concluir cadastro</button>
            </form>


        </div>
       
    </div>
    <div className="monitora-box">
        <div className="logo">
            <h2> Monitora.com</h2>
            <p>Tornando seu monitoramento mais descomplicado.</p>
        </div>
       
    </div>
</div>

    )}

export default RegisterForm;