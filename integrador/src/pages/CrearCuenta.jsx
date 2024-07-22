import '../styles/pages.style/crearCuenta.css';

const CrearCuenta = () => {
  return (
    <div className="contenedorCrear">
      <div className="circulo-superiorCrear"></div>
      <div className="circulo-inferiorCrear"></div>
      <h2>Crear cuenta:</h2>
      <form>
      <div className="input-groupCrear">
          <input type="text" placeholder="Nombre" className="inputCrear" />
          <input type="text" placeholder="Apellido paterno" className="inputCrear" />
        </div>
        <div className="input-groupCrear">
          <input type="text" placeholder="Apellido materno" className="inputCrear" />
          <input type="tel" placeholder="Telefóno" className="inputCrear" />
        </div>
        <div className="input-groupCrear">
        <input type="email" placeholder="Correo" className="inputCrear" />
          <input type="password" placeholder="Contraseña" className="inputCrear" />
        </div>

        <button type="submit" className="botonCrear">Crear</button>
      </form>
    </div>
  );
};

export default CrearCuenta;
