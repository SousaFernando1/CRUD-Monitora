import { Link } from "react-router-dom";
import '../public/css/styleLandingPage.css'
import logo from '../public/img/logo.svg';

function landingPage() {

    return(
        <div className="landing-page-container">
                 <header className="landing-page-header-box">
                    <div className="landing-page-header-buttons">
                        <Link className="landing-page-login-button" to="/login">Faça seu login</Link>
                        <Link to="/cadastro" className="landing-page-register-button">Cadastre-se</Link>
                    </div>
                 </header>                
                 <div className="landing-page-middle-content">
                     <h2 className="landing-page-middle-h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                     <img src={logo} alt="Perfil"/>
                 </div>
        </div>


)}
export default landingPage