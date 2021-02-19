import '../public/css/styleUpdate.css'
import React,{ useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";




function UpdateName() {
   



    const history = useHistory()

    let profileValue = sessionStorage.getItem('myData')
    profileValue = JSON.parse(profileValue)

    console.log('Aqui:',profileValue.iEmail)



    let newName = sessionStorage.getItem('newName')
    newName = JSON.parse(newName)


    let emailValue = sessionStorage.getItem('newEmail')
    emailValue = JSON.parse(emailValue)

    
    if(emailValue !== null){
        profileValue.iEmail = emailValue
        console.log('AQUIIIIIII:',profileValue.iEmail)
    }

    if(newName !== null){
        console.log('Chegou no if', newName)
        profileValue.iFirstName = newName

    console.log('Aqui:',profileValue.iEmail)
}

    const [campos, setCampos] = useState({
        email: profileValue.iEmail,
        oldName: profileValue.iFirstName,
        iFirstName: ''
    });

    
    console.log(campos, 'Campos updateName')


    function handleInputChange(event){
        campos[event.target.name] = event.target.value;
        setCampos(campos);
        console.log(campos)
    }

    function handleFormSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3031/updatename', campos).then(response => {
            console.log(response.data.body.users)
        
            let newName = response.data.body.users;
            sessionStorage.setItem('newName', JSON.stringify(newName.iFirstName))
             console.log('newName', newName.iFirstName)

            history.push('/perfil')
        })
}

    return (
        <div className="update-email">
            <form className="form" onSubmit={handleFormSubmit}>
                <div className="input-group">
                    <label htmlFor="updateEmail">Nome</label>
                    <input type="text" name="iFirstName" id="updateEmail" onChange={handleInputChange}/>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )}

export default UpdateName;