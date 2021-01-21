
import '../public/css/styleLogin.css';

function loginForm() {
    
    return (
        <div className="container">
            <div className="content">
                <div className=" column first-column">
                    <div className="esquerda">
                        <h2 className="first-title">Monitora.com</h2>
                        <p className="description">Tornando seu monitoramento mais descomplicado.</p>
                    </div>
                </div>
                <div className="column second-column">
                    <h2 className="second-title">Fazer Login</h2>
                    <form className="login">
                        <div className="input-group">
                            <label for="iemail">E-mail</label>
                            <input type="email" name="name" id="iemail" />
                        </div>
                        <div className="input-group">
                            <label for="ipassword">Senha</label>
                            <input type="password" name="password" id="ipassword" />
                            <span className="show-password eye-closed"></span>
                        </div>
                        <div className="options">
                            <div className="input-checkbox">
                                <input type="checkbox" name="remember" id="checkbox" checked />
                                <label for="checkbox" className="checkbox">Lembrar-me</label>
                            </div>
                            <a href="recuperarsenha" className="forgot">Esqueci minha senha</a>
                        </div>
                        <button disabled type="submit" className="btn">Entrar</button>
                    </form>
                    <div className="bottom">
                        <h1>Opa! Ainda não possui cadastro?</h1>
                        <a href="cadastro" className="cadastro">cadastre-se agora</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default loginForm;