import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import landingPage from './Pages/landingPage';
import loginForm from './Pages/loginForm';
import registerForm from './Pages/registerForm';
import profile from './Pages/profile';
import updateEmail from './Pages/updateEmail';
import updateCellphone from './Pages/updateCellphone';
import updateName from './Pages/updateName';
import updateLastname from './Pages/updateLastname';



function Routes(){
    return (
        <BrowserRouter>
            <Route component={landingPage} path="/" exact />
            <Route component={loginForm} path="/login" />
            <Route component={registerForm} path="/cadastro" />
            <Route component={profile} path="/perfil" />
            <Route component={updateEmail} path="/updateemail" />
            <Route component={updateCellphone} path="/updatecellphone" />
            <Route component={updateName} path="/updatename" />
            <Route component={updateLastname} path="/updatelastname" />
        </BrowserRouter>
    )
}

/* Git Fucionando */

export default Routes;