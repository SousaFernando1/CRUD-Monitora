import '../public/css/styleUpdate.css'
import React,{ useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";




function UpdateEmail() {
   

    const history = useHistory()

    let profileValue = sessionStorage.getItem('myData')
    profileValue = JSON.parse(profileValue)


    let newCellphone = sessionStorage.getItem('newCellphone')
    newCellphone = JSON.parse(newCellphone)

    if(newCellphone !== null){
        console.log('Chegou no if', newCellphone)
        profileValue.iWhatsapp = newCellphone
    }

    const [campos, setCampos] = useState({
        email: profileValue.iEmail,
        oldCellphone: profileValue.iWhatsapp,
        iWhatsapp: ''
    });

    
    console.log(campos, 'Campos updateCellphone')


    function handleInputChange(event){
        campos[event.target.name] = event.target.value;
        setCampos(campos);
        console.log(campos)
    }

    function handleFormSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3031/updatecellphone', campos).then(response => {
            console.log(response.data.body.users)
        
            let newCellphone = response.data.body.users;
            sessionStorage.setItem('newCellphone', JSON.stringify(newCellphone.iWhatsapp))

            history.push('/perfil')
        })
}

    return (
        <div className="update-email">
            <form className="form" onSubmit={handleFormSubmit}>
                <div className="input-group">
                    <label htmlFor="updateEmail">Nome</label>
                    <input type="text" name="iWhatsapp" id="updateEmail" onChange={handleInputChange}/>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )}

export default UpdateEmail;