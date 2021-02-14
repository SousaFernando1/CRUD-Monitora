import '../public/css/profile.css';
import attention from '../public/img/attention.svg';
 import React, { useState } from 'react';


function Profile(){
    
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
 


    return(
    <div id="app">
        <div className="header-box">
            <div className="conteudo">
                    <h1>Sharkcode</h1>
            </div>
        </div>
        <div className="footer-box">
            <h2 className="title-form">Seus dados</h2>
                <form className="form"action="/profile">

                    <div className="profile-input-group">
                        <label htmlFor="iFirstName">Nome</label>
                        <input type="text" name="firstName" id="iFirstName" onChange={handleInputChange} value={ campos.firstName }/>
                    </div>
                    <div className="profile-input-group">
                        <label htmlFor="iLastName">Sobrenome</label>
                        <input type="text" name="lastName" id="iLastName" onChange={handleInputChange} value={ campos.lastName }/>
                    </div>
                    <div className="profile-input-group">
                        <label htmlFor="iEmail">Email</label>
                        <input type="text" name="email" id="iEmail" onChange={handleInputChange} value={ campos.email }/>
                    </div>
                    <div className="profile-input-group">
                        <label htmlFor="iWhatsapp">Whatsapp</label>
                        <input type="text" name="iWhatsapp" id="iWhatsapp"/>
                    </div>
                    <div className="profile-input-group">
                        <label htmlFor="iBiography">Biografia</label> 
                        <textarea type="text" name="iBiography" id="iBiography"></textarea>
                    </div>
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
                        <button type="submit">Salvar cadastro</button>
                    </footer>
        </div>
    </div>
)}

export default Profile;

