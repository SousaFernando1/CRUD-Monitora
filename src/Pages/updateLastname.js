import '../public/css/styleUpdate.css'
import React,{ useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";




function UpdateLastname() {
   

    const history = useHistory()

    let profileValue = sessionStorage.getItem('myData')
    profileValue = JSON.parse(profileValue)
    


    let newLastname = sessionStorage.getItem('newLastname')
    newLastname = JSON.parse(newLastname)

    if(newLastname !== null){
        console.log('Chegou no if', newLastname)
        profileValue.iLastName = newLastname
    }

    let emailValue = sessionStorage.getItem('newEmail')
    emailValue = JSON.parse(emailValue)

    
    if(emailValue !== null){
        profileValue.iEmail = emailValue
        console.log('AQUIIIIIII:',profileValue.iEmail)
    }

    const [campos, setCampos] = useState({
        email: profileValue.iEmail,
        oldLastname: profileValue.iLastName,
        iLastName: ''
    });

    
    console.log(campos, 'Campos updateLastName')


    function handleInputChange(event){
        campos[event.target.name] = event.target.value;
        setCampos(campos);
        console.log(campos)
    }

    function handleFormSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3031/updatelastname', campos).then(response => {
            console.log(response.data.body.users)
        
            let newLastname = response.data.body.users;
            sessionStorage.setItem('newLastname', JSON.stringify(newLastname.iLastName))
             console.log('newLastname', newLastname.iLastName)

            history.push('/perfil')
        })
}

    return (
        <div className="update-email">
            <form className="form" onSubmit={handleFormSubmit}>
                <div className="input-group">
                    <label htmlFor="updateEmail">Nome</label>
                    <input type="text" name="iLastName" id="updateEmail" onChange={handleInputChange}/>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )}

export default UpdateLastname;