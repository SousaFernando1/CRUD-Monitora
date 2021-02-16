import '../public/css/styleUpdate.css'
import React,{ useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";




function UpdateBiography() {
   

    const history = useHistory()

    let profileValue = sessionStorage.getItem('myData')
    profileValue = JSON.parse(profileValue)


    let newBiography = sessionStorage.getItem('newBiography')
    newBiography = JSON.parse(newBiography)

    if(newBiography !== null){
        console.log('Chegou no if', newBiography)
        profileValue.iBiography = newBiography
    }

    const [campos, setCampos] = useState({
        email: profileValue.iEmail,
        oldBiography: profileValue.iBiography,
        iBiography: ''
    });

    
    console.log(campos, 'Campos UpdateBiography')


    function handleInputChange(event){
        campos[event.target.name] = event.target.value;
        setCampos(campos);
        console.log(campos)
    }

    function handleFormSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3031/updatebiography', campos).then(response => {
            console.log(response.data.body.users)
        
            let newBiography = response.data.body.users;
            sessionStorage.setItem('newBiography', JSON.stringify(newBiography.iBiography))
             console.log('newBiography', newBiography.iBiography)

            history.push('/perfil')
        })
}

    return (
        <div className="update-email">
            <form className="form" onSubmit={handleFormSubmit}>
                <div className="input-group">
                    <label htmlFor="updateEmail">Nome</label>
                    <input type="text" name="iBiography" id="updateEmail" onChange={handleInputChange}/>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )}

export default UpdateBiography;