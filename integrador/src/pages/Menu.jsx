import '../styles/pages.style/menu.css'
const Menu = () => {
    return (
        <div className='menu'>
        <h1 id='logo'>Fresh-Inspect</h1>
        <a href="/"><img id='salir' src="src/assets/img/logoutIcon.png" alt="salir" /></a>
        <section>
        <a href="/chequeo"><div>
            <img src="src/assets/img/chequeoIcon.png" alt="chequeo" />
            <h2>Chequeo</h2>
        </div>
        </a>
        <a href="/graficas">
        <div>
            <img src="src/assets/img/graficasIcon.png" alt="graficas" />
            <h2>Gráficas</h2>
        </div>
        </a>
        <a href="/monitoreo"><div>
            <img src="src/assets/img/monitoreoIcon.png" alt="monitoreo" />
            <h2>Monitoreo</h2>
        </div>
        </a>
        </section>
        </div>
    );

};


export default Menu;