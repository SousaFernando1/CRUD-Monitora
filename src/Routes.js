import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import landingPage from './Views/landingPage';
import loginForm from './Views/loginForm';
import registerForm from './Views/registerForm';
import profile from './Views/profile';



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

export default Routes;