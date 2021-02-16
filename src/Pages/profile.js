import '../public/css/profile.css';
import attention from '../public/img/attention.svg';
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function Profile(){


    let newCellphone = sessionStorage.getItem('newCellphone')
    newCellphone = JSON.parse(newCellphone)

    let emailValue = sessionStorage.getItem('newEmail')
    emailValue = JSON.parse(emailValue)

    let newName = sessionStorage.getItem('newName')
    newName = JSON.parse(newName)

    let newLastname = sessionStorage.getItem('newLastname')
    newLastname = JSON.parse(newLastname)

    let newBiography = sessionStorage.getItem('newBiography')
    newBiography = JSON.parse(newBiography)
    console.log('newBiography AQUI:', newBiography)


    let profileValue = sessionStorage.getItem('myData')
    profileValue = JSON.parse(profileValue)

    

    if(newBiography !== null){
        console.log('Chegou no if', newBiography)
        profileValue.iBiography = newBiography
    }

    if(newLastname !== null){
        console.log('Chegou no if profile', newLastname)
        profileValue.iLastName = newLastname
    }

    if(newName !== null){
        console.log('Chegou no if profile', newName)
        profileValue.iFirstName = newName
    }

    if(emailValue !== null){
        profileValue.iEmail = emailValue
    }

    if(newCellphone !== null){
        profileValue.iWhatsapp = newCellphone
    }

    

    const [campos, setCampos] = useState({
        firstname: profileValue.iFirstName,
        lastname: profileValue.iLastName,
        email: profileValue.iEmail,
        password: profileValue.iPassword,
        whatsapp: profileValue.iWhatsapp,
        biography: profileValue.iBiography
    });


    console.log(campos, 'Campos profile')

    function handleInputChange(event){
        setCampos( { ...campos, [event.target.name] : event.target.value});
        console.log(campos)
    }

    function handleFormSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3031/perfil', campos).then(response => {
         console.log(response.data.body.users)

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
                        <input type="text" name="iFirstName" id="iFirstName" onChange={handleInputChange} value={ campos.firstname } />
                        <Link className="profile-update-button" to="/updatename">Alterar</Link>
                    </div>
                    <div className="profile-input-group">
                        <label htmlFor="iLastName">Sobrenome</label>
                        <input type="text" name="iLastName" id="iLastName" onChange={handleInputChange} value={ campos.lastname } />
                        <Link className="profile-update-button" to="/updatelastname">Alterar</Link>
                    </div>
                    <div className="profile-input-group">
                        <label htmlFor="iEmail">Email</label>
                        <input type="text" name="iEmail" id="iEmail" onChange={handleInputChange} value={ campos.email }/>
                        <Link className="profile-update-button" to="/updateemail">Alterar</Link>
                    </div>
                    <div className="profile-input-group">
                        <label htmlFor="iWhatsapp">Whatsapp</label>
                        <input type="text" name="iWhatsapp" id="iWhatsapp" onChange={handleInputChange} value={ campos.whatsapp }/>
                        <Link className="profile-update-button" to="/updatecellphone">Alterar</Link>
                    </div>
                    <div className="profile-input-group">
                        <label htmlFor="iBiography">Biografia</label> 
                        <textarea type="text" name="iBiography" id="iBiography" onChange={handleInputChange} value={ campos.biography }></textarea>
                        <Link className="profile-update-button" to="/updatebiography">Alterar</Link>
                    </div>

                    {/* <button type="submit">Salvar cadastro</button> */}
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