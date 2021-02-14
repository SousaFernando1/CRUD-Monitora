import '../public/css/profile.css';
import attention from '../public/img/attention.svg';
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from "react-router-dom";

function Profile(){
    
    const history = useHistory()


    let usernameValue = sessionStorage.getItem('myData')
    usernameValue = JSON.parse(usernameValue)


    const [campos, setCampos] = useState({
        firstName: usernameValue.iFirstName,
        lastName: usernameValue.iLastName,
        email: usernameValue.iEmail,
        password: usernameValue.iPassword
    });

    function handleInputChange(event){
        setCampos( { ...campos, [event.target.name] : event.target.value});
    }

    function handleFormSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3031/perfil', campos).then(response => {
            console.log(response.data.body.users)

            let usernameNew = response.data.body.users;
            sessionStorage.setItem('myData', JSON.stringify(usernameNew))
            history.push('/perfil')
        })
}
 


    return(
    <div id="app">
        <div className="header-box">
            <div className="conteudo">
                    <h1>Sharkcode</h1>
            </div>
        </div>
        <div className="footer-box">
            <h2 className="title-form">Seus dados</h2>
                <form className="form" onSubmit={handleFormSubmit} >
                    <div className="profile-input-group">
                        <label htmlFor="iFirstName">Nome</label>
                        <input type="text" name="iFirstName" id="iFirstName" onChange={handleInputChange} value={ campos.firstName }/>
                        <Link className="profile-update-button" to="/updatefirstname">Alterar</Link>
                    </div>
                    <div className="profile-input-group">
                        <label htmlFor="iLastName">Sobrenome</label>
                        <input type="text" name="iLastName" id="iLastName" onChange={handleInputChange} value={ campos.lastName }/>
                        <Link className="profile-update-button" to="/updatelastname">Alterar</Link>
                    </div>
                    <div className="profile-input-group">
                        <label htmlFor="iEmail">Email</label>
                        <input type="text" name="iEmail" id="iEmail" onChange={handleInputChange} value={ campos.email }/>
                        <Link className="profile-update-button" to="/updateemail">Alterar</Link>
                    </div>
                    <div className="profile-input-group">
                        <label htmlFor="iWhatsapp">Whatsapp</label>
                        <input type="text" name="iWhatsapp" id="iWhatsapp"/>
                        <Link className="profile-update-button" to="/updatewhatsapp">Alterar</Link>
                    </div>
                    <div className="profile-input-group">
                        <label htmlFor="iBiography">Biografia</label> 
                        <textarea type="text" name="iBiography" id="iBiography"></textarea>
                        <Link className="profile-update-button" to="/updatebiography">Alterar</Link>
                    </div>

                    <button type="submit">Salvar cadastro</button>
                </form>

                
                    <footer>
                        <div className="important-group">
                            <div className="attention">
                            <img src={attention} alt="Perfil"/>
                            </div>
                            <div className="important">
                            <h3 >Importante!</h3>
                            <p>Preencha todos os dados corretamente</p>
                            </div>
                        </div>
                    </footer>
        </div>
    </div>
)}

export default Profile;

