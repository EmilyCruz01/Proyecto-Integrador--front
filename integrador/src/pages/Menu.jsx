import '../styles/pages.style/menu.css';
import { Link } from 'react-router-dom';
import logoutIcon from "../assets/img/logoutIcon.png";

const Menu = () => {
    return (
        <div className='menu'>
        <h1 id='logo'>Fresh-Inspect</h1>
        <Link to="/"><img id='salir' src={logoutIcon} alt="Salir" /></Link>
        <section className='menuOpc'>
        <Link to="/chequeo"><div>
            <img src="src/assets/img/chequeoIcon.png" alt="chequeo" />
            <h2>Chequeo</h2>
        </div>
        </Link>
        <Link to="/graficas">
        <div>
            <img src="src/assets/img/graficasIcon.png" alt="graficas" />
            <h2>Gráficas</h2>
        </div>
        </Link>
        <Link to="/monitoreo"><div>
            <img src="src/assets/img/monitoreoIcon.png" alt="monitoreo" />
            <h2>Monitoreo</h2>
        </div>
        </Link>
        </section>
        </div>
    );

};


export default Menu;