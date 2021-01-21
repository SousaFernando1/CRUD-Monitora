import '../public/css/styleRegister.css'
import React,{ useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function RegisterForm() {
    
    const history = useHistory()

    const [campos, setCampos] = useState({
        iFirstName: '',
        iLastName: '',
        iEmail: '',
        iPassword: ''
    });

    function handleInputChange(event){
        campos[event.target.name] = event.target.value;
        setCampos(campos);
    }

    function handleFormSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3031/cadastro', campos).then(response => {
            history.push('/perfil')
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
                    <label for="iFirstName">Nome</label>
                    <input type="text" name="iFirstName" id="iFirstName" onChange={handleInputChange}/>
                </div>
                <div className="input-group">
                    <label for="iLastName">Sobrenome</label>
                    <input type="text" name="iLastName" id="iLastName" onChange={handleInputChange}/>
                </div>
                <div className="input-group">
                    <label for="iEmail">E-mail</label>
                    <input type="text" name="iEmail" id="iEmail" onChange={handleInputChange}/>
                </div>
                <div className="input-group">
                    <label for="iPassword">Senha</label>
                    <input type="text" name="iPassword" id="iPassword" onChange={handleInputChange}/>
                    <span className="showPassword eye-closed"></span>
                </div>
                <input className="checkbox" id="check" type="checkbox"/>
                <label for="check" className="checkbox-label">Lembrar-me</label>
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