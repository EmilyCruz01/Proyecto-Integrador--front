import '../styles/pages.style/Login.css';
import Platanos from '../assets/img/Rectangle.png'; 

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
          <a href='/contraseniaOlvidada' className='forgotPassword'>¿Olvidaste tu contraseña?</a>
          <button type='submit' className='loginButton'><a href="/menu">Iniciar sesión</a></button>
        </form>
        <a href='/crearUsuario' className='createAccount'>Crear cuenta</a>
      </div>
    </div>
  );
};

export default Login;

