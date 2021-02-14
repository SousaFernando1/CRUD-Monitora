import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import landingPage from './Pages/landingPage';
import loginForm from './Pages/loginForm';
import registerForm from './Pages/registerForm';
import profile from './Pages/profile';



function Routes(){
    return (
        <BrowserRouter>
            <Route component={landingPage} path="/" exact />
            <Route component={loginForm} path="/login" />
            <Route component={registerForm} path="/cadastro" />
            <Route component={profile} path="/perfil" />
        </BrowserRouter>
    )
}

/* Git Fucionando */

export default Routes;