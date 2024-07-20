import '../styles/pages.style/Login.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Platanos from '../assets/img/Rectangle.png'; 
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [body, setBody] = useState({phone_number:'', password: ''})

  const handleChange = ({target}) => {
    const {name, value} = target;
    setBody({
      ...body,
      [name]:value
    });
  }

  const toMenu = () =>{
    navigate("/crearUsuario");
  }

  const toAccess = async (event) => {
    event.preventDefault();
    try {
      const {phone_number, password} = body;
      const url = `http://localhost:3000/users/${phone_number}/${password}`;
      const response = await axios.get(url);
      console.log(response.token);
      if (response) {
        toMenu();
      }else{
        console.log("Númeor de telefono o contaseña incorrecta");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='loginComponent'>
      <div className='imagenLogin'>
        <a href="/"><img src={Platanos} alt="Login Image" /></a>
      </div>
      <div className='datosLogin'>
      <div className='circulo-superiorLogin'></div>
      <div className='circulo-inferiorLogin'></div>
        <h1>Bienvenido a <span className='highlight'>Fresh-Inspect</span></h1>
        <form onSubmit={toAccess}>
          <div className='inputGroup'>
            <input type='text' placeholder='Número de celular' value={body.phone_number} name='phone_number' onChange={handleChange}/>
          </div>
          <div className='inputGroup'>
            <input type='password' placeholder='Contraseña' value={body.password} name='password' onChange={handleChange}/>
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