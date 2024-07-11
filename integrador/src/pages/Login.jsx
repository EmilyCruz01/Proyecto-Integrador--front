import '../styles/pages.style/Login.css';
import Platanos from '../assets/img/Rectangle.png'; 

const Login = () => {
  return (
    <div className='loginComponent'>
      <div className='imagenLogin'>
        <img src={Platanos} alt="Login Image" />
      </div>
      <div className='datosLogin'>
        <h1>Bienvenido a <span className='highlight'>Fresh-Inspect</span></h1>
        <form>
          <div className='inputGroup'>
            <input type='text' placeholder='Usuario' />
          </div>
          <div className='inputGroup'>
            <input type='password' placeholder='Contraseña' />
          </div>
          <a href='/contraseniaOlvidada' className='forgotPassword'>¿Olvidaste tu contraseña?</a>
          <button type='submit' className='loginButton'>Iniciar sesión</button>
        </form>
        <a href='/crearUsuario' className='createAccount'>Crear cuenta</a>
      </div>
    </div>
  );
};

export default Login;

