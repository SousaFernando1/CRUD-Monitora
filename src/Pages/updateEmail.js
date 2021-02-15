import '../public/css/styleUpdate.css'
import React,{ useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";




function UpdateEmail() {
   

    const history = useHistory()

    let profileValue = sessionStorage.getItem('myData')
    profileValue = JSON.parse(profileValue)


    let emailValue = sessionStorage.getItem('newEmail')
    emailValue = JSON.parse(emailValue)
    
    if(emailValue !== null){
        console.log('Chegou no if', emailValue)
        profileValue.iEmail = emailValue
    }

    console.log('updateEmail 1=', profileValue.iEmail)

    const [campos, setCampos] = useState({
        registerEmail: profileValue.iEmail,
        iEmail: ''
    });

    
    console.log(campos, 'Campos updateEmail')


    function handleInputChange(event){
        campos[event.target.name] = event.target.value;
        setCampos(campos);
        console.log(campos)
    }

    function handleFormSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3031/updateemail', campos).then(response => {
            console.log(response.data.body.users)
        
            let newEmail = response.data.body.users;
            sessionStorage.setItem('newEmail', JSON.stringify(newEmail.iEmail))
            console.log('newEmail', newEmail)

            history.push('/perfil')
        })
}

    return (
        <div className="update-email">
            <form className="form" onSubmit={handleFormSubmit}>
                <div className="input-group">
                    <label htmlFor="updateEmail">Nome</label>
                    <input type="text" name="iEmail" id="updateEmail" onChange={handleInputChange}/>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )}

export default UpdateEmail;