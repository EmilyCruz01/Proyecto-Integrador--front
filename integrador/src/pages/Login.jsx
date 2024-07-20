import '../styles/pages.style/Login.css';
import Platanos from '../assets/img/Rectangle.png'; 
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='loginComponent'>
      <div className='imagenLogin'>
        <a href="/"><img src={Platanos} alt="Login Image" /></a>
      </div>
      <div className='datosLogin'>
      <div className='circulo-superiorLogin'></div>
      <div className='circulo-inferiorLogin'></div>
        <h1>Bienvenido a <span className='highlight'>Fresh-Inspect</span></h1>
        <form>
          <div className='inputGroup'>
            <input type='text' placeholder='Usuario' />
          </div>
          <div className='inputGroup'>
            <input type='password' placeholder='Contraseña' />
          </div>
          <Link to='/contraseniaOlvidada' className='forgotPassword'>¿Olvidaste tu contraseña?</Link>
          <button type='submit' className='loginButton'><Link to="/menu" id='loginButton'>Iniciar sesión</Link></button>
        </form>
        <Link to='/crearUsuario' className='createAccount'>Crear cuenta</Link>
      </div>
    </div>
  );
};

export default Login;

